const SERVICE_ID = process.env.EMAILJS_SERVICE_ID || "service_yy76iay";
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || "template_tjnet8s";
const PUBLIC_KEY = process.env.EMAILJS_USER_ID || "kDFbozqH1THWp3UdO";
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || "";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
const MAX_FIELD_LENGTH = 2000;

function sanitize(value) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildTemplateParams({ origin, name, email, phone, message, currentLandingPage }) {
  if (origin === "Contact") {
    return {
      from_name: name,
      to_email: email,
      to_name: name,
      message: message,
      reply_to: email,
    };
  }

  const body = `
        Nuevo contacto desde el formulario de landing.

        📍 Página: ${currentLandingPage}

        🧑 Nombre: ${name}
        📧 Email: ${email}
        📱 Teléfono: ${phone}
        ${message ? `✉️ Mensaje: ${message}` : ""}
      `;

  return {
    from_name: name,
    to_phone: phone,
    to_email: email,
    message: body,
    service: "",
    budget: "",
    reply_to: email,
    to_name: name,
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Método no permitido." });
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const origin = sanitize(body.origin) || "LandingHero";

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const message = sanitize(body.message);
  const currentLandingPage = sanitize(body.currentLandingPage);

  if (!name) {
    return res.status(400).json({ ok: false, message: "El nombre es requerido." });
  }
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ ok: false, message: "Email inválido." });
  }

  if (origin === "Contact") {
    if (!message) {
      return res.status(400).json({ ok: false, message: "El mensaje es requerido." });
    }
  } else {
    if (!phone) {
      return res.status(400).json({ ok: false, message: "El teléfono es requerido." });
    }
  }

  const templateParams = buildTemplateParams({
    origin,
    name,
    email,
    phone,
    message,
    currentLandingPage,
  });

  try {
    const response = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        ...(PRIVATE_KEY && { accessToken: PRIVATE_KEY }),
        template_params: templateParams,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("[api/contact] EmailJS error:", response.status, text);
      return res.status(502).json({ ok: false, message: "No se pudo enviar el formulario." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[api/contact] Error:", err.message);
    return res.status(500).json({ ok: false, message: "Error al enviar el formulario." });
  }
}

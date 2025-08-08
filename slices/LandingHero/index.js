import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { useForm } from "react-hook-form";
import emailjs, { init } from "emailjs-com";
import {
  Section,
  Title,
  Form,
  InputWrapper,
  ButtonWrapper,
  KeywordWrapper,
  Keyword,
  TextArea,
} from "./style";
import { asText } from "@prismicio/helpers";

/**
 * @typedef {import("@prismicio/client").Content.LandingHeroSlice} LandingHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingHeroSlice>} LandingHeroProps
 * @param { LandingHeroProps }
 */

// EmailJS configuration
const SERVICE_ID = "";
const TEMPLATE_ID = "";
const PUBLIC_KEY = "";

const LandingHero = ({ slice }) => {
  const { title, subtitle, formtitle, formsubtitle, bgimage, ctatext } =
    slice.primary;
  const items = slice.items || [];
  const router = useRouter();

  const [currentLandingPage, setCurrentLandingPage] = useState("");

  // Init EmailJS on client only
  useEffect(() => {
    if (typeof window !== "undefined" && PUBLIC_KEY) init(PUBLIC_KEY);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentLandingPage(`${window.location.origin}${router.asPath}`);
    }
  }, [router.asPath]);

  // Helpers to decide if fields actually have content
  const hasFormTitle = useMemo(() => !!asText(formtitle)?.trim(), [formtitle]);
  const hasFormSubtitle = useMemo(
    () => !!asText(formsubtitle)?.trim(),
    [formsubtitle]
  );
  const showFormHeader = hasFormTitle || hasFormSubtitle;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [status, setStatus] = useState({
    sent: false,
    success: null,
    message: "",
  });

  const onSubmit = async (data) => {
    setStatus({ sent: true, success: null, message: "Enviando..." });

    const { name, phone, email, message } = data;

    const templateParams = {
      from_name: name,
      to_phone: phone,
      to_email: email,
      message: `
        Nuevo contacto desde el formulario de landing.

        📍 Página: ${currentLandingPage}

        🧑 Nombre: ${name}
        📧 Email: ${email}
        📱 Teléfono: ${phone}
        ${message ? `✉️ Mensaje: ${message}` : ""}
      `,
      service: "",
      budget: "",
      reply_to: email,
      to_name: name,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      setStatus({
        sent: true,
        success: true,
        message: "¡Gracias! Te contactaremos pronto.",
      });
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        sent: true,
        success: false,
        message:
          "Ocurrió un error al enviar el formulario. Intenta nuevamente.",
      });
    }
  };

  return (
    <Section id="banner" bgimage={bgimage?.url}>
      <div>
        <Title>
          {title && <PrismicRichText field={title} />}
          {subtitle && <PrismicRichText field={subtitle} />}
        </Title>

        {items.length > 0 && (
          <KeywordWrapper>
            {items.map((i, idx) => {
              const iconUrl = i?.icon?.url;
              const iconAlt = i?.icon?.alt || "";
              return (
                <Keyword key={idx}>
                  {iconUrl ? (
                    <img src={iconUrl} alt={iconAlt} loading="lazy" />
                  ) : null}
                  {i?.keyword && <PrismicRichText field={i.keyword} />}
                </Keyword>
              );
            })}
          </KeywordWrapper>
        )}
      </div>

      <div>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          {showFormHeader && (
            <div style={{ marginBottom: "10px" }}>
              {hasFormTitle && <PrismicRichText field={formtitle} />}
              {hasFormSubtitle && <PrismicRichText field={formsubtitle} />}
            </div>
          )}

          <InputWrapper>
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Ej. Juan Pérez"
              {...register("name", { required: true })}
              aria-invalid={!!errors.name}
              className={errors.name ? "input-error" : ""}
            />
            <span className={`error-message ${errors.name ? "visible" : ""}`}>
              Por favor ingresa tu nombre
            </span>
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Ej. juan@email.com"
              {...register("email", {
                required: "Por favor ingresa tu email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Por favor ingresa un email válido",
                },
              })}
              className={errors.email ? "input-error" : ""}
              aria-invalid={!!errors.email}
            />
            <span
              className={`error-message ${errors.email ? "visible" : "hidden"}`}
            >
              {errors.email?.message || "\u00A0"}
            </span>
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              type="tel"
              placeholder="Ej. +521234567890"
              {...register("phone", {
                required: "Por favor ingresa tu teléfono",
                minLength: {
                  value: 7,
                  message:
                    "El número debe tener al menos 6 dígitos después del '+'",
                },
                maxLength: {
                  value: 13,
                  message:
                    "El número no puede tener más de 12 dígitos después del '+'",
                },
                pattern: {
                  value: /^\+\d+$/,
                  message: "Debe comenzar con '+' seguido solo de números",
                },
              })}
              aria-invalid={!!errors.phone}
              className={errors.phone ? "input-error" : ""}
            />
            <span
              className={`error-message ${errors.phone ? "visible" : "hidden"}`}
            >
              {errors.phone?.message || " "}
            </span>
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="message">Mensaje (opcional)</label>
            <TextArea
              id="message"
              placeholder="Escribe tu mensaje aquí..."
              {...register("message")}
              rows={4}
            />
            <span className="error-message hidden">&nbsp;</span>
          </InputWrapper>

          <ButtonWrapper>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando…" : asText(ctatext) || "Enviar"}
            </button>
          </ButtonWrapper>
        </Form>

        <p
          role="status"
          aria-live="polite"
          style={{ color: "white", minHeight: "1.25rem", marginTop: "0.5rem" }}
          className={
            status.sent ? (status.success ? "success" : "error") : "hidden"
          }
        >
          {status.sent ? status.message : ""}
        </p>
      </div>
    </Section>
  );
};

export default LandingHero;

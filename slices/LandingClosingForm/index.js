import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { useForm } from "react-hook-form";
import {
  Section,
  Title,
  Form,
  InputWrapper,
  ButtonWrapper,
  TextArea,
} from "./style";
import { asText } from "@prismicio/helpers";

/**
 * @typedef {import("@prismicio/client").Content.LandingClosingFormSlice} LandingClosingFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingClosingFormSlice>} LandingClosingFormProps
 * @param { LandingClosingFormProps }
 */

const LandingClosingForm = ({ slice }) => {
  const { title, description, ctatext, bgimage } = slice.primary || {};
  const router = useRouter();

  const [currentLandingPage, setCurrentLandingPage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentLandingPage(`${window.location.origin}${router.asPath}`);
    }
  }, [router.asPath]);

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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origin: "LandingClosingForm",
          name,
          email,
          phone,
          message,
          currentLandingPage,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.ok) throw new Error(result?.message || "Error");
      setStatus({
        sent: true,
        success: true,
        message: "¡Gracias! Te contactaremos pronto.",
      });
      reset();
    } catch (error) {
      console.error("Contact API Error:", error);
      setStatus({
        sent: true,
        success: false,
        message:
          "Ocurrió un error al enviar el formulario. Intenta nuevamente.",
      });
    }
  };

  return (
    <Section id="closing" bgimage={bgimage?.url}>
      <div>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputWrapper>
            <div className="label-row">
              <label htmlFor="name">Nombre</label>
              <span
                id="name-error"
                className={`error-message ${errors.name ? "visible" : ""}`}
              >
                Por favor ingresa tu nombre
              </span>
            </div>
            <input
              id="name"
              type="text"
              placeholder="Ej. Juan Pérez"
              {...register("name", { required: true })}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
              className={errors.name ? "input-error" : ""}
            />
          </InputWrapper>

          <InputWrapper>
            <div className="label-row">
              <label htmlFor="email">Email</label>
              <span
                id="email-error"
                className={`error-message ${errors.email ? "visible" : ""}`}
              >
                {errors.email?.message || "\u00A0"}
              </span>
            </div>
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
              aria-describedby="email-error"
            />
          </InputWrapper>

          <InputWrapper>
            <div className="label-row">
              <label htmlFor="phone">Teléfono</label>
              <span
                id="phone-error"
                className={`error-message ${errors.phone ? "visible" : ""}`}
              >
                {errors.phone?.message || "\u00A0"}
              </span>
            </div>
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
              aria-describedby="phone-error"
              className={errors.phone ? "input-error" : ""}
            />
          </InputWrapper>

          <InputWrapper>
            <div className="label-row">
              <label htmlFor="message">Mensaje (opcional)</label>
              <span className="error-message">&nbsp;</span>
            </div>
            <TextArea
              id="message"
              placeholder="Escribe tu mensaje aquí..."
              {...register("message")}
              rows={4}
            />
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

      <div>
        <Title>
          {title && <PrismicRichText field={title} />}
          {description && <PrismicRichText field={description} />}
        </Title>
      </div>
    </Section>
  );
};

export default LandingClosingForm;

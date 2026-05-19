import React, { useState, useEffect, useRef, useReducer } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { SliceFactory } from "../../../../common/Containers";
import { PageContainer, ButtonContainer, SectionContainer, FormContainer } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = slice => {
  const { title, subtitle, email, message, name } = slice.primary;
  const [isSentEmail, setIsSentEmail] = useState({
    sentEmail: false,
    isFailure: false,
    title: "Página no encontrada 😭",
    text: "Parece que no podemos encontrar la página que estás buscando",
  });
  const [emailValue, setEmailValue] = useState("");

  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSentEmail({
      sentEmail: true,
      isFailure: false,
      title: "Espera por un momento ⌛",
      text: "Estamos enviando su solicitud.",
    });

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        origin: "Contact",
        name: data.firstname,
        email: data.email,
        message: data.message,
      }),
    })
      .then(async (res) => {
        const result = await res.json().catch(() => ({}));
        if (!res.ok || !result.ok) throw new Error(result?.message || "Error");
        setIsSentEmail({
          sentEmail: true,
          isFailure: false,
          title: "Gracias 🎉",
          text: "Nos pondremos en contacto lo antes posible.",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setIsSentEmail({
          sentEmail: true,
          isFailure: true,
          title: "Página no encontrada 😭",
          text: "Parece que no podemos encontrar la página que estás buscando",
        });
      });
  }
  const emailValidation = (e, errors) => {
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        e.target.value
      );
    setEmailValue(e.target.value);
    if (emailPattern) {
      delete errors?.email;
    } else {
    }
  };

  return (
    <PageContainer bgColor={"white"}>
      {isSentEmail.sentEmail ? (
        <>
          <SectionContainer>
            <h2>{isSentEmail.title}</h2>
            <p> {isSentEmail.text}</p>
            <Link
              key={`top-nav-contactButton`}
              href={"/"}
              passHref
              prefetch
            >
              <ButtonContainer fullwidth={true}>
                {"Ir al Inicio"}
              </ButtonContainer>
            </Link>
          </SectionContainer>
        </>


      ) : (

        <SectionContainer>
          {/* {console.log('>>>>contact>>>', slice)} */}

          <FormContainer noValidate onSubmit={handleSubmit(onSubmit)}>

            <h2>{title[0]?.text && title[0]?.text || "Contactanos"}</h2>
            <p>
              {subtitle[0]?.text && subtitle[0]?.text ||
                "Cuéntenos sobre usted y lo conectaremos con nuestros expertos para responder cualquier pregunta que tenga."}
            </p>

            {/* --------  NAME --------- */}
            <label htmlFor="firstname">
              {name[0].text || "Nombre"}
            </label>
            <input
              {...register("firstname", {
                required: true,
                minLength: 2,
              })}
              type="text"
              name="firstname"
              id="firstname"
              className={errors.firstname && "error"}
            />
            <span className="error">
              {errors.firstname && "Por favor ingrese su nombre"}
            </span>

            {/* --------  EMAIl --------- */}
            <label htmlFor="email">
              {email[0].text || "Email"}
            </label>
            <input
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                minLenght: {
                  value: 2,
                },
              })}
              type="email"
              name="email"
              id="email"
              value={emailValue}
              onChange={(e) => emailValidation(e, errors)}
              className={errors.email && "error"}
            />
            <span className="error">
              {errors.email && "Por favor ingrese su email"}
            </span>


            {/* --------  MESSAGE --------- */}
            <label htmlFor="message">
              {message[0].text || "En que podemos ayudarlo?"}
            </label>
            <textarea
              {...register("message", {
                required: true,
                minLength: 5,
              })}
              rows="4" cols="50"
              type="text"
              name="message"
              defaultValue=""
              id="message"
              className={errors.message && "error"}
            />
            <span className="error">
              {errors.message && "Por favor ingrese su inquietud"}
            </span>

            <input
              type="submit"
              name="Contact Us"
              value="Enviar"
            // value={contactCtaText[0].text || "Contact us"}
            />

          </FormContainer>

        </SectionContainer>
      )}
    </PageContainer >
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "#F4F4F4",
    }
  }
});

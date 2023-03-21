import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Parallax } from "react-parallax";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import GlobalContainer from "@global/GlobalContainer";
import GlobalTypography from "@global/GlobalTypography";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AOS from "aos";
import background from "app/assets/contact/5.jpg";
import * as yup from "yup";

AOS.init();

const defaultValues = {
  from_name: "",
  email: "",
  phone: "",
  message: "",
};

const yupScheme = yup.object().shape({
  from_name: yup
    .string()
    .required("El nombre es obligatorio")
    .min(3, "El nombre debe contener por lo menos 3 caracteres")
    .max(70, "El nombre no debe contener más de 70 caracteres")
    .nullable(),
  email: yup
    .string()
    .nullable()
    .email("El formato del email es incorrecto")
    .matches(
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "El formato del email es incorrecto"
    )
    .max(100, "El email no debe contener más de 100 caracteres")
    .required("El email es obligatorio"),
  phone: yup
    .string()
    .nullable()
    .required("El telefono es obligatorio")
    .min(7, "El telefono debe contener por lo menos 7 caracteres")
    .max(15, "El telefono no debe contener más de 15 caracteres"),
  message: yup
    .string()
    .nullable()
    .required("El mensaje es obligatorio")
    .min(10, "El mensaje debe contener por lo menos 10 caracteres")
    .max(700, "El mensaje no debe contener más de 700 caracteres"),
});

const contactSection = () => {
  const form = useRef();

  const { control, formState, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(yupScheme),
  });

  const sendEmail = (data) => {
    console.log("aqddd", data, form);
    emailjs
      .sendForm(
        "service_hav14db",
        "template_5slc6uo",
        form.current,
        "urtsILHVpCvrF-kWe"
      )
      .then(
        (result) => {
          // show the user a success message
          toast.success("Mensaje enviado", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          toast.error(
            "Lo siento, el mensaje no pudo ser enviado, favor intentar más tarde",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
          // show the user an error
        }
      );
  };

  const onSubmit = (data) => {
    console.log(data);
    sendEmail(data);
  };

  return (
    <>
      <section
        id="contact-section"
        className="relative h-auto w-full bg-neutral-alternative1-900 from-neutral-alternative1-900 from-neutral-alternative1-900 to-transparent to-transparent bg-cover bg-center
      py-0 before:absolute before:bottom-0 before:left-0 before:z-10 before:h-1/6
      before:w-full before:bg-gradient-to-t after:absolute
      after:top-0 after:left-0 after:z-10 after:h-1/6 after:w-full after:bg-gradient-to-b"
      >
        <Parallax bgImage={background} strength={300}>
          <GlobalContainer contentSize="xl">
            <div className="mt-2xl flex min-h-screen items-center pt-2xl md:mt-0 md:pt-0">
              <div className="grid w-full grid-cols-12">
                {/* TITLE SECCTION */}
                <div className="col-span-full pt-2xl text-center">
                  <h2
                    className="mb-16 text-white"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                  >
                    Contáctame
                  </h2>
                  <div
                    className="relative mx-auto mb-40 h-[1px] w-32 bg-primary-500 before:absolute before:left-[-40px] before:h-[1px] before:w-32 before:bg-neutral-alternative1-400 after:absolute after:right-[-40px] after:h-[1px] after:w-32 after:bg-neutral-alternative1-400"
                    data-aos="fade-up"
                    data-aos-delay="20"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                  />
                </div>
                <div className="col-span-full">
                  <div
                    className="mx-auto mb-2xl text-center"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  >
                    <form
                      ref={form}
                      id="contact_form"
                      className="grid grid-cols-12 gap-m gap-y-0 md:mx-7xl md:pt-m"
                    >
                      <div className="col-span-12 mx-s md:col-span-4 md:mx-0 md:mb-s">
                        <Controller
                          name="from_name"
                          control={control}
                          render={({
                            field: { ref, value, ...field },
                            fieldState: { error },
                          }) => (
                            <TextField
                              {...field}
                              className="w-full"
                              value={value}
                              // label="name"
                              inputProps={{ className: "!text-white " }}
                              placeholder="Nombres"
                              autoComplete="off"
                              error={!!error}
                              helperText={error ? error.message : null}
                            />
                          )}
                        />
                      </div>
                      <div className="col-span-12 mx-s md:col-span-4 md:mx-0 md:mb-s">
                        <Controller
                          name="email"
                          control={control}
                          render={({
                            field: { ref, value, ...field },
                            fieldState: { error },
                          }) => (
                            <TextField
                              {...field}
                              className="w-full"
                              value={value}
                              inputProps={{ className: "!text-white " }}
                              placeholder="Email"
                              autoComplete="off"
                              error={!!error}
                              helperText={error ? error.message : null}
                            />
                          )}
                        />
                      </div>
                      <div className="col-span-12 mx-s md:col-span-4 md:mx-0 md:mb-s">
                        <Controller
                          name="phone"
                          control={control}
                          render={({
                            field: { ref, value, ...field },
                            fieldState: { error },
                          }) => (
                            <TextField
                              {...field}
                              value={value}
                              className="w-full"
                              inputProps={{ className: "!text-white " }}
                              placeholder="Teléfono "
                              autoComplete="off"
                              error={!!error}
                              helperText={error ? error.message : null}
                            />
                          )}
                        />
                      </div>
                      <div className="col-span-12 mx-s mb-m md:col-span-12 md:mx-0">
                        <Controller
                          name="message"
                          control={control}
                          render={({
                            field: { ref, value, ...field },
                            fieldState: { error },
                          }) => (
                            <TextField
                              {...field}
                              value={value}
                              className="w-full"
                              multiline
                              rows={7}
                              inputProps={{ className: "!text-white " }}
                              placeholder="Mensaje"
                              autoComplete="off"
                              error={!!error}
                              helperText={error ? error.message : null}
                            />
                          )}
                        />
                      </div>
                    </form>
                    <Button
                      variant="contained"
                      className=" font-semibold text-white md:mt-m md:w-2/12"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Enviar
                    </Button>
                    <div className="mx-auto mt-l py-m text-neutral-alternative1-300 md:flex md:w-4/6 md:justify-between">
                      <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                      >
                        <GlobalTypography
                          variant="body1"
                          className="mb-l md:mb-0"
                        >
                          <span className="block pb-8 font-semibold text-white">
                            Mi Email
                          </span>
                          vjaramilloespinoza770@gmail.com
                        </GlobalTypography>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                      >
                        <GlobalTypography
                          variant="body1"
                          className="mb-l md:mb-0"
                        >
                          <span className="block pb-8 font-semibold text-white">
                            Mi Teléfono
                          </span>
                          +593 97 95 41 660
                        </GlobalTypography>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                      >
                        <GlobalTypography
                          variant="body1"
                          className="mb-l md:mb-0"
                        >
                          <span className="block pb-8 font-semibold text-white">
                            Dirección
                          </span>
                          Ciud Zamora,
                          <br /> Loja, Loja, ECU
                        </GlobalTypography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlobalContainer>
        </Parallax>
      </section>
      <ToastContainer
      className="toast left-1/2 w-auto -translate-x-1/2 pt-88 md:pt-8"
      toastClassName="p-0 bg-transparent shadow-none"
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default contactSection;

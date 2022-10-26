// import GlobalTypography from "@global/GlobalTypography";
import { Controller, useForm } from "react-hook-form";
import { Parallax } from "react-parallax";
import GlobalContainer from "@global/GlobalContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import AOS from "aos";
import background from "app/assets/whatIDo/2.jpg";
import * as yup from "yup";

AOS.init();

const defaultValues = {
  name: null,
  email: "",
  phone: "",
  messageContac: "",
};

const yupScheme = yup.object().shape({
  identification: yup
    .string()
    // .required(form.identification.rules.required)
    // .matches(/^\d+$/, form.identification.rules.invalid)
    // .test("digitCheck", form.identification.rules.invalid, (value) =>
    //   validCardId(value)
    // )
    .nullable(),
  termsAndConditions: yup.boolean(),
  // .required(form.termsAndConditions.rules.required)
  // .oneOf([true], form.termsAndConditions.rules.required),
});

const contactSection = () => {
  const { control, formState, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(yupScheme),
  });

  return (
    <section
      id="contact-section"
      className="h-auto w-full bg-neutral-alternative1-900 bg-cover bg-center py-0"
    >
      <Parallax bgImage={background} strength={300}>
        <GlobalContainer contentSize="xl">
          <div className="flex min-h-screen items-center">
            <div className="grid w-full grid-cols-12">
              {/* TITLE SECCTION */}
              <div className="col-span-full text-center">
                <h2
                  className="mb-16 text-white"
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                  data-aos-once="true"
                >
                  About Me
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
                <div className="mx-auto mb-2xl text-center">
                  <form
                    id="contact_form"
                    className="grid grid-cols-12 gap-m md:mx-7xl"
                  >
                    <div className="col-span-4 mb-m">
                      <Controller
                        name="name"
                        control={control}
                        render={({
                          field: { ref, value, ...field },
                          fieldState: { error },
                        }) => (
                          <TextField
                            {...field}
                            className="w-full"
                            value={value}
                            label="name"
                            // inputRef={ref}
                            // className={{
                            //   label: "",
                            //   root: "rounded-4 bg-primary-50",
                            // }}
                            placeholder="validationInfo.names.placeHolder"
                            autoComplete="off"
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                      />
                    </div>
                    <div className="col-span-4 mb-m">
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
                            label="email"
                            // inputRef={ref}
                            // className={{
                            //   label: "",
                            //   root: "rounded-4 bg-primary-50",
                            // }}
                            placeholder="validationInfo.names.placeHolder"
                            autoComplete="off"
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                      />
                    </div>
                    <div className="col-span-4 mb-m">
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
                            label="phone"
                            // inputRef={ref}
                            // className={{
                            //   label: "",
                            //   root: "rounded-4 bg-primary-50",
                            // }}
                            placeholder="validationInfo.names.placeHolder"
                            autoComplete="off"
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                      />
                    </div>
                    <div className="col-span-12 mb-m">
                      <Controller
                        name="messageContac"
                        control={control}
                        render={({
                          field: { ref, value, ...field },
                          fieldState: { error },
                        }) => (
                          <TextField
                            {...field}
                            value={value}
                            className="w-full"
                            label="messageContac"
                            multiline
                            rows={7}
                            // inputRef={ref}
                            // className={{
                            //   label: "",
                            //   root: "rounded-4 bg-primary-50",
                            // }}
                            placeholder="validationInfo.names.placeHolder"
                            autoComplete="off"
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </Parallax>
    </section>
  );
};

export default contactSection;

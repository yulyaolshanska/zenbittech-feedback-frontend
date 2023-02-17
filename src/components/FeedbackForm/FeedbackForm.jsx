import {
  Container,
  Form,
  Input,
  SubmitButton,
  ErrorText,
  Textarea,
} from "./FeedbackForm.styled.js";
import { useForm } from "react-hook-form";
import { useAddFeedbackMutation } from "redux/feedbackApi.js";

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const [addFeedback] = useAddFeedbackMutation();

  const textRegexp = /[А-ЯЄIа-яєia-zA-Z]+/g;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const onSubmit = async (data) => {
    try {
      await addFeedback(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="userName"
          name="name"
          placeholder="Your name*"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 16,
              message: "The length of this field cannot exceed 16 characters",
            },
            pattern: {
              value: textRegexp,
              message: "Name should  contain only letters.",
            },
          })}
        ></Input>
        {errors?.name && <ErrorText>{errors.name?.message}</ErrorText>}
        <Input
          type="email"
          id="userEmail"
          name="email"
          placeholder="Your e-mail*"
          {...register("email", {
            required: "Email is required",

            pattern: {
              value: emailRegex,
              message: "Check your email.",
            },
          })}
        ></Input>
        {errors?.email && <ErrorText>{errors.email?.message}</ErrorText>}
        <Textarea
          id="message"
          name="message"
          placeholder="Your message*"
          {...register("message", {
            required: "Message is required.",
            maxLength: {
              value: 120,
              message: "The length of this field cannot exceed 120 characters",
            },
            minLength: {
              value: 6,
              message: "This input must exceed 8 characters",
            },
          })}
        />
        {errors.message && (
          <ErrorText role="alert">{errors.message?.message}</ErrorText>
        )}
        <SubmitButton>Send message</SubmitButton>
      </Form>
    </Container>
  );
};

export default FeedbackForm;

import { rest } from "msw";

const baseUrl = "https://dasic002-drf-api-85265eacf671.herokuapp.com/";

export const handlers = [
  rest.get(`${baseUrl}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "Frank",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 4,
        profile_image:
          "https://res.cloudinary.com/dnepttq4h/image/upload/v1/media/../default_profile_oopuxr",
      })
    );
  }),
  rest.post(`${baseUrl}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

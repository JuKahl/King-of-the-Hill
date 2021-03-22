import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Login from "./Login";

export default {
  title: "Common/Login",
  component: Login,
} as Meta;

export const login = () => Login;

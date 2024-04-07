import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const cofig = defineConfig({
   projectId: "n44fkanb",
   dataset: "production",
   title: "oppdragsbanken",
   apiVersion: "2024-04-07",
   basePath: "/admin",
   plugins: [deskTool()],
});

export default config;

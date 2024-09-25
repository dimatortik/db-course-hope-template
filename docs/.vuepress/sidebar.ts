import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Специфікація вимог",
      // icon: "laptop-code",
      prefix: "requirements",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Архітектура програмного забеспечення",
      // icon: "laptop-code",
      prefix: "use cases/",
      link: "use cases/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Проєктування інтерфейсу програмного забеспечення",
      // icon: "laptop-code",
      prefix: "design/",
      link: "design/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Реалізація програмного забеспечення",
      // icon: "laptop-code",
      prefix: "software/",
      link: "software/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Інтеграці компонентів",
      // icon: "laptop-code",
      prefix: "test/",
      link: "test/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Тестування процездатності системи",
      // icon: "laptop-code",
      prefix: "test/",
      link: "test/",
      children: "structure",
      collapsible: true,
    },
  ],
});

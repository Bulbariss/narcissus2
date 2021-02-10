export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "Bulbariss/narcissus2",
    branch: "main",
  },
  media_folder: "public/images",
  public_folder: "images",
  publish_mode: "editorial_workflow",
  display_url: "https://narcissus.monster",
  site_url: "https://narcissus.monster",
  locale: "ru",
  show_preview_links: false,
  collections: [
    {
      name: "pages",
      label: "Страницы",
      delete: false,
      editor: {
        preview: false,
      },
      files: [
        {
          label: "Главная",
          name: "home",
          file: "cms/content/pages/home.md",
          fields: [
            {
              label: "СМИ о проекте",
              name: "smi",
              widget: "string",
            },
            {
              label: "Ссылки на публикации",
              name: "linksToPublications",
              widget: "list",
              fields: [
                {
                  label: "Титл",
                  name: "title",
                  widget: "string",
                },
                {
                  label: "Ссылка",
                  name: "link",
                  widget: "string",
                },
              ],
            },
            {
              label: "Лого нарцисс",
              name: "narcissusLogo",
              widget: "image",
            },
            {
              label: "Текст первая страница",
              name: "heroText",
              widget: "text",
            },
            {
              label: "Обложка первой страницы вертикальная",
              name: "heroVertical",
              widget: "image",
            },
            {
              label: "Обложка первой страницы горизонтальная",
              name: "heroHorizontal",
              widget: "image",
            },
            {
              label: "О чем наш проект заголовок",
              name: "aboutHeading",
              widget: "text",
            },
            {
              label: "О чем наш проект текст",
              name: "aboutText",
              widget: "text",
            },
            {
              label: "Видео",
              name: "video",
              widget: "file",
            },
            {
              label: "Обложка видео",
              name: "videoCover",
              widget: "image",
            },
            {
              label: "Параллакс один",
              name: "parallaxOne",
              widget: "image",
            },
            {
              label: "Параллакс два",
              name: "parallaxTwo",
              widget: "image",
            },
            {
              label: "Параллакс три",
              name: "parallaxThree",
              widget: "image",
            },
            {
              label: "Параллакс четыре",
              name: "parallaxFour",
              widget: "image",
            },
            {
              label: "Мнение психолога заголовок",
              name: "phycologyHeading",
              widget: "text",
            },
            {
              label: "Мнение психолога имя",
              name: "phycologyName",
              widget: "text",
            },
            {
              label: "Мнение психолога фото",
              name: "phycologyImage",
              widget: "image",
            },
            {
              label: "Мнение психолога facebook",
              name: "phycologyFacebook",
              widget: "string",
            },
            {
              label: "Мнение психолога текст один",
              name: "phycologyTextOne",
              widget: "text",
            },
            {
              label: "Мнение психолога текст два",
              name: "phycologyTextTwo",
              widget: "text",
            },
            {
              label: "Мнение психолога текст три",
              name: "phycologyTextThree",
              widget: "text",
            },
            {
              label: "Мнение психолога текст четыре",
              name: "phycologyTextFour",
              widget: "text",
            },
            {
              label: "Мнение психолога обложка текста один",
              name: "phycologyTextCoverOne",
              widget: "image",
            },
            {
              label: "Мнение психолога обложка текста два",
              name: "phycologyTextCoverTwo",
              widget: "image",
            },
            {
              label: "Мнение психолога обложка текста три",
              name: "phycologyTextCoverThree",
              widget: "image",
            },
            {
              label: "Мнение психолога обложка текста четыре",
              name: "phycologyTextCoverFour",
              widget: "image",
            },
            {
              label: "Копирайт",
              name: "copyright",
              widget: "string",
            },
            {
              label: "Facebook",
              name: "facebook",
              widget: "object",
              fields: [
                {
                  label: "Титл",
                  name: "title",
                  widget: "string",
                },
                {
                  label: "Ссылка",
                  name: "link",
                  widget: "string",
                },
              ],
            },
            {
              label: "Vimeo",
              name: "vimeo",
              widget: "object",
              fields: [
                {
                  label: "Титл",
                  name: "title",
                  widget: "string",
                },
                {
                  label: "Ссылка",
                  name: "link",
                  widget: "string",
                },
              ],
            },
            {
              label: "Instagram",
              name: "instagram",
              widget: "object",
              fields: [
                {
                  label: "Титл",
                  name: "title",
                  widget: "string",
                },
                {
                  label: "Ссылка",
                  name: "link",
                  widget: "string",
                },
              ],
            },
            {
              label: "Koshka Neon",
              name: "koshkaNeon",
              widget: "object",
              fields: [
                {
                  label: "Титл",
                  name: "title",
                  widget: "string",
                },
                {
                  label: "Ссылка",
                  name: "link",
                  widget: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

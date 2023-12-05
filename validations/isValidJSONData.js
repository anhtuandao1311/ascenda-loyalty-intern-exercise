const Ajv = require("ajv");
const ajv = new Ajv();

// schema for input.json
const schema = {
  type: "object",
  properties: {
    offers: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          title: { type: "string" },
          description: { type: "string" },
          category: { type: "number" },
          merchants: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                name: { type: "string" },
                distance: { type: "number" },
              },
              required: ["id", "name", "distance"],
            },
          },
          valid_to: { type: "string" },
        },
        required: [
          "id",
          "title",
          "description",
          "category",
          "merchants",
          "valid_to",
        ],
      },
    },
  },
  required: ["offers"],
};

const validate = ajv.compile(schema);
module.exports = validate;

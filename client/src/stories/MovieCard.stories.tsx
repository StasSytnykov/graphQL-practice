import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieCard } from "../components";
import { movies } from "./stub";
import { Props } from "../components/MovieCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MovieCard",
  component: MovieCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MovieCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieCard> = (args: Props) => (
  <MovieCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  movie: movies[0],
  onCardSelect: () => {},
};

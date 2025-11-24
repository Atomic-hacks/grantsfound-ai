import type { Meta, StoryObj } from "@storybook/react";
import AgentCard from "@/components/ui/AgentCard";

const meta: Meta<typeof AgentCard> = {
  title: "UI/AgentCard",
  component: AgentCard,
  args: {
    name: "Atlas",
    status: "online",
    sessions: 3,
    specialty: "Reporting",
  },
};

export default meta;

type Story = StoryObj<typeof AgentCard>;

export const Default: Story = {};

export const IdleAgent: Story = {
  args: {
    status: "idle",
    sessions: 1,
  },
};

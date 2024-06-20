import { AgentAssignment } from "../agentAssignment/AgentAssignment";
import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  agentAssignment?: AgentAssignment | null;
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  location: string | null;
  property?: Property | null;
  updatedAt: Date;
};

import { Appointment } from "../appointment/Appointment";
import { Property } from "../property/Property";

export type AgentAssignment = {
  agentName: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  property?: Property | null;
  updatedAt: Date;
};

import { AppointmentUpdateManyWithoutAgentAssignmentsInput } from "./AppointmentUpdateManyWithoutAgentAssignmentsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agentName?: string | null;
  appointments?: AppointmentUpdateManyWithoutAgentAssignmentsInput;
  property?: PropertyWhereUniqueInput | null;
};

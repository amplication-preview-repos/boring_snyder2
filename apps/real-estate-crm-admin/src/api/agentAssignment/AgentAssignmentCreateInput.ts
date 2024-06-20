import { AppointmentCreateNestedManyWithoutAgentAssignmentsInput } from "./AppointmentCreateNestedManyWithoutAgentAssignmentsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentName?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutAgentAssignmentsInput;
  property?: PropertyWhereUniqueInput | null;
};

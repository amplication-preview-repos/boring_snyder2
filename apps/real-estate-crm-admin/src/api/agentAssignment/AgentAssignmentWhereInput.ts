import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentWhereInput = {
  agentName?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
};

import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  agentAssignmentId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};

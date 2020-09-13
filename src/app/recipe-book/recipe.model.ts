import { ingrediant } from "src/app/shared/models/ingrediant.model";
export interface recipe {
  name?: string;
  description?: string;
  imgPath?: string;
  ingrediants?: ingrediant[];
}

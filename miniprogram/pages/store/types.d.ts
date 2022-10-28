import { Location } from "../../api/types";

type MapMarker = {
  id: number;
  title: string;
  iconPath: string;
  width: string | number;
  height: string | number;
} & Location
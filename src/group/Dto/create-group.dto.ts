import { MinLength } from "class-validator";

export class CrearGroupDto{

  NameGroup: string;
  @MinLength(500)
  Description: string;
  Members: number;
  Class: string;
  List1: string;
  List2: string;
  List3: string;
  List4: string;
  Image: string;
  Image1: string;
  Image2: string;
  Image3: string;
}
import { OmitType, PartialType } from "@nestjs/swagger";
import { Order } from "./order.dto";

export class PartialOrder extends PartialType(OmitType(Order,['begin_date_string', 'distance'])){}
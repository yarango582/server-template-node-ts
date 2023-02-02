import { Response } from "express";
import { JsonController, Get, Req } from "routing-controllers";

@JsonController("/")
class HealthController {
  @Get("/")
  health(@Req() req: Response) {
    return {
      message: "Server online!"
    };
  }
}

export default HealthController;

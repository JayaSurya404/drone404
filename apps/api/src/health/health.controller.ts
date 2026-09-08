import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
  @Get()
  getHealth() {
    return {
      status: "ok",
      service: "drone404-api",
      timestamp: new Date().toISOString(),
    };
  }
}
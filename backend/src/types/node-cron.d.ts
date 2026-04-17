declare module 'node-cron' {
  export interface ScheduleOptions {
    scheduled?: boolean
    timezone?: string
  }

  export class ScheduledTask {
    start(): void
    stop(): void
    destroy(): void
  }

  export function schedule(
    expression: string,
    func: () => void,
    options?: ScheduleOptions
  ): ScheduledTask

  export function validate(expression: string): boolean
}

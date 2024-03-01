require 'rufus-scheduler'

class TaskScheduler
  def initialize
    @scheduler = Rufus::Scheduler.new
  end

  def schedule_every_hour
    @scheduler.every '1h' do
      begin
        log('Do something every hour')
        # Your hourly task logic here
      rescue => e
        log_error(e)
      end
    end
  end

  def schedule_at_specific_time(time, task)
    @scheduler.at time do
      begin
        log("Do something at #{time}")
        task.call
      rescue => e
        log_error(e)
      end
    end
  end

  def start
    @scheduler.join
  end

  private

  def log(message)
    puts "[#{Time.now}] #{message}"
  end

  def log_error(error)
    puts "[#{Time.now}] Error: #{error.message}"
    puts error.backtrace.join("\n")
  end
end

# Usage example
scheduler = TaskScheduler.new

scheduler.schedule_every_hour

scheduler.schedule_at_specific_time('2024/02/29 12:00:00') do
  # Your specific time task logic here
end

scheduler.start


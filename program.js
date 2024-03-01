# Your Ruby task scheduler code here
require 'rufus-scheduler'

scheduler = Rufus::Scheduler.new

scheduler.every '1h' do
  puts 'Do something every hour'
end

scheduler.at '2024/02/29 12:00:00' do
  puts 'Do something at a specific time'
end

scheduler.join

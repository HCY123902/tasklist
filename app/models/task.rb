class Task < ApplicationRecord
    has_many :task_types
    validates :title, presence: true,
                    length: { minimum: 5 }
    validates :time, format: { with: /\d{2}\/\d{2}\/\d{4}/ }
end

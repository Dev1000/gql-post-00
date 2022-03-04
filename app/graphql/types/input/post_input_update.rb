# frozen_string_literal: true

module Types
  module Input
    class PostInputUpdate < Types::BaseInputObject
      argument :id, ID, required: true
      argument :title, String, required: true
      argument :body, String, required: true
    end
  end
end

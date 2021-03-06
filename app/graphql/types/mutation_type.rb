# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :add_post, mutation: Mutations::AddPost
    field :update_post, mutation: Mutations::UpdatePost
  end
end

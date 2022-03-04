# frozen_string_literal: true

module Mutations
  class UpdatePost < Mutations::BaseMutation
    argument :params, Types::Input::PostInputUpdate, required: true

    field :post, Types::PostType, null: false

    def resolve(params:)
      puts "RESOLVE"
      post_params = Hash params
      puts "post_params: #{post_params}"

      begin
        post = Post.find(post_params[:id])
        puts "post: #{post}"
        post.update(post_params)
      rescue ActiveRecord::RecordNotFound => _e
        GraphQL::ExecutionError.new('Post does not exist.')
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
        " #{e.record.errors.full_messages.join(', ')}")
      end

      { post: post }
    end
  end
end

# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :fetch_posts, resolver: Queries::FetchPosts, description: 'All posts'
    field :fetch_post, resolver: Queries::FetchPost, description: 'Get 1 post by id'
    field :search_post, resolver: Queries::SearchPost, description: 'By Title'
  end
end

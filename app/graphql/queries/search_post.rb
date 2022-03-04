# frozen_string_literal: true

module Queries
  class SearchPost < Queries::BaseQuery
    type Types::PostType, null: false
    argument :title, String, required: true

    def resolve(title:)
      puts "title: #{title}"
      posts = Post.where('title LIKE ?', "%#{title}%").limit(1)
      puts "posts: #{posts.length}"
      posts[0]
    end
  end
end

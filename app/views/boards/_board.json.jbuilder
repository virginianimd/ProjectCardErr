json.extract! board, :id, :title, :description, :user_id, :created_at, :updated_at
json.url board_url(board, format: :json)

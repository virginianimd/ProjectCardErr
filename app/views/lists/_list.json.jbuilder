json.extract! list, :id, :name, :position, :board_id, :created_at, :updated_at
json.url board_lists_url(list, format: :json)

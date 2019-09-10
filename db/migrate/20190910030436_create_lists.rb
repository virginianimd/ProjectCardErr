class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.string :name
      t.integer :position
      t.integer :board_id

      t.timestamps
    end
  end
end

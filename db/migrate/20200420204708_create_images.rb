class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.text :image, null: false

      t.timestamps null: false
    end
  end
end

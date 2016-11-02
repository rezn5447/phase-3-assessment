class CreateToys < ActiveRecord::Migration[5.0]
  def change
    create_table :toys do |t|
      t.string :description
      t.references :pet
      t.timestamps
    end
  end
end

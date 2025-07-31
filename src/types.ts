export interface Data {
  id: string
  title: string | null
  original_img_path: string
  thumbnail_img_path: string
  category: string
  sub_category: string
  sold: boolean
  new: boolean
}

export interface DrawerState {
  isOpen: boolean
  product: Data | null
}

export interface StoreState {
  drawer: DrawerState
}

export interface CategoryState {
  id: string
  name: string
}
export interface SubCategoryState {
  id: string
  category: string
  sub_category_name: string
}

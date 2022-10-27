import { StoreStatus } from "../enums/StoreStatus"

type RequetMethod = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined

type ErrorResponse = {
  code: number;
  message: string;
}
type HomePageData = {
  swiper: SwiperData[],
  iconNavigations:IconNavigation[]
}

type RequestData = string | WechatMiniprogram.IAnyObject | ArrayBuffer

type UserType={
  id:string,
  mobile:number,
  gender?:Gender
  birthDay?:string
}
type Gender="MALE" | 'FAMALE' | 'UNKNOWN' | null
type UserUpdateRequest={
  mobile?:number,
  gender?:Gender
  birthDay?:string
}
// 门店数据类型
type ListResult<T> = {
  paging: Paging,
  data: Array<T>
}

interface Paging {
  page: number;
  size: number;
  total: number;
}
type Store={
  id:string,
  name:string,
  address:string,
  openingTime:{
    start:string,
    end:string
  }
  status:keyof typeof StoreStatus
  location:Location,
  phone:string
}

type Location = {
  longtitude: number;
  langtitude: number;
}
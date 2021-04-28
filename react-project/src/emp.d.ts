// JSON TYPE
type JSONPrimitive = string | number | boolean | null
type JSONValue = JSONPrimitive | JSONObject | JSONArray
type JSONObject = { [member: string]: JSONValue }
type JSONArray = Array<JSONValue>

// import picture

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

// 外部的库
declare module 'vuera'
declare module '@emp/*'

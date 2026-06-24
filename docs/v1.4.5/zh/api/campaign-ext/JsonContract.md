<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonContract`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonContract

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public abstract class JsonContract`
**Base:** 无
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/JsonContract.cs`

## 概述

`JsonContract` 位于 `Newtonsoft.Json.Serialization`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Serialization` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UnderlyingType` | `public Type UnderlyingType { get; set; }` |
| `CreatedType` | `public Type CreatedType { get; set; }` |
| `IsReference` | `public bool? IsReference { get; set; }` |
| `Converter` | `public JsonConverter? Converter { get; set; }` |
| `InternalConverter` | `public JsonConverter? InternalConverter { get; set; }` |
| `OnDeserializedCallbacks` | `public IList<SerializationCallback> OnDeserializedCallbacks { get; }` |
| `OnDeserializingCallbacks` | `public IList<SerializationCallback> OnDeserializingCallbacks { get; }` |
| `OnSerializedCallbacks` | `public IList<SerializationCallback> OnSerializedCallbacks { get; }` |
| `OnSerializingCallbacks` | `public IList<SerializationCallback> OnSerializingCallbacks { get; }` |
| `OnErrorCallbacks` | `public IList<SerializationErrorCallback> OnErrorCallbacks { get; }` |
| `DefaultCreator` | `public Func<object>? DefaultCreator { get; set; }` |
| `DefaultCreatorNonPublic` | `public bool DefaultCreatorNonPublic { get; set; }` |

## 使用示例

```csharp
var implementation = new CustomJsonContract();
```

## 参见

- [完整类目录](../catalog)
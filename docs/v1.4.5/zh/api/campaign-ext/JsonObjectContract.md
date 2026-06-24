<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonObjectContract`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonObjectContract

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class JsonObjectContract : JsonContainerContract`
**Base:** `JsonContainerContract`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/JsonObjectContract.cs`

## 概述

`JsonObjectContract` 位于 `Newtonsoft.Json.Serialization`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Serialization` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MemberSerialization` | `public MemberSerialization MemberSerialization { get; set; }` |
| `MissingMemberHandling` | `public MissingMemberHandling? MissingMemberHandling { get; set; }` |
| `ItemRequired` | `public Required? ItemRequired { get; set; }` |
| `ItemNullValueHandling` | `public NullValueHandling? ItemNullValueHandling { get; set; }` |
| `Properties` | `public JsonPropertyCollection Properties { get; }` |
| `CreatorParameters` | `public JsonPropertyCollection CreatorParameters { get; }` |
| `OverrideCreator` | `public ObjectConstructor<object>? OverrideCreator { get; set; }` |
| `ExtensionDataSetter` | `public ExtensionDataSetter? ExtensionDataSetter { get; set; }` |
| `ExtensionDataGetter` | `public ExtensionDataGetter? ExtensionDataGetter { get; set; }` |
| `ExtensionDataValueType` | `public Type? ExtensionDataValueType { get; set; }` |
| `ExtensionDataNameResolver` | `public Func<string, string>? ExtensionDataNameResolver { get; set; }` |

## 使用示例

```csharp
var example = new JsonObjectContract();
```

## 参见

- [完整类目录](../catalog)
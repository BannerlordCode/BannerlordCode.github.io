<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonProperty`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonProperty

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class JsonProperty`
**Base:** 无
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/JsonProperty.cs`

## 概述

`JsonProperty` 位于 `Newtonsoft.Json.Serialization`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Serialization` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string? PropertyName { get; set; }` |
| `DeclaringType` | `public Type? DeclaringType { get; set; }` |
| `Order` | `public int? Order { get; set; }` |
| `UnderlyingName` | `public string? UnderlyingName { get; set; }` |
| `ValueProvider` | `public IValueProvider? ValueProvider { get; set; }` |
| `AttributeProvider` | `public IAttributeProvider? AttributeProvider { get; set; }` |
| `PropertyType` | `public Type? PropertyType { get; set; }` |
| `Converter` | `public JsonConverter? Converter { get; set; }` |
| `MemberConverter` | `public JsonConverter? MemberConverter { get; set; }` |
| `Ignored` | `public bool Ignored { get; set; }` |
| `Readable` | `public bool Readable { get; set; }` |
| `Writable` | `public bool Writable { get; set; }` |
| `HasMemberAttribute` | `public bool HasMemberAttribute { get; set; }` |
| `DefaultValue` | `public object? DefaultValue { get; set; }` |
| `Required` | `public Required Required { get; set; }` |
| `IsReference` | `public bool? IsReference { get; set; }` |
| `NullValueHandling` | `public NullValueHandling? NullValueHandling { get; set; }` |
| `DefaultValueHandling` | `public DefaultValueHandling? DefaultValueHandling { get; set; }` |
| `ReferenceLoopHandling` | `public ReferenceLoopHandling? ReferenceLoopHandling { get; set; }` |
| `ObjectCreationHandling` | `public ObjectCreationHandling? ObjectCreationHandling { get; set; }` |
| `TypeNameHandling` | `public TypeNameHandling? TypeNameHandling { get; set; }` |
| `ShouldSerialize` | `public Predicate<object>? ShouldSerialize { get; set; }` |
| `ShouldDeserialize` | `public Predicate<object>? ShouldDeserialize { get; set; }` |
| `GetIsSpecified` | `public Predicate<object>? GetIsSpecified { get; set; }` |
| `SetIsSpecified` | `public Action<object, object?>? SetIsSpecified { get; set; }` |
| `ItemConverter` | `public JsonConverter? ItemConverter { get; set; }` |
| `ItemIsReference` | `public bool? ItemIsReference { get; set; }` |
| `ItemTypeNameHandling` | `public TypeNameHandling? ItemTypeNameHandling { get; set; }` |
| `ItemReferenceLoopHandling` | `public ReferenceLoopHandling? ItemReferenceLoopHandling { get; set; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new JsonProperty();
value.ToString();
```

## 参见

- [完整类目录](../catalog)
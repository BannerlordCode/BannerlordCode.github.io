<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonSchema`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSchema

**Namespace:** Newtonsoft.Json.Schema
**Module:** Newtonsoft.Json
**Type:** `public class JsonSchema`
**Base:** 无
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Schema/JsonSchema.cs`

## 概述

`JsonSchema` 位于 `Newtonsoft.Json.Schema`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Schema` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Required` | `public bool? Required { get; set; }` |
| `ReadOnly` | `public bool? ReadOnly { get; set; }` |
| `Hidden` | `public bool? Hidden { get; set; }` |
| `Transient` | `public bool? Transient { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `Type` | `public JsonSchemaType? Type { get; set; }` |
| `Pattern` | `public string Pattern { get; set; }` |
| `MinimumLength` | `public int? MinimumLength { get; set; }` |
| `MaximumLength` | `public int? MaximumLength { get; set; }` |
| `DivisibleBy` | `public double? DivisibleBy { get; set; }` |
| `Minimum` | `public double? Minimum { get; set; }` |
| `Maximum` | `public double? Maximum { get; set; }` |
| `ExclusiveMinimum` | `public bool? ExclusiveMinimum { get; set; }` |
| `ExclusiveMaximum` | `public bool? ExclusiveMaximum { get; set; }` |
| `MinimumItems` | `public int? MinimumItems { get; set; }` |
| `MaximumItems` | `public int? MaximumItems { get; set; }` |
| `Items` | `public IList<JsonSchema> Items { get; set; }` |
| `PositionalItemsValidation` | `public bool PositionalItemsValidation { get; set; }` |
| `AdditionalItems` | `public JsonSchema AdditionalItems { get; set; }` |
| `AllowAdditionalItems` | `public bool AllowAdditionalItems { get; set; }` |
| `UniqueItems` | `public bool UniqueItems { get; set; }` |
| `Properties` | `public IDictionary<string, JsonSchema> Properties { get; set; }` |
| `AdditionalProperties` | `public JsonSchema AdditionalProperties { get; set; }` |
| `PatternProperties` | `public IDictionary<string, JsonSchema> PatternProperties { get; set; }` |
| `AllowAdditionalProperties` | `public bool AllowAdditionalProperties { get; set; }` |
| `Requires` | `public string Requires { get; set; }` |
| `Enum` | `public IList<JToken> Enum { get; set; }` |
| `Disallow` | `public JsonSchemaType? Disallow { get; set; }` |
| `Default` | `public JToken Default { get; set; }` |
| `Extends` | `public IList<JsonSchema> Extends { get; set; }` |
| `Format` | `public string Format { get; set; }` |

## 主要方法

### Read
`public static JsonSchema Read(JsonReader reader)`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### Read
`public static JsonSchema Read(JsonReader reader, JsonSchemaResolver resolver)`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### Parse
`public static JsonSchema Parse(string json)`

**用途 / Purpose:** 处理 `parse` 相关逻辑。

### Parse
`public static JsonSchema Parse(string json, JsonSchemaResolver resolver)`

**用途 / Purpose:** 处理 `parse` 相关逻辑。

### WriteTo
`public void WriteTo(JsonWriter writer)`

**用途 / Purpose:** 处理 `write to` 相关逻辑。

### WriteTo
`public void WriteTo(JsonWriter writer, JsonSchemaResolver resolver)`

**用途 / Purpose:** 处理 `write to` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
JsonSchema.Read(reader);
```

## 参见

- [完整类目录](../catalog)
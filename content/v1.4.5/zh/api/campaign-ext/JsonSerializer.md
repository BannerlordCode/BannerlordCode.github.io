---
title: "JsonSerializer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonSerializer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSerializer

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public class JsonSerializer`
**Base:** 无
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonSerializer.cs`

## 概述

`JsonSerializer` 位于 `Newtonsoft.Json`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ReferenceResolver` | `public virtual IReferenceResolver? ReferenceResolver { get; set; }` |
| `Binder` | `public virtual SerializationBinder Binder { get; }` |
| `SerializationBinder` | `public virtual ISerializationBinder SerializationBinder { get; set; }` |
| `TraceWriter` | `public virtual ITraceWriter? TraceWriter { get; set; }` |
| `EqualityComparer` | `public virtual IEqualityComparer? EqualityComparer { get; set; }` |
| `TypeNameHandling` | `public virtual TypeNameHandling TypeNameHandling { get; set; }` |
| `TypeNameAssemblyFormat` | `public virtual FormatterAssemblyStyle TypeNameAssemblyFormat { get; set; }` |
| `TypeNameAssemblyFormatHandling` | `public virtual TypeNameAssemblyFormatHandling TypeNameAssemblyFormatHandling { get; set; }` |
| `PreserveReferencesHandling` | `public virtual PreserveReferencesHandling PreserveReferencesHandling { get; set; }` |
| `ReferenceLoopHandling` | `public virtual ReferenceLoopHandling ReferenceLoopHandling { get; set; }` |
| `MissingMemberHandling` | `public virtual MissingMemberHandling MissingMemberHandling { get; set; }` |
| `NullValueHandling` | `public virtual NullValueHandling NullValueHandling { get; set; }` |
| `DefaultValueHandling` | `public virtual DefaultValueHandling DefaultValueHandling { get; set; }` |
| `ObjectCreationHandling` | `public virtual ObjectCreationHandling ObjectCreationHandling { get; set; }` |
| `ConstructorHandling` | `public virtual ConstructorHandling ConstructorHandling { get; set; }` |
| `MetadataPropertyHandling` | `public virtual MetadataPropertyHandling MetadataPropertyHandling { get; set; }` |
| `Converters` | `public virtual JsonConverterCollection Converters { get; }` |
| `ContractResolver` | `public virtual IContractResolver ContractResolver { get; set; }` |
| `Context` | `public virtual StreamingContext Context { get; set; }` |
| `Formatting` | `public virtual Formatting Formatting { get; set; }` |
| `DateFormatHandling` | `public virtual DateFormatHandling DateFormatHandling { get; set; }` |
| `DateTimeZoneHandling` | `public virtual DateTimeZoneHandling DateTimeZoneHandling { get; set; }` |
| `DateParseHandling` | `public virtual DateParseHandling DateParseHandling { get; set; }` |
| `FloatParseHandling` | `public virtual FloatParseHandling FloatParseHandling { get; set; }` |
| `FloatFormatHandling` | `public virtual FloatFormatHandling FloatFormatHandling { get; set; }` |
| `StringEscapeHandling` | `public virtual StringEscapeHandling StringEscapeHandling { get; set; }` |
| `DateFormatString` | `public virtual string DateFormatString { get; set; }` |
| `Culture` | `public virtual CultureInfo Culture { get; set; }` |
| `MaxDepth` | `public virtual int? MaxDepth { get; set; }` |
| `CheckAdditionalContent` | `public virtual bool CheckAdditionalContent { get; set; }` |

## 主要方法

### Create
`public static JsonSerializer Create()`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### Create
`public static JsonSerializer Create(JsonSerializerSettings? settings)`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### CreateDefault
`public static JsonSerializer CreateDefault()`

**用途 / Purpose:** 创建一个 `default` 实例或对象。

### CreateDefault
`public static JsonSerializer CreateDefault(JsonSerializerSettings? settings)`

**用途 / Purpose:** 创建一个 `default` 实例或对象。

### Populate
`public void Populate(TextReader reader, object target)`

**用途 / Purpose:** 处理 `populate` 相关逻辑。

### Populate
`public void Populate(JsonReader reader, object target)`

**用途 / Purpose:** 处理 `populate` 相关逻辑。

### Deserialize
`public object? Deserialize(JsonReader reader)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### Deserialize
`public object? Deserialize(TextReader reader, Type objectType)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### Deserialize
`public object? Deserialize(JsonReader reader, Type? objectType)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### Serialize
`public void Serialize(TextWriter textWriter, object? value)`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### Serialize
`public void Serialize(JsonWriter jsonWriter, object? value, Type? objectType)`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### Serialize
`public void Serialize(TextWriter textWriter, object? value, Type objectType)`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### Serialize
`public void Serialize(JsonWriter jsonWriter, object? value)`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

## 使用示例

```csharp
JsonSerializer.Create();
```

## 参见

- [完整类目录](../catalog)
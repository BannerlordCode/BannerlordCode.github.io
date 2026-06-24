<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonSerializerSettings`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSerializerSettings

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public class JsonSerializerSettings`
**Base:** 无
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonSerializerSettings.cs`

## 概述

`JsonSerializerSettings` 位于 `Newtonsoft.Json`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ReferenceLoopHandling` | `public ReferenceLoopHandling ReferenceLoopHandling { get; set; }` |
| `MissingMemberHandling` | `public MissingMemberHandling MissingMemberHandling { get; set; }` |
| `ObjectCreationHandling` | `public ObjectCreationHandling ObjectCreationHandling { get; set; }` |
| `NullValueHandling` | `public NullValueHandling NullValueHandling { get; set; }` |
| `DefaultValueHandling` | `public DefaultValueHandling DefaultValueHandling { get; set; }` |
| `Converters` | `public IList<JsonConverter> Converters { get; set; }` |
| `PreserveReferencesHandling` | `public PreserveReferencesHandling PreserveReferencesHandling { get; set; }` |
| `TypeNameHandling` | `public TypeNameHandling TypeNameHandling { get; set; }` |
| `MetadataPropertyHandling` | `public MetadataPropertyHandling MetadataPropertyHandling { get; set; }` |
| `TypeNameAssemblyFormat` | `public FormatterAssemblyStyle TypeNameAssemblyFormat { get; set; }` |
| `TypeNameAssemblyFormatHandling` | `public TypeNameAssemblyFormatHandling TypeNameAssemblyFormatHandling { get; set; }` |
| `ConstructorHandling` | `public ConstructorHandling ConstructorHandling { get; set; }` |
| `ContractResolver` | `public IContractResolver? ContractResolver { get; set; }` |
| `EqualityComparer` | `public IEqualityComparer? EqualityComparer { get; set; }` |
| `ReferenceResolver` | `public IReferenceResolver? ReferenceResolver { get; set; }` |
| `ReferenceResolverProvider` | `public Func<IReferenceResolver?>? ReferenceResolverProvider { get; set; }` |
| `TraceWriter` | `public ITraceWriter? TraceWriter { get; set; }` |
| `Binder` | `public SerializationBinder? Binder { get; }` |
| `SerializationBinder` | `public ISerializationBinder? SerializationBinder { get; set; }` |
| `Error` | `public EventHandler<ErrorEventArgs>? Error { get; set; }` |
| `Context` | `public StreamingContext Context { get; set; }` |
| `DateFormatString` | `public string DateFormatString { get; set; }` |
| `MaxDepth` | `public int? MaxDepth { get; set; }` |
| `Formatting` | `public Formatting Formatting { get; set; }` |
| `DateFormatHandling` | `public DateFormatHandling DateFormatHandling { get; set; }` |
| `DateTimeZoneHandling` | `public DateTimeZoneHandling DateTimeZoneHandling { get; set; }` |
| `DateParseHandling` | `public DateParseHandling DateParseHandling { get; set; }` |
| `FloatFormatHandling` | `public FloatFormatHandling FloatFormatHandling { get; set; }` |
| `FloatParseHandling` | `public FloatParseHandling FloatParseHandling { get; set; }` |
| `StringEscapeHandling` | `public StringEscapeHandling StringEscapeHandling { get; set; }` |
| `Culture` | `public CultureInfo Culture { get; set; }` |
| `CheckAdditionalContent` | `public bool CheckAdditionalContent { get; set; }` |

## 使用示例

```csharp
var example = new JsonSerializerSettings();
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonSerializerSettings`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSerializerSettings

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public class JsonSerializerSettings`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonSerializerSettings.cs`

## Overview

`JsonSerializerSettings` lives in `Newtonsoft.Json` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Usage Example

```csharp
var example = new JsonSerializerSettings();
```

## See Also

- [Complete Class Catalog](../catalog)
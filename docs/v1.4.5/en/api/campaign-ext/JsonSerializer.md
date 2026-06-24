<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonSerializer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSerializer

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public class JsonSerializer`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonSerializer.cs`

## Overview

`JsonSerializer` lives in `Newtonsoft.Json` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### Create
`public static JsonSerializer Create()`

**Purpose:** Creates a new `create` instance or object.

### Create
`public static JsonSerializer Create(JsonSerializerSettings? settings)`

**Purpose:** Creates a new `create` instance or object.

### CreateDefault
`public static JsonSerializer CreateDefault()`

**Purpose:** Creates a new `default` instance or object.

### CreateDefault
`public static JsonSerializer CreateDefault(JsonSerializerSettings? settings)`

**Purpose:** Creates a new `default` instance or object.

### Populate
`public void Populate(TextReader reader, object target)`

**Purpose:** Handles logic related to `populate`.

### Populate
`public void Populate(JsonReader reader, object target)`

**Purpose:** Handles logic related to `populate`.

### Deserialize
`public object? Deserialize(JsonReader reader)`

**Purpose:** Handles logic related to `deserialize`.

### Deserialize
`public object? Deserialize(TextReader reader, Type objectType)`

**Purpose:** Handles logic related to `deserialize`.

### Deserialize
`public object? Deserialize(JsonReader reader, Type? objectType)`

**Purpose:** Handles logic related to `deserialize`.

### Serialize
`public void Serialize(TextWriter textWriter, object? value)`

**Purpose:** Handles logic related to `serialize`.

### Serialize
`public void Serialize(JsonWriter jsonWriter, object? value, Type? objectType)`

**Purpose:** Handles logic related to `serialize`.

### Serialize
`public void Serialize(TextWriter textWriter, object? value, Type objectType)`

**Purpose:** Handles logic related to `serialize`.

### Serialize
`public void Serialize(JsonWriter jsonWriter, object? value)`

**Purpose:** Handles logic related to `serialize`.

## Usage Example

```csharp
JsonSerializer.Create();
```

## See Also

- [Complete Class Catalog](../catalog)
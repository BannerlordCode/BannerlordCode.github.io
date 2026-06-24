<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonSchema`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSchema

**Namespace:** Newtonsoft.Json.Schema
**Module:** Newtonsoft.Json
**Type:** `public class JsonSchema`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Schema/JsonSchema.cs`

## Overview

`JsonSchema` lives in `Newtonsoft.Json.Schema` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Schema` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### Read
`public static JsonSchema Read(JsonReader reader)`

**Purpose:** Handles logic related to `read`.

### Read
`public static JsonSchema Read(JsonReader reader, JsonSchemaResolver resolver)`

**Purpose:** Handles logic related to `read`.

### Parse
`public static JsonSchema Parse(string json)`

**Purpose:** Handles logic related to `parse`.

### Parse
`public static JsonSchema Parse(string json, JsonSchemaResolver resolver)`

**Purpose:** Handles logic related to `parse`.

### WriteTo
`public void WriteTo(JsonWriter writer)`

**Purpose:** Handles logic related to `write to`.

### WriteTo
`public void WriteTo(JsonWriter writer, JsonSchemaResolver resolver)`

**Purpose:** Handles logic related to `write to`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
JsonSchema.Read(reader);
```

## See Also

- [Complete Class Catalog](../catalog)
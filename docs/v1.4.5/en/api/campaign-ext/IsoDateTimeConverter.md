<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IsoDateTimeConverter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IsoDateTimeConverter

**Namespace:** Newtonsoft.Json.Converters
**Module:** Newtonsoft.Json
**Type:** `public class IsoDateTimeConverter : DateTimeConverterBase`
**Base:** `DateTimeConverterBase`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Converters/IsoDateTimeConverter.cs`

## Overview

`IsoDateTimeConverter` lives in `Newtonsoft.Json.Converters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Converters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DateTimeStyles` | `public DateTimeStyles DateTimeStyles { get; set; }` |
| `DateTimeFormat` | `public string? DateTimeFormat { get; set; }` |
| `Culture` | `public CultureInfo Culture { get; set; }` |

## Key Methods

### WriteJson
`public override void WriteJson(JsonWriter writer, object? value, JsonSerializer serializer)`

**Purpose:** Handles logic related to `write json`.

### ReadJson
`public override object? ReadJson(JsonReader reader, Type objectType, object? existingValue, JsonSerializer serializer)`

**Purpose:** Handles logic related to `read json`.

## Usage Example

```csharp
var value = new IsoDateTimeConverter();
value.WriteJson(writer, value, serializer);
```

## See Also

- [Complete Class Catalog](../catalog)
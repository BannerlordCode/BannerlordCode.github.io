<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomCreationConverter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomCreationConverter

**Namespace:** Newtonsoft.Json.Converters
**Module:** Newtonsoft.Json
**Type:** `public abstract class CustomCreationConverter<T> : JsonConverter`
**Base:** `JsonConverter`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Converters/CustomCreationConverter.cs`

## Overview

`CustomCreationConverter` lives in `Newtonsoft.Json.Converters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Converters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### WriteJson
`public override void WriteJson(JsonWriter writer, object? value, JsonSerializer serializer)`

**Purpose:** Handles logic related to `write json`.

### ReadJson
`public override object? ReadJson(JsonReader reader, Type objectType, object? existingValue, JsonSerializer serializer)`

**Purpose:** Handles logic related to `read json`.

### Create
`public abstract T Create(Type objectType)`

**Purpose:** Creates a new `create` instance or object.

### CanConvert
`public override bool CanConvert(Type objectType)`

**Purpose:** Checks whether the current object can `convert`.

## Usage Example

```csharp
var implementation = new CustomCustomCreationConverter();
```

## See Also

- [Complete Class Catalog](../catalog)
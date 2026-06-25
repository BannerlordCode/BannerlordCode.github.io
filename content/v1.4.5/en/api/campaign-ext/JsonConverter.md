---
title: "JsonConverter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonConverter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonConverter

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public abstract class JsonConverter`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonConverter.cs`

## Overview

`JsonConverter` lives in `Newtonsoft.Json` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### WriteJson
`public abstract void WriteJson(JsonWriter writer, object? value, JsonSerializer serializer)`

**Purpose:** Handles logic related to `write json`.

### ReadJson
`public abstract object? ReadJson(JsonReader reader, Type objectType, object? existingValue, JsonSerializer serializer)`

**Purpose:** Handles logic related to `read json`.

### CanConvert
`public abstract bool CanConvert(Type objectType)`

**Purpose:** Checks whether the current object can `convert`.

### WriteJson
`public sealed override void WriteJson(JsonWriter writer, object? value, JsonSerializer serializer)`

**Purpose:** Handles logic related to `write json`.

### WriteJson
`public abstract void WriteJson(JsonWriter writer, T? value, JsonSerializer serializer)`

**Purpose:** Handles logic related to `write json`.

### ReadJson
`public sealed override object? ReadJson(JsonReader reader, Type objectType, object? existingValue, JsonSerializer serializer)`

**Purpose:** Handles logic related to `read json`.

### ReadJson
`public abstract T? ReadJson(JsonReader reader, Type objectType, T? existingValue, bool hasExistingValue, JsonSerializer serializer)`

**Purpose:** Handles logic related to `read json`.

### CanConvert
`public sealed override bool CanConvert(Type objectType)`

**Purpose:** Checks whether the current object can `convert`.

## Usage Example

```csharp
var implementation = new CustomJsonConverter();
```

## See Also

- [Complete Class Catalog](../catalog)
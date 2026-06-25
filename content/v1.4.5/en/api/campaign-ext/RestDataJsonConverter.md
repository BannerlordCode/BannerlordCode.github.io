---
title: "RestDataJsonConverter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RestDataJsonConverter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RestDataJsonConverter

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public class RestDataJsonConverter : JsonConverter<RestData>`
**Base:** `JsonConverter<RestData>`
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/RestDataJsonConverter.cs`

## Overview

`RestDataJsonConverter` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ReadJson
`public override RestData ReadJson(JsonReader reader, Type objectType, RestData existingValue, bool hasExistingValue, JsonSerializer serializer)`

**Purpose:** Handles logic related to `read json`.

### WriteJson
`public override void WriteJson(JsonWriter writer, RestData value, JsonSerializer serializer)`

**Purpose:** Handles logic related to `write json`.

## Usage Example

```csharp
var value = new RestDataJsonConverter();
value.ReadJson(reader, objectType, existingValue, false, serializer);
```

## See Also

- [Complete Class Catalog](../catalog)
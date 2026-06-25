---
title: "RestDataJsonConverter"
description: "Auto-generated class reference for RestDataJsonConverter."
---
# RestDataJsonConverter

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public class RestDataJsonConverter : JsonConverter<RestData>`
**Base:** `JsonConverter<RestData>`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/RestDataJsonConverter.cs`

## Overview

`RestDataJsonConverter` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ReadJson
`public override RestData ReadJson(JsonReader reader, Type objectType, RestData existingValue, bool hasExistingValue, JsonSerializer serializer)`

**Purpose:** **Purpose:** Reads the data or state of json.

```csharp
// Obtain an instance of RestDataJsonConverter from the subsystem API first
RestDataJsonConverter restDataJsonConverter = ...;
var result = restDataJsonConverter.ReadJson(reader, objectType, existingValue, false, serializer);
```

### WriteJson
`public override void WriteJson(JsonWriter writer, RestData value, JsonSerializer serializer)`

**Purpose:** **Purpose:** Writes json to the target location.

```csharp
// Obtain an instance of RestDataJsonConverter from the subsystem API first
RestDataJsonConverter restDataJsonConverter = ...;
restDataJsonConverter.WriteJson(writer, value, serializer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RestDataJsonConverter restDataJsonConverter = ...;
restDataJsonConverter.ReadJson(reader, objectType, existingValue, false, serializer);
```

## See Also

- [Area Index](../)
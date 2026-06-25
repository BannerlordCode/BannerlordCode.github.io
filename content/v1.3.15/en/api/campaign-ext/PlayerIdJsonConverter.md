---
title: "PlayerIdJsonConverter"
description: "Auto-generated class reference for PlayerIdJsonConverter."
---
# PlayerIdJsonConverter

**Namespace:** TaleWorlds.PlayerServices
**Module:** TaleWorlds.PlayerServices
**Type:** `public class PlayerIdJsonConverter : JsonConverter`
**Base:** `JsonConverter`
**File:** `TaleWorlds.PlayerServices/PlayerServices/PlayerIdJsonConverter.cs`

## Overview

`PlayerIdJsonConverter` lives in `TaleWorlds.PlayerServices` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CanWrite` | `public override bool CanWrite { get; }` |

## Key Methods

### CanConvert
`public override bool CanConvert(Type objectType)`

**Purpose:** Checks whether the this instance meets the preconditions for convert.

```csharp
// Obtain an instance of PlayerIdJsonConverter from the subsystem API first
PlayerIdJsonConverter playerIdJsonConverter = ...;
var result = playerIdJsonConverter.CanConvert(objectType);
```

### ReadJson
`public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)`

**Purpose:** Reads the data or state of json.

```csharp
// Obtain an instance of PlayerIdJsonConverter from the subsystem API first
PlayerIdJsonConverter playerIdJsonConverter = ...;
var result = playerIdJsonConverter.ReadJson(reader, objectType, existingValue, serializer);
```

### WriteJson
`public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)`

**Purpose:** Writes json to the target location.

```csharp
// Obtain an instance of PlayerIdJsonConverter from the subsystem API first
PlayerIdJsonConverter playerIdJsonConverter = ...;
playerIdJsonConverter.WriteJson(writer, value, serializer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerIdJsonConverter playerIdJsonConverter = ...;
playerIdJsonConverter.CanConvert(objectType);
```

## See Also

- [Area Index](../)
---
title: "PlayerStatsBaseJsonConverter"
description: "Auto-generated class reference for PlayerStatsBaseJsonConverter."
---
# PlayerStatsBaseJsonConverter

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsBaseJsonConverter : JsonConverter`
**Base:** `JsonConverter`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsBaseJsonConverter.cs`

## Overview

`PlayerStatsBaseJsonConverter` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CanWrite` | `public override bool CanWrite { get; }` |

## Key Methods

### CanConvert
`public override bool CanConvert(Type objectType)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for convert.

```csharp
// Obtain an instance of PlayerStatsBaseJsonConverter from the subsystem API first
PlayerStatsBaseJsonConverter playerStatsBaseJsonConverter = ...;
var result = playerStatsBaseJsonConverter.CanConvert(objectType);
```

### ReadJson
`public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)`

**Purpose:** **Purpose:** Reads the data or state of json.

```csharp
// Obtain an instance of PlayerStatsBaseJsonConverter from the subsystem API first
PlayerStatsBaseJsonConverter playerStatsBaseJsonConverter = ...;
var result = playerStatsBaseJsonConverter.ReadJson(reader, objectType, existingValue, serializer);
```

### WriteJson
`public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)`

**Purpose:** **Purpose:** Writes json to the target location.

```csharp
// Obtain an instance of PlayerStatsBaseJsonConverter from the subsystem API first
PlayerStatsBaseJsonConverter playerStatsBaseJsonConverter = ...;
playerStatsBaseJsonConverter.WriteJson(writer, value, serializer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerStatsBaseJsonConverter playerStatsBaseJsonConverter = ...;
playerStatsBaseJsonConverter.CanConvert(objectType);
```

## See Also

- [Area Index](../)
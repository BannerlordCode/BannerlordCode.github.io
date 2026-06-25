---
title: "LegacyGameDataDeserializer"
description: "Auto-generated class reference for LegacyGameDataDeserializer."
---
# LegacyGameDataDeserializer

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public static class LegacyGameDataDeserializer`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/LegacyGameDataDeserializer.cs`

## Overview

`LegacyGameDataDeserializer` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Deserialize
`public static GameData Deserialize(Stream stream)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Static call; no instance required
LegacyGameDataDeserializer.Deserialize(stream);
```

## Usage Example

```csharp
LegacyGameDataDeserializer.Deserialize(stream);
```

## See Also

- [Area Index](../)
---
title: "MPOnSpawnPerkEffect"
description: "Auto-generated class reference for MPOnSpawnPerkEffect."
---
# MPOnSpawnPerkEffect

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPOnSpawnPerkEffect : MPOnSpawnPerkEffectBase`
**Base:** `MPOnSpawnPerkEffectBase`
**File:** `TaleWorlds.MountAndBlade/MPOnSpawnPerkEffect.cs`

## Overview

`MPOnSpawnPerkEffect` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateFrom
`public static MPOnSpawnPerkEffect CreateFrom(XmlNode node)`

**Purpose:** **Purpose:** Constructs a new from entity and returns it to the caller.

```csharp
// Static call; no instance required
MPOnSpawnPerkEffect.CreateFrom(node);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MPOnSpawnPerkEffect instance = ...;
```

## See Also

- [Area Index](../)
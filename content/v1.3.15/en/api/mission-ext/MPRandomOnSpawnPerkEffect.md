---
title: "MPRandomOnSpawnPerkEffect"
description: "Auto-generated class reference for MPRandomOnSpawnPerkEffect."
---
# MPRandomOnSpawnPerkEffect

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPRandomOnSpawnPerkEffect : MPOnSpawnPerkEffectBase`
**Base:** `MPOnSpawnPerkEffectBase`
**File:** `TaleWorlds.MountAndBlade/MPRandomOnSpawnPerkEffect.cs`

## Overview

`MPRandomOnSpawnPerkEffect` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateFrom
`public static MPRandomOnSpawnPerkEffect CreateFrom(XmlNode node)`

**Purpose:** Constructs a new from entity and returns it to the caller.

```csharp
// Static call; no instance required
MPRandomOnSpawnPerkEffect.CreateFrom(node);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MPRandomOnSpawnPerkEffect instance = ...;
```

## See Also

- [Area Index](../)
---
title: "RandomParticleSpawner"
description: "Auto-generated class reference for RandomParticleSpawner."
---
# RandomParticleSpawner

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RandomParticleSpawner : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/RandomParticleSpawner.cs`

## Overview

`RandomParticleSpawner` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of RandomParticleSpawner from the subsystem API first
RandomParticleSpawner randomParticleSpawner = ...;
var result = randomParticleSpawner.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RandomParticleSpawner randomParticleSpawner = ...;
randomParticleSpawner.GetTickRequirement();
```

## See Also

- [Area Index](../)
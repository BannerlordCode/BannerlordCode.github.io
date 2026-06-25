---
title: "AnimalSpawnSettings"
description: "Auto-generated class reference for AnimalSpawnSettings."
---
# AnimalSpawnSettings

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AnimalSpawnSettings : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Objects/AnimalSpawnSettings.cs`

## Overview

`AnimalSpawnSettings` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckAndSetAnimalAgentFlags
`public static void CheckAndSetAnimalAgentFlags(GameEntity spawnEntity, Agent animalAgent)`

**Purpose:** **Purpose:** Verifies whether and set animal agent flags holds true for the this instance.

```csharp
// Static call; no instance required
AnimalSpawnSettings.CheckAndSetAnimalAgentFlags(spawnEntity, animalAgent);
```

## Usage Example

```csharp
AnimalSpawnSettings.CheckAndSetAnimalAgentFlags(spawnEntity, animalAgent);
```

## See Also

- [Area Index](../)
---
title: "FormationSceneSpawnEntry"
description: "Auto-generated class reference for FormationSceneSpawnEntry."
---
# FormationSceneSpawnEntry

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormationSceneSpawnEntry`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationSceneSpawnEntry.cs`

## Overview

`FormationSceneSpawnEntry` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FormationSceneSpawnEntry
`public struct FormationSceneSpawnEntry(FormationClass formationClass, GameEntity spawnEntity, GameEntity reinforcementSpawnEntity)`

**Purpose:** Formats `ion scene spawn entry` into a string suitable for display or storage.

```csharp
// Obtain an instance of FormationSceneSpawnEntry from the subsystem API first
FormationSceneSpawnEntry formationSceneSpawnEntry = ...;
var result = formationSceneSpawnEntry.FormationSceneSpawnEntry(formationClass, spawnEntity, reinforcementSpawnEntity);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FormationSceneSpawnEntry formationSceneSpawnEntry = ...;
formationSceneSpawnEntry.FormationSceneSpawnEntry(formationClass, spawnEntity, reinforcementSpawnEntity);
```

## See Also

- [Area Index](../)
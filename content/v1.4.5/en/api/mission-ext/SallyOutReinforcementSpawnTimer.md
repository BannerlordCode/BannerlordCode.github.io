---
title: "SallyOutReinforcementSpawnTimer"
description: "Auto-generated class reference for SallyOutReinforcementSpawnTimer."
---
# SallyOutReinforcementSpawnTimer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutReinforcementSpawnTimer : ICustomReinforcementSpawnTimer`
**Base:** `ICustomReinforcementSpawnTimer`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SallyOutReinforcementSpawnTimer.cs`

## Overview

`SallyOutReinforcementSpawnTimer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Check
`public bool Check(BattleSideEnum side)`

**Purpose:** Verifies whether the current object meets the specified condition.

```csharp
// Obtain an instance of SallyOutReinforcementSpawnTimer from the subsystem API first
SallyOutReinforcementSpawnTimer sallyOutReinforcementSpawnTimer = ...;
var result = sallyOutReinforcementSpawnTimer.Check(side);
```

### ResetTimer
`public void ResetTimer(BattleSideEnum side)`

**Purpose:** Returns `timer` to its default or initial condition.

```csharp
// Obtain an instance of SallyOutReinforcementSpawnTimer from the subsystem API first
SallyOutReinforcementSpawnTimer sallyOutReinforcementSpawnTimer = ...;
sallyOutReinforcementSpawnTimer.ResetTimer(side);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SallyOutReinforcementSpawnTimer sallyOutReinforcementSpawnTimer = ...;
sallyOutReinforcementSpawnTimer.Check(side);
```

## See Also

- [Area Index](../)
---
title: "TeamQuerySystem"
description: "Auto-generated class reference for TeamQuerySystem."
---
# TeamQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamQuerySystem`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamQuerySystem.cs`

## Overview

`TeamQuerySystem` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattlePowerLogic` | `public IBattlePowerCalculationLogic BattlePowerLogic { get; }` |
| `CasualtyHandler` | `public CasualtyHandler CasualtyHandler { get; }` |
| `DeathCount` | `public int DeathCount { get; }` |
| `DeathByRangedCount` | `public int DeathByRangedCount { get; }` |

## Key Methods

### Expire
`public void Expire()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.Expire();
```

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.ExpireAfterUnitAddRemove();
```

### RegisterDeath
`public void RegisterDeath()`

**Purpose:** Registers `death` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.RegisterDeath();
```

### RegisterDeathByRanged
`public void RegisterDeathByRanged()`

**Purpose:** Registers `death by ranged` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.RegisterDeathByRanged();
```

### GetLocalAllyPower
`public float GetLocalAllyPower(Vec2 target)`

**Purpose:** Reads and returns the `local ally power` value held by the current object.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
var result = teamQuerySystem.GetLocalAllyPower(target);
```

### GetLocalEnemyPower
`public float GetLocalEnemyPower(Vec2 target)`

**Purpose:** Reads and returns the `local enemy power` value held by the current object.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
var result = teamQuerySystem.GetLocalEnemyPower(target);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.Expire();
```

## See Also

- [Area Index](../)
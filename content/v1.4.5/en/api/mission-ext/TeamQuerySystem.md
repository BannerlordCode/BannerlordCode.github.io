---
title: "TeamQuerySystem"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamQuerySystem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TeamQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamQuerySystem`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamQuerySystem.cs`

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

**Purpose:** Handles logic related to `expire`.

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**Purpose:** Handles logic related to `expire after unit add remove`.

### RegisterDeath
`public void RegisterDeath()`

**Purpose:** Handles logic related to `register death`.

### RegisterDeathByRanged
`public void RegisterDeathByRanged()`

**Purpose:** Handles logic related to `register death by ranged`.

### GetLocalAllyPower
`public float GetLocalAllyPower(Vec2 target)`

**Purpose:** Gets the current value of `local ally power`.

### GetLocalEnemyPower
`public float GetLocalEnemyPower(Vec2 target)`

**Purpose:** Gets the current value of `local enemy power`.

## Usage Example

```csharp
var value = new TeamQuerySystem();
value.Expire();
```

## See Also

- [Complete Class Catalog](../catalog)
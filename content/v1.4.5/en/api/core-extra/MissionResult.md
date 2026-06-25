---
title: "MissionResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionResult`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionResult

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MissionResult`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MissionResult.cs`

## Overview

`MissionResult` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleState` | `public BattleState BattleState { get; }` |
| `BattleResolved` | `public bool BattleResolved { get; }` |
| `PlayerVictory` | `public bool PlayerVictory { get; }` |
| `PlayerDefeated` | `public bool PlayerDefeated { get; }` |
| `EnemyRetreated` | `public bool EnemyRetreated { get; }` |

## Key Methods

### CreateSuccessful
`public static MissionResult CreateSuccessful(IMission mission, bool enemyRetreated = false)`

**Purpose:** Creates a new `successful` instance or object.

### CreateDefeated
`public static MissionResult CreateDefeated(IMission mission)`

**Purpose:** Creates a new `defeated` instance or object.

### CreateDefenderPushedBack
`public static MissionResult CreateDefenderPushedBack()`

**Purpose:** Creates a new `defender pushed back` instance or object.

## Usage Example

```csharp
MissionResult.CreateSuccessful(mission, false);
```

## See Also

- [Complete Class Catalog](../catalog)
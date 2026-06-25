---
title: "RangedSiegeEngine"
description: "Auto-generated class reference for RangedSiegeEngine."
---
# RangedSiegeEngine

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RangedSiegeEngine`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEvent.cs`

## Overview

`RangedSiegeEngine` lives in `TaleWorlds.CampaignSystem.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NextTimeEngineCanBombard` | `public CampaignTime NextTimeEngineCanBombard { get; }` |
| `AlreadyFired` | `public bool AlreadyFired { get; }` |
| `CurrentTargetType` | `public SiegeBombardTargets CurrentTargetType { get; }` |
| `CurrentTargetIndex` | `public int CurrentTargetIndex { get; }` |
| `PreviousDamagedTargetType` | `public SiegeBombardTargets PreviousDamagedTargetType { get; }` |
| `PreviousTargetIndex` | `public int PreviousTargetIndex { get; }` |
| `LastBombardTime` | `public CampaignTime LastBombardTime { get; }` |
| `NextProjectileCollisionTime` | `public CampaignTime NextProjectileCollisionTime { get; }` |

## Key Methods

### Hold
`public void Hold()`

**Purpose:** **Purpose:** Executes the Hold logic.

```csharp
// Obtain an instance of RangedSiegeEngine from the subsystem API first
RangedSiegeEngine rangedSiegeEngine = ...;
rangedSiegeEngine.Hold();
```

### Reload
`public void Reload()`

**Purpose:** **Purpose:** Executes the Reload logic.

```csharp
// Obtain an instance of RangedSiegeEngine from the subsystem API first
RangedSiegeEngine rangedSiegeEngine = ...;
rangedSiegeEngine.Reload();
```

### OnFireDecisionTaken
`public void OnFireDecisionTaken(SiegeEvent siegeEvent, BattleSideEnum battleSide, int targetSlotIndex, SiegeBombardTargets targetType)`

**Purpose:** **Purpose:** Invoked when the fire decision taken event is raised.

```csharp
// Obtain an instance of RangedSiegeEngine from the subsystem API first
RangedSiegeEngine rangedSiegeEngine = ...;
rangedSiegeEngine.OnFireDecisionTaken(siegeEvent, battleSide, 0, targetType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RangedSiegeEngine rangedSiegeEngine = ...;
rangedSiegeEngine.Hold();
```

## See Also

- [Area Index](../)
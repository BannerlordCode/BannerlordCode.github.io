---
title: "SiegeEngineConstructionProgress"
description: "Auto-generated class reference for SiegeEngineConstructionProgress."
---
# SiegeEngineConstructionProgress

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEngineConstructionProgress`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEvent.cs`

## Overview

`SiegeEngineConstructionProgress` lives in `TaleWorlds.CampaignSystem.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |
| `Hitpoints` | `public float Hitpoints { get; }` |
| `Progress` | `public float Progress { get; }` |
| `RangedSiegeEngine` | `public RangedSiegeEngine RangedSiegeEngine { get; }` |
| `RedeploymentProgress` | `public float RedeploymentProgress { get; }` |
| `MaxHitPoints` | `public float MaxHitPoints { get; }` |

## Key Methods

### SetRedeploymentProgress
`public void SetRedeploymentProgress(float redeploymentProgress)`

**Purpose:** **Purpose:** Assigns a new value to redeployment progress and updates the object's internal state.

```csharp
// Obtain an instance of SiegeEngineConstructionProgress from the subsystem API first
SiegeEngineConstructionProgress siegeEngineConstructionProgress = ...;
siegeEngineConstructionProgress.SetRedeploymentProgress(0);
```

### SetHitpoints
`public void SetHitpoints(float hitPoints)`

**Purpose:** **Purpose:** Assigns a new value to hitpoints and updates the object's internal state.

```csharp
// Obtain an instance of SiegeEngineConstructionProgress from the subsystem API first
SiegeEngineConstructionProgress siegeEngineConstructionProgress = ...;
siegeEngineConstructionProgress.SetHitpoints(0);
```

### SetProgress
`public void SetProgress(float progress)`

**Purpose:** **Purpose:** Assigns a new value to progress and updates the object's internal state.

```csharp
// Obtain an instance of SiegeEngineConstructionProgress from the subsystem API first
SiegeEngineConstructionProgress siegeEngineConstructionProgress = ...;
siegeEngineConstructionProgress.SetProgress(0);
```

### SetRangedSiegeEngine
`public void SetRangedSiegeEngine(RangedSiegeEngine rangedSiegeEngine)`

**Purpose:** **Purpose:** Assigns a new value to ranged siege engine and updates the object's internal state.

```csharp
// Obtain an instance of SiegeEngineConstructionProgress from the subsystem API first
SiegeEngineConstructionProgress siegeEngineConstructionProgress = ...;
siegeEngineConstructionProgress.SetRangedSiegeEngine(rangedSiegeEngine);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeEngineConstructionProgress siegeEngineConstructionProgress = ...;
siegeEngineConstructionProgress.SetRedeploymentProgress(0);
```

## See Also

- [Area Index](../)
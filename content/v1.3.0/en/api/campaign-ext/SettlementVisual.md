---
title: "SettlementVisual"
description: "Auto-generated class reference for SettlementVisual."
---
# SettlementVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class SettlementVisual : MapEntityVisual<PartyBase>`
**Base:** `MapEntityVisual<PartyBase>`
**File:** `SandBox.View/Map/Visuals/SettlementVisual.cs`

## Overview

`SettlementVisual` lives in `SandBox.View.Map.Visuals` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Visuals` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AttachedTo` | `public override MapEntityVisual AttachedTo { get; }` |
| `InteractionPositionForPlayer` | `public override CampaignVec2 InteractionPositionForPlayer { get; }` |
| `StrategicEntity` | `public GameEntity StrategicEntity { get; }` |

## Key Methods

### IsEnemyOf
`public override bool IsEnemyOf(IFaction faction)`

**Purpose:** Determines whether the this instance is in the enemy of state or condition.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
var result = settlementVisual.IsEnemyOf(faction);
```

### IsAllyOf
`public override bool IsAllyOf(IFaction faction)`

**Purpose:** Determines whether the this instance is in the ally of state or condition.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
var result = settlementVisual.IsAllyOf(faction);
```

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**Purpose:** Reads and returns the visual position value held by the this instance.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetVisualPosition();
```

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**Purpose:** Determines whether the this instance is in the visible or fading out state or condition.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
var result = settlementVisual.IsVisibleOrFadingOut();
```

### OnHover
`public override void OnHover()`

**Purpose:** Invoked when the hover event is raised.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
settlementVisual.OnHover();
```

### OnTrackAction
`public override void OnTrackAction()`

**Purpose:** Invoked when the track action event is raised.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
settlementVisual.OnTrackAction();
```

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**Purpose:** Invoked when the map click event is raised.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
var result = settlementVisual.OnMapClick(false);
```

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**Purpose:** Invoked when the open encyclopedia event is raised.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
settlementVisual.OnOpenEncyclopedia();
```

### ReleaseResources
`public override void ReleaseResources()`

**Purpose:** Executes the ReleaseResources logic.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
settlementVisual.ReleaseResources();
```

### GetBannerPositionForParty
`public Vec3 GetBannerPositionForParty(MobileParty mobileParty)`

**Purpose:** Reads and returns the banner position for party value held by the this instance.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetBannerPositionForParty(mobileParty);
```

### GetAttackerTowerSiegeEngineFrames
`public MatrixFrame GetAttackerTowerSiegeEngineFrames()`

**Purpose:** Reads and returns the attacker tower siege engine frames value held by the this instance.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetAttackerTowerSiegeEngineFrames();
```

### GetAttackerBatteringRamSiegeEngineFrames
`public MatrixFrame GetAttackerBatteringRamSiegeEngineFrames()`

**Purpose:** Reads and returns the attacker battering ram siege engine frames value held by the this instance.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetAttackerBatteringRamSiegeEngineFrames();
```

### GetAttackerRangedSiegeEngineFrames
`public MatrixFrame GetAttackerRangedSiegeEngineFrames()`

**Purpose:** Reads and returns the attacker ranged siege engine frames value held by the this instance.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetAttackerRangedSiegeEngineFrames();
```

### GetDefenderRangedSiegeEngineFrames
`public MatrixFrame GetDefenderRangedSiegeEngineFrames()`

**Purpose:** Reads and returns the defender ranged siege engine frames value held by the this instance.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetDefenderRangedSiegeEngineFrames();
```

### GetBreachableWallFrames
`public MatrixFrame GetBreachableWallFrames()`

**Purpose:** Reads and returns the breachable wall frames value held by the this instance.

```csharp
// Obtain an instance of SettlementVisual from the subsystem API first
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetBreachableWallFrames();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementVisual settlementVisual = ...;
settlementVisual.IsEnemyOf(faction);
```

## See Also

- [Area Index](../)
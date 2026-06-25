---
title: "SettlementVisual"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementVisual`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `is enemy of`.

### IsAllyOf
`public override bool IsAllyOf(IFaction faction)`

**Purpose:** Handles logic related to `is ally of`.

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**Purpose:** Gets the current value of `visual position`.

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**Purpose:** Handles logic related to `is visible or fading out`.

### OnHover
`public override void OnHover()`

**Purpose:** Called when the `hover` event is raised.

### OnTrackAction
`public override void OnTrackAction()`

**Purpose:** Called when the `track action` event is raised.

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**Purpose:** Called when the `map click` event is raised.

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**Purpose:** Called when the `open encyclopedia` event is raised.

### ReleaseResources
`public override void ReleaseResources()`

**Purpose:** Handles logic related to `release resources`.

### GetBannerPositionForParty
`public Vec3 GetBannerPositionForParty(MobileParty mobileParty)`

**Purpose:** Gets the current value of `banner position for party`.

### GetAttackerTowerSiegeEngineFrames
`public MatrixFrame GetAttackerTowerSiegeEngineFrames()`

**Purpose:** Gets the current value of `attacker tower siege engine frames`.

### GetAttackerBatteringRamSiegeEngineFrames
`public MatrixFrame GetAttackerBatteringRamSiegeEngineFrames()`

**Purpose:** Gets the current value of `attacker battering ram siege engine frames`.

### GetAttackerRangedSiegeEngineFrames
`public MatrixFrame GetAttackerRangedSiegeEngineFrames()`

**Purpose:** Gets the current value of `attacker ranged siege engine frames`.

### GetDefenderRangedSiegeEngineFrames
`public MatrixFrame GetDefenderRangedSiegeEngineFrames()`

**Purpose:** Gets the current value of `defender ranged siege engine frames`.

### GetBreachableWallFrames
`public MatrixFrame GetBreachableWallFrames()`

**Purpose:** Gets the current value of `breachable wall frames`.

## Usage Example

```csharp
var value = new SettlementVisual();
value.IsEnemyOf(faction);
```

## See Also

- [Complete Class Catalog](../catalog)
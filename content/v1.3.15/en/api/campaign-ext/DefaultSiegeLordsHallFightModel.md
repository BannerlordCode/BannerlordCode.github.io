---
title: "DefaultSiegeLordsHallFightModel"
description: "Auto-generated class reference for DefaultSiegeLordsHallFightModel."
---
# DefaultSiegeLordsHallFightModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeLordsHallFightModel : SiegeLordsHallFightModel`
**Base:** `SiegeLordsHallFightModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs`

## Overview

`DefaultSiegeLordsHallFightModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSiegeLordsHallFightModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AreaLostRatio` | `public override float AreaLostRatio { get; }` |
| `AttackerDefenderTroopCountRatio` | `public override float AttackerDefenderTroopCountRatio { get; }` |
| `DefenderMaxArcherRatio` | `public override float DefenderMaxArcherRatio { get; }` |
| `MaxDefenderSideTroopCount` | `public override int MaxDefenderSideTroopCount { get; }` |
| `MaxDefenderArcherCount` | `public override int MaxDefenderArcherCount { get; }` |
| `MaxAttackerSideTroopCount` | `public override int MaxAttackerSideTroopCount { get; }` |
| `DefenderTroopNumberForSuccessfulPullBack` | `public override int DefenderTroopNumberForSuccessfulPullBack { get; }` |

## Key Methods

### GetPriorityListForLordsHallFightMission
`public override FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount)`

**Purpose:** Reads and returns the `priority list for lords hall fight mission` value held by the current object.

```csharp
// Obtain an instance of DefaultSiegeLordsHallFightModel from the subsystem API first
DefaultSiegeLordsHallFightModel defaultSiegeLordsHallFightModel = ...;
var result = defaultSiegeLordsHallFightModel.GetPriorityListForLordsHallFightMission(playerMapEvent, side, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSiegeLordsHallFightModel>(new MyDefaultSiegeLordsHallFightModel());
```

## See Also

- [Area Index](../)
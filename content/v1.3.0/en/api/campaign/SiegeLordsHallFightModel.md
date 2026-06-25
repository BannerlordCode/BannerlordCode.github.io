---
title: "SiegeLordsHallFightModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeLordsHallFightModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeLordsHallFightModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeLordsHallFightModel : MBGameModel<SiegeLordsHallFightModel>`
**Base:** `MBGameModel<SiegeLordsHallFightModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs`

## Overview

`SiegeLordsHallFightModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SiegeLordsHallFightModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AreaLostRatio` | `public abstract float AreaLostRatio { get; }` |
| `AttackerDefenderTroopCountRatio` | `public abstract float AttackerDefenderTroopCountRatio { get; }` |
| `DefenderTroopNumberForSuccessfulPullBack` | `public abstract int DefenderTroopNumberForSuccessfulPullBack { get; }` |
| `DefenderMaxArcherRatio` | `public abstract float DefenderMaxArcherRatio { get; }` |
| `MaxDefenderSideTroopCount` | `public abstract int MaxDefenderSideTroopCount { get; }` |
| `MaxDefenderArcherCount` | `public abstract int MaxDefenderArcherCount { get; }` |
| `MaxAttackerSideTroopCount` | `public abstract int MaxAttackerSideTroopCount { get; }` |

## Key Methods

### GetPriorityListForLordsHallFightMission
`public abstract FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount)`

**Purpose:** Gets the current value of `priority list for lords hall fight mission`.

## Usage Example

```csharp
var implementation = new CustomSiegeLordsHallFightModel();
```

## See Also

- [Complete Class Catalog](../catalog)
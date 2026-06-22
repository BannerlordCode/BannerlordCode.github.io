<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeLordsHallFightModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeLordsHallFightModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeLordsHallFightModel : MBGameModel<SiegeLordsHallFightModel>`
**Base:** `MBGameModel<SiegeLordsHallFightModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs`

## Overview

`SiegeLordsHallFightModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SiegeLordsHallFightModel>(new MySiegeLordsHallFightModel())` to change how it computes.

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
```csharp
public abstract FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount)
```

## Usage Example

```csharp
// Typical usage of SiegeLordsHallFightModel (Model)
Game.Current.ReplaceModel<SiegeLordsHallFightModel>(new MySiegeLordsHallFightModel());
```

## See Also

- [Complete Class Catalog](../catalog)
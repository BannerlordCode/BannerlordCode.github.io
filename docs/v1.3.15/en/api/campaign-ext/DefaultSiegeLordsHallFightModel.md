<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSiegeLordsHallFightModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeLordsHallFightModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeLordsHallFightModel : SiegeLordsHallFightModel`
**Base:** `SiegeLordsHallFightModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs`

## Overview

`DefaultSiegeLordsHallFightModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSiegeLordsHallFightModel>(new MyDefaultSiegeLordsHallFightModel())` to change how it computes.

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
```csharp
public override FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount)
```

## Usage Example

```csharp
// Typical usage of DefaultSiegeLordsHallFightModel (Model)
Game.Current.ReplaceModel<DefaultSiegeLordsHallFightModel>(new MyDefaultSiegeLordsHallFightModel());
```

## See Also

- [Complete Class Catalog](../catalog)
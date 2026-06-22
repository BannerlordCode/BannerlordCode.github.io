<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeirSelectionCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeirSelectionCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeirSelectionCalculationModel : MBGameModel<HeirSelectionCalculationModel>`
**Base:** `MBGameModel<HeirSelectionCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeirSelectionCalculationModel.cs`

## Overview

`HeirSelectionCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<HeirSelectionCalculationModel>(new MyHeirSelectionCalculationModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `HighestSkillPoint` | `public abstract int HighestSkillPoint { get; }` |

## Key Methods

### CalculateHeirSelectionPoint
```csharp
public abstract int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)
```

## Usage Example

```csharp
// Typical usage of HeirSelectionCalculationModel (Model)
Game.Current.ReplaceModel<HeirSelectionCalculationModel>(new MyHeirSelectionCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)
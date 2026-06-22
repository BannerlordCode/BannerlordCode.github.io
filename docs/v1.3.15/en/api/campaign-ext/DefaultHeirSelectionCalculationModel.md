<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultHeirSelectionCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHeirSelectionCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeirSelectionCalculationModel : HeirSelectionCalculationModel`
**Base:** `HeirSelectionCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeirSelectionCalculationModel.cs`

## Overview

`DefaultHeirSelectionCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultHeirSelectionCalculationModel>(new MyDefaultHeirSelectionCalculationModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `HighestSkillPoint` | `public override int HighestSkillPoint { get; }` |

## Key Methods

### CalculateHeirSelectionPoint
```csharp
public override int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)
```

## Usage Example

```csharp
// Typical usage of DefaultHeirSelectionCalculationModel (Model)
Game.Current.ReplaceModel<DefaultHeirSelectionCalculationModel>(new MyDefaultHeirSelectionCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)
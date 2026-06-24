<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultHeirSelectionCalculationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultHeirSelectionCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeirSelectionCalculationModel : HeirSelectionCalculationModel`
**Base:** `HeirSelectionCalculationModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHeirSelectionCalculationModel.cs`

## Overview

`DefaultHeirSelectionCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeirSelectionCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateHeirSelectionPoint
`public override int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)`

**Purpose:** Handles logic related to `calculate heir selection point`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultHeirSelectionCalculationModel>(new MyDefaultHeirSelectionCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)
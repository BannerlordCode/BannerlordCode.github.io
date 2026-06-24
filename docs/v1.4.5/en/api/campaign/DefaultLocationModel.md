<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultLocationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultLocationModel : LocationModel`
**Base:** `LocationModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultLocationModel.cs`

## Overview

`DefaultLocationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultLocationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSettlementUpgradeLevel
`public override int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)`

**Purpose:** Gets the current value of `settlement upgrade level`.

### GetCivilianSceneLevel
`public override string GetCivilianSceneLevel(Settlement settlement)`

**Purpose:** Gets the current value of `civilian scene level`.

### GetCivilianUpgradeLevelTag
`public override string GetCivilianUpgradeLevelTag(int upgradeLevel)`

**Purpose:** Gets the current value of `civilian upgrade level tag`.

### GetUpgradeLevelTag
`public override string GetUpgradeLevelTag(int upgradeLevel)`

**Purpose:** Gets the current value of `upgrade level tag`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultLocationModel>(new MyDefaultLocationModel());
```

## See Also

- [Complete Class Catalog](../catalog)
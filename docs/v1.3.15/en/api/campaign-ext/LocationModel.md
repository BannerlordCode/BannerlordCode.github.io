<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class LocationModel : MBGameModel<LocationModel>`
**Base:** `MBGameModel<LocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs`

## Overview

`LocationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `LocationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSettlementUpgradeLevel
`public abstract int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)`

**Purpose:** Gets the current value of `settlement upgrade level`.

### GetCivilianSceneLevel
`public abstract string GetCivilianSceneLevel(Settlement settlement)`

**Purpose:** Gets the current value of `civilian scene level`.

### GetCivilianUpgradeLevelTag
`public abstract string GetCivilianUpgradeLevelTag(int upgradeLevel)`

**Purpose:** Gets the current value of `civilian upgrade level tag`.

### GetUpgradeLevelTag
`public abstract string GetUpgradeLevelTag(int upgradeLevel)`

**Purpose:** Gets the current value of `upgrade level tag`.

## Usage Example

```csharp
var implementation = new CustomLocationModel();
```

## See Also

- [Complete Class Catalog](../catalog)
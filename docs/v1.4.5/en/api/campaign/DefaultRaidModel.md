<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultRaidModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultRaidModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRaidModel : RaidModel`
**Base:** `RaidModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultRaidModel.cs`

## Overview

`DefaultRaidModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultRaidModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateHitDamage
`public override ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)`

**Purpose:** Handles logic related to `calculate hit damage`.

### GetRaidLootMultiplier
`public override ExplainedNumber GetRaidLootMultiplier(PartyBase receivingParty)`

**Purpose:** Gets the current value of `raid loot multiplier`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultRaidModel>(new MyDefaultRaidModel());
```

## See Also

- [Complete Class Catalog](../catalog)
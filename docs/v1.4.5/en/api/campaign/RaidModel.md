<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RaidModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RaidModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RaidModel : MBGameModel<RaidModel>`
**Base:** `MBGameModel<RaidModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/RaidModel.cs`

## Overview

`RaidModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `RaidModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GoldRewardForEachLostHearth` | `public abstract int GoldRewardForEachLostHearth { get; }` |

## Key Methods

### CalculateHitDamage
`public abstract ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)`

**Purpose:** Handles logic related to `calculate hit damage`.

### GetRaidLootMultiplier
`public abstract ExplainedNumber GetRaidLootMultiplier(PartyBase receivingParty)`

**Purpose:** Gets the current value of `raid loot multiplier`.

## Usage Example

```csharp
var implementation = new CustomRaidModel();
```

## See Also

- [Complete Class Catalog](../catalog)
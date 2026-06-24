<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RaidModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RaidModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RaidModel : MBGameModel<RaidModel>`
**Base:** `MBGameModel<RaidModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs`

## Overview

`RaidModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `RaidModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GoldRewardForEachLostHearth` | `public abstract int GoldRewardForEachLostHearth { get; }` |

## Key Methods

### GetCommonLootItemScores
`public abstract MBReadOnlyList<ValueTuple<ItemObject, float>> GetCommonLootItemScores()`

**Purpose:** Gets the current value of `common loot item scores`.

### CalculateHitDamage
`public abstract ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)`

**Purpose:** Handles logic related to `calculate hit damage`.

## Usage Example

```csharp
var implementation = new CustomRaidModel();
```

## See Also

- [Complete Class Catalog](../catalog)
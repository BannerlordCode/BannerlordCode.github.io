---
title: "SettlementGarrisonModel"
description: "Settlement garrison policy model: decides the daily base garrison change, auto-recruitment cap, recommended troop counts for AI parties to take from or leave to the garrison, and the daily repairable wall hit points."
---
# SettlementGarrisonModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>`  
**Base:** `MBGameModel<SettlementGarrisonModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementGarrisonModel.cs`

## One-line responsibility

It answers "how much should this settlement's garrison change today, how many should be recruited, how many troops should an AI party take from or leave in the garrison, and how much can the walls be repaired today" — returning a set of compliant recommendations and numbers. It does not write the roster, move units, or alter wall hit points; the actual additions and subtractions are performed by the corresponding behaviors and `Town` during the daily tick.

## Mental Model

This is the settlement's "garrison policy layer", not the garrison party itself. The model only does the arithmetic; every write happens elsewhere: `GarrisonRecruitmentCampaignBehavior` calls `CalculateBaseGarrisonChange` and `GetMaximumDailyAutoRecruitmentCount` during `DailyTickSettlementEvent`, obtains the day's delta and cap, then actually adds troops to the garrison with `AddToCounts`; `Town.RepairWallsOfSettlementDaily` (`Town.cs:639`) calls `GetMaximumDailyRepairAmount` and then writes back the wall hit-point ratio section by section; the two `FindNumberOfTroopsTo(TakeFrom|LeaveTo)Garrison` methods are read by `AiVisitSettlementBehavior` during AI decisions — the return value is only a "recommendation", and the actual transfer is completed by a later behavior/Action.

The calculation chain is: settlement runtime state (owner clan, prosperity, food, wall sections, garrison party strength) → model → behavior consumes the result during the daily settlement phase and writes it back. Therefore a custom implementation affects the "recommendation" seen by all readers, not a single UI number.

Use this model to change the rules seen by all consumers. If the goal is to directly add troops, change the roster, or repair walls, go through `Town`/the garrison party's public API, `AddGarrisonParty`, or the corresponding `*Action` — do not manipulate `MemberRoster` or modify `SettlementWallSectionHitPointsRatioList` inside a model method, since that turns a read-only query into a side effect executed on every tick. `includeDescriptions` only controls whether `ExplainedNumber` records factor descriptions and must not change the numeric value.

### Lifecycle and registration

`Campaign.Current.Models` holds the current instance, and the property name is `SettlementGarrisonModel`. The default instance is `DefaultSettlementGarrisonModel`, registered by the game launcher during campaign initialization via `IGameStarter.AddModel` (`GameModels`); a custom model must also be registered before the campaign system starts querying. On the title screen, during early module loading, or when there is no active campaign, `Campaign.Current` may be `null`, so it must not be read unconditionally inside static field initializers or menu constructors.

## Dependencies
### Upstream

| Type | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry; the model is obtained via `Campaign.Current.Models`. |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | Provide the settlement, garrison party, prosperity, food, wall sections, and owner-clan context. |
| [`MobileParty`](../../campaign/MobileParty) | Provides the AI party size, wage cap, and army membership used by the two `FindNumber...` methods to compute the recommended counts. |
| [`Clan`](../../campaign/Clan) | The owner clan's rebellion/economic state participates in the base-garrison and ideal-garrison-strength calculations. |
| [`VolunteerModel`](../VolunteerModel) | The recruitment-related model next to it; this model gives the auto-recruitment cap, while the recruitable volunteers come from `VolunteerModel`. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`GarrisonRecruitmentCampaignBehavior`](../behaviors/) | Calls `CalculateBaseGarrisonChange` and `GetMaximumDailyAutoRecruitmentCount` during the daily settlement tick and actually mutates the roster. |
| [`Town`](../../campaign/Town) | `RepairWallsOfSettlementDaily` calls `GetMaximumDailyRepairAmount` and then writes back the wall hit-point ratio section by section. |
| [`AiVisitSettlementBehavior`](../behaviors/) | Reads `FindNumberOfTroopsToTakeFromGarrison` to decide how many troops an AI party takes when leaving. |
| [`PartyWageModel`](../PartyWageModel) / [`PartySizeLimitModel`](../PartySizeLimitModel) | Downstream companions: recruitment and the garrison cap are further clamped by wages and party size. |
| [`WallHitPointCalculationModel`](../WallHitPointCalculationModel) | Adjacent rule model: conversion of wall-section hit points and the interpretation of repair amounts are related, but must not be confused with the repair-amount calculation. |

### Actions, events, and save boundary

Consumption happens in `DailyTickSettlementEvent` (the daily settlement tick) and during AI decisions; the model's results themselves have no save fields and dispatch no events. A legitimate garrison change goes through the behavior/Roster API, and a wall change goes through `Town`'s repair path; a custom model should stay deterministic for the same input to avoid inconsistency with replayed campaign ticks. Replace the model during the campaign-startup phase — do not swap it after the settlement has already read the old model.

## Member contract

| Member | Purpose | When called and side effects |
| --- | --- | --- |
| `GetMaximumDailyAutoRecruitmentCount(Town town)` | Returns the hard daily cap of troops auto-added to the garrison; the default implementation returns a fixed `1` (constant `MaximumDailyAutoRecruitmentCount`). | Called by `GarrisonRecruitmentCampaignBehavior` during the daily settlement auto-recruitment step, as the max clamp of an `ExplainedNumber`. Pure read, does not change the roster. |
| `CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)` | Returns the settlement's daily base-garrison delta as an `ExplainedNumber`. Default implementation: if the settlement belongs to a rebelling clan and is not a kingdom faction, `+2`; plus the issue effect from `IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementGarrison, ...)`. | Called by the recruitment behavior during the daily settlement tick; the return value is then clamped by the party-size cap and the wage cap. Pure query, does not change the settlement. |
| `FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float idealGarrisonStrengthPerWalledCenter = 0f)` | Returns the number of troops an AI party is recommended to take from the garrison. Default implementation reads `settlement.Town.GarrisonParty`; estimates from garrison strength, `mobileParty`'s size cap, and ideal garrison strength (falling back to `FactionHelper.FindIdealGarrisonStrengthPerWalledCenter` when the default argument is `0`), keeping a minimum garrison of about 25 (50 for towns). | Called by `AiVisitSettlementBehavior` (source `AiVisitSettlementBehavior.cs:578`) when the AI decides to take troops out. **Recommendation only**; the actual transfer is performed by a later behavior/Action. Returns `0` when `GarrisonParty` is `null` (e.g. a village). |
| `FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)` | Returns the number of troops an AI party is recommended to leave in the garrison. Default implementation, when garrison strength is below the target, combines party size, wounded ratio, and owner/army relationship into a bounded ratio. | Used for AI garrisoning decisions. **Recommendation only**; returns `0` when the garrison has reached/exceeded the target or `GarrisonParty` is `null`. |
| `GetMaximumDailyRepairAmount(Settlement settlement)` | Returns the wall hit points (`float`) a settlement may repair per day. Default implementation: returns `0` when under siege or all wall sections are at full health; otherwise `MaxHitPointsOfOneWallSection * WallSectionCount * 0.04f`, plus `Town.AddEffectOfBuildings(BuildingEffectEnum.WallRepairSpeed, ...)`. | Called by `Town.RepairWallsOfSettlementDaily` (`Town.cs:644`) and divided by `MaxHitPointsOfOneWallSection` to get the per-section repairable ratio. Pure calculation. |

In the default implementation also note: both `FindNumber...` methods access `settlement.Town.GarrisonParty`, so calling them directly on a village or a settlement without a garrison party yields `0`; `GetMaximumDailyRepairAmount` returns **hit points**, not a `0..1` ratio — the unit conversion happens on the `Town` side.

## Real access path

The code below only queries the model registered in the current campaign and calls the real contract methods, consistent with the daily settlement tick and `Town`'s repair path:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainGarrisonChange(Settlement settlement)
{
    if (Campaign.Current == null || settlement == null || !settlement.IsFortification)
    {
        return new ExplainedNumber(0f);
    }

    SettlementGarrisonModel model = Campaign.Current.Models.SettlementGarrisonModel;
    ExplainedNumber baseChange = model.CalculateBaseGarrisonChange(settlement, includeDescriptions: true);
    int autoRecruitCap = model.GetMaximumDailyAutoRecruitmentCount(settlement.Town);
    float maxRepair = model.GetMaximumDailyRepairAmount(settlement);
    return baseChange;
}
```

This result is suitable for debugging or a UI preview. Ordinary logic should read the day's delta that the behavior has already computed — do not call `CalculateBaseGarrisonChange` again and stack it on top, or it will duplicate the daily-tick writes.

## Safe practices when replacing the model

If you only want to add a bounded correction to the repair amount, keep the default model as a delegate and still delegate all methods pairwise:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public sealed class ModSettlementGarrisonModel : SettlementGarrisonModel
{
    private readonly SettlementGarrisonModel _vanilla;

    public ModSettlementGarrisonModel(SettlementGarrisonModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int GetMaximumDailyAutoRecruitmentCount(Town town)
        => _vanilla.GetMaximumDailyAutoRecruitmentCount(town);

    public override ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)
        => _vanilla.CalculateBaseGarrisonChange(settlement, includeDescriptions);

    public override int FindNumberOfTroopsToTakeFromGarrison(
        MobileParty mobileParty, Settlement settlement, float idealGarrisonStrengthPerWalledCenter = 0f)
        => _vanilla.FindNumberOfTroopsToTakeFromGarrison(mobileParty, settlement, idealGarrisonStrengthPerWalledCenter);

    public override int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)
        => _vanilla.FindNumberOfTroopsToLeaveToGarrison(mobileParty, settlement);

    public override float GetMaximumDailyRepairAmount(Settlement settlement)
    {
        float vanilla = _vanilla.GetMaximumDailyRepairAmount(settlement);
        if (vanilla <= 0f)
        {
            return vanilla;
        }
        return vanilla * 1.25f;
    }
}
```

When registering, save the vanilla delegate during the `CampaignGameStarter` model-registration phase; do not look yourself up again via `Campaign.Current.Models.SettlementGarrisonModel` after the model has been replaced, or you will recurse. If you want the correction to override rebellion, issue, or building effects, prefer delegating to the current version's default model and then add your own bounded factors.

## Risks and debug order

1. **Campaign does not yet exist:** `Campaign.Current` is null on the title screen and during early module loading; defer obtaining the model until the campaign-startup hook or the daily tick.
2. **Recommendation treated as result:** the two `FindNumber...` methods only return recommended counts; applying them repeatedly will subtract or add the same troops multiple times.
3. **Null reference:** the default implementation accesses `settlement.Town.GarrisonParty`; calling it directly on a village (`!IsFortification`) or a settlement without a garrison party yields `0`, but when relying on `settlement.Town` you must still confirm `IsTown`/`IsCastle` first.
4. **Unit misunderstanding:** `GetMaximumDailyRepairAmount` returns wall hit points; `Town` then divides by `MaxHitPointsOfOneWallSection` — do not treat it as a `0..1` ratio and write `SettlementWallSectionHitPointsRatioList`.
5. **Boundary skipping:** the default repair amount is `0` during a siege or when all wall sections are at full health; a custom implementation that skips these two boundaries changes the siege lifecycle.
6. **Cross-model feedback:** garrison size and food, wages, militia, and buildings feed back into each other; before tuning, check the daily-tick order to avoid conflicts with `PartyWageModel`/`PartySizeLimitModel`/`SettlementMilitiaModel`, etc.
7. **Persistence:** model fields are not saved; to change the rules, register a derived model during the campaign-startup phase — do not expect a field changed at runtime to persist.

## Version and navigation

The `SettlementGarrisonModel` contract is identical across v1.3.0, v1.3.15, and v1.4.5: all five `abstract` method signatures (including the `idealGarrisonStrengthPerWalledCenter` default argument) are unchanged; the only differences are in the default formulas of `DefaultSettlementGarrisonModel` and the surrounding behaviors. A cross-version implementation should delegate to the current version's vanilla model rather than copy old formulas into the new version.

- [Models family](../models/)
- [↑ Parent: Campaign-Ext API](../)
- [↔ SettlementFoodModel](../SettlementFoodModel)
- [↔ SettlementMilitiaModel](../SettlementMilitiaModel)
- [↔ SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [↔ PartyWageModel](../PartyWageModel)
- [↔ PartySizeLimitModel](../PartySizeLimitModel)
- [↔ WallHitPointCalculationModel](../WallHitPointCalculationModel)
- [Related: Settlement](../../campaign/Settlement) · [Town](../../campaign/Town) · [MobileParty](../../campaign/MobileParty) · [Clan](../../campaign/Clan) · [Campaign](../../campaign/Campaign)
- [Campaign system guide](../)

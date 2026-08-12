---
title: "SettlementSecurityModel"
description: "Read-only rule model that converts garrison, gangs, prosperity, policies, buildings, and nearby battles into the daily security delta, and provides high/low-security thresholds and modifiers for tax, notable relations, and power."
---
# SettlementSecurityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`  
**Base:** `MBGameModel<SettlementSecurityModel>`  
**Source file:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementSecurityModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents.DefaultSettlementSecurityModel`

## One-line responsibility

It answers "how will this town's security change today," converting nearby battle outcomes (looted villages, defeated bandits, cleared hideouts) into security gains and losses. It only computes; it does not modify `Town.Security`, nor does it raise events or save state. Tax, loyalty, prosperity, and notable systems treat its thresholds and modifiers as shared rules, so replacing the implementation affects every reader, not a single panel number.

## Mental Model

This is the "security rule layer" read before the map's daily tick. `Town.SecurityChange` and `Town.SecurityChangeExplanation` call this model directly when the property is accessed; `Town.DailyTick` then accumulates `SecurityChange` into `Town.Security`. The calculation chain is:

```text
Town (garrison / gangs / prosperity / buildings / policies / governor / issues / Perks / security drift)
   + nearby battle results (raided villages, defeated bandits, cleared hideouts, besieged)
        -> Campaign.Current.Models.SettlementSecurityModel
        -> CalculateSecurityChange / GetLootedNearbyPartySecurityEffect / GetNearbyBanditPartyDefeatedSecurityEffect
        -> TownSecurityCampaignBehavior writes battle results back into Town.Security
        -> tax / loyalty / prosperity / notable relations and power read the thresholds on their own ticks
```

Use this model to change *the rule of how security is computed*. If you need to change the security value directly, record a raid, or adjust tax, use `Town.Security += ...`, the relevant `CampaignBehavior`, an `*Action`, or the downstream `SettlementTaxModel` / `SettlementLoyaltyModel`; do not write `Security`, raise events, or mutate other world state inside the model's computation callback — that would turn a read-only query into a side effect repeated every tick. `includeDescriptions` only controls whether the `ExplainedNumber` records factor descriptions; it must not change the numeric value.

### Lifecycle and registration

`Campaign.Current.Models` holds the active instance. The default instance is `DefaultSettlementSecurityModel`, registered by the game through `CampaignGameStarter` during campaign initialization; a custom model must also be registered before the campaign system begins querying. On the title screen, early in module load, or when no active campaign exists, `Campaign.Current` can be `null`, so it must not be read unconditionally in a static field initializer or a menu constructor. `MBGameModel` subclasses can also obtain the same instance via `Campaign.Current.Models.GetModel<SettlementSecurityModel>()`.

## Dependencies
### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry, plus neighboring queries such as `EstimatedAverageBanditPartySpeed`, `MapDistanceModel`. |
| [`Town`](../../campaign/Town) | Provides garrison, gangs, prosperity, buildings, policies, governor, issues, Perk context, and the current `Security` value. |
| [`Settlement`](../../campaign/Settlement) | Provides the bound village, whether it is besieged, the hideout distance, and the location. |
| [`MapEvent`](../../campaign/MapEvent) | Provides nearby party strength and the summed `DefeatedSide` strength of victory/defeat at battle resolution. |
| [`Clan`](../../campaign/Clan) | Provides the town's owning clan and kingdom, used to read kingdom policies. |

### Downstream

| Type | Relation |
| --- | --- |
| [`Town`](../../campaign/Town) | Exposes `SecurityChange` / `SecurityChangeExplanation` and accumulates into `Security` on `DailyTick`. |
| [`SettlementTaxModel`](../SettlementTaxModel) | Reads thresholds such as `ThresholdForTaxBoost` / `ThresholdForTaxCorruption`, calls `CalculateGoldGainDueToHighSecurity` / `CalculateGoldCutDueToLowSecurity`. |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | Consumes the security threshold and the drift midpoint in the loyalty formula. |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | Uses security as one of the prosperity inputs. |
| [`CharacterRelationCampaignBehavior`](../CharacterRelationCampaignBehavior) | Reads the security threshold and applies daily relation and power changes to nearby notables. |
| [`TownSecurityCampaignBehavior`](../TownSecurityCampaignBehavior) | Consumes `MapEventSecurityEffectRadius` / `HideoutClearedSecurityEffectRadius`, etc., and writes battle results back into `Town.Security`. |

### Action, event, and save boundaries

The model result itself has no save fields and raises no events. Legitimate security changes flow through `Town.DailyTick` and `TownSecurityCampaignBehavior`; a custom model must stay deterministic for the same input to avoid divergence between the security cache and the replayed campaign tick. Only `Town.Security` is saved — a replacement model must not add its own state fields that need saving.

## Member contract

### Config class (thresholds and radii)

These are all read-only properties; the default implementation provides constants in `DefaultSettlementSecurityModel`. The values a replacement model returns are simultaneously consumed as thresholds by the tax, loyalty, prosperity, and notable systems.

| Member | Default implementation | Purpose and when called | Side effects |
| --- | --- | --- | --- |
| `MaximumSecurityInSettlement` | `100` | Upper bound of `Town.Security`; used by UI and daily clamping. | None; returns a constant only. |
| `SecurityDriftMedium` | `50` | Midpoint of the security drift: above it security falls back toward the midpoint, below it rises. | None. |
| `MapEventSecurityEffectRadius` | `50f` | Radius (compared by squared distance) within which a nearby `MapEvent` affects town security. | None. |
| `HideoutClearedSecurityEffectRadius` | `100f` | Radius within which clearing a hideout raises the security of surrounding towns. | None. |
| `HideoutClearedSecurityGain` | `6` | One-time security added to each town in radius when a hideout is cleared. | None; written by `TownSecurityCampaignBehavior`. |
| `ThresholdForTaxCorruption` | `50` | Security below this starts producing the tax-corruption penalty. | None. |
| `ThresholdForHigherTaxCorruption` | `0` | Above this and below the corruption threshold, low-security tax cuts still apply. | None. |
| `ThresholdForTaxBoost` | `75` | Security reaching this triggers the high-security tax bonus. | None. |
| `SettlementTaxBoostPercentage` | `5` | Percentage points of the high-security tax bonus. | None. |
| `SettlementTaxPenaltyPercentage` | `10` | Percentage points of the low-security tax penalty. | None. |
| `ThresholdForNotableRelationBonus` | `75` | Security above this applies a relation bonus to nearby notables. | None. |
| `ThresholdForNotableRelationPenalty` | `50` | Security below this applies a relation penalty to nearby notables. | None. |
| `DailyNotableRelationBonus` | `1` | Daily relation increment for notables when above threshold. | None. |
| `DailyNotableRelationPenalty` | `-1` | Daily relation decrement for notables when below threshold. | None. |
| `DailyNotablePowerBonus` | `1` | Daily power increment for notables when above threshold. | None. |
| `DailyNotablePowerPenalty` | `-1` | Daily power decrement for notables when below threshold. | None. |

### Calculation class

| Member | Purpose and when called | Side effects |
| --- | --- | --- |
| `CalculateSecurityChange(Town town, bool includeDescriptions = false)` | Aggregates garrison, gangs, prosperity, buildings, policies, governor, issues, Perks, drift, and other factors, returning the day's security delta as an `ExplainedNumber`. Called by `Town.SecurityChange` / `SecurityChangeExplanation` and the town management UI during preview. | None; pure computation. |
| `GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | Converts the accumulated strength of nearby looted parties into a negative security effect. Called by `TownSecurityCampaignBehavior` when a `MapEvent` resolves with a bandit on the winning side and a civilian faction on the losing side. | None; returns a value that the behavior writes back into `Town.Security`. |
| `GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | Converts the accumulated strength of nearby defeated bandit parties into a positive security effect. Called by the behavior when a `MapEvent` involves a bandit faction. | None; returns a value that the behavior writes back. |
| `CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)` | When `Town.Security >= ThresholdForTaxBoost`, appends the high-security bonus to the tax `ExplainedNumber` (called by `SettlementTaxModel`). | Appends a factor via `ref`; does not modify security itself. |
| `CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)` | When security is in the low range, appends the corruption/penalty cut to the tax `ExplainedNumber` (called by `SettlementTaxModel`). | Appends a factor via `ref`; does not modify security itself. |

The observable factors of the default implementation include: higher prosperity lowers security (capped at -5); besieged -3; a bound village looted -2; an active nearby hideout -2; sufficient garrison +3, insufficient -3; `Bailiffs` / `Serfdom` / `Magistrates` policies +1, `TrialByJury` -0.2; linear drift relative to `SecurityDriftMedium`; plus modifiers from buildings, patrols, governor, issues, and Perks.

## Real access path

The following code only queries the already-registered model in the current campaign, matching the value path of `Town.SecurityChangeExplanation`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainSecurity(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }

    SettlementSecurityModel model = Campaign.Current.Models.SettlementSecurityModel;
    return model.CalculateSecurityChange(town, includeDescriptions: true);
}
```

This result suits a debug overlay or town-management preview; ordinary logic should read `town.SecurityChange`, not recompute the drift itself.

The battle-outcome conversion and the tax modifier also go through the same model instance:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

void ApplyNearbyRaidEffect(Town town, float defeatedStrength)
{
    SettlementSecurityModel model = Campaign.Current.Models.GetModel<SettlementSecurityModel>();
    float effect = model.GetLootedNearbyPartySecurityEffect(town, defeatedStrength);
    if (effect != 0f)
    {
        town.Security += effect;
    }
}

ExplainedNumber CalculateTownTax(Town town)
{
    SettlementSecurityModel model = Campaign.Current.Models.SettlementSecurityModel;
    ExplainedNumber tax = new ExplainedNumber(0f, includeDescriptions: true);
    if (town.Security >= (float)model.ThresholdForTaxBoost)
    {
        model.CalculateGoldGainDueToHighSecurity(town, ref tax);
    }
    else if (town.Security >= (float)model.ThresholdForHigherTaxCorruption
             && town.Security < (float)model.ThresholdForTaxCorruption)
    {
        model.CalculateGoldCutDueToLowSecurity(town, ref tax);
    }
    return tax;
}
```

Both `town.Security += effect` and the tax branch mirror the real source (`TownSecurityCampaignBehavior` writes back security, `DefaultSettlementTaxModel` reads thresholds). Note: modifying `Town.Security` belongs in a behavior or an Action — the model itself only computes.

## Safe replacement

If you only want to add a bounded modifier, keep the original model as a delegate and pair-delegate every public member:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class ModSettlementSecurityModel : SettlementSecurityModel
{
    private readonly SettlementSecurityModel _vanilla;

    public ModSettlementSecurityModel(SettlementSecurityModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int MaximumSecurityInSettlement => _vanilla.MaximumSecurityInSettlement;
    public override int SecurityDriftMedium => _vanilla.SecurityDriftMedium;
    public override float MapEventSecurityEffectRadius => _vanilla.MapEventSecurityEffectRadius;
    public override float HideoutClearedSecurityEffectRadius => _vanilla.HideoutClearedSecurityEffectRadius;
    public override int HideoutClearedSecurityGain => _vanilla.HideoutClearedSecurityGain;
    public override int ThresholdForTaxCorruption => _vanilla.ThresholdForTaxCorruption;
    public override int ThresholdForHigherTaxCorruption => _vanilla.ThresholdForHigherTaxCorruption;
    public override int ThresholdForTaxBoost => _vanilla.ThresholdForTaxBoost;
    public override int SettlementTaxBoostPercentage => _vanilla.SettlementTaxBoostPercentage;
    public override int SettlementTaxPenaltyPercentage => _vanilla.SettlementTaxPenaltyPercentage;
    public override int ThresholdForNotableRelationBonus => _vanilla.ThresholdForNotableRelationBonus;
    public override int ThresholdForNotableRelationPenalty => _vanilla.ThresholdForNotableRelationPenalty;
    public override int DailyNotableRelationBonus => _vanilla.DailyNotableRelationBonus;
    public override int DailyNotableRelationPenalty => _vanilla.DailyNotableRelationPenalty;
    public override int DailyNotablePowerBonus => _vanilla.DailyNotablePowerBonus;
    public override int DailyNotablePowerPenalty => _vanilla.DailyNotablePowerPenalty;

    public override ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateSecurityChange(town, includeDescriptions);
        result.AddFactor(0.05f, new TextObject("Mod: patrol bonus"));
        return result;
    }

    public override float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)
    {
        return _vanilla.GetLootedNearbyPartySecurityEffect(town, sumOfAttackedPartyStrengths);
    }

    public override float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)
    {
        return _vanilla.GetNearbyBanditPartyDefeatedSecurityEffect(town, sumOfAttackedPartyStrengths);
    }

    public override void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)
    {
        _vanilla.CalculateGoldGainDueToHighSecurity(town, ref explainedNumber);
    }

    public override void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)
    {
        _vanilla.CalculateGoldCutDueToLowSecurity(town, ref explainedNumber);
    }
}
```

At registration time, save the vanilla delegate during the `CampaignGameStarter` model-registration phase; do not look yourself up again via `Campaign.Current.Models.SettlementSecurityModel` after the model has already been replaced, or you will recurse. If the replacement must also cover tax, loyalty, and notable thresholds, prefer delegating to the current version's default model, then add your own bounded factors.

## Risks and debugging order

1. **Campaign does not exist yet:** `Campaign.Current` is null on the title screen and during early module load; defer fetching the model until a campaign-start hook.
2. **Thresholds are consumed in sync:** security thresholds are read simultaneously by the tax, loyalty, prosperity, and notable systems; changing only the security formula without checking these downstream models produces inconsistencies such as "high security but low tax."
3. **Unbounded results:** a custom `CalculateSecurityChange` returning too large a value or NaN makes the security drift and daily tick spiral; note that the `MaximumSecurityInSettlement` cap is clamped by `Town`, and the model must not skip it.
4. **Mutating the world inside a query:** recruiting, deserters, teleporting, and gold transfers must run in a behavior, a Roster API, or an Action — never inside a computation callback or a `ref` tax method.
5. **Stale preview:** the UI preview reads the instantaneous value computed from the current `Town` state; after legitimately changing garrison/village state, let the town's daily tick recompute — do not cache an old `SecurityChange`.
6. **Confusing battles with the daily change:** the nearby-battle effects (`GetLootedNearbyPartySecurityEffect`, etc.) and the daily `CalculateSecurityChange` take different inputs — the former is written back once by `TownSecurityCampaignBehavior`, the latter is accumulated by `DailyTick`; do not substitute one for the other.

## Versions and navigation

The public interface of `SettlementSecurityModel` has identical signatures across v1.3.0, v1.3.15, and v1.4.5 (16 read-only properties + 5 computation methods; parameters and return types all unchanged); differences exist only in the internal factor implementation of `DefaultSettlementSecurityModel`. When replacing the model across versions, delegate to the current version's vanilla implementation rather than copying the old formula into the new version.

- [Settlement & models index](../models/)
- [↑ Parent: Campaign-ext API](../)
- [↔ SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [↔ SettlementProsperityModel](../SettlementProsperityModel)
- [↔ SettlementMilitiaModel](../SettlementMilitiaModel)
- [↔ SettlementTaxModel](../SettlementTaxModel)
- [↔ SettlementFoodModel](../SettlementFoodModel)
- [Town](../../campaign/Town)
- [Settlement](../../campaign/Settlement)
- [MapEvent](../../campaign/MapEvent)
- [CharacterRelationCampaignBehavior](../CharacterRelationCampaignBehavior)
- [TownSecurityCampaignBehavior](../TownSecurityCampaignBehavior)
- [Campaign system guide](../../../guide/campaign-system)

---
title: "SettlementLoyaltyModel"
description: "Converts security, culture, policies, buildings, famine, and governor perks into a town's daily loyalty change, and exposes the loyalty thresholds shared by the rebellion, tax, and prosperity systems."
---
# SettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`  
**Base:** `MBGameModel<SettlementLoyaltyModel>`  
**Source:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementLoyaltyModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementLoyaltyModel.cs`

## One-line responsibility

It answers "will this town's loyalty rise or fall today, by how much, and when will it rebel, raise taxes, or prosper", and hands those rules to downstream systems as explainable numbers; it only calculates and explains, and never writes town state such as `Town.Loyalty` directly. The prosperity, tax, militia, and rebellion systems all treat its result as a shared rule, so a custom implementation affects every reader, not just one panel number.

## Mental Model

This is the rule layer that runs before the daily map clock advances. `Town.LoyaltyChange` and `Town.LoyaltyChangeExplanation` are both model-driven, read-only views: the daily settlement behavior first asks the model for the day's loyalty change, then writes the result back into `Town.Loyalty`; the prosperity model reads the high/low loyalty effects, the militia model reads the rebellion threshold, and the tax model reads the high/low loyalty tax modifiers. A single change to a threshold or coefficient therefore ripples through several downstream systems, and cannot be understood locally on this page alone.

The calculation chain is: `Town`'s security, culture, policies, buildings, issues, notable relations, governor perks, and current loyalty → `Campaign.Current.Models.SettlementLoyaltyModel.CalculateLoyaltyChange` → daily settlement behavior writes `Town.Loyalty` → prosperity / militia / tax / rebellion systems consume it afterward.

Use this model to change how "loyalty is computed" for all consumers. If the goal is to directly change the loyalty value, start a rebellion, or change ownership, use the daily settlement behavior, `ChangeOwnerOfSettlementAction`, or the public paths on `RebellionsCampaignBehavior`; never invoke any state-changing Action inside a calculation callback, or a single UI preview will recursively trigger a real rebellion or ownership change. Likewise, `includeDescriptions` only controls whether `ExplainedNumber` records the factor explanations — it must not change the numeric result itself.

### Lifecycle & Registration

`Campaign.Current.Models` holds the current instance. The default instance is `DefaultSettlementLoyaltyModel`, registered by the game launcher during campaign initialization through `IGameStarter.AddModel`; a custom model must also be registered before the campaign system starts querying it. On the title screen, early in module loading, or when no active campaign exists, `Campaign.Current` can be `null`, so it must not be read unconditionally inside a static field initializer or a menu constructor. The registration name in `GameModels` is `SettlementLoyaltyModel`, so it can be obtained both directly via `Campaign.Current.Models.SettlementLoyaltyModel` and via `Campaign.Current.Models.GetModel<SettlementLoyaltyModel>()`.

## When to use / When not to use

**When to use**
- When you want to predict or explain how a town's loyalty will change today (town panel, debug output, pre-evaluation before an AI decision).
- When you want to customize how security, culture, policies, buildings, famine, and governor perks influence the loyalty formula.
- When you want to read the `ThresholdFor*` / `RebelliousState*` thresholds shared by prosperity, tax, militia, and rebellion, to make consistent balance adjustments.

**When not to use**
- If you want to directly change `Town.Loyalty`, start a rebellion, or change ownership → use the daily settlement behavior, `ChangeOwnerOfSettlementAction`, `RebellionsCampaignBehavior`; do not write to model fields.
- If you want to move parties, change formations, or change the tax value itself → use the corresponding `*Model` (tax uses `SettlementTaxModel`) or `*Action`.
- Do not dispatch Actions or write world state inside a `Calculate*` callback, or the preview will recursively trigger real side effects.
- Do not read `Models` while `Campaign.Current` may be null (title screen, early module loading).

## Dependencies
### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry. |
| [`Town`](../../campaign/Town) | Provides `Loyalty`, `Security`, `Governor`, `OwnerClan`, `Culture`, buildings, and notables as calculation context. |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | Provides the security change; the loyalty formula stacks a security→loyalty coefficient on top of the security result. |
| [`ExplainedNumber`](../ExplainedNumber) | Carries the loyalty-change result and the explainable factor list. |
| [`Clan`](../../campaign/Clan) | Provides the town owner's culture, used by the "owner different culture" penalty branch. |

### Downstream

| Type | Relation |
| --- | --- |
| [`Town`](../../campaign/Town) | Exposes `LoyaltyChange` / `LoyaltyChangeExplanation`; the daily behavior writes the result back into `Town.Loyalty`. |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | Reads `ThresholdForProsperityBoost` / `ThresholdForProsperityPenalty`. |
| [`SettlementMilitiaModel`](../SettlementMilitiaModel) | Reads `RebelliousStateStartLoyaltyThreshold` and `MilitiaBoostPercentage`. |
| [`SettlementTaxModel`](../SettlementTaxModel) | Reads `ThresholdForTaxBoost` and calls `CalculateGoldGainDueToHighLoyalty` / `CalculateGoldCutDueToLowLoyalty`. |
| [`RebellionsCampaignBehavior`](../RebellionsCampaignBehavior) | Reads `RebellionStartLoyaltyThreshold` / `RebelliousStateStartLoyaltyThreshold` to decide rebellion and `InRebelliousState`. |

### Actions, events & save boundaries

`CalculateLoyaltyChange` only produces a read-only `ExplainedNumber`; it writes no state and dispatches no events. The actual `Town.Loyalty` write is done by the daily settlement behavior and is a saved field. Legitimate rebellion triggers and ownership changes go through `RebellionsCampaignBehavior` and the corresponding Actions; do not call them inside a model-query callback. A custom model should stay deterministic — same input yields same result — to avoid inconsistency with the daily tick during save replay.

## Member Contract

### Calculation

| Member | Signature | Purpose & side effects | When called |
| --- | --- | --- | --- |
| `CalculateLoyaltyChange` | `ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)` | Aggregates food reserve, governor culture, owner culture, kingdom policies, buildings, issues, security, notable relations, governor perks, and loyalty drift into the day's loyalty-change `ExplainedNumber`. Pure read-only query; does not change `Town.Loyalty`. | `Town.LoyaltyChange` / `Town.LoyaltyChangeExplanation` properties, daily settlement behavior, UI preview. |
| `CalculateGoldGainDueToHighLoyalty` | `void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)` | When `town.Loyalty >= ThresholdForTaxBoost`, maps `Loyalty`'s position on `[ThresholdForTaxBoost, 100]` to a gain factor on `[0, 0.2]`, written into the tax explanation via `AddFactor`. | When `DefaultSettlementTaxModel` computes town taxes. |
| `CalculateGoldCutDueToLowLoyalty` | `void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)` | When loyalty is below `ThresholdForTaxCorruption`, maps `Loyalty`'s position on `[ThresholdForHigherTaxCorruption, ThresholdForTaxCorruption]` to a corruption factor on `[-0.5, 0]`, written into the tax explanation. | When `DefaultSettlementTaxModel` computes town taxes. |

### Configuration (abstract coefficients / thresholds; concrete values come from the default implementation)

This table only declares what each coefficient / threshold controls; the concrete numbers belong to `DefaultSettlementLoyaltyModel`, and a replacement model should preserve the semantics rather than copy the old formula verbatim.

**Drift & caps**

| Member | Type | Controls what | When called |
| --- | --- | --- | --- |
| `MaximumLoyaltyInSettlement` | `int` | Upper bound on the loyalty value, and also the upper bound of the security→loyalty mapping. | Security mapping inside `CalculateLoyaltyChange`. |
| `LoyaltyDriftMedium` | `int` | Loyalty drift anchor; the formula applies a pull toward the median of `-0.1 * (town.Loyalty - LoyaltyDriftMedium)`. | Drift term of `CalculateLoyaltyChange`. |
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `int` | Boundary above which security raises loyalty and below which it lowers loyalty. | Security term of `CalculateLoyaltyChange`. |

**Security & culture**

| Member | Type | Controls what | When called |
| --- | --- | --- | --- |
| `HighSecurityLoyaltyEffect` | `float` | Bonus factor on loyalty change when security is above the threshold. | Security term of `CalculateLoyaltyChange`. |
| `LowSecurityLoyaltyEffect` | `float` | Penalty factor on loyalty change when security is below the threshold. | Security term of `CalculateLoyaltyChange`. |
| `GovernorSameCultureLoyaltyEffect` | `float` | Loyalty bonus factor when the governor shares the town's culture. | Governor-culture term of `CalculateLoyaltyChange`. |
| `GovernorDifferentCultureLoyaltyEffect` | `float` | Loyalty penalty factor when the governor is of a different culture. | Governor-culture term of `CalculateLoyaltyChange`. |
| `SettlementOwnerDifferentCultureLoyaltyEffect` | `float` | Loyalty penalty factor when the owner (lord) is of a different culture from the town. | Owner-culture term of `CalculateLoyaltyChange`. |

**Prosperity / militia coupling**

| Member | Type | Controls what | When called |
| --- | --- | --- | --- |
| `HighLoyaltyProsperityEffect` | `float` | Loyalty bonus factor on prosperity when loyalty is high. | `SettlementProsperityModel`. |
| `LowLoyaltyProsperityEffect` | `int` | Prosperity penalty (gold/day) when loyalty is low. | `SettlementProsperityModel`. |
| `MilitiaBoostPercentage` | `int` | Militia boost percentage when loyalty is above the rebellion threshold. | `SettlementMilitiaModel`. |

**Tax thresholds**

| Member | Type | Controls what | When called |
| --- | --- | --- | --- |
| `ThresholdForTaxBoost` | `int` | Loyalty above this triggers the high-loyalty tax bonus. | `SettlementTaxModel` and `CalculateGoldGainDueToHighLoyalty`. |
| `ThresholdForTaxCorruption` | `int` | Upper loyalty threshold at which low loyalty triggers tax corruption. | `CalculateGoldCutDueToLowLoyalty`. |
| `ThresholdForHigherTaxCorruption` | `int` | Lower threshold for the more severe tax corruption. | `CalculateGoldCutDueToLowLoyalty`. |

**Prosperity thresholds**

| Member | Type | Controls what | When called |
| --- | --- | --- | --- |
| `ThresholdForProsperityBoost` | `int` | Prosperity accelerates when loyalty is above this and food is growing. | `SettlementProsperityModel`. |
| `ThresholdForProsperityPenalty` | `int` | Prosperity is penalized when loyalty is below this. | `SettlementProsperityModel`. |

**Rebellion**

| Member | Type | Controls what | When called |
| --- | --- | --- | --- |
| `RebellionStartLoyaltyThreshold` | `int` | `RebellionsCampaignBehavior` starts a rebellion when loyalty ≤ this. | Daily rebellion evaluation. |
| `RebelliousStateStartLoyaltyThreshold` | `int` | `Town.InRebelliousState = true` when loyalty ≤ this; the militia model reduces the boost accordingly. | Militia computation and `RebellionsCampaignBehavior`. |
| `LoyaltyBoostAfterRebellionStartValue` | `int` | Loyalty recovery value after a rebellion starts. | Post-rebellion processing. |

**Famine & notable relations**

| Member | Type | Controls what | When called |
| --- | --- | --- | --- |
| `AdditionalStarvationPenaltyStartDay` | `int` | Extra loyalty penalty once consecutive famine exceeds this many days. | Food term of `CalculateLoyaltyChange`. |
| `AdditionalStarvationLoyaltyEffect` | `int` | Extra loyalty deducted per tick after that many days. | Food term of `CalculateLoyaltyChange`. |
| `ThresholdForNotableRelationBonus` | `float` | Daily bonus to notable relations when loyalty is above this. | `CharacterRelationCampaignBehavior`. |
| `DailyNotableRelationBonus` | `int` | Daily bonus value to notable relations. | `CharacterRelationCampaignBehavior`. |

The observable values given by the default implementation (`DefaultSettlementLoyaltyModel`): security boundary 50, loyalty cap 100, drift anchor 50, high/low security coefficient 1 / -2, same/different-culture governor 1 / -1, owner different culture -3, tax threshold 75, corruption threshold 50 / 25, prosperity threshold 75 / 25, rebellion threshold 15, rebellious-state threshold 25, post-rebellion recovery 5, militia boost 200, famine adds -1 from day 14, notable-relation threshold 75, daily notable bonus 1. These are values of that default implementation, not of the contract itself.

## Real Access Paths

The code below only queries the already-registered model in the current campaign, matching the real call path of `Town.LoyaltyChangeExplanation` (Town.cs:142):

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainTownLoyalty(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }

    SettlementLoyaltyModel model = Campaign.Current.Models.SettlementLoyaltyModel;
    ExplainedNumber change = model.CalculateLoyaltyChange(town, includeDescriptions: true);
    // change.ResultNumber is the day's loyalty delta; the factor list inside change is used for the debug panel display
    return change;
}
```

This result suits the town-management panel's "today's loyalty forecast" or a debug preview; normal logic should read `town.LoyaltyChangeExplanation` directly, and must not write `ResultNumber` back into `Town.Loyalty` itself.

## Rebellion-risk Check Using Thresholds

The threshold properties are also real, readable API. Below is a real usage that evaluates whether a town is close to rebellion risk (same source as `RebellionsCampaignBehavior`'s judgment):

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

public bool IsTownAtRebellionRisk(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return false;
    }

    SettlementLoyaltyModel model = Campaign.Current.Models.GetModel<SettlementLoyaltyModel>();
    return town.Loyalty <= (float)model.RebellionStartLoyaltyThreshold
        || town.InRebelliousState;
}
```

`town.InRebelliousState` itself is a read-only flag that `RebellionsCampaignBehavior` writes based on `RebelliousStateStartLoyaltyThreshold`; here we only read it and make no state change.

## Risks & Debugging Order

1. **Campaign does not exist yet:** `Campaign.Current` is null on the title screen and during early module loading; defer obtaining the model until a campaign-start hook.
2. **World mutated during query:** recruiting, rebellion, teleport, and ownership changes must run inside behaviors, `*Action`, or the Roster API, never inside a `Calculate*` callback, or the preview will recursively trigger real side effects.
3. **Threshold coupling:** `ThresholdFor*` / `RebelliousState*` are shared by four downstream systems — prosperity, tax, militia, rebellion; changing one threshold requires checking the other models too, or you get inconsistencies like "taxes went up but so did rebellions".
4. **Unbounded result:** `CalculateLoyaltyChange` produces a per-day delta, and downstream clamps `Town.Loyalty` to `[0, MaximumLoyaltyInSettlement]`; a custom model returning extreme values distorts the subsequent prosperity / tax / militia calculations.
5. **Stale cache:** `Town.Loyalty` is a saved state written on the daily tick; the UI should read `Town.LoyaltyChange` / `LoyaltyChangeExplanation` for preview, not cache the old `Loyalty` as a live value.
6. **Model-swap timing:** replacing the model must happen during the `IGameStarter.AddModel` registration phase, and `CalculateLoyaltyChange` and the tax-modifier logic must stay consistent; do not just copy the old formula into the new version.
7. **Do not add save fields to the model:** loyalty belongs to the saved state of `Town` / `Settlement`; the model itself is stateless, so do not add `Saveable` fields to it.

## Version & Navigation

The public API of `SettlementLoyaltyModel` is identical across v1.3.0, v1.3.15, and v1.4.5 (3 methods + 24 abstract coefficient/threshold properties), with no members added or removed across versions; the differences live only in the default values and internal implementation details of `DefaultSettlementLoyaltyModel`. When swapping the model across versions, delegate to the current version's vanilla implementation and then layer your own bounded corrections on top, rather than copying one version's formula into another.

- [Campaign-ext Models Index](../models/)
- [↑ Parent: Campaign Extensions API](../)
- [↔ SettlementSecurityModel](../SettlementSecurityModel)
- [↔ SettlementProsperityModel](../SettlementProsperityModel)
- [↔ SettlementTaxModel](../SettlementTaxModel)
- [↔ SettlementMilitiaModel](../SettlementMilitiaModel)
- [↔ PartySpeedModel](../PartySpeedModel)
- [Town](../../campaign/Town)
- [Clan](../../campaign/Clan)
- [Campaign System Guide](../../../guide/campaign-system/)

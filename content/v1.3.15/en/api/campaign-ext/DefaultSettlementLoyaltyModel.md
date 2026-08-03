---
title: "DefaultSettlementLoyaltyModel"
description: "The source-backed default implementation for town loyalty drift, tax thresholds, and rebellion inputs."
---
# DefaultSettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`  
**Base:** [`SettlementLoyaltyModel`](../SettlementLoyaltyModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs` (1.4.5 authority; same named implementation in 1.3.15)

## One-line job

`DefaultSettlementLoyaltyModel` combines starvation, culture, policies, buildings, issues, security, notable relations, governor perks, and loyalty drift into the town's daily loyalty change. It also supplies thresholds read by tax and rebellion systems. It computes results; it does not write `Town.Loyalty`.

## Mental Model

`SandBoxManager` registers this implementation during startup. `GameModels` exposes it as `Campaign.Current.Models.SettlementLoyaltyModel`; `Town.LoyaltyChange` and `LoyaltyChangeExplanation` call `CalculateLoyaltyChange`, and `Town.DailyTick` later applies the result to the saved `Town.Loyalty`. Prosperity, militia, tax, and rebellion code also read its thresholds, so a change here is a shared policy change rather than a local formula tweak.

The calculation builds an `ExplainedNumber` and adds food stocks, governor and owner culture, policies, building projects, issues, security, notable relations, perks, and drift toward `LoyaltyDriftMedium`. `includeDescriptions` controls explanation retention; it does not select a different formula. Use this Model to change a policy answer; use Actions and Behaviors to change ownership, trigger rebellion, or write state.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) / [`GameModels`](../GameModels) | Owns and exposes the registered model by abstract type. |
| [`Town`](../../campaign/Town) | Supplies loyalty, security, food, culture, governor, buildings, and notable inputs, and exposes `LoyaltyChange`. |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | Reads high/low loyalty thresholds and effects for prosperity. |
| [Models family guide](../models/) | The militia model has no available leaf page in this worktree; use the family index to trace `MilitiaBoostPercentage` consumers. |
| `DefaultSettlementTaxModel` / `RebellionsCampaignBehavior` | Read tax thresholds, rebellion thresholds, and the post-rebellion loyalty boost. |

## Default contract

| Member | 1.4.5 default | Consumer meaning |
| --- | ---: | --- |
| `MaximumLoyaltyInSettlement` | `100` | Upper bound used by high-loyalty mappings. |
| `LoyaltyDriftMedium` | `50` | Drift target, using `-0.1 * (loyalty - 50)`. |
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `50` | Split between low- and high-security loyalty effects. |
| `HighSecurityLoyaltyEffect` / `LowSecurityLoyaltyEffect` | `1f` / `-2f` | Endpoints of the security-to-loyalty mapping. |
| `HighLoyaltyProsperityEffect` / `LowLoyaltyProsperityEffect` | `0.5f` / `-1` | High/low loyalty effects read by prosperity. |
| `ThresholdForTaxBoost` | `75` | Start of the high-loyalty tax factor. |
| `ThresholdForTaxCorruption` / `ThresholdForHigherTaxCorruption` | `50` / `25` | Bounds of the tax corruption interval. |
| `ThresholdForProsperityBoost` / `ThresholdForProsperityPenalty` | `75` / `25` | Loyalty bounds read by prosperity. |
| `RebellionStartLoyaltyThreshold` / `RebelliousStateStartLoyaltyThreshold` | `15` / `25` | Rebellion-start and rebellious-state checks. |
| `LoyaltyBoostAfterRebellionStartValue` | `5` | Loyalty boost used after rebellion starts. |
| `AdditionalStarvationPenaltyStartDay` / `AdditionalStarvationLoyaltyEffect` | `14` / `-1` | Extra penalty after more than 14 starving days. |
| `MilitiaBoostPercentage` | `200` | Low-loyalty militia multiplier in a rebellious settlement. |

The default culture effects are `1f` for a same-culture governor, `-1f` for a different-culture governor, and `-3f` for an owner culture mismatch. The notable-relation threshold is `75f`, and the daily owner-support bonus is `1`.

`CalculateLoyaltyChange(Town, bool)` returns the daily delta. `CalculateGoldGainDueToHighLoyalty` adds the high-loyalty tax factor above `75` to an existing explanation, while `CalculateGoldCutDueToLowLoyalty` maps the `25` to `50` interval into a tax corruption factor. Neither method creates or deducts money.

## Real access and replacement

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

Campaign campaign = Campaign.Current;
SettlementLoyaltyModel model = campaign.Models.SettlementLoyaltyModel;
Town town = Town.AllTowns.FirstOrDefault();
if (town != null)
{
    ExplainedNumber loyalty = model.CalculateLoyaltyChange(town, includeDescriptions: true);
    ExplainedNumber tax = new ExplainedNumber(0f, includeDescriptions: true);
    model.CalculateGoldGainDueToHighLoyalty(town, ref tax);
}
```

Register a replacement during campaign startup while preserving the abstract contract:

```csharp
public sealed class ModSettlementLoyaltyModel : DefaultSettlementLoyaltyModel
{
    public override int RebelliousStateStartLoyaltyThreshold => 30;
}

public override void InitializeGameStarter(Game game, IGameStarter gameStarter)
{
    gameStarter.AddModel(new ModSettlementLoyaltyModel());
}
```

Do not read the model property from inside a replacement to obtain its own default values. After registration it may already point to the replacement, causing recursion or losing the vanilla fallback. Inherit the default implementation and call `base.CalculateLoyaltyChange` when the original formula should remain active.

## Risks and version boundary

- `CalculateLoyaltyChange` can be called by UI previews, daily ticks, and other Models; it must have no world-changing side effects.
- Changing rebellion, tax, or militia thresholds requires regression checks for prosperity, militia, tax, and rebellion consumers.
- `ExplainedNumber` is a prediction. `Town.DailyTick` writes the saved state later; the model is not a setter.
- This page uses the 1.4.5 `Bannerlord.Source/bin` implementation as authority. Recheck the target 1.3.15 DLL before shipping an override.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Contract: SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [Related: SettlementSecurityModel](../SettlementSecurityModel) · [SettlementProsperityModel](../SettlementProsperityModel)
- [Mutation boundary: Actions](../actions)

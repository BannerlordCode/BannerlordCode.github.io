---
title: "DefaultSettlementSecurityModel"
description: "The source-backed default implementation for town security drift, nearby battle effects, and tax factors."
---
# DefaultSettlementSecurityModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementSecurityModel : SettlementSecurityModel`  
**Base:** [`SettlementSecurityModel`](../SettlementSecurityModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs` (1.4.5 authority; same named implementation in 1.3.15)

## One-line job

`DefaultSettlementSecurityModel` calculates daily town security change and turns nearby raids, defeated bandits, garrison, prosperity, policies, issues, buildings, patrols, and perks into explained factors. It also supplies tax factors, but it does not assign `Town.Security`.

## Mental Model

`Town.SecurityChange` and its explanation read `Campaign.Current.Models.SettlementSecurityModel`. The daily town tick later applies the result to the saved security state. `TownSecurityCampaignBehavior` applies direct nearby-battle and hideout-cleared effects after events. The daily calculation, event effects, and tax effects are separate contracts, not interchangeable setters.

The default daily formula considers nearby hideouts, looted villages, siege state, prosperity, garrison, policies, governor, projects, issues, perks, security drift, and patrols. Garrison strength is calculated through `MilitaryPowerModel`; the explanation entries are intended for UI and diagnostics.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) / [`GameModels`](../GameModels) | Supplies the registered security Model and map time/distance context. |
| [`Town`](../../campaign/Town) | Supplies security, prosperity, garrison, buildings, gangs, and ownership state, and exposes `SecurityChange`. |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | Reads security thresholds and high/low security loyalty effects. |
| `TownSecurityCampaignBehavior` / [`MapEvent`](../../campaign/MapEvent) | Uses radii and nearby battle effects, then owns the state write. |
| `DefaultSettlementTaxModel` | Uses high-security tax gains and low-security corruption factors. |

## Default contract and formula anchors

| Member | 1.4.5 default | Meaning |
| --- | ---: | --- |
| `MaximumSecurityInSettlement` / `SecurityDriftMedium` | `100` / `50` | Security upper bound and drift center. |
| `MapEventSecurityEffectRadius` | `50f` | Radius for map-event effects around a town. |
| `HideoutClearedSecurityEffectRadius` / `HideoutClearedSecurityGain` | `100f` / `6` | Radius and gain after a hideout is cleared. |
| `ThresholdForTaxBoost` | `75` | Start of the high-security tax factor. |
| `ThresholdForTaxCorruption` / `ThresholdForHigherTaxCorruption` | `50` / `0` | Bounds of the low-security tax penalty interval. |
| `SettlementTaxBoostPercentage` / `SettlementTaxPenaltyPercentage` | `5` / `10` | High-security gain and low-security penalty percentages. |
| `ThresholdForNotableRelationBonus` / `ThresholdForNotableRelationPenalty` | `75` / `50` | Security boundaries for notable relation effects. |
| `DailyNotableRelationBonus` / `DailyNotableRelationPenalty` | `1` / `-1` | Daily relation factors. |
| `DailyNotablePowerBonus` / `DailyNotablePowerPenalty` | `1` / `-1` | Daily influence factors. |

The default anchors include `-2` for a looted bound village, `-3` while under siege, and `-2` for a nearby infested hideout. Prosperity contributes at most `-5` at `-0.0005` per prosperity. Security drift is `-(security - 50) / 15`. Garrison, policy, building, issue, perk, and patrol branches add further explanation entries; absent garrison and patrols contribute nothing.

`GetLootedNearbyPartySecurityEffect` returns `-0.005 * strength`, while `GetNearbyBanditPartyDefeatedSecurityEffect` returns `0.005 * strength`. Both calculate event input only; they do not validate the event or perform the `+=` state write.

## Real access and replacement

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

Campaign campaign = Campaign.Current;
SettlementSecurityModel model = campaign.Models.SettlementSecurityModel;
Town town = Town.AllTowns.FirstOrDefault();
if (town != null)
{
    ExplainedNumber change = model.CalculateSecurityChange(town, includeDescriptions: true);
    float banditEffect = model.GetNearbyBanditPartyDefeatedSecurityEffect(town, 20f);
}
```

Register a replacement through the abstract model during campaign startup instead of constructing a temporary instance in a map event:

```csharp
public sealed class ModSettlementSecurityModel : DefaultSettlementSecurityModel
{
    public override float HideoutClearedSecurityEffectRadius => 120f;
}

public override void InitializeGameStarter(Game game, IGameStarter gameStarter)
{
    gameStarter.AddModel(new ModSettlementSecurityModel());
}
```

## Risks and version boundary

- The result can be read by UI, daily ticks, and event Behaviors repeatedly; calculation must not call Actions or mutate the town.
- `MapEventSecurityEffectRadius` and the hideout radius are used in squared world-distance comparisons. Treating them as a security amount produces the wrong area of effect.
- Garrison strength depends on `MilitaryPowerModel`; replacing several Models requires checking recursion and unit conventions.
- Threshold changes require regression checks for loyalty and tax consumers. Security state belongs to `Town` and is saved there, not in this stateless Model.
- This page uses the 1.4.5 `Bannerlord.Source/bin` implementation as authority. Recheck the corresponding 1.3.15 DLL before release.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Contract: SettlementSecurityModel](../SettlementSecurityModel)
- [Related: SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementProsperityModel](../SettlementProsperityModel)
- [Event input: MapEvent](../../campaign/MapEvent)

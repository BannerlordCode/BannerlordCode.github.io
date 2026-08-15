---
title: "DefaultSettlementMilitiaModel"
description: "The source-backed default rules for settlement militia growth, veteran chance, and post-siege reinforcement."
---
# DefaultSettlementMilitiaModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`  
**Base:** [`SettlementMilitiaModel`](../SettlementMilitiaModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs` (1.4.5 authority; same named implementation in 1.3.15)

## One-line job

`DefaultSettlementMilitiaModel` converts settlement type, current militia, village hearth, town prosperity, rebellious low loyalty, market sales, buildings, policies, governor perks, and issues into militia results. It also supplies post-siege reinforcements and spawn distribution. It does not mutate militia state or rosters.

## Mental Model

Daily change is an incremental formula: castles and towns start at `2`, villages at `0.5`, current militia retires at `-2.5%`, villages add `Hearth / 400`, and towns add `Prosperity / 1000`. Towns also read market sales whose category has the militia property; a rebellious town adds a low-loyalty boost mapped through the loyalty model. Buildings, policies, perks, and issues then add to the `ExplainedNumber`.

Post-siege reinforcement, daily change, veteran chance, and melee/ranged distribution are separate public contracts. `Town.DailyTick`, `MilitiasCampaignBehavior`, and `Settlement` apply results to `Settlement.Militia` or the militia party; the Model does not own those writes.

## Dependencies

| Type or flow | Relationship |
| --- | --- |
| [`SettlementMilitiaModel`](../SettlementMilitiaModel) / [`GameModels`](../GameModels) | Supplies the abstract contract and registered access path. |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) / [`Village`](../../campaign/Village) | Supply settlement type, current militia, prosperity, hearth, loyalty, and culture. |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | Supplies the rebellious threshold and `MilitiaBoostPercentage`. |
| `MilitiasCampaignBehavior` | Applies results during new-game setup and after siege completion. |
| `DefaultPolicies`, buildings, perks, and `IssueModel` | Contribute explanation entries to daily militia change. |

## Default formula anchors

| Branch | 1.4.5 behavior |
| --- | --- |
| `MilitiaToSpawnAfterSiege` | Returns `2 * (45 + MBRandom.RandomInt(10))`, making post-siege reinforcement random. |
| Base change | `+2` for castles/towns; `+0.5` for villages. |
| Current militia retirement | `-0.025 * settlement.Militia`, explained as `Retired`. |
| Village input | `Village.Hearth / 400`. |
| Town input | `Town.Prosperity / 1000`; each market sale with `BonusToMilitia` adds `+0.2`. |
| Rebellious low loyalty | Maps through `SettlementLoyaltyModel.RebelliousStateStartLoyaltyThreshold` and multiplies `MilitiaBoostPercentage`. |
| Policy and culture | `Citizenship +1`; town `Serfdom -1`, `Cantons +1`; cultural feats can add more. |
| Spawn distribution | `meleeTroopRate = 0.5f`, `rangedTroopRate = 0.5f`. |

`CalculateVeteranMilitiaSpawnChance` reads the governor's `CitizenMilitia`, `Drills`, and `SevenVeterans` perks, the Battanian militia cultural feat, town building effects, and the `LandGrantsForVeteran` policy. `CalculateMilitiaChange` adds building, policy, perk, and issue effects for castles and towns; villages do not enter those town-only branches.

## Real access and replacement

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

SettlementMilitiaModel model = Campaign.Current.Models.SettlementMilitiaModel;
Town town = Town.AllTowns.FirstOrDefault();
if (town != null)
{
    Settlement settlement = town.Settlement;
    ExplainedNumber change = model.CalculateMilitiaChange(settlement, includeDescriptions: true);
    model.CalculateMilitiaSpawnRate(settlement, out float meleeRate, out float rangedRate);
    int postSiege = model.MilitiaToSpawnAfterSiege(town);
}
```

To retain the vanilla formula and add one factor, register a derived class during `InitializeGameStarter`, call `base` in the overridden calculation, and then append the custom `ExplainedNumber` contribution. Do not read the original from `Campaign.Current.Models.SettlementMilitiaModel`, because that property may already point to the replacement.

## Risks and version boundary

- `MilitiaToSpawnAfterSiege` is random; do not repeatedly call it in a preview path and persist the preview as a deterministic state.
- `CalculateMilitiaChange` returns a daily delta; applying it twice in a Behavior inflates militia. The saved field belongs to `Settlement`, not this Model.
- Rebellion, market sales, buildings, and policies cross loyalty, economy, and settlement systems; formula changes require regression checks across all three.
- `CalculateVeteranMilitiaSpawnChance` is consumed by `MBRandom.RandomFloat`; values outside a valid probability range change spawning stability.
- This page uses the 1.4.5 source as authority. Recheck the target 1.3.15 random range and registration order before release.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Contract: SettlementMilitiaModel](../SettlementMilitiaModel)
- [Related: SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementEconomyModel](../SettlementEconomyModel)
- [Mutation boundary: Actions](../actions)

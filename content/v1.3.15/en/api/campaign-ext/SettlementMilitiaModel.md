---
title: "SettlementMilitiaModel"
description: "The replaceable contract for daily militia change, post-siege reinforcements, veteran chance, and spawn ratios."
---
# SettlementMilitiaModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`  
**Base:** `MBGameModel<SettlementMilitiaModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs`  
**Default:** [`DefaultSettlementMilitiaModel`](../DefaultSettlementMilitiaModel)

## One-line job

`SettlementMilitiaModel` answers how much militia a settlement gains daily, how many are added after a siege, how likely a new militia is to be a veteran, and how melee/ranged militia are distributed. It returns policy results; it does not mutate `Settlement.Militia` or a roster.

## Mental Model

`Town.MilitiaChange`, `Village.MilitiaChange`, and settlement spawning read `Campaign.Current.Models.SettlementMilitiaModel`. `Town.DailyTick` or `MilitiasCampaignBehavior` then applies the delta to settlement state, while `Settlement.AddMilitiasToParty` uses the rates to select culture troops and updates the militia party. The four methods serve daily drift, siege events, spawn quality, and spawn distribution respectively; `CalculateMilitiaChange` is not a roster operation.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) / [`GameModels`](../GameModels) | Owns the registered militia policy. |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) / [`Village`](../../campaign/Village) | Supply settlement type, militia, prosperity, hearth, loyalty, and culture inputs. |
| [`DefaultSettlementMilitiaModel`](../DefaultSettlementMilitiaModel) | Supplies the vanilla baseline, building, policy, perk, and issue formula. |
| `MilitiasCampaignBehavior` | Applies results during new-game setup and after siege completion. |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | Supplies rebellious-state thresholds and the militia multiplier. |

## Public contract

| Member | Actual responsibility | Typical timing |
| --- | --- | --- |
| `MilitiaToSpawnAfterSiege(Town)` | Returns the militia count to add after a winning siege; the default may use randomness. | `AfterSiegeCompletedEvent` |
| `CalculateMilitiaChange(Settlement, bool)` | Returns daily militia delta and optional `ExplainedNumber` entries. | Town tick, village tick, preview |
| `CalculateVeteranMilitiaSpawnChance(Settlement)` | Returns the explained chance for a spawned militia to be veteran. | When new militia joins |
| `CalculateMilitiaSpawnRate(Settlement, out float, out float)` | Returns melee and ranged proportions; the outputs must form a valid distribution. | Settlement spawning |

## Real access path

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
    ExplainedNumber veteranChance = model.CalculateVeteranMilitiaSpawnChance(settlement);
    model.CalculateMilitiaSpawnRate(settlement, out float meleeRate, out float rangedRate);
    int siegeReinforcement = model.MilitiaToSpawnAfterSiege(town);
}
```

Use this query for a preview or a custom Behavior. To replace the policy, register a `SettlementMilitiaModel` implementation through `IGameStarter.AddModel` during startup instead of constructing a temporary Model inside a daily tick.

## Risks and version boundary

- `CalculateMilitiaChange` returns a delta; `Town.DailyTick`, village flow, or a Behavior owns the write. Applying it twice quickly inflates militia.
- `MilitiaToSpawnAfterSiege` may be random, so it is not a stable per-frame UI preview value.
- Spawn rates must be non-negative and form a valid distribution. Invalid `out` values change culture composition and can produce bad spawning behavior.
- Loyalty, prosperity, buildings, policies, and issues feed militia indirectly; changing one Model requires checking the complete daily-tick chain.
- This page uses the 1.4.5 `Bannerlord.Source/bin` contract as authority. Recheck parameter and random-range details in the target 1.3.15 build before shipping.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Default implementation: DefaultSettlementMilitiaModel](../DefaultSettlementMilitiaModel)
- [Related: SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementProsperityModel](../SettlementProsperityModel)
- [Mutation boundary: Actions](../actions)

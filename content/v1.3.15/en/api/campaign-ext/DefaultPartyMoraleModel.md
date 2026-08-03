---
title: "DefaultPartyMoraleModel"
description: "The default campaign model for party morale, food variety, starvation, unpaid wages, and over-capacity penalties."
---
# DefaultPartyMoraleModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`  
**Base:** [`PartyMoraleModel`](../PartyMoraleModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs` (v1.3.15; the v1.4.5 counterpart is under `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`)

## One-line job

This model combines recent events, leadership, food variety, party over-capacity, starvation, unpaid wages, and relevant perks into explainable morale results. It does not set `MobileParty.Morale`, restock food, pay wages, or resolve battles.

## Mental model

```text
MobileParty / PartyBase
  + RecentEventsMorale / food / roster / PartySizeLimit / unpaid wages / perks
                              |
            Campaign.Current.Models.PartyMoraleModel
                              |
          HighMoraleValue / int penalties / ExplainedNumber
                              |
  MobileParty, party UI, healing model, daily/battle behavior processing
```

`DefaultPartyMoraleModel` is the default `MBGameModel<PartyMoraleModel>` implementation. It has two easily confused sets of values: the public daily starvation/unpaid-wage penalties are `-5` and `-3`, while `GetEffectivePartyMorale` uses the heavier immediate `-30` and `-20` factors. The former belongs to daily settlement rules; the latter belongs to the current effective-morale calculation. They are not interchangeable.

### Use it when

- You need to display current morale and its causes: query `GetEffectivePartyMorale` through `Campaign.Current.Models.PartyMoraleModel` with `includeDescription: true`.
- You need to change base morale, food variety, over-capacity penalties, or battle changes: register a subclass during campaign starter setup.
- You need to test high-morale perk gates: read `HighMoraleValue`; the default threshold is `70`, not a universal hard cap for every party.

### Do not use it when

Do not set morale, mutate a `MobileParty`, restock food, pay wages, or raise battle events from a model method. UI, AI, medical logic, and campaign behaviors can query the model repeatedly; query-time side effects repeat with every read. Victory/defeat changes, daily penalties, and effective morale are separate contracts and should not replace one another.

## Dependencies

### Upstream inputs

| Type / system | What it supplies |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) / [`PartyBase`](../../campaign/PartyBase) | Leader, recent events, roster, party limit, food, unpaid wages, starvation, party kind, and settlement context. |
| [`ItemRoster`](../ItemRoster) | `FoodVariety`, used by the food-variety morale factor. |
| `TroopRoster` | Total men, low-tier ratio, mounted count, and over-capacity statistics. |
| `DefaultPerks` / `DefaultSkillEffects` | Leadership, `PeasantLeader`, `SelfPromoter`, `Logistician`, `WarriorsDiet`, and `Gourmet` modifiers. |
| `SettlementHelper` / `Settlement` | Whether a militia home settlement or garrison settlement is starving and whether a settlement is under siege. |

### Downstream consumers

| Consumer | How it uses the model |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) / party UI | Reads effective morale and its `ExplainedNumber` breakdown. |
| [`PartyHealingModel`](../PartyHealingModel) | Reads `HighMoraleValue` to decide whether high-morale healing perks apply. |
| Daily campaign behaviors | Use public starvation/unpaid-wage penalties and apply state changes at the correct tick. |
| Battle-result behaviors | Use one-time victory/defeat changes; the caller owns the actual morale mutation. |
| [`PartyWageModel`](../PartyWageModel) / food behaviors | Supply unpaid-wage and food facts; the morale model does not own gold or food settlement. |

## Public contract

| Member | Default behavior | Important boundary |
| --- | --- | --- |
| `HighMoraleValue` | Returns `70`. | A threshold policy value, not a `MobileParty.Morale` setter. |
| `GetDailyStarvationMoralePenalty` | Returns `-5`. | A fixed daily-rule penalty; it does not inspect or change food. |
| `GetDailyNoWageMoralePenalty` | Returns `-3`. | A fixed daily-rule penalty; it does not pay wages or remove troops. |
| `GetStandardBaseMorale` | Returns `50`. | Returns a baseline only. |
| `GetVictoryMoraleChange` / `GetDefeatMoraleChange` | Returns `+20` / `-20`. | One-time battle-result values; does not decide the battle. |
| `GetEffectivePartyMorale` | Starts at `50` and adds recent events, skill, starvation, unpaid wages, perks, food, and over-capacity factors. | Returns an `ExplainedNumber`; `includeDescription` only controls explanation lines. |

## Default calculations

### Base, daily, and battle changes

`HighMoraleValue` is `70`, and `GetStandardBaseMorale` is `50`. The daily entry points return fixed starvation `-5` and unpaid-wage `-3` penalties; victory and defeat return `+20` and `-20`. These methods supply policy values only. Campaign behaviors apply the changes at their corresponding phases.

### `GetEffectivePartyMorale` composition

Effective morale starts at `50` and adds the following explanation components in order:

1. `RecentEventsMorale`;
2. the effective party leader's Leadership skill effect;
3. starvation: militia checks `HomeSettlement.IsStarving`, garrisons use `SettlementHelper.IsGarrisonStarving`, and ordinary mobile parties check `party.Party.IsStarving`; the effective penalty is `-30`;
4. `HasUnpaidWages > 0`, multiplied by `-20`;
5. `PeasantLeader`, siege-settlement `SelfPromoter`, and land-only `Logistician` effects;
6. food variety;
7. over-capacity penalty for parties that are neither militia nor villagers.

The default implementation does not clamp the result to `0..100`, so a custom implementation must not assume that `ExplainedNumber.ResultNumber` is automatically bounded.

### Food variety

When the party is not starving, `FoodVariety` contributes the values below; the entire food-variety calculation is skipped while starving:

| FoodVariety | 0-1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12+ |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Morale change | -2 | -1 | 0 | +1 | +2 | +3 | +5 | +6 | +7 | +8 | +9 | +10 |

If the result is negative, a land party whose leader has Steward `WarriorsDiet` raises that value to zero; sea parties do not receive this exemption. If the result is positive and the party has Steward `Gourmet`, the same food bonus is added again; the extra amount is halved at sea. These are separate additions, not a replacement of the food-variety table by a perk value.

### Troop composition and over-capacity

With `Crossbow.PeasantLeader`, the model computes the ratio of troops at tier 3 or below to total men and adds the perk's primary bonus as a factor. In a besieged settlement, a party with the secondary `Charm.SelfPromoter` effect receives its secondary bonus.

On land, Steward `Logistician` counts mounted troops in the roster. If the party's mount count exceeds the number of non-mounted men, the perk's primary bonus is added. This branch is skipped at sea.

For parties that are not militia or villagers, a member count above `PartySizeLimit` adds `-sqrt(overCapacity)`. Militia and villagers skip this over-capacity branch; do not apply the ordinary mobile-party formula to them without checking the party kind.

## Real read path

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Library;

MobileParty party = MobileParty.MainParty;
PartyMoraleModel model = Campaign.Current.Models.PartyMoraleModel;
ExplainedNumber morale = model.GetEffectivePartyMorale(
    party, includeDescription: true);
bool highMorale = morale.ResultNumber >= model.HighMoraleValue;
```

This is a read-only query. `ResultNumber` and the explanation lines can feed UI or diagnostics; do not write the result back to the party because it was read.

## Replacing the default model

Register a subclass during campaign starter setup and preserve the default branches you do not own:

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public sealed class MyPartyMoraleModel : DefaultPartyMoraleModel
{
    public override ExplainedNumber GetEffectivePartyMorale(
        MobileParty party, bool includeDescription = false)
    {
        ExplainedNumber result = base.GetEffectivePartyMorale(
            party, includeDescription);
        result.Add(2f, new TextObject("{=my_morale_bonus}My morale bonus"));
        return result;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyMoraleModel());
}
```

Do not read `Campaign.Current.Models.PartyMoraleModel` inside the override as its own base; after replacement that property points to the replacement and can recurse. A decorator should use the explicit base-model chain provided during starter setup.

## Risks and crash boundaries

1. **Daily versus effective values:** public `-5/-3` and effective `-30/-20` belong to different call contracts.
2. **Repeated side effects:** UI, AI, healing, and daily behavior may all query the model; never write morale, food, gold, or events in the query.
3. **Party-kind branches:** militia, garrison, villager, and ordinary mobile parties take different starvation/over-capacity paths; check `IsMilitia`, `IsGarrison`, and `IsVillager` first.
4. **Sea perk semantics:** `WarriorsDiet` and `Gourmet` handle sea parties differently from land parties; do not cache a land result for a sea party.
5. **Unbounded result:** the default does not clamp effective morale to `0..100`; avoid NaN, infinity, and accidental extreme values in a replacement.
6. **Save boundary:** the model is not a save container. Put persistent counters in a `CampaignBehaviorBase` save contract and let the model read them.

## Version note

The v1.3.15 and v1.4.5 public interfaces, base values, daily penalties, battle changes, and effective-morale branches match. v1.4.5 uses file-scoped namespaces and omits some explicit `null` explanation arguments; the formulas and food/perk branches remain equivalent. Check the target version's behavior timing before replacing the model.

## See also

- [Campaign-ext Models family](../models/)
- [`PartyMoraleModel`](../PartyMoraleModel)
- [`PartyBase`](../../campaign/PartyBase)
- [`MobileParty`](../../campaign/MobileParty)
- [`PartyHealingModel`](../PartyHealingModel)
- [`PartyWageModel`](../PartyWageModel)
- [`CampaignGameStarter`](../CampaignGameStarter)

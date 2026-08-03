---
title: "PartyMoraleModel"
description: "The replaceable policy for base, battle, starvation, and unpaid-wage morale, returning explanations without directly changing party morale."
---

# PartyMoraleModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`
**Base:** `MBGameModel<PartyMoraleModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyMoraleModel.cs`

## One-line responsibility

`PartyMoraleModel` combines recent events, leadership, food variety, over-capacity size, starvation, unpaid wages, and perks into a party morale result. It answers what morale should be, but does not set `MobileParty.Morale` itself.

## Mental model

This is a read-only calculation layer between party state and campaign decisions. `MobileParty` and UI code may request `GetEffectivePartyMorale` repeatedly; the returned `ExplainedNumber` rebuilds its base, recent-event, bonus, and penalty components each time. The default model exposes a high-morale threshold of 70, which other policies such as healing may read to enable high-morale perks. It is not a setter for a final morale field.

Daily logic uses fixed starvation and unpaid-wage penalties, while battles use one-time victory or defeat changes. A campaign behavior applies the resulting state at the correct tick. A replacement must keep values bounded and explanations stable without changing food, wages, rosters, or events during a query.

## When to use and when not to

- Replace the model to change the morale formula, food-variety effect, over-capacity penalty, or battle changes; register it during campaign startup.
- Query UI-friendly results through `Campaign.Current.Models.PartyMoraleModel` and preserve the meaning of `includeDescription`.
- Do not call `MobileParty.SetMorale`, pay gold, add food, or raise battle events from model methods. Those are Behavior/Action state transitions.
- Do not use `GetVictoryMoraleChange` as a substitute for `GetEffectivePartyMorale`, and do not assume `HighMoraleValue` is a universal hard requirement for every party type.

## Dependencies

- [Campaign](../../campaign/Campaign) and [GameModels](../GameModels) own the registered `PartyMoraleModel` instance.
- [MobileParty](../../campaign/MobileParty) supplies leader, party limit, food variety, recent events, unpaid wages, perks, and movement/settlement state.
- [PartyBase](../../campaign/PartyBase) supplies starvation, member counts, and battle context.
- [PartyHealingModel](../PartyHealingModel) reads `HighMoraleValue` when deciding whether high-morale healing perks apply; this is a read relationship, not mutual mutation.
- Daily and battle campaign behaviors consume the results and apply state changes separately.

## Members and timing

| Member | Purpose and timing | Side-effect boundary |
|---|---|---|
| `HighMoraleValue` | Exposes the high-morale threshold; healing and other policies may read it. | Read-only policy value. |
| `GetDailyStarvationMoralePenalty(PartyBase)` | Supplies the daily starvation penalty; the default is -5. | Does not inspect or alter food. |
| `GetDailyNoWageMoralePenalty(MobileParty)` | Supplies the daily unpaid-wage penalty; the default is -3. | Does not pay wages or remove troops. |
| `GetStandardBaseMorale(PartyBase)` | Supplies the base morale, 50 in the default implementation. | Returns a baseline only. |
| `GetVictoryMoraleChange(PartyBase)` | Supplies the one-time victory change, +20 by default. | Does not end a battle or publish an event. |
| `GetDefeatMoraleChange(PartyBase)` | Supplies the one-time defeat change, -20 by default. | Does not decide the battle result. |
| `GetEffectivePartyMorale(MobileParty, bool)` | Combines recent events, skills, starvation, wages, food, size, and perks; `includeDescription` controls explanation lines. | Must remain side-effect free. |

## Real acquisition and query example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

MobileParty party = MobileParty.MainParty;
PartyMoraleModel moraleModel = Campaign.Current.Models.PartyMoraleModel;
ExplainedNumber effectiveMorale = moraleModel.GetEffectivePartyMorale(
    party,
    includeDescription: true);

bool isHighMorale = effectiveMorale.ResultNumber >= moraleModel.HighMoraleValue;
```

This follows the game's own party-morale query path. To change the formula, register a `PartyMoraleModel` subclass through `IGameStarter.AddModel`; to apply and save a daily change, change the appropriate behavior rather than assigning from the model.

## Risks and debugging boundaries

1. `GetEffectivePartyMorale` is read by UI, AI, healing, and campaign logic. Charging gold or mutating `MobileParty` there repeats the operation once per read.
2. Treating `HighMoraleValue`, the daily penalties, and effective morale as one value causes high-morale perks and daily settlement to double-apply or disappear.
3. Over-capacity, food variety, and `HasUnpaidWages` are live state. Do not cache a `MobileParty` across ticks or assume garrison, militia, villager, and regular parties share the same branch.
4. `includeDescription` should control only `ExplainedNumber` text. Changing the numeric result based on it makes UI previews disagree with settlement.
5. Store persistent custom counters in a [CampaignBehaviorBase](../CampaignBehaviorBase) save contract and let the model read them; the model instance is not a save container.

## Navigation

- [Parent: campaign-ext](./)
- [Models family guide](../models)
- [Sibling: PartyHealingModel](../PartyHealingModel) · [PartyWageModel](../PartyWageModel)
- [Related: Campaign](../../campaign/Campaign) · [GameModels](../GameModels) · [MobileParty](../../campaign/MobileParty)

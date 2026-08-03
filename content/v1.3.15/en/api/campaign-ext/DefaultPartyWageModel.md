---
title: "DefaultPartyWageModel"
description: "The default campaign implementation for party wages, payment limits, and recruitment cost."
---
# DefaultPartyWageModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyWageModel : PartyWageModel`  
**Base:** [`PartyWageModel`](../PartyWageModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs` (v1.3.15; the v1.4.5 counterpart is under `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`)

## One-line job

`DefaultPartyWageModel` turns troop tier, occupation, party composition, hero perks, settlement buildings, and culture effects into **explained wage or recruitment-cost results**. It only supplies calculations. Campaign behaviors and Actions handle payment, recruitment, ransom settlement, and desertion.

## Mental model

```text
CharacterObject / MobileParty / TroopRoster / Hero
                -> Campaign.Current.Models.PartyWageModel
                -> ExplainedNumber (wage or recruitment cost)
                -> MobileParty.TotalWage, recruitment, desertion, ransom
```

Keep three contracts separate. `GetCharacterWage` is a troop's base daily wage. `GetTotalWage` aggregates a roster in a party context. `GetTroopRecruitmentCost` is a one-time recruitment or valuation cost. `MaxWagePaymentLimit` is a payment-budget ceiling; it is not an API that withdraws money from a clan treasury.

### Use it when

- You need to display or compare party wages: read `Campaign.Current.Models.PartyWageModel` and preserve the `ExplainedNumber` breakdown.
- You need to change the default wage or recruitment rules: register a `DefaultPartyWageModel` subclass during `CampaignGameStarter` setup and delegate every branch you do not own to `base`.
- You are analyzing AI recruitment, garrison recruitment, ransom, or upgrade pricing: first identify the caller's `buyerHero` and `withoutItemCost` arguments.

### Do not use it when

Do not call `GiveGoldAction`, remove roster entries, trigger desertion, or raise events from a model method. The same calculation can be queried by UI, AI, daily finance, and ransom valuation; side effects here cause double charges, recursion, or inconsistent save state.

## Dependencies

### Upstream inputs

| Type | Role |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | Supplies the leader, army, siege, sea state, settlement, and effective quartermaster. |
| [`TroopRoster`](../TroopRoster) | Supplies non-hero troop counts; hero entries follow hero-wage rules. |
| [`CharacterObject`](../../campaign/CharacterObject) | Supplies tier, occupation, troop category, level, culture, and horse equipment. |
| [`Hero`](../../campaign/Hero) / `PerkObject` | Supplies party-wage and recruitment modifiers. |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | Supplies the skill threshold used by Epic Perk logic. |

### Downstream consumers

| Type or flow | What it reads |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | `TotalWage` and `TotalWageExplained` call `GetTotalWage`. |
| `RecruitmentCampaignBehavior` / `GarrisonRecruitmentCampaignBehavior` | Uses `RoundedResultNumber` from recruitment cost and `GetCharacterWage` for recruitment decisions and expenses. |
| `DefaultPartyDesertionModel` | Uses total wage when evaluating desertion caused by unpaid wages. |
| `DefaultRansomValueCalculationModel` / troop-upgrade logic | May pass `buyerHero: null` or `withoutItemCost: true` for valuation. |
| [`PartyBase`](../../campaign/PartyBase) party components | Read `MaxWagePaymentLimit` as a wage-budget boundary. |

## Public contract

| Member | Default behavior | Important boundary |
| --- | --- | --- |
| `MaxWagePaymentLimit` | Returns `10000`. | A budget/payment limit, not an amount paid every day. |
| `GetCharacterWage` | Maps troop tier to a base wage, then multiplies mercenary wages by `1.5` and converts to `int`. | Does not know party size and does not charge gold. |
| `GetTotalWage` | Walks the roster, adds hero/troop wages, then applies party, garrison, perk, building, policy, and culture effects. | Returns an `ExplainedNumber`; the caller decides whether to display or settle it. |
| `GetTroopRecruitmentCost` | Uses troop level, horse equipment, occupation, and buyer perks. | `withoutItemCost` only excludes the horse-equipment surcharge; it does not remove the troop's base cost. |

## Default calculation details

### `MaxWagePaymentLimit`

```csharp
int budget = Campaign.Current.Models.PartyWageModel.MaxWagePaymentLimit;
MobileParty party = MobileParty.MainParty;
bool hasLimitedBudget = party.PaymentLimit != budget;
```

`PartyComponent`, lord-party initialization, and campaign-variable logic use this value to initialize or clamp a payment budget. `budget` is not `TotalWage`, and it is not a value that should be written directly to `Clan.Gold`.

### `GetCharacterWage`

The default tier-to-wage table is below. Tiers above 6 use the final branch in the source:

| Tier | 0 | 1 | 2 | 3 | 4 | 5 | 6 | Other |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Base wage | 1 | 2 | 3 | 5 | 8 | 12 | 17 | 23 |

When `Occupation == Occupation.Mercenary`, the result is multiplied by `1.5` and converted to `int`. This is a **troop-definition base value**; quantity, heroes, garrison perks, and buildings enter in `GetTotalWage`.

### `GetTotalWage`

The method reads each `TroopRosterElement`. Non-hero entries use `character.TroopWage * element.Number`. Hero entries use hero wage rules; a clan leader is normally not counted a second time, while the main party's player-clan lord case is handled separately by the source. If the party leader has `Steward.PaidInPromise`, hero wages use that perk's primary bonus and are rounded.

During aggregation the method tracks special troop wage shares and then adds contextual factors to the `ExplainedNumber`. The `Steward.AidCorps` branch reads `Number` and `WoundedNumber`, but the v1.3.15/v1.4.5 default implementation still uses `element.Number` for the later ordinary-troop wage multiplication. Do not read that branch as a wounded-troop wage exemption:

- **Garrisons:** fortress/castle garrison perks, governor perks weighted by infantry/ranged/cavalry composition, the Empire garrison culture feat, and `GarrisonWageReduction` building effects.
- **Party context:** the `MilitaryCoronae` policy; trade or Steward perks weighted by caravan-guard/mercenary shares; the Aserai wage feat; `Steward.Frugal` on land; `EfficientCampaigner` in an army; `MasterOfWarcraft` during a siege; `PriceOfLoyalty` from the effective quartermaster; and `ContentTrades while at a settlement.
- **Floor and explanations:** the base sum is limited to zero before factors are applied. With `includeDescriptions: true`, perks, policies, culture, and buildings appear in the breakdown. Sea state is passed to perks that support sea-specific behavior, so a replacement must not assume every party is on land.

The normal read path is:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Library;

MobileParty party = MobileParty.MainParty;
PartyWageModel model = Campaign.Current.Models.PartyWageModel;
ExplainedNumber explained = model.GetTotalWage(
    party, party.MemberRoster, includeDescriptions: true);

int dailyWage = (int)explained.ResultNumber;
```

This is also the path used by `party.TotalWageExplained`. `explained` is a preview/calculation result; do not deduct gold because you read it, or the daily finance flow will charge again.

### `GetTroopRecruitmentCost`

The base cost is selected by `CharacterObject.Level`:

| Level | `<=1` | `2-6` | `7-11` | `12-16` | `17-21` | `22-26` | `27-31` | `32-36` | `>36` |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Base cost | 10 | 20 | 50 | 100 | 200 | 400 | 600 | 1000 | 1500 |

The source then applies these rules:

1. If the troop has a horse and `withoutItemCost == false`, add 150 below Level 26 or 500 at Level 26 and above. This flag controls only the horse-equipment surcharge.
2. `Mercenary`, `Gangster`, and `CaravanGuard` add twice the current `ExplainedNumber.BaseNumber`. Because the horse surcharge has already been added through `Add`, that surcharge is part of this occupation multiplier base before buyer perks are applied.
3. When `buyerHero != null`, apply the tier, infantry/ranged/mounted, party-leader, and special-occupation perks: `HeadHunter`, the infantry/ranged recruitment perks, the Khuzait mounted-troop culture feat, `Frugal`, `SwordForBarter`, and `SlickNegotiator`. The result is limited to a minimum of 1 only in the buyer-present branch.

Campaign recruitment code obtains a usable integer like this:

```csharp
CharacterObject troop = notable.VolunteerTypes[0];
Hero buyer = Hero.MainHero;
ExplainedNumber price = Campaign.Current.Models.PartyWageModel
    .GetTroopRecruitmentCost(troop, buyer, withoutItemCost: false);
int denars = price.RoundedResultNumber;
```

This only obtains the campaign price. The recruitment flow owns payment and roster mutation. Ransom and upgrade callers can pass a null buyer or `withoutItemCost: true`; custom models must preserve both contracts.

## Replacing the default model

Register a subclass from `SubModule.InitializeGameStarter`. The official default is registered first, so the campaign sees the later implementation through `Campaign.Current.Models.PartyWageModel`:

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

public sealed class MyPartyWageModel : DefaultPartyWageModel
{
    public override int GetCharacterWage(CharacterObject character)
    {
        return base.GetCharacterWage(character) + 1;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyWageModel());
}
```

If you need to retain an already registered model and add a correction, use the generic `CampaignGameStarter.AddModel<T>(MBGameModel<T>)` wrapper form rather than reading `Campaign.Current.Models.PartyWageModel` from inside the replacement. After replacement that property points back to the replacement and can recurse. Register models during starter setup; adding one from `DailyTick` is too late.

## Risks and debugging order

1. **Double charging:** inspect the finance behavior/action before changing the model; `GetTotalWage` does not own gold transfer.
2. **Budget confusion:** `PaymentLimit`, `MaxWagePaymentLimit`, and `TotalWage` are different values. Inspect the party's payment limit before diagnosing unpaid wages.
3. **Null buyer:** ransom valuation and upgrades often pass `buyerHero: null`; do not unconditionally read buyer perks or culture.
4. **Sea and garrison branches:** wage perks and building factors depend on current party state. Use `includeDescriptions: true` to inspect factors instead of logging only the final integer.
5. **Registration recursion:** delegate through a saved `BaseModel` or inherit the default class. Do not read the already replaced strong-typed property as your own base.
6. **Version drift:** the two default implementations have the same wage bands, occupation/horse boundaries, major perk branches, and sea-aware parameter semantics. The visible differences are mainly decompiler syntax; still check the target version's implementation before shipping an override.

## See also

- [Campaign-ext Models family](../models/)
- [`PartyWageModel`](../PartyWageModel)
- [`MobileParty`](../../campaign/MobileParty)
- [`PartyBase`](../../campaign/PartyBase)
- [`CharacterDevelopmentModel`](../CharacterDevelopmentModel)
- [`DefaultPartyDesertionModel`](../DefaultPartyDesertionModel)
- [`CampaignGameStarter`](../CampaignGameStarter)
- [`GameModels`](../GameModels)
- [`SandBoxManager`](../SandBoxManager)

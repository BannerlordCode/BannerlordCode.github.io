---
title: "PartyWageModel"
description: "Campaign wage and recruitment-cost policy used by party finance, desertion, and ransom calculations."
---
# PartyWageModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyWageModel : MBGameModel<PartyWageModel>`  
**Base:** `MBGameModel<PartyWageModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyWageModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyWageModel.cs`

## One-line job

`PartyWageModel` calculates what a troop costs to maintain, what a party's roster costs per day, and what recruitment should cost. It reports finance; it does not withdraw gold, remove troops, or apply a ransom.

## Mental Model

There are three related but non-identical questions: a character's base wage, a party's aggregate daily wage, and the one-time cost of recruiting a troop. `MobileParty.TotalWage` reads the aggregate result. Desertion logic uses that result to decide which unpaid troops may leave. Ransom calculation reuses recruitment cost as a valuation input. A replacement that changes one question must not silently change the others.

```text
CharacterObject / TroopRoster / MobileParty
              |
              v
Campaign.Current.Models.PartyWageModel
              |
              +--> GetCharacterWage
              +--> GetTotalWage
              +--> GetTroopRecruitmentCost
              |
              v
party finance / desertion / ransom and recruitment UI
```

The default model also consults party perks and `CharacterDevelopmentModel` thresholds. It returns `ExplainedNumber` so UI can show troop and perk factors. Gold movement belongs to the finance behavior and Actions; do not deduct gold from a model callback.

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Owns the registered policy instance. |
| [`MobileParty`](../../campaign/MobileParty) | Supplies leader, quartermaster, party component, and roster. |
| [`TroopRoster`](../TroopRoster) | Provides troop counts and wounded/prisoner distinctions. |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | Supplies perk/skill thresholds used by vanilla wage bonuses. |

### Downstream

| Type | Relation |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | Exposes `TotalWage` and `TotalWageExplained`. |
| `DefaultPartyDesertionModel` | Uses total wage to evaluate unpaid desertion. |
| `DefaultRansomValueCalculationModel` | Uses recruitment cost as a ransom valuation input. |
| [`PartyComponent`](../PartyComponent) | Reads `MaxWagePaymentLimit` for payment behavior. |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `MaxWagePaymentLimit` | Upper payment limit used by party components. | Party initialization and payment checks |
| `GetCharacterWage` | Return a troop's base wage. | Roster aggregation |
| `GetTotalWage` | Aggregate roster wage with party factors and explanations. | Daily finance and UI preview |
| `GetTroopRecruitmentCost` | Compute one-time recruit cost, optionally excluding item cost. | Recruitment and ransom valuation |

## Real access paths

```csharp
public ExplainedNumber ExplainDailyWage(MobileParty party)
{
    if (Campaign.Current == null || party == null)
    {
        return new ExplainedNumber(0f);
    }

    return Campaign.Current.Models.PartyWageModel
        .GetTotalWage(party, party.MemberRoster, includeDescriptions: true);
}
```

That is the same source path as `MobileParty.TotalWageExplained`. The return value is a preview; the daily finance behavior later applies payment and shortage rules.

```csharp
using System;

public int GetRecruitmentPrice(CharacterObject troop, Hero buyer)
{
    ExplainedNumber cost = Campaign.Current.Models.PartyWageModel
        .GetTroopRecruitmentCost(troop, buyer, withoutItemCost: false);
    return Math.Max(0, cost.RoundedResultNumber);
}
```

Do not use `GetTotalWage` as a replacement for `GiveGoldAction`: it has no ownership of a clan treasury and no event dispatch.

## Replacement rules

- Keep wages non-negative and deterministic for a given roster.
- Preserve the distinction between member, prisoner, and wounded entries.
- Delegate to the default model when you only need a culture, tier, or perk adjustment.
- Keep `withoutItemCost` meaningful; callers use it to separate troop value from equipment value.
- Never trigger desertion, gold transfer, or roster removal from a wage calculation.

## Risks and debugging order

1. **Recursive lookup:** a custom model must not call `Campaign.Current.Models.PartyWageModel` after it has replaced that instance unless it holds an explicit vanilla delegate.
2. **Daily double charge:** payment is applied by campaign finance code; logging or deducting inside `GetTotalWage` charges twice.
3. **Desertion feedback:** the desertion model reads wages; changing wages based on a desertion side effect can oscillate across ticks.
4. **Null buyer:** ransom and AI valuation intentionally pass a null `Hero`; support that contract.
5. **Version drift:** both v1.3.15 and v1.4.5 include sea/perk conditions, while surrounding party state and cache paths can change; preserve unknown default factors by delegation.

## Navigation

- [Campaign-ext models family](../models/)
- [MobileParty](../../campaign/MobileParty)
- [PartySizeLimitModel](../PartySizeLimitModel)
- [CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [TroopRoster](../TroopRoster)

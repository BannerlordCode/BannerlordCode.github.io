---
title: "TownHelpers"
description: "TownHelpers is the static query utility for settlement access and town interaction, reading Town inventories, parties, unassigned heroes, and the campaign age model to find meeting candidates."
---
# TownHelpers

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class TownHelpers`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/TownHelpers.cs`

## One-sentence responsibility

It turns town food and market stocks, meeting candidates, all heroes in a settlement, and item-price deviation into read-only queries used by access models and town menus.

## Mental Model

`TownHelpers` owns no Town, Party, or Hero and does not apply a meeting Action. Each call re-enumerates the supplied settlement, its party rosters, `HeroesWithoutParty`, or `Town.AllTowns`. The meeting predicates accept non-main-party lord parties and adult, non-prisoner lord heroes; the price method compares the current town price with the average price over all towns.

These methods are therefore suitable for an access-model or UI decision made from current campaign state, not for a saved qualification. Food stocks, rosters, captivity, and age can change during ticks and Actions, so callers should query again when the decision is actually used.

## When to use and when not to use

- Use it to decide whether a settlement menu can offer a meeting, to read food or market stocks, or to build a town's current hero list.
- Pass an explicit `Predicate<Hero>` to `GetHeroesInSettlement` when the UI needs a narrower population than every hero present in the settlement.
- Do not mutate the returned list to change the world. It is a snapshot; world changes still belong to the appropriate Action.
- Do not use `IsThereAnyoneToMeetInTown` as a complete settlement-access check. `DefaultSettlementAccessModel` also considers crime, factions, and access level.

## Dependencies

```text
Settlement / Town
  -> parties, MemberRoster, HeroesWithoutParty, ItemRoster
  -> TownHelpers queries
  -> DefaultSettlementAccessModel / town menu decisions
```

- Domain entities: [Settlement](../../campaign/Settlement), [Town](../../campaign/Town), [Hero](../../campaign/Hero), and [MobileParty](../../campaign/MobileParty).
- Access consumer: [SettlementAccessModel](../../campaign/SettlementAccessModel); the helper does not replace its access verdict.
- Inventory and price context: [ItemRoster](../../campaign/ItemRoster) and [ItemObject](../../core-extra/ItemObject).

## Public members

| Member | Purpose and timing |
|---|---|
| `GetTownFoodAndMarketStocks` | Returns `FoodStocks` and the owner's inventory amount whose item category has `BonusToFoodStores`; it reads state without running production or consumption. |
| `IsThereAnyoneToMeetInTown` | Checks qualifying lord parties and then unassigned adult lord heroes; it is a boolean menu gate. |
| `GetHeroesToMeetInTown` | Returns heroes matching the same meeting predicates from party rosters and `HeroesWithoutParty`. |
| `GetHeroesInSettlement` | Enumerates heroes in parties and without parties, optionally applying a `Predicate<Hero>`; its scope is wider than meeting eligibility. |
| `RequestAMeetingPartyCondition` | Accepts a non-main-party lord party and excludes a party in the same Army as the main party; intended as a LINQ predicate. |
| `RequestAMeetingHeroWithoutPartyCondition` | Accepts a lord who is not a prisoner and has reached `AgeModel.HeroComesOfAge`; it requires a live `Campaign.Current`. |
| `CalculatePriceDeviationRatio` | Computes `(current town price - average price) / average price`, retaining `1f` when the average is zero. |

## Real example

```csharp
using System.Collections.Generic;
using Helpers;
using TaleWorlds.CampaignSystem;

Settlement settlement = Settlement.CurrentSettlement;
if (settlement != null)
{
    List<Hero> meetingHeroes = TownHelpers.GetHeroesToMeetInTown(settlement);
    bool hasMeeting = TownHelpers.IsThereAnyoneToMeetInTown(settlement);
}
```

This reads the current settlement snapshot only. A following change to access, captivity, or party ownership must use the relevant campaign Action rather than editing the returned list.

## Risks and save boundaries

- `IsThereAnyoneToMeetInTown`, `GetHeroesToMeetInTown`, and `GetHeroesInSettlement` expect a valid `Settlement`; they do not turn a null input into an empty result.
- The unassigned-hero age check comes from the active `Campaign.Current.Models.AgeModel`, so do not cache it before campaign initialization.
- Food and price queries read inventory without locking it. Re-query after a world Action instead of treating the previous result as authoritative.
- Returned lists are not save fields. Serializing them as durable state creates stale references when a hero leaves, is captured, or changes settlement.

## Version note

In v1.4.5, meeting-party eligibility excludes the main party's Army and the unassigned-hero check uses the active `AgeModel.HeroComesOfAge`. Do not treat this query as a version-independent settlement-access policy.

## Navigation

- [↑ API system index](../)
- [↔ SettlementHelper](../SettlementHelper)
- [Related: Settlement](../../campaign/Settlement)
- [Related: Hero](../../campaign/Hero)

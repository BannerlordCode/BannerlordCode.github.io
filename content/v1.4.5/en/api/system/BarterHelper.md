---
title: "BarterHelper"
description: "AI barter balancing helpers that return barterable additions or removals without applying the trade themselves."
---
# BarterHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class BarterHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/BarterHelper.cs`

## One-sentence responsibility

`BarterHelper` computes a list of [Barterable](../../campaign/Barterable) items and counts that can balance an AI barter, but it does not mark offers, change amounts, or apply the trade.

## Mental Model

The helper is a recommendation layer around [BarterData](../../campaign/BarterData). It evaluates the currently offered barterables from the perspective of a target [IFaction](../../campaign/IFaction), then returns concrete `(barterable, count)` tuples for the caller to apply.

- `GetAutoBalanceBarterablesAdd` calculates how much value the offerer must add to fulfill a negative balance. It considers barterables owned by `offererHero`, avoids duplicate item entries already offered, prefers a suitable value ratio, and gives `GoldBarterable` a direct fast path when one item can satisfy the deficit.
- `GetAutoBalanceBarterablesToRemove` calculates which currently offered barterables and quantities can remove the value offered to the target faction. It works on a local candidate list and does not remove anything from `BarterData`.
- Both methods stop when no positive-value candidate remains. An incomplete returned list is therefore a valid result when the available barterables cannot close the balance.

## When to use and when not to use

- **Use it:** inside an AI barter workflow that already owns `BarterData`, both factions, and the offerer hero.
- **Use it:** to obtain a deterministic plan of existing barterables and counts before the caller changes `CurrentAmount`.
- **Do not use it:** as a player barter UI validator or as a replacement for `BarterManager`'s acceptance and application logic.
- **Do not assume:** the returned tuples have changed `IsOffered` or `CurrentAmount`; the caller must apply them explicitly.
- **Do not reuse:** a plan after the barter data, faction values, or current amounts have changed; the calculation is a point-in-time result.

## Dependencies

- Input state: [BarterData](../../campaign/BarterData), its offered [Barterable](../../campaign/Barterable) collection, and `CurrentAmount`/`MaxAmount`.
- Valuation: [IFaction](../../campaign/IFaction), `GetValueForFaction`, and `GetUnitValueForFaction` on each barterable.
- Ownership filters: [Hero](../../campaign/Hero) and `Barterable.OriginalOwner`; item barterables are compared by their underlying `EquipmentElement.Item`.
- Special case: `GoldBarterable` receives a direct candidate choice when its available value can satisfy the remaining deficit.
- Direct consumer: `BarterManager.MakeBalanced` applies the additions returned by `GetAutoBalanceBarterablesAdd`; the helper does not own that mutation or the final `ApplyBarterOffer` decision.

## Public members

### GetAutoBalanceBarterablesAdd

`GetAutoBalanceBarterablesAdd(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero, float fulfillRatio = 1f)` returns additions that reduce the target faction's negative barter balance. It starts from the value of the currently offered barterables, multiplies the negative value by `fulfillRatio`, and chooses available unoffered items from `offererHero` until the target is met or no candidate remains.

The returned count is capped by each barterable's available amount. This method only builds and returns a `List<(Barterable, int)>`; it does not call `SetIsOffered` or update `CurrentAmount`.

```csharp
foreach (var (barterable, count) in BarterHelper.GetAutoBalanceBarterablesAdd(
    barterData,
    factionToBalanceFor,
    offerer,
    offererHero,
    fulfillRatio: 1f))
{
    if (!barterable.IsOffered)
    {
        barterable.SetIsOffered(true);
        barterable.CurrentAmount = 0;
    }

    barterable.CurrentAmount += count;
}
```

This is the same mutation boundary used by `BarterManager.MakeBalanced`: the caller applies each recommendation after the helper returns.

### GetAutoBalanceBarterablesToRemove

`GetAutoBalanceBarterablesToRemove(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero)` returns counts to remove from currently offered barterables. It ranks positive-value offered entries using their value for the target faction and the opposing value for `offerer`, caps each removal by `CurrentAmount`, and returns the selected plan.

In v1.4.5 the method body reads `offerer` to compare unit values, but does not read `offererHero`; both remain part of the public signature. Do not invent an `offererHero` ownership filter for this method or assume it changes the barter. A caller must subtract the returned counts and revalidate the offer.

```csharp
foreach (var (barterable, count) in BarterHelper.GetAutoBalanceBarterablesToRemove(
    barterData,
    factionToBalanceFor,
    offerer,
    offererHero))
{
    barterable.CurrentAmount -= count;
    if (barterable.CurrentAmount == 0)
    {
        barterable.SetIsOffered(false);
    }
}
```

The example shows the consumer-side mutation boundary; the helper itself only returns the recommendation.

## Real example

`BarterManager.ExecuteAIBarter` creates a `BarterData` context, then calls its balancing path for each faction before checking both offer values and applying the final offer. A Campaign behavior or an extension that already sits inside that path can use the same source-backed shape:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;

public static class AiBarterBalance
{
    public static void AddMissingOffer(
        BarterData barterData,
        IFaction factionToBalanceFor,
        IFaction offerer,
        Hero offererHero)
    {
        foreach (var (barterable, count) in BarterHelper.GetAutoBalanceBarterablesAdd(
            barterData,
            factionToBalanceFor,
            offerer,
            offererHero,
            fulfillRatio: 1f))
        {
            if (!barterable.IsOffered)
            {
                barterable.SetIsOffered(true);
                barterable.CurrentAmount = 0;
            }

            barterable.CurrentAmount += count;
        }
    }
}
```

This code requires a live `BarterData` produced by the Campaign barter manager; it does not construct fake barterables or bypass `BarterManager`'s final acceptance check.

## Risks and save boundaries

- **Campaign phase:** `BarterData` is created with Campaign Models and live faction/hero context. Do not call these helpers from the main menu or after the barter context has been closed.
- **Point-in-time values:** faction valuations, offered amounts, and item duplication checks can change after the method returns. Recalculate when the offer changes.
- **No transaction:** returned tuples are not events, save records, or approvals. Applying them without the surrounding barter validation can create an offer that the other faction rejects.
- **Zero/negative candidates:** only positive-value candidates enter the balancing loops; an empty or partial result must be handled instead of interpreted as full balance.
- **Save boundary:** `BarterData`, barterables, and the returned tuple list are transient negotiation state. Persist supported Campaign state and final actions, not a cached balancing plan.

## Version note

This page follows v1.4.5 `Helpers/BarterHelper.cs`. `GetAutoBalanceBarterablesToRemove` reads `offerer` for valuation but does not read `offererHero`; the documented behavior follows the method body rather than the parameter names.

## Navigation

- [↑ API system index](../)
- [Related: BarterData](../../campaign/BarterData)
- [Related: Barterable](../../campaign/Barterable)
- [Related: IFaction](../../campaign/IFaction)
- [Related: Hero](../../campaign/Hero)
- [Related: Campaign](../../campaign/Campaign)

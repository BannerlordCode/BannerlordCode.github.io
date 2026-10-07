---
title: "ArtisanOverpricedGoodsIssueBehavior"
description: "The registrar for the 'merchants are price-fixing raw materials' issue: subscribes to OnCheckForIssueEvent and, when an artisan in a town has a merciless merchant plus any of six hard-coded goods priced above index 2, files a potential issue carrying a KeyValuePair payload of antagonist and item."
---

# ArtisanOverpricedGoodsIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArtisanOverpricedGoodsIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArtisanOverpricedGoodsIssueBehavior.cs`

## Overview

`ArtisanOverpricedGoodsIssueBehavior` is the second "**issue registrar with an inline payload**" in the issue system. Its biggest difference from [ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior) is that `OnCheckForIssue` stuffs a **`KeyValuePair<Hero, ItemObject>`** into the `PotentialIssueData`, deciding on the spot *which merchant is the antagonist* and *which raw good is being price-fixed*.

```csharp
KeyValuePair<Hero, ItemObject> keyValuePair = new KeyValuePair<Hero, ItemObject>(antagonistMerchant, requestedItem);
Campaign.Current.IssueManager.AddPotentialIssueData(
    hero, new PotentialIssueData(OnStartIssue, typeof(ArtisanOverpricedGoodsIssue), IssueBase.IssueFrequency.Common, keyValuePair));
```

`OnStartIssue` is later called, casts `pid.RelatedObject` back to `KeyValuePair<Hero, ItemObject>`, and feeds it to the constructor. **This is the canonical pattern in the issue system for collecting parameters at trigger time.**

The trigger is four independent checks chained together inside `ConditionsHold`:

1. **The issuer is in a town**: `IssueOwner.CurrentSettlement != null && IssueOwner.CurrentSettlement.IsTown`
2. **The issuer is an artisan**: `IssueOwner.IsArtisan` (equivalent to `Occupation == Occupation.Artisan`)
3. **A merciless merchant exists in town**: `GetAntagonistMerchant` randomly picks from `CurrentSettlement.Notables` someone matching `x != IssueOwner && x.IsMerchant && x.GetTraitLevel(DefaultTraits.Mercy) <= 0 && x.CanHaveCampaignIssues()` — **the cruelty requirement is hard**
4. **At least one of six raw goods is priced above index 2**: `PossibleRequestedItems` is the hard-coded id list `cow / sheep / wool / iron / leather / hardwood`, and the price test is `IssueOwner.CurrentSettlement.Town.GetItemCategoryPriceIndex(item.ItemCategory) > 2f`

## Mental Model

Think of it as **a slot in the issue system plus a one-shot snapshot of its parameters**.

- **The behavior only files; the nested classes implement.** Its effective code is under 70 lines out of 776. The registration point is `SandBoxManager.cs:164`.
- **Both branches of `OnCheckForIssue` carry different payloads.** On success it passes the `KeyValuePair<Hero, ItemObject>`; on failure it passes `new PotentialIssueData(typeof(ArtisanOverpricedGoodsIssue), IssueBase.IssueFrequency.Common)` — **type only, no factory and no payload**. The failure branch matters too: it tells `IssueManager` the issue type exists while this hero does not qualify.
- **`PossibleRequestedItems` is a `yield return` property that re-runs six `MBObjectManager.Instance.GetObject<ItemObject>(id)` calls on every enumeration.** All six ids are hard-coded literals: `cow`, `sheep`, `wool`, `iron`, `leather`, `hardwood`. **A mod cannot add a seventh from outside**, because the property is `private static` and would require replacing the whole behavior.
- **The threshold 2 is hard-coded in two places.** `ConditionsHold` writes `> 2f` (`ArtisanOverpricedGoodsIssueBehavior.cs:759`), the stay-alive test `IssueStayAliveConditions` writes `> 1.8f` (`:290`), and there is an unused `private const float HighestPriceIndexAtTown = 2f;` at `:706` — **dead code**. **Triggering is stricter than staying alive**, so once an issue starts it rarely self-expires.
- **Quantity and reward are derived from item value, not fixed.** `CalculateTradeGoodsAmountAndReward()` (`:375-379`) first computes `RequestedTradeGoodAmount = MathF.Max((int)(10000f / _requestedTradeGood.Value * IssueDifficultyMultiplier), 1)` — **the cheaper the good, the more units you must haul** — then `_goldReward = (int)(QuestHelper.GetAveragePriceOfItemInTheWorld(_requestedTradeGood) * 1.5f * RequestedTradeGoodAmount)`.
- **`OnGameLoad` back-fills missing numbers.** `:381-387` re-runs `CalculateTradeGoodsAmountAndReward()` whenever `RequestedTradeGoodAmount == 0 || _goldReward == 0`. This is the compatibility path for **old saves that predate those two fields**.
- **Stay-alive requires the antagonist to still be in the same town.** `:288-295`: price index above **1.8**, plus `CounterOfferHero.IsActive`, plus `CounterOfferHero.CurrentSettlement == IssueSettlement`. **The antagonist leaving town makes the issue vanish.**

### What the three nested types do

| Type | Base | Responsibility | Save data |
| --- | --- | --- | --- |
| `ArtisanOverpricedGoodsIssue` | [IssueBase](../IssueBase) | The issue body: title, brief, three solution paths (lord / companion / quest), reward and quantity formulas, stay-alive conditions | Save type 1 under `SaveableTypeDefiner` id **470000** |
| `ArtisanOverpricedGoodsIssueQuest` | [QuestBase](../QuestBase) | The 30-day delivery quest, the confrontation dialogue with the merchant, partial and full delivery | Save type 2 under the same definer |
| `ArtisanOverpricedGoodsIssueTypeDefiner` | `SaveableTypeDefiner` | Save type id mapping; the constructor hard-codes `base(470000)` | Itself is not saved |

## How to use

**How to obtain it.** **Do not construct it.** `public class ArtisanOverpricedGoodsIssueBehavior : CampaignBehaviorBase` is registered at campaign start; use `Campaign.Current.GetCampaignBehavior<ArtisanOverpricedGoodsIssueBehavior>()`.

```csharp
ArtisanOverpricedGoodsIssueBehavior behavior =
    Campaign.Current.GetCampaignBehavior<ArtisanOverpricedGoodsIssueBehavior>();
KeyValuePair<Hero, ItemObject> pair = new KeyValuePair<Hero, ItemObject>(antagonistMerchant, requestedItem);
```

**The most common pitfall.** **`SyncData` is empty.** No field you add survives a save/load; the trigger rules live in code, not in data.

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | The only event entry point, and it subscribes to **exactly one** event: `CampaignEvents.OnCheckForIssueEvent → OnCheckForIssue` (`ArtisanOverpricedGoodsIssueBehavior.cs:721-724`). **Unlike `ArmyNeedsSuppliesIssueBehavior` it does not listen to `ArmyDispersed`** — this issue has nothing to do with armies. |
| `OnCheckForIssue(Hero hero)` | `public void OnCheckForIssue(Hero hero)` | The trigger decision. On success it builds `KeyValuePair<Hero, ItemObject>(antagonistMerchant, requestedItem)` and files it together with the factory delegate; on failure it files a type-only `PotentialIssueData` (`:730-741`). **The payload is frozen at this instant** — the antagonist and the good are fixed then, and the antagonist leaving town later does not rewrite an issue already in flight. |
| `ConditionsHold(Hero IssueOwner, out Hero antagonistMerchant, out ItemObject requestedItem)` | `private bool ConditionsHold(Hero IssueOwner, out Hero antagonistMerchant, out ItemObject requestedItem)` | Four chained checks whose two `out` parameters **only mean anything on success** (`:748-769`). Step one requires a town plus an artisan, step two requires a merciless merchant, step three walks `PossibleRequestedItems` for the first price index above 2. **Any failed step returns false with both `out` values null.** |
| `GetAntagonistMerchant(Hero issueOwner)` | `private Hero GetAntagonistMerchant(Hero issueOwner)` | **Randomly** picks a merciless merchant from the settlement's `Notables` via `GetRandomElementWithPredicate` (`:743-746`). The predicate is `x != issueOwner && x.IsMerchant && x.GetTraitLevel(DefaultTraits.Mercy) <= 0 && x.CanHaveCampaignIssues()`. **Cruelty is a hard requirement** — a merciful merchant can never become the antagonist. |
| `PossibleRequestedItems` | `private static IEnumerable<ItemObject> PossibleRequestedItems` | A `yield return` property over **six hard-coded raw-good ids**: `cow`, `sheep`, `wool`, `iron`, `leather`, `hardwood` (`:708-719`). **Every enumeration re-runs six `MBObjectManager.Instance.GetObject<ItemObject>` lookups**, and because it is `private static`, no mod can extend the table from outside. |
| `OnStartIssue(in PotentialIssueData pid, Hero issueOwner)` | `private IssueBase OnStartIssue(in PotentialIssueData pid, Hero issueOwner)` | The factory delegate. **Casts `pid.RelatedObject` back to `KeyValuePair<Hero, ItemObject>` and passes it to the constructor** (`:771-775`). **A failed cast throws `InvalidCastException`** — that is the only type assumption in this chain. |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | **Empty implementation** (`:726-728`). All persistent state lives in the registered Issue and Quest instances. |
| `ArtisanOverpricedGoodsIssue.IssueStayAliveConditions()` | `public override bool IssueStayAliveConditions()` | Liveness test: price index **above 1.8** (looser than the trigger's 2), `CounterOfferHero.IsActive`, and `CounterOfferHero.CurrentSettlement == IssueSettlement` (`:288-295`). **The antagonist leaving town or dying ends the issue.** |
| `ArtisanOverpricedGoodsIssue.CalculateTradeGoodsAmountAndReward()` | `private void CalculateTradeGoodsAmountAndReward()` | **The single place quantity and reward are computed** (`:375-379`). Quantity is `MathF.Max((int)(10000f / itemValue * difficultyMultiplier), 1)`; reward is `worldAveragePrice × 1.5 × quantity`. **Cheap goods demand more units, but the reward floats with the world average price** — so the same issue pays differently on a different map. |
| `ArtisanOverpricedGoodsIssue.OnGameLoad()` | `protected override void OnGameLoad()` | Back-fill on load: `if (RequestedTradeGoodAmount == 0 || _goldReward == 0) CalculateTradeGoodsAmountAndReward();` (`:381-387`). This is the **compatibility path for old saves that lack those two fields**, not a bug. |
| `ArtisanOverpricedGoodsIssue.GenerateIssueQuest(string questId)` | `protected override QuestBase GenerateIssueQuest(string questId)` | Builds the 30-day quest: `new ArtisanOverpricedGoodsIssueQuest(questId, IssueOwner, CampaignTime.DaysFromNow(30f), _requestedTradeGood, RewardGold, RequestedTradeGoodAmount, CounterOfferHero)` (`:393-396`). **The `counterOfferHero` parameter exists in the quest constructor signature (`:515`) but its body never reads it** — antagonist information stays at the issue layer. |

## Examples

Register the behavior, shaped after `SandBoxManager.cs:164`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.MountAndBlade;

public class MyIssuesBootstrap : MBSubModuleBase
{
    public override void OnGameInitializationStart()
    {
        base.OnGameInitializationStart();
        CampaignGameStarter starter = Campaign.Current.GetCampaignBehavior<CampaignGameStarter>();
        starter.AddBehavior(new ArtisanOverpricedGoodsIssueBehavior());
    }
}
```

Reuse the official trigger conditions for your own filter. The official checks are private, so you have to reproduce them:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.Extensions;
using TaleWorlds.CampaignSystem.Settlements;

public static bool QualifiesForOverpricedGoods(Hero candidate)
{
    if (candidate == null || !candidate.IsArtisan || candidate.CurrentSettlement == null)
    {
        return false;
    }

    Settlement town = candidate.CurrentSettlement;
    if (!town.IsTown)
    {
        return false;
    }

    bool hasAntagonist = town.Notables.Any(x => x.CharacterObject.IsHero
        && x.CanHaveCampaignIssues()
        && x.CharacterObject.HeroObject != candidate
        && x.CharacterObject.HeroObject.IsMerchant
        && x.GetTraitLevel(DefaultTraits.Mercy) <= 0);

    if (!hasAntagonist)
    {
        return false;
    }

    foreach (string itemId in new string[] { "cow", "sheep", "wool", "iron", "leather", "hardwood" })
    {
        ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>(itemId);
        if (item != null && town.Town.GetItemCategoryPriceIndex(item.ItemCategory) > 2f)
        {
            return true;
        }
    }

    return false;
}
```

Check whether an artisan already carries the issue, through the official `Hero.Issue` path:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

public static string DescribeIssueOn(Hero artisan)
{
    if (artisan == null)
    {
        return "no hero";
    }

    IssueBase issue = artisan.Issue;
    if (issue is ArtisanOverpricedGoodsIssue)
    {
        return "overpriced goods, alive=" + issue.IssueStayAliveConditions();
    }

    return issue == null ? "no issue" : issue.GetType().Name;
}
```

File your own payload-carrying potential issue, hand-writing the trigger the way `OnCheckForIssue` does:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

public static void FileOverpricedGoods(Hero artisan, Hero antagonist, ItemObject goods)
{
    if (Campaign.Current == null || artisan == null || antagonist == null || goods == null)
    {
        return;
    }

    KeyValuePair<Hero, ItemObject> payload = new KeyValuePair<Hero, ItemObject>(antagonist, goods);
    Campaign.Current.IssueManager.AddPotentialIssueData(
        artisan,
        new PotentialIssueData(typeof(ArtisanOverpricedGoodsIssue), IssueBase.IssueFrequency.Common, payload));
}
```

Listen to the issue events for your own UI:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Issues;

public class MyIssueWatcher : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnNewIssueCreatedEvent.AddNonSerializedListener(this, OnNewIssueCreated);
        CampaignEvents.OnIssueUpdatedEvent.AddNonSerializedListener(this, OnIssueUpdated);
    }

    private void OnNewIssueCreated(IssueBase issue)
    {
        if (issue is ArtisanOverpricedGoodsIssue)
        {
            Debug.Print("an overpriced-goods issue appeared on " + issue.IssueOwner.Name.ToString(), 0);
        }
    }

    private void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)
    {
        if (issue is ArtisanOverpricedGoodsIssue)
        {
            Debug.Print("overpriced-goods update = " + details, 0);
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## Risks and crash boundaries

- **`SyncData` is empty.** You cannot hang persistent fields on the behavior. Changing the trigger rules means replacing the whole behavior, because `ConditionsHold`, `GetAntagonistMerchant`, and `PossibleRequestedItems` are all `private`.
- **`PossibleRequestedItems` knows only six raw goods and cannot be extended.** It is a `private static` `yield return` property over hard-coded `cow / sheep / wool / iron / leather / hardwood`. **Adding a seventh requires copying the entire behavior class.**
- **Every enumeration of `PossibleRequestedItems` re-runs six MBObjectManager lookups.** `ConditionsHold` calls it hourly for every candidate hero, which is measurable duplicated work.
- **The two price thresholds disagree.** Trigger uses `> 2f` (`:759`), stay-alive uses `> 1.8f` (`:290`). **That means an issue once raised almost never expires on its own** — the only route out is the antagonist leaving or dying.
- **`HighestPriceIndexAtTown = 2f` is dead code.** It is declared at `:706` but `ConditionsHold` writes the literal `2f`. Do not cite it.
- **The antagonist must have `Mercy <= 0`.** A town whose merchants are all merciful can never trigger this issue, **no matter how high the price index goes**.
- **The antagonist is chosen at random.** `GetRandomElementWithPredicate`'s result is **frozen into the payload at filing time and never re-drawn**, so two artisans triggering one after another in the same town can end up with different merchants.
- **`OnStartIssue`'s cast is unguarded.** `(KeyValuePair<Hero, ItemObject>)pid.RelatedObject` throws `InvalidCastException` when the payload type does not match. **If you file a `PotentialIssueData` yourself without the `KeyValuePair<Hero, ItemObject>` payload, the campaign crashes the moment that issue is drawn.**
- **`IssueStayAliveConditions` lets the antagonist's departure end the issue.** That path goes through `IssueBase`'s liveness check, so the player sees no "issue cancelled" penalty — the issue simply stops existing.
- **`GenerateIssueQuest` passes `counterOfferHero` into the quest constructor, which never reads it.** The signature accepts it (`:515`) and the body ignores it. **Do not expect the quest layer to have access to the antagonist.**
- **`QuestHelper.GetAveragePriceOfItemInTheWorld` makes the reward map-dependent.** The same issue pays differently under a different world average, **so the reward is not a save-independent constant**.
- **`OnGameLoad`'s back-fill is silent.** Reading `RequestedTradeGoodAmount == 0` triggers a recompute and overwrite, so deliberately setting it to 0 will be undone on the next load.
- **Save id 470000 is hard-coded.** `ArtisanOverpricedGoodsIssueTypeDefiner` hard-codes `base(470000)`. **Copying it collides on save id.**

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArtisanOverpricedGoodsIssueBehavior.cs` is a 776-line original-source file (roughly 70 lines of outer behavior plus three nested classes). Six things to check across versions: the save id `470000`; the list of six raw-good ids; the price thresholds (trigger 2 versus stay-alive 1.8); the antagonist's `Mercy <= 0` requirement; the 10000 and 1.5 coefficients inside `CalculateTradeGoodsAmountAndReward`; and the `KeyValuePair` payload shape in `OnStartIssue`. **A payload-shape change is the most dangerous: already-filed but undrawn `PotentialIssueData` in an old save would throw at the cast.**

## Dependencies

- Official registration point: `gameStarter.AddBehavior(new ArtisanOverpricedGoodsIssueBehavior());` at `SandBoxManager.cs:164`, immediately after `ArtisanCantSellProductsAtAFairPriceIssueBehavior`
- Module lifecycle entry: `OnGameInitializationStart` on [MBSubModuleBase](../../core/MBSubModuleBase) is when a mod obtains the `CampaignGameStarter`
- Issue subsystem: `AddPotentialIssueData(Hero, PotentialIssueData)` on [IssueManager](../IssueManager) is the only output channel; the fourth argument of [PotentialIssueData](../PotentialIssueData) is the payload slot unique to this type
- Issue base: [IssueBase](../IssueBase) supplies `IssueOwner`, `IssueSettlement`, `RewardGold`, and `CompleteIssueWithStayAliveConditionsFailed()`
- Quest base: [QuestBase](../QuestBase) is the parent of the nested `ArtisanOverpricedGoodsIssueQuest`
- Price model: `Settlement.Town.GetItemCategoryPriceIndex(ItemCategory)` (in the `Settlements` namespace) is the only source of the price test
- Item side: `Value` (drives the quantity) and `ItemCategory` (drives the price index) on [ItemObject](../../core-extra/ItemObject) — `CalculateTradeGoodsAmountAndReward` uses both
- Traits: `Mercy` on [DefaultTraits](../DefaultTraits) is the hard condition for antagonist selection
- Event bus: `OnCheckForIssueEvent` on [CampaignEvents](../CampaignEvents); the issue side also has `OnNewIssueCreatedEvent` and `OnIssueUpdatedEvent`
- Save: the nested `ArtisanOverpricedGoodsIssueTypeDefiner` registers the Issue and Quest as save types 1 and 2 through `SaveableTypeDefiner`
- Bucket index: [campaign API section](../)

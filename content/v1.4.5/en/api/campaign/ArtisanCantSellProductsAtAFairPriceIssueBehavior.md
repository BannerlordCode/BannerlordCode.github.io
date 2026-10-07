---
title: "ArtisanCantSellProductsAtAFairPriceIssueBehavior"
description: "The registrar for the 'local law stops artisans selling at a fair price' issue: subscribes to OnCheckForIssueEvent and, when the hero is an artisan with another eligible merchant in town and a suitable town sits within 2.25 average town-distances of the player's main party, files a potential issue whose constructor picks the target town, hero, and one of seven raw goods."
---

# ArtisanCantSellProductsAtAFairPriceIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArtisanCantSellProductsAtAFairPriceIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs`

## Overview

`ArtisanCantSellProductsAtAFairPriceIssueBehavior` is the **only one of the three artisan issue behaviors that files no payload** in `OnCheckForIssue`. It takes the "draw everything at trigger time" route instead:

```csharp
public ArtisanCantSellProductsAtAFairPriceIssue(Hero issueOwner)
    : base(issueOwner, CampaignTime.DaysFromNow(30f))
{
    _targetSettlement = SelectTargetSettlement(issueOwner);
    _targetHero = _targetSettlement.Notables.GetRandomElementWithPredicate((Hero x) => x.CanHaveCampaignIssues());
    _rawMaterialsToBeDelivered = Campaign.Current.ObjectManager.GetObject<ItemObject>(_possibleDeliveryItems.GetRandomElement());
    CounterOfferHero = SelectCounterOfferHero(issueOwner);
}
```

In other words **the target settlement, the target hero, one of seven raw goods, and the counter-offer merchant are all frozen inside the Issue constructor**. That is the mirror image of [ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior), which carries a `KeyValuePair<Hero, ItemObject>` payload from the trigger. The distinction is not stylistic: **the four values here are persisted via `[SaveableField]`**, whereas the payload variant persists them inside the `PotentialIssueData`.

The trigger is two chained steps inside `ConditionsHold` (`:985-992`):

1. `issueGiver.IsArtisan && SelectCounterOfferHero(issueGiver) != null` — the hero is an artisan, and the town still has another hero who is **not the issuer, can have issues, and is a merchant**
2. `SelectTargetSettlement(issueGiver) != null` — a suitable target settlement exists near the player's main party

## Mental Model

Think of it as **a slot in the issue system plus a four-value one-shot sampler**.

- **The behavior only files; its effective code is under 70 lines.** The registration point is `SandBoxManager.cs:163`, between `ArmyNeedsSuppliesIssueBehavior` and `ArtisanOverpricedGoodsIssueBehavior`.
- **Neither branch of `OnCheckForIssue` carries a payload.** On success it files `new PotentialIssueData(OnStartIssue, typeof(ArtisanCantSellProductsAtAFairPriceIssue), IssueBase.IssueFrequency.Common)`; on failure it files the type alone. **All parameters are re-drawn inside `OnStartIssue` via `new ArtisanCantSellProductsAtAFairPriceIssue(issueOwner)`.**
- **The selection work runs twice, and the two runs can disagree.** `ConditionsHold` calls `SelectCounterOfferHero` and `SelectTargetSettlement`; the constructor inside `OnStartIssue` calls each again. **The world can change in between**, so the target settlement chosen at trigger time may differ from the one actually used. That is the structural cost of the payload-free design.
- **The target settlement's search radius depends on the issuing town's naval capability.** `SelectTargetSettlement` (`:999-1005`) sets `navigationType = issueSettlement.OwnerClan.HasNavalNavigationCapability ? MobileParty.NavigationType.All : MobileParty.NavigationType.Default`, then `maxDistance = Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(navigationType) * 2.25f`, and finally calls `SettlementHelper.FindNearestSettlementToMobileParty(MobileParty.MainParty, navigationType, predicate)`. **The search centre is the player's main party, not the artisan's town.**
- **A target settlement must satisfy four conditions.** The predicate is `x.IsTown && x != issueSettlement && x.Notables.Any(y => y.CanHaveCampaignIssues()) && Campaign.Current.Models.MapDistanceModel.GetDistance(x, issueSettlement, isFromPort: false, isTargetingPort: false, navigationType) < maximumDistanceForSettlementSelection`.
- **The target hero is a random "eligible notable".** `_targetSettlement.Notables.GetRandomElementWithPredicate(x => x.CanHaveCampaignIssues())` — **with no null check**, so a town whose notables are all filtered out assigns null to `_targetHero`. Quest-level hooks can filter those notables out (see the stay-alive row below).
- **`_possibleDeliveryItems` is `[CachedData]` and therefore not saved.** It is `new MBList<string> { "olives", "clay", "flax", "grape", "wool", "hardwood", "hides" }`. **This is the only member in the file carrying `[CachedData]`**, meaning it is re-initialised after load, while `_rawMaterialsToBeDelivered` (`SaveableField(10)`, an `ItemObject`) is what actually enters the save.
- **Quantity and reward are linear in the difficulty multiplier.** `RawMaterialCountToBeDelivered => (int)(60f * IssueDifficultyMultiplier)` and `RewardGold => (int)(500f + 1500f * IssueDifficultyMultiplier)`. **At difficulty 1.0 that is 60 units of goods for 2000 gold.**

### What the three nested types do

| Type | Base | Responsibility | Save data |
| --- | --- | --- | --- |
| `ArtisanCantSellProductsAtAFairPriceIssue` | [IssueBase](../IssueBase) | The issue body: title, brief, lord / companion / quest solutions, target settlement and hero, the 30-day window | Save type 1 under `SaveableTypeDefiner` id **480000** |
| `ArtisanCantSellProductsAtAFairPriceIssueQuest` | [QuestBase](../QuestBase) | The delivery conversation and the run to the target settlement | Save type 2 under the same definer |
| `ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner` | `SaveableTypeDefiner` | Save type id mapping; the constructor hard-codes `base(480000)` | Itself is not saved |

## How to use

**How to obtain it.** **Do not construct it.** It is a `CampaignBehaviorBase`; reach the live instance through `Campaign.Current.GetCampaignBehavior<ArtisanCantSellProductsAtAFairPriceIssueBehavior>()`. The per-issue entry point the page documents takes a `Hero`.

```csharp
ArtisanCantSellProductsAtAFairPriceIssueBehavior behavior =
    Campaign.Current.GetCampaignBehavior<ArtisanCantSellProductsAtAFairPriceIssueBehavior>();
if (behavior != null) { /* behavior is live and subscribed */ }
```

**The most common pitfall.** **`SyncData` is empty.** You cannot hang persistent fields on the behavior, so changing the trigger means replacing the whole behavior.

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | The only event entry point, subscribing to **exactly one** event: `CampaignEvents.OnCheckForIssueEvent → OnCheckForIssue` (`ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs:968-971`). **The nested quest has four separate subscriptions of its own** (`BeforeGameMenuOpenedEvent`, `HeroKilledEvent`, `OnClanChangedKingdomEvent`, `WarDeclared`), but those belong to the quest, not to this behavior. |
| `OnCheckForIssue(Hero hero)` | `public void OnCheckForIssue(Hero hero)` | Runs the two-step decision and files. On success it passes the `OnStartIssue` factory; on failure it passes the type alone (`:973-983`). **Neither branch carries a payload** — the parameters are re-drawn inside `OnStartIssue`. |
| `ConditionsHold(Hero issueGiver)` | `private bool ConditionsHold(Hero issueGiver)` | Two chained checks (`:985-992`): artisan plus an existing counter-offer hero in town; then a target settlement reachable from the player's main party. **The second step performs a full distance query**, which makes it the most expensive part of this behavior. |
| `SelectCounterOfferHero(Hero issueGiver)` | `private static Hero SelectCounterOfferHero(Hero issueGiver)` | Takes the **first** matching notable (via `FirstOrDefault`, not random) satisfying `x.CharacterObject.IsHero && x.CanHaveCampaignIssues() && x.CharacterObject.HeroObject != issueGiver && x.CharacterObject.HeroObject.IsMerchant` (`:994-997`). **Note the comparison is `x.CharacterObject.HeroObject != issueGiver`, two layers of unwrapping.** |
| `SelectTargetSettlement(Hero issueGiver)` | `private static Settlement SelectTargetSettlement(Hero issueGiver)` | Picks the target settlement (`:999-1005`). **Centred on the player's main party**, not on the artisan. The distance ceiling is `GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(navigationType) * 2.25f`, with `navigationType` decided by `issueSettlement.OwnerClan.HasNavalNavigationCapability`. The predicate requires a town, at least one notable who can have issues, and a distance under the ceiling. **A null `issueSettlement.OwnerClan` throws.** |
| `OnStartIssue(in PotentialIssueData pid, Hero issueOwner)` | `private IssueBase OnStartIssue(in PotentialIssueData pid, Hero issueOwner)` | The factory delegate. **It never reads `pid.RelatedObject`** and simply does `new ArtisanCantSellProductsAtAFairPriceIssue(issueOwner)` (`:1007-1010`). **Unlike the cast-based factory in `ArtisanOverpricedGoodsIssueBehavior`, there is no type assumption here and therefore no `InvalidCastException` risk.** |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | **Empty implementation** (`:1012-1014`). All persistent state lives in the registered Issue and Quest instances. |
| `_possibleDeliveryItems` | `[CachedData] private readonly MBList<string> _possibleDeliveryItems` | The id table of seven deliverable raw goods: `olives`, `clay`, `flax`, `grape`, `wool`, `hardwood`, `hides` (`:33`). **It carries `[CachedData]` and is not saved** — it is re-initialised after load, while the value that actually enters the save is the `ItemObject` `_rawMaterialsToBeDelivered` under `SaveableField(10)`. |
| `ArtisanCantSellProductsAtAFairPriceIssue` constructor | `public ArtisanCantSellProductsAtAFairPriceIssue(Hero issueOwner)` | **Freezes four parameters in one go** (`:257-265`): target settlement, a random target hero, one random raw good resolved through `ObjectManager.GetObject<ItemObject>(id)`, and the counter-offer merchant. **The window is hard-coded at 30 days via `CampaignTime.DaysFromNow(30f)`.** |
| `ArtisanCantSellProductsAtAFairPriceIssue.IssueStayAliveConditions()` | `public override bool IssueStayAliveConditions()` | Liveness test (`:409-415`): `CounterOfferHero != null && _targetHero.IsActive && CounterOfferHero.IsActive`, then `CounterOfferHero.CurrentSettlement == IssueSettlement`. **It checks no price index at all** — only the two heroes' active state and the merchant's location, which is a structural difference from `ArtisanOverpricedGoodsIssueBehavior`'s `> 1.8f` test. |
| `ArtisanCantSellProductsAtAFairPriceIssue.GenerateIssueQuest(string questId)` | `protected override QuestBase GenerateIssueQuest(string questId)` | Builds an **18-day** quest (`:384-387`), passing the target settlement, the goods, the quantity, the reward, the target hero, and the counter-offer merchant. **Note the 18-day quest window does not match the issue's 30 days** — `IssueDuration = 30` is a dead constant, and the value actually in force is `CampaignTime.DaysFromNow(18f)`. |
| `ArtisanCantSellProductsAtAFairPriceIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested` | `public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)` | **A hidden quest-level hook** (`:862-868`): `if (hero == _targetHero) result = false;`. It **actively removes the target hero from the set of heroes who can have issues**, preventing the player from triggering the same issue repeatedly on the same person in town. **In 1.4.5 only this issue uses that hook.** |

## Examples

Register the behavior, shaped after `SandBoxManager.cs:163`:

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
        starter.AddBehavior(new ArtisanCantSellProductsAtAFairPriceIssueBehavior());
    }
}
```

Reuse the official trigger conditions for your own filter. The official checks are private, so you have to reproduce them:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static bool QualifiesForCantSell(Hero candidate)
{
    if (candidate == null || !candidate.IsArtisan || candidate.CurrentSettlement == null)
    {
        return false;
    }

    bool hasCounterOffer = candidate.CurrentSettlement.Notables.Any(x => x.CharacterObject.IsHero
        && x.CanHaveCampaignIssues()
        && x.CharacterObject.HeroObject != candidate
        && x.CharacterObject.HeroObject.IsMerchant);

    if (!hasCounterOffer)
    {
        return false;
    }

    MobileParty.NavigationType navType = candidate.CurrentSettlement.OwnerClan.HasNavalNavigationCapability
        ? MobileParty.NavigationType.All
        : MobileParty.NavigationType.Default;

    float maxDistance = Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(navType) * 2.25f;

    return SettlementHelper.FindNearestSettlementToMobileParty(MobileParty.MainParty, navType,
        (Settlement x) => x.IsTown
            && x != candidate.CurrentSettlement
            && x.Notables.Any((Hero y) => y.CanHaveCampaignIssues())
            && Campaign.Current.Models.MapDistanceModel.GetDistance(x, candidate.CurrentSettlement,
                isFromPort: false, isTargetingPort: false, navType) < maxDistance) != null;
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
    if (issue is ArtisanCantSellProductsAtAFairPriceIssue)
    {
        return "cant sell at a fair price, alive=" + issue.IssueStayAliveConditions();
    }

    return issue == null ? "no issue" : issue.GetType().Name;
}
```

Construct an Issue instance yourself, reproducing the constructor's four draws:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

public static IssueBase BuildCantSellIssue(Hero artisan)
{
    if (Campaign.Current == null || artisan == null || !artisan.IsArtisan)
    {
        return null;
    }

    ArtisanCantSellProductsAtAFairPriceIssue issue = new ArtisanCantSellProductsAtAFairPriceIssue(artisan);
    Debug.Print("issue owner = " + issue.IssueOwner.Name.ToString()
        + " settlement = " + issue.IssueSettlement.Name.ToString(), 0);
    return issue;
}
```

Use the same `ref bool` hook to remove heroes of your own from the issue candidate pool:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Extensions;

public class MyIssueFilter : CampaignBehaviorBase
{
    public Hero BlacklistedHero { get; set; }

    public override void RegisterEvents()
    {
        CampaignEvents.CanHaveCampaignIssuesEvent.AddNonSerializedListener(this, OnRequested);
    }

    private void OnRequested(Hero hero, ref bool result)
    {
        if (hero == this.BlacklistedHero)
        {
            result = false;
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## Risks and crash boundaries

- **`SyncData` is empty.** You cannot hang persistent fields on the behavior; changing the trigger means rewriting the whole behavior, because `ConditionsHold`, `SelectCounterOfferHero`, and `SelectTargetSettlement` are all `private`.
- **The selection work runs twice and the two runs may disagree.** `ConditionsHold` already called `SelectCounterOfferHero` plus `SelectTargetSettlement`, and the constructor inside `OnStartIssue` calls each again. **Hours can pass between filing and drawing, and the target settlement may have changed hands in the meantime.** This is the structural disadvantage of the payload-free design.
- **`SelectTargetSettlement` is centred on the player's main party, not the artisan.** The further the player travels, the harder it becomes to find a target — official design (it tests trade-running), but also **the thing most often misdiagnosed as a bug**.
- **`SelectTargetSettlement` throws on a null `issueSettlement.OwnerClan`.** Its first statement reads `OwnerClan.HasNavalNavigationCapability`. A town whose owning clan has dissolved will detonate it.
- **The radius is computed from the artisan's town but the search starts from the player.** `maxDistance` derives its navigation capability from **the artisan settlement's** `OwnerClan`, while `FindNearestSettlementToMobileParty` starts at **the player's main party**. **Mixing land and sea capability across those two points yields a strange candidate set.**
- **The target hero draw does not null-check.** `_targetSettlement.Notables.GetRandomElementWithPredicate(x => x.CanHaveCampaignIssues())` feeds straight into `_targetHero`. If the predicate matches nothing, a null is stored, and the later `_targetHero.IsActive` inside `IssueStayAliveConditions` throws.
- **`_possibleDeliveryItems` is `[CachedData]` and not saved.** It is the **only member in the file with that attribute**, and it must stay `readonly` and initialised at the field declaration — **move it into a constructor and rebuilt instances after a load get nothing.**
- **The issue window is 30 days but the quest window is 18.** `IssueDuration = 30` (`:26`) is dead code; the value in force is `CampaignTime.DaysFromNow(18f)` inside `GenerateIssueQuest`. **Do not reason about this issue's deadline as 30 days.**
- **`QuestTimeLimit = 18`, `RequiredSkillLevelForCompanion = 120`, and `BaseRewardGold = 500` are also dead constants.** The effective reward is `RewardGold => (int)(500f + 1500f * IssueDifficultyMultiplier)`, and the real skill gate lives in `GetAlternativeSolutionSkill`.
- **`IssueStayAliveConditions` checks no price.** It only checks `CounterOfferHero != null`, both heroes' active flags, and whether the merchant is still in the original town. **A collapsing market does not end the issue** — a structural difference from `ArtisanOverpricedGoodsIssueBehavior`'s `> 1.8f` rule.
- **The target hero is quietly excluded by `OnHeroCanHaveCampaignIssuesInfoIsRequested`.** Once the quest starts, `result = false`, so the player can no longer trigger the same issue on that hero in town. **Deliberate, but easy to mistake for a broken condition.**
- **Save id 480000 is hard-coded.** `ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner` hard-codes `base(480000)`. **Copying it collides on save id.**

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs` is a 1015-line original-source file (roughly 65 lines of outer behavior plus three nested classes). Seven things to check across versions: the save id `480000`; the list of seven raw-good ids; the distance coefficient `2.25f`; the quantity coefficient `60f`; the reward coefficients `500f + 1500f`; the 18-day quest window versus the 30-day issue window mismatch; and whether `_possibleDeliveryItems` still carries `[CachedData]`. **If `[CachedData]` were removed, the goods list becomes null after a load and `GetRandomElement()` inside the constructor throws.**

## Dependencies

- Official registration point: `gameStarter.AddBehavior(new ArtisanCantSellProductsAtAFairPriceIssueBehavior());` at `SandBoxManager.cs:163`, between `ArmyNeedsSuppliesIssueBehavior` and `ArtisanOverpricedGoodsIssueBehavior`
- Module lifecycle entry: `OnGameInitializationStart` on [MBSubModuleBase](../../core/MBSubModuleBase) is when a mod obtains the `CampaignGameStarter`
- Issue subsystem: `AddPotentialIssueData(Hero, PotentialIssueData)` on [IssueManager](../IssueManager) is the only output channel, and **this type uses the payload-free constructor form**
- Issue base: [IssueBase](../IssueBase) supplies `IssueOwner`, `IssueSettlement`, `RewardGold`, and `CompleteIssueWithStayAliveConditionsFailed()`
- Quest base: [QuestBase](../QuestBase) is the parent of the nested `ArtisanCantSellProductsAtAFairPriceIssueQuest`, which carries four event subscriptions of its own
- Target-settlement filter: `SettlementHelper.FindNearestSettlementToMobileParty` plus `GetDistance` on [MapDistanceModel](../MapDistanceModel), the sole source of the distance test
- Navigation capability: `MobileParty.NavigationType` and `Clan.HasNavalNavigationCapability` from the `TaleWorlds.CampaignSystem.Party` namespace
- Item side: [ItemObject](../../core-extra/ItemObject) resolved through `Campaign.Current.ObjectManager.GetObject<ItemObject>(id)` against the seven hard-coded ids
- Event bus: `OnCheckForIssueEvent` on [CampaignEvents](../CampaignEvents); the issue side also has `OnNewIssueCreatedEvent`, `OnIssueUpdatedEvent`, and `CanHaveCampaignIssuesEvent`
- Bucket index: [campaign API section](../)

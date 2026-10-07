---
title: "ArmyNeedsSuppliesIssueBehavior"
description: "The registrar for the 'army needs supplies' issue: subscribes to OnCheckForIssueEvent and ArmyDispersed, files a potential issue when a kingdom lord who leads his own army with cohesion above 80 qualifies, and cancels the issue when the army disperses."
---

# ArmyNeedsSuppliesIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArmyNeedsSuppliesIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArmyNeedsSuppliesIssueBehavior.cs`

## Overview

`ArmyNeedsSuppliesIssueBehavior` is the **typical registrar of the CampaignSystem issue (Issue) subsystem**, not a gameplay-logic class. Its own public surface is two methods (`OnCheckForIssue`, `OnArmyDispersed`) plus two overrides, and **all of its effective code is under 60 lines** — the rest of the 642 lines belong to its three nested classes. It does three things:

1. In `RegisterEvents()` it subscribes to `CampaignEvents.OnCheckForIssueEvent` and `CampaignEvents.ArmyDispersed`
2. In `OnCheckForIssue(Hero)` it decides whether that hero meets the trigger conditions and, if so, files potential issue data via `Campaign.Current.IssueManager.AddPotentialIssueData(...)`
3. In `OnArmyDispersed` it detects army dispersion and force-ends the issue attached to that army's leader

In the architecture it carries the **"plugin entry point of the issue system"** slot. The skeleton is provided by [IssueManager](../IssueManager) and [IssueBase](../IssueBase); every concrete issue (out of supplies, artisan cannot sell, merchants price-fixing, extorted by bandits, …) ships its own `CampaignBehaviorBase` subclass plugged in with exactly this shape. `gameStarter.AddBehavior(new ArmyNeedsSuppliesIssueBehavior());` at `SandBoxManager.cs:162` is the official registration point.

It contains three nested types:
- `ArmyNeedsSuppliesIssue : IssueBase` — the issue itself (title, brief, preconditions, stay-alive conditions, quest factory)
- `ArmyNeedsSuppliesIssueQuest : QuestBase` — the 15-day supply-running quest
- `ArmyNeedsSuppliesIssueTypeDefiner : SaveableTypeDefiner` — save id **585800**, registering the two classes above as save types 1 and 2

## Mental Model

Think of it as **a slot in the issue system**.

- **Two steps: the behavior files, IssueManager decides.** The `AddPotentialIssueData` call inside `OnCheckForIssue` **only records "this hero is eligible to raise this issue"**. Whether the issue actually appears and enters a conversation is decided later by `IssueManager` on a subsequent tick, drawing against `IssueBase.IssueFrequency`. **The frequency here is `VeryCommon`** (`ArmyNeedsSuppliesIssueBehavior.cs:595`), so it surfaces often among qualifying lords.
- **Both branches file data, but with different payloads.** When the conditions hold it files `new PotentialIssueData(OnStartIssue, typeof(...), IssueBase.IssueFrequency.VeryCommon)` — **with a factory delegate**. Otherwise it files `new PotentialIssueData(typeof(...), IssueBase.IssueFrequency.VeryCommon)` — **type only, no factory**. That second branch tells `IssueManager` the issue type exists but this hero does not qualify, which matters: it lets the manager know the player has seen this kind of issue.
- **There is exactly one trigger, and it is narrow.** `ConditionsHold` requires all of: `issueGiver.IsLord`, `issueGiver.MapFaction.IsKingdomFaction` (**a kingdom faction — clans and minor factions are excluded**), `issueGiver.PartyBelongedTo != null`, `PartyBelongedTo.Army != null`, `Army.ArmyOwner == issueGiver` (**he must lead the army himself**), and `Army.Cohesion > 80f`. **The 80 is hard-coded inside the behavior and comes from no model.**
- **The stay-alive conditions are stricter than the trigger.** `IssueBase.IssueStayAliveConditions` requires cohesion **> 40**, a clan that is not the player's, and still being a kingdom faction. **So the issue survives cohesion dropping from 90 to 50 but disappears below 40** — and `IssueStayAliveConditions` reassigns `NumberOfManInArmy` on each success, so the requested quantities move with the army's size.
- **Army dispersion is a separate cancellation path.** `OnArmyDispersed` (`ArmyNeedsSuppliesIssueBehavior.cs:605-611`) tests `army.ArmyOwner?.Issue is ArmyNeedsSuppliesIssue` and, on a hit, calls `CompleteIssueWithStayAliveConditionsFailed()`. Note it takes `ArmyOwner` before `Issue`; the `?.` covers the leader lookup, and because the whole condition must hold before the next statement dereferences `army.ArmyOwner.Issue`, the path is safe.
- **`SyncData` is empty.** That is correct: **all persistent data lives in the registered Issue and Quest instances**, and the behavior itself holds no cross-save state. This "stateless behavior, stateful issue instance" pattern holds across the whole issue subsystem.

### What the three nested types do

| Type | Base | Responsibility | Save data |
| --- | --- | --- | --- |
| `ArmyNeedsSuppliesIssue` | [IssueBase](../IssueBase) | The issue body: title, brief, precondition flags, stay-alive conditions, 15-day deadline, quantity formulas, quest factory | Save type 1 under `SaveableTypeDefiner` id **585800** |
| `ArmyNeedsSuppliesIssueQuest` | [QuestBase](../QuestBase) | The conversation and delivery flow for grain, livestock, and wine | Save type 2 under the same definer |
| `ArmyNeedsSuppliesIssueTypeDefiner` | `SaveableTypeDefiner` | Maps save type ids; the constructor hard-codes `base(585800)` | Itself is not saved |

## How to use

**How to obtain it.** **Do not construct it.** It is a `CampaignBehaviorBase` registered at campaign start; read the live one with `Campaign.Current.GetCampaignBehavior<ArmyNeedsSuppliesIssueBehavior>()`.

```csharp
ArmyNeedsSuppliesIssueBehavior behavior =
    Campaign.Current.GetCampaignBehavior<ArmyNeedsSuppliesIssueBehavior>();
Debug.Print("behavior live = " + (behavior != null), 0);
```

**The most common pitfall.** **The behavior itself has zero save fields.** `SyncData` is empty, so **you cannot hang persistent state on the behavior** — cross-save state must live on an Issue or another serialized object.

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | The only event entry point. Two subscriptions: `CampaignEvents.OnCheckForIssueEvent → OnCheckForIssue` and `CampaignEvents.ArmyDispersed → OnArmyDispersed` (`ArmyNeedsSuppliesIssueBehavior.cs:599-603`). **Both use `AddNonSerializedListener`, so the event handles never enter the save** and are re-subscribed by `CampaignBehaviorManager` after a load. |
| `OnCheckForIssue(Hero hero)` | `public void OnCheckForIssue(Hero hero)` | The uniform query entry point of the issue system, **called for every candidate hero on the map**. When the conditions hold it files `PotentialIssueData` with a factory delegate; otherwise it files type-only `PotentialIssueData` (`ArmyNeedsSuppliesIssueBehavior.cs:613-623`). **It raises nothing itself; it only registers eligibility.** |
| `OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool arg3)` | `private void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool arg3)` | Post-dispersion cleanup. Tests `army.ArmyOwner?.Issue is ArmyNeedsSuppliesIssue` and, on a hit, calls `CompleteIssueWithStayAliveConditionsFailed()` (`ArmyNeedsSuppliesIssueBehavior.cs:605-611`). **Neither `reason` nor `arg3` is used** — the issue is cancelled as a stay-alive failure regardless of why the army dispersed, so the player never takes a failure penalty for it. |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | **Empty implementation** (`ArmyNeedsSuppliesIssueBehavior.cs:639-641`). Correct by design: the behavior holds no cross-save fields, and all persistent state lives in the Issue and Quest instances managed by `IssueManager`. |
| `ArmyNeedsSuppliesIssue.IssueStayAliveConditions()` | `public override bool IssueStayAliveConditions()` | The liveness test: the army still exists, still belongs to that hero, cohesion **> 40**, clan is not the player's, and still a kingdom faction. **On success it also refreshes `NumberOfManInArmy = Army.TotalRegularCount`**, so the requested quantities track the army — this is the biggest difference from `ConditionsHold` (cohesion > 80). |
| `ArmyNeedsSuppliesIssue.CanPlayerTakeQuestConditions(...)` | `protected override bool CanPlayerTakeQuestConditions(Hero issueGiver, out PreconditionFlags flags, out Hero relationHero, out SkillObject skill, out int requiredGold)` | An OR over six precondition flags: relation below -10, player is a kingdom leader, the factions are at war, player clan tier below 1, different factions. **It returns false as soon as any flag is set**, so this issue has a high acceptance bar. |
| `ArmyNeedsSuppliesIssue.GenerateIssueQuest(string questId)` | `protected override QuestBase GenerateIssueQuest(string questId)` | Builds the quest once the player accepts: `new ArmyNeedsSuppliesIssueQuest(questId, IssueOwner, CampaignTime.DaysFromNow(15f), RewardGold, GrainAmount, LiveStockAmount, WineAmount)`. **All three quantities (`GrainAmount`, `LiveStockAmount`, `WineAmount`) are computed on the fly from `NumberOfManInArmy`** and have no dedicated save fields — so they always match the current army size. |
| `ArmyNeedsSuppliesIssue.GetFrequency()` | `public override IssueFrequency GetFrequency()` | Returns `IssueFrequency.VeryCommon`. **It uses the literal rather than the `ArmyNeedsSuppliesIssueFrequency` constant defined in the same file** (`ArmyNeedsSuppliesIssueBehavior.cs:595`) — that `private const` is dead code. |
| `ArmyNeedsSuppliesIssue.GetIssueEffectAmountInternal(IssueEffect)` | `protected override float GetIssueEffectAmountInternal(IssueEffect issueEffect)` | The ongoing effect while unresolved: **-0.1f for `DefaultIssueEffects.ClanInfluence`**, 0 for everything else. In practice, an unresolved issue steadily drains the issuer's clan influence. |

## Examples

Register the behavior, taking the `CampaignGameStarter` from `OnGameInitializationStart` the way `SandBoxManager.cs:162` does:

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
        starter.AddBehavior(new ArmyNeedsSuppliesIssueBehavior());
    }
}
```

Reuse the official trigger conditions for your own filter. Note these checks are private in the official code, so you have to reproduce them:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static bool QualifiesForArmySupplies(Hero candidate)
{
    if (candidate == null || candidate.PartyBelongedTo == null || candidate.PartyBelongedTo.Army == null)
    {
        return false;
    }

    Army army = candidate.PartyBelongedTo.Army;
    return candidate.IsLord
        && candidate.MapFaction.IsKingdomFaction
        && army.ArmyOwner == candidate
        && army.Cohesion > 80f;
}
```

Check whether a lord already carries this issue, going through the official `Hero.Issue` path:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

public static string DescribeIssueOn(Hero lord)
{
    if (lord == null)
    {
        return "no lord";
    }

    IssueBase issue = lord.Issue;
    if (issue == null)
    {
        return "no issue";
    }

    if (issue is ArmyNeedsSuppliesIssue)
    {
        return "army needs supplies, alive=" + issue.IssueStayAliveConditions();
    }

    return issue.GetType().Name;
}
```

Force-end the issue yourself. `CompleteIssueWithStayAliveConditionsFailed` is public and is the very call the behavior makes internally:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

public static void CancelSuppliesIssue(Hero lord)
{
    if (lord == null)
    {
        return;
    }

    IssueBase issue = lord.Issue;
    if (issue is ArmyNeedsSuppliesIssue)
    {
        issue.CompleteIssueWithStayAliveConditionsFailed();
        Debug.Print("issue cancelled for " + lord.Name.ToString(), 0);
    }
}
```

Listen to the issue events for your own UI. `CampaignEvents.OnIssueUpdatedEvent` is a three-argument `IMbEvent<IssueBase, IssueBase.IssueUpdateDetails, Hero>`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Issues;

public class MyIssueWatcher : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnIssueUpdatedEvent.AddNonSerializedListener(this, OnIssueUpdated);
        CampaignEvents.OnNewIssueCreatedEvent.AddNonSerializedListener(this, OnNewIssueCreated);
    }

    private void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)
    {
        if (issue is ArmyNeedsSuppliesIssue)
        {
            Debug.Print("army supplies update = " + details + " solver = "
                + (issueSolver != null ? issueSolver.Name.ToString() : "nobody"), 0);
        }
    }

    private void OnNewIssueCreated(IssueBase issue)
    {
        if (issue is ArmyNeedsSuppliesIssue)
        {
            Debug.Print("a new army supplies issue appeared", 0);
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## Risks and crash boundaries

- **The behavior itself has zero save fields.** `SyncData` is empty, which means **you cannot hang a field on the behavior and expect it to persist** — cross-save state must live on an Issue or Quest instance, or go through your own `SyncData`.
- **Subscriptions use `AddNonSerializedListener`.** Event handles do not enter the save and are re-subscribed after load by `CampaignBehaviorManager.AddBehavior`. **A mod subscribing a second handler to `OnCheckForIssueEvent` doubles the odds of the issue appearing**, because both behaviors file their own `PotentialIssueData`.
- **The trigger threshold 80 and the stay-alive threshold 40 are two hard-coded numbers.** Neither comes from a model. Changing them means replacing the whole behavior, because `ConditionsHold` is private and `IssueStayAliveConditions` is a protected override.
- **Dispersing the army cancels the issue with no failure penalty.** `OnArmyDispersed` routes to `CompleteIssueWithStayAliveConditionsFailed()` rather than `CompleteIssueWithTimedOut()`, and **`reason` is ignored entirely**. The player takes no damage for "failing" the issue when the army is smashed, but also receives no compensation.
- **`OnArmyDispersed`'s third parameter `arg3` is also unused.** In the `CampaignEvents.ArmyDispersed` signature it means "is this the player's army"; the official behavior deliberately ignores it — **the default log behavior `DefaultLogsCampaignBehavior` is the one that cares** and only notifies when `isPlayersArmy` is true.
- **`GenerateIssueQuest` recomputes quantities every time.** `GrainAmount`, `LiveStockAmount`, and `WineAmount` are all expression-bodied `MathF.Ceiling(NumberOfManInArmy / 20 * factor)` properties with **no dedicated save fields**. Army size therefore changes the displayed requirement, but a quest already in progress is never recomputed — that is deliberate, not a bug.
- **`ArmyNeedsSuppliesIssueFrequency` is dead code.** The `private const IssueBase.IssueFrequency ArmyNeedsSuppliesIssueFrequency = IssueBase.IssueFrequency.VeryCommon;` at `ArmyNeedsSuppliesIssueBehavior.cs:595` is never referenced; `GetFrequency()` writes the literal. Do not cite it.
- **`CanPlayerTakeQuestConditions` has a high bar.** Six flags, any one of which rejects: relation below -10, player is a kingdom leader, at war, clan tier below 1, different faction. **A player who is a kingdom leader cannot take this issue at all.**
- **A kingdom faction is required; clans and minor factions never qualify.** `issueGiver.MapFaction.IsKingdomFaction` appears in both `ConditionsHold` and `IssueStayAliveConditions`. **Clan lords never trigger this issue.**
- **The save id is the hard-coded 585800.** `ArmyNeedsSuppliesIssueTypeDefiner : SaveableTypeDefiner` hard-codes `base(585800)`. **Copying that definer into a mod collides on save id.**

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArmyNeedsSuppliesIssueBehavior.cs` is a 642-line original-source file: roughly 40 lines of outer behavior and three nested classes. Five things to check across versions: whether the save id `585800` changed, whether the trigger threshold 80 and stay-alive threshold 40 survive, whether the `VeryCommon` frequency was retuned, whether `IssueStayAliveConditions` still refreshes `NumberOfManInArmy`, and whether `OnArmyDispersed` still ignores `reason`. **A save-id change is the most dangerous of these — it would make the issue unreadable from old saves.**

## Dependencies

- Official registration point: `gameStarter.AddBehavior(new ArmyNeedsSuppliesIssueBehavior());` at `SandBoxManager.cs:162`, immediately followed by the two other artisan issue behaviors
- Module lifecycle entry: `OnGameInitializationStart` on [MBSubModuleBase](../../core/MBSubModuleBase) is when a mod obtains the `CampaignGameStarter`
- Issue subsystem: `AddPotentialIssueData(Hero, PotentialIssueData)` on [IssueManager](../IssueManager) is this behavior's only output channel; [PotentialIssueData](../PotentialIssueData) has a "with factory" and a "type only" form
- Issue base: [IssueBase](../IssueBase) supplies `IssueOwner`, `IssueSettlement`, `CompleteIssueWithStayAliveConditionsFailed()`, the default `RewardGold` implementation, and `IsTriedToSolveBefore`
- Quest base: [QuestBase](../QuestBase) is the parent of `ArmyNeedsSuppliesIssueQuest`, which owns the 15-day deadline and the log entries
- Campaign objects the trigger reads: [Army](../Army) (`ArmyOwner`, `Cohesion`, `TotalRegularCount`), [MobileParty](../MobileParty) (`PartyBelongedTo`), [Clan](../Clan) (`Tier`, `MapFaction`)
- Event bus: `OnCheckForIssueEvent` and `ArmyDispersed` on [CampaignEvents](../CampaignEvents), dispatched by `CampaignEventDispatcher`; the issue side also has `OnIssueUpdatedEvent`, `OnNewIssueCreatedEvent`, and `IssueLogAddedEvent`
- Save: the nested `ArmyNeedsSuppliesIssueTypeDefiner` registers the Issue and Quest as save types 1 and 2 through `SaveableTypeDefiner`
- Bucket index: [campaign API section](../)

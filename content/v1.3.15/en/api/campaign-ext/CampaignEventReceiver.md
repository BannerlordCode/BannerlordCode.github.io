---
title: "CampaignEventReceiver"
description: "The abstract contract base for the campaign event pipeline — declares ~275 empty virtual On* hooks shared by the CampaignEvents hub, the CampaignEventDispatcher, and every campaign behavior. Modders almost never inherit or instantiate it; they subscribe via CampaignBehaviorBase + CampaignEvents."
---

# CampaignEventReceiver

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class CampaignEventReceiver`  
**Base:** none (root abstract base)  
**Source:** `TaleWorlds.CampaignSystem/CampaignEventReceiver.cs`  
**Mirrors:** `CampaignEvents.cs` (`CampaignEvents : CampaignEventReceiver`), `CampaignEventDispatcher.cs` (`CampaignEventDispatcher : CampaignEventReceiver`)

## Overview

`CampaignEventReceiver` is the abstract base that defines the *shape* of every "something happened in the campaign world" notification. It declares a large family of empty `On*` hooks — hero death, settlement ownership change, clan switching kingdom, hourly ticks, and so on — each with a default no-op body. The engine invokes these hooks at the right moment so that any system that cares can react. It is the shared contract that links the event bus ([CampaignEvents](../CampaignEvents/)), the dispatcher ([CampaignEventDispatcher](../CampaignEventDispatcher/)), and your own behaviors, but it is not something you normally subclass directly.

## Mental Model

Think of `CampaignEventReceiver` as the **plug standard for the campaign event bus**, not as an object you ever `new` up. It does nothing on its own — every `On*` body is just `{}` — it is simply a catalog of "which events the campaign can broadcast". Three direct subclasses play distinct roles:

- **`CampaignEvents`** is the event **hub/bus**. It holds one `MbEvent<...>` multicast delegate field per event and overrides each `On*` to forward the call into the matching `MbEvent.Invoke(...)`. The static properties modders subscribe to (e.g. `CampaignEvents.HeroKilledEvent`) are exposed here.
- **`CampaignEventDispatcher`** is the event **dispatcher**. Its `On*` overrides loop over the `_eventReceivers` array and forward the same event to every receiver in turn. What the game actually calls is `CampaignEventDispatcher.Instance.OnX(...)`.
- **Your `CampaignBehaviorBase` subclass** does **not** inherit `CampaignEventReceiver`. A behavior "listens" by registering a lambda against a `MbEvent` exposed by `CampaignEvents` inside `RegisterEvents()`; it is *not* in the dispatcher's `_eventReceivers` array.

By default `_eventReceivers` contains exactly three entries — `CampaignEvents`, `IssueManager`, and `QuestManager` — created in `Campaign.cs` as `new CampaignEventDispatcher(new CampaignEventReceiver[3] { CampaignEvents, IssueManager, QuestManager })`. You only become a fourth receiver if you explicitly call `Campaign.Current.AddCampaignEventReceiver(receiver)`.

### How one event flows

Taking "a hero was killed" as an example, the call chain is:

```
KillCharacterAction.Apply(...)                         // something changes world state
  └─ CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)
       └─ foreach receiver in _eventReceivers:          // [CampaignEvents, IssueManager, QuestManager, ...]
            receiver.OnHeroKilled(...)                  // base no-op / CampaignEvents forward
                 └─ Instance._heroKilled.Invoke(...)    // CampaignEvents multicast delegate
                      └─ your lambda (registered in RegisterEvents)
```

In short: `On*` is the **engine → receiver** push entry point, whereas the place a modder actually hooks is `AddNonSerializedListener` on the static `IMbEvent<...>` property exposed by `CampaignEvents`. **Do not override `On*`, and do not `new` a `CampaignEventReceiver`.**

## When to Use / When NOT to Use

**Use it the correct way (the real path):**

- Write a `CampaignBehaviorBase` subclass and, inside `RegisterEvents()`, subscribe to the event you care about with `CampaignEvents.<Event>Event.AddNonSerializedListener(this, handler)`.
- When you need to change world state yourself, call the matching `*Action.Apply` (e.g. `ChangeOwnerOfSettlementAction.Apply` to transfer a settlement, `KillCharacterAction.ApplyBy...` to kill a hero) — **do not** directly mutate fields like `Hero.Gold` or `Settlement.OwnerClan`.
- For per-hour / per-day periodic logic, override the behavior's own `HourlyTick()` / `DailyTick()` (these are also `On*` hooks driven by the dispatcher on schedule) rather than mutating state inside an event callback.

**Do NOT do these (anti-patterns):**

- ❌ `new CampaignEventReceiver()` and override `On*` — it is just an empty shell, and no event stream flows through it (unless you also `AddCampaignEventReceiver`, which is usually redundant with the behavior system).
- ❌ Directly `hero.Gold += 1000` or `settlement.OwnerClan = clan` inside an event callback — bypassing `*Action.Apply` drops side effects (notifications, relations, influence, save dirty flags) and can cause **double-application / save desync** with other systems running in the same frame.
- ❌ Synchronously triggering another event that re-enters the pipeline from inside an `On*` callback (e.g. `KillCharacterAction.Apply` again inside `OnHeroKilled`) — the dispatcher is iterating `_eventReceivers`, so re-entrancy causes ordering-dependent bugs or exceptions. Defer such chain reactions to `DailyTick` / `HourlyTick`.
- ❌ Subscribing to `CampaignEvents` outside `RegisterEvents()` — see the Risks section on serialization / reload.

## Dependencies

**Upstream (who invokes these `On*`):**

- [CampaignEventDispatcher](../CampaignEventDispatcher/) — the real dispatcher; `Campaign` broadcasts each event through it.
- [Campaign](../../campaign/Campaign/) — owns the `CampaignEventDispatcher` and `CampaignEvents`, and drives events during ticks / load / battle.
- The various `*Action` types (e.g. [KillCharacterAction](../KillCharacterAction/), [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/), [ChangeRelationAction](../ChangeRelationAction/)) — they raise the matching `On*` when world state changes.

**Downstream (who receives and reacts):**

- [CampaignEvents](../CampaignEvents/) — the hub implementation that forwards `On*` to `IMbEvent` listeners.
- Your own [CampaignBehaviorBase](../CampaignBehaviorBase/) subclass (subscribes via `RegisterEvents`, not by inheriting this class).
- `IssueManager` / `QuestManager` — the two built-in receivers already in `_eventReceivers`.

**Related Events / Behaviors / Actions / Save points:**

- Event-bus entry point: [CampaignEvents](../CampaignEvents/) (all `...Event` static properties).
- Behavior contract: [ICampaignBehavior](../ICampaignBehavior/), [CampaignBehaviorBase](../CampaignBehaviorBase/).
- State changes should go through Actions: [KillCharacterAction](../KillCharacterAction/), [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/), [ChangeRelationAction](../ChangeRelationAction/), [ChangeKingdomAction](../ChangeKingdomAction/), [MakePeaceAction](../MakePeaceAction/), [DeclareWarAction](../DeclareWarAction/).
- Domain objects involved (all derive from [MBObjectBase](../MBObjectBase/)): [Hero](../../campaign/Hero/), [Settlement](../../campaign/Settlement/), [Clan](../../campaign/Clan/), [Kingdom](../../campaign/Kingdom/), [MobileParty](../../campaign/MobileParty/), [IssueBase](../IssueBase/).
- Save lifecycle: [SaveManager](../../save-system/SaveManager/) (`OnBeforeSave` / `OnSaveStarted` / `OnSaveOver` / `OnGameLoaded` are all hooks of this class).

## Risks

> Most `CampaignEventReceiver` hooks are invoked **synchronously in the middle of a campaign tick**. The ceiling for the following mistakes is a crash, a hang, or a corrupted save.

1. **Re-entrancy / ordering bugs inside event callbacks.** `CampaignEventDispatcher` iterates `_eventReceivers` with a `for` loop, calling `receiver.OnX(...)` one by one. If your callback synchronously raises another broadcast event (especially re-entering the same `On*`), you nest the iteration, mutate the collection, or produce unexpected double logic. For chained changes, collect intent first and apply it in `DailyTick` / `HourlyTick`.

2. **Mutating fields instead of going through `*Action.Apply`.** Writing `settlement.OwnerClan = clan` inside `OnSettlementOwnerChanged` does not trigger the associated faction relations, influence, vassal, or save-dirty updates; worse, if another system already computed against the old state in the same frame, you get **double application / save desync**. Always route world-state changes through the matching Action (see Dependencies).

3. **Listeners are not serialized (`AddNonSerializedListener`).** `MbEvent` only offers `AddNonSerializedListener`, so a subscription record is **not serialized into the save**. Therefore:
   - Subscribe inside `CampaignBehaviorBase.RegisterEvents()` — `Campaign` re-invokes `RegisterEvents` after `OnGameLoaded`, so the subscription is restored.
   - Subscribing elsewhere (e.g. a constructor, a conversation script, a UI callback) means the subscription is lost after load, and if the `owner` has become invalid you leave a dangling reference.
   - Pass `this` (the behavior) as `owner` so `CampaignEvents.RemoveListeners(this)` can clean up correctly on unload/reload. A closure that captured a specific `Hero` / `Settlement` instance goes **stale after load** because those objects are rebuilt — inside the callback, re-look-up via `stringId` (`Hero.Find(...)`) instead of holding the object reference long-term.

4. **The `Can*` family is a "query / veto", not a "notification".** Hooks like `CanHeroDie`, `CanHeroMarry`, `CanHeroLeadParty`, `CanMoveToSettlement`, `IsSettlementBusy` take a `ref bool result`; the engine calls them to **ask for your vote on whether something may happen**, and you set `result = false` to veto. They are also called mid-logic, so do no heavy world mutation there and never throw — an exception breaks the whole receiver chain.

## Members (grouped by theme)

This is not the signature wall of all ~275 hooks. The hooks are grouped by the scenarios modders most often care about, with **real signature + when it fires + side effect / semantics**. The rest follow the same pattern: the name *is* the trigger, the parameters *are* the event payload, and the default body is empty.

### 1. Session / save lifecycle

These fire in order on game start, load, and save — the normal spots for behavior init / cleanup.

- `public virtual void OnNewGameCreated(CampaignGameStarter starter)` — after a new game is created. `starter` can register conversations / game menus. Side effect: world is already initialized, good for seeding initial data.
- `public virtual void OnGameEarlyLoaded(CampaignGameStarter starter)` — fires **very early** on load, right after world objects are rebuilt but before many systems are ready. Do not depend on not-yet-loaded subsystems here.
- `public virtual void OnGameLoaded(CampaignGameStarter starter)` — fires after load completes and systems are ready. Behaviors typically re-subscribe to events here / via the framework calling `RegisterEvents`.
- `public virtual void OnSessionStart(CampaignGameStarter starter)` / `OnAfterSessionStart(...)` — a session begins / after it begins; used to register Gauntlet UI, conversation lines, etc.
- `public virtual void OnBeforeSave()` / `OnSaveStarted()` / `OnSaveOver(bool isSuccessful, string saveName)` — before / at start / end of a save. Good for writing non-serialized state back into saveable fields, or rolling back on a failed save.
- `public virtual void OnGameOver()` — fires when the game ends (e.g. main hero dead with no heir).

### 2. Periodic ticks (the campaign clock)

All called by `Campaign`'s clock at the matching cadence — the place for per-frame / per-hour / per-day sweep logic.

- `public virtual void Tick(float dt)` / `MissionTick(float dt)` — every frame (with delta time). Cost-sensitive; do no heavy work here.
- `public virtual void HourlyTick()` / `QuarterHourlyTick()` — every campaign hour / quarter-hour.
- `public virtual void DailyTick()` / `WeeklyTick()` — every day / week.
- Per-object variants: `HourlyTickParty(MobileParty)`, `HourlyTickSettlement(Settlement)`, `HourlyTickClan(Clan)`, `DailyTickHero(Hero)`, `DailyTickParty(MobileParty)`, `DailyTickClan(Clan)`, `DailyTickSettlement(Settlement)`, `DailyTickTown(Town)` — the engine calls these while iterating the matching collection; the parameter is the object being ticked.
- AI-related: `AiHourlyTick(MobileParty, PartyThinkParams)`, `QuarterDailyPartyTick(MobileParty)`, `TickPartialHourlyAi(MobileParty)` — troop AI decision points.

> If your logic is "check each hero / settlement once per day", overriding `DailyTickHero` / `DailyTickSettlement` fits the engine's rhythm better than iterating manually inside `DailyTick`.

### 3. Hero lifecycle

- `public virtual void OnHeroCreated(Hero hero, bool isBornNaturally = false)` — after a hero is created (including natural birth). `isBornNaturally` distinguishes born vs `HeroCreator`-generated.
- `public virtual void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` — fires **before** `KillCharacterAction` actually executes. Matches `CampaignEvents.BeforeHeroKilledEvent`.
- `public virtual void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` — broadcast **after** the death has happened; at this point `victim.IsDead == true`. Matches `CampaignEvents.HeroKilledEvent` (`IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>`).
- `public virtual void OnHeroWounded(Hero woundedHero)` — hero wounded (not killed).
- `public virtual void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)` — after a relation value changes; includes delta, detail enum, and the "original / actual" hero pair (for faction vs personal relations).
- `public virtual void OnHeroComesOfAge(Hero hero)` / `OnHeroReachesTeenAge(Hero)` / `OnHeroGrowsOutOfInfancy(Hero)` / `OnChildConceived(Hero mother)` / `OnGivenBirth(Hero mother, List<Hero> aliveChildren, int stillbornCount)` — age-stage and birth nodes.
- `public virtual void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)` / `OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)` — captured / released.
- `public virtual void OnHeroChangedClan(Hero hero, Clan oldClan)` / `OnClanLeaderChanged(Hero oldLeader, Hero newLeader)` — hero switches clan / clan switches leader.

### 4. Settlement / fief

- `public virtual void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)` — broadcast after a settlement changes owner (with new/old lord, conqueror, reason). Matches `CampaignEvents.OnSettlementOwnerChangedEvent`. **Note:** this is a "already happened" notification; to change ownership, use `ChangeOwnerOfSettlementAction.Apply`, do not assign `OwnerClan` directly in the callback.
- `public virtual void OnBeforeSettlementEntered(MobileParty, Settlement, Hero)` / `OnSettlementEntered(...)` / `OnAfterSettlementEntered(...)` / `OnSettlementLeft(MobileParty, Settlement)` — the three moments (before / during / after) a party enters or leaves a settlement.
- `public virtual void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)` — governor change.
- `public virtual void OnVillageBeingRaided(Village)` / `OnVillageLooted(Village)` / `OnVillageStateChanged(Village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)` / `OnVillageBecomeNormal(Village)` — village raiding and state machine.
- `public virtual void OnBuildingLevelChanged(Town town, Building building, int levelChange)` — town building upgrade.

### 5. Clan / kingdom / diplomacy

- `public virtual void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)` — clan joins / leaves / switches kingdom. Matches `CampaignEvents.OnClanChangedKingdomEvent`.
- `public virtual void OnClanTierChanged(Clan clan, bool shouldNotify = true)` / `OnClanCreated(Clan clan, bool isCompanion)` / `OnClanDefected(Clan, Kingdom, Kingdom)` / `OnClanDestroyed(Clan)` — clan tier / creation / defection / destruction.
- `public virtual void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)` / `OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)` — war declared / peace made.
- `public virtual void OnKingdomCreated(Kingdom)` / `OnKingdomDestroyed(Kingdom)` / `OnRulingClanChanged(Kingdom kingdom, Clan newRulingClan)` — kingdom created / destroyed / ruling-clan changed.
- `public virtual void OnAllianceStarted(Kingdom, Kingdom)` / `OnAllianceEnded(Kingdom, Kingdom)` / `OnCallToWarAgreementStarted(...)` / `OnCallToWarAgreementEnded(...)` — alliance and war-participation agreements (present from 1.4.5).

### 6. Battle / quest / scene

- `public virtual void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)` / `OnMapEventEnded(MapEvent mapEvent)` — map event (encounter) start / end.
- `public virtual void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)` — battle starts.
- `public virtual void OnPlayerBattleEnd(MapEvent mapEvent)` / `OnPlayerDesertedBattle(int sacrificedMenCount)` — player battle ended / deserted.
- `public virtual void OnSiegeEventStarted(SiegeEvent)` / `OnSiegeEventEnded(SiegeEvent)` / `OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)` — siege events and spoils distribution.
- `public virtual void OnMissionStarted(IMission mission)` / `OnMissionEnded(IMission mission)` / `OnAfterMissionStarted(IMission iMission)` / `BeforeMissionOpened()` — mission scene start / end.
- `public virtual void OnQuestStarted(QuestBase quest)` / `OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)` / `OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)` — quest and issue lifecycle.

### 7. Economy / resources

- `public virtual void OnHeroOrPartyTradedGold((Hero, PartyBase) giver, (Hero, PartyBase) recipient, (int, string) goldAmount, bool showNotification)` — gold transfer (tuples carry `(Hero, Party)` and `(amount, reason)`). Matches `CampaignEvents.HeroOrPartyTradedGold`. This is a "transfer already happened" notification; initiate transfers via the matching economy Action, not by editing `Gold` directly.
- `public virtual void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)` / `OnClanInfluenceChanged(Clan clan, float change)` / `OnPlayerTradeProfit(int profit)` / `OnClanEarnedGoldFromTribute(Clan receiverClan, IFaction payingFaction)` — renown / influence / trade profit / tribute.

### 8. Query / veto hooks (`Can*`, `Is*`)

These are **query hooks** with a `ref bool result`. The engine asks "may X happen?" and you veto by setting `result = false` inside the method; leaving it untouched keeps the default (usually allowed). They are called mid-decision, so do no world-state mutation and never throw:

- `CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`
- `CanHeroMarry(Hero hero, ref bool result)`
- `CanHeroLeadParty(Hero hero, ref bool result)`
- `CanHeroBecomePrisoner(Hero hero, ref bool result)`
- `CanMoveToSettlement(Hero hero, ref bool result)`
- `CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`
- `CanHaveCampaignIssues(Hero hero, ref bool result)`
- `CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)`
- `CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)`
- `IsSettlementBusy(Settlement settlement, object asker, ref int flags)`

### Remaining hooks (same pattern, consult source as needed)

This class also carries ~200 more `On*` hooks (villages, caravans, workshops, barter, tournaments, romance, crafting, ships, map markers, tutorials, persuasion, hideouts, blockades, and more). They all follow the same convention: **the name is the trigger moment, the parameters are the event payload, the default body is empty, and you subscribe via the `CampaignEvents.<SameName>Event` static property**. When writing a mod and wondering "is there an event for X?", just search this class for `OnXxx` by name, then subscribe to the matching `CampaignEvents.XxxEvent`.

## Example

### Example 1: Subscribing to "hero killed" inside a behavior (the correct path)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

public class MyKillLogger : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Subscribe inside RegisterEvents; Campaign re-invokes it after load, so the subscription auto-restores.
        // Pass `this` as owner so CampaignEvents.RemoveListeners(this) can clean up.
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(
            this,
            (Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification) =>
            {
                // The callback runs synchronously mid-tick: only read and log; do not re-raise events here.
                if (victim != null && victim.IsPlayerCompanion)
                {
                    InformationManager.DisplayMessage(
                        new InformationMessage($"{victim.Name} died, killer={killer?.Name}"));
                }
            });
    }

    public override void SyncData(IDataStore dataStore)
    {
        // Nothing to persist; leave empty. Do NOT subscribe to events here.
    }
}
```

Register the behavior with `Campaign.Current.AddCampaignBehavior(new MyKillLogger());` (typically inside an `MBSubModuleBase` `OnGameStart`, guarding against double registration with `Campaign.Current.GetCampaignBehavior<MyKillLogger>()`).

### Example 2: Subscribing to "settlement owner changed" and reacting safely

```csharp
public override void RegisterEvents()
{
    CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(
        this,
        (Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero,
         ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail) =>
        {
            // This is an "ownership already changed" notification. If you want to apply your own follow-up effect,
            // go through the matching *Action.Apply rather than assigning settlement.OwnerClan directly.
            if (newOwner == Hero.MainHero && settlement.IsTown)
            {
                // e.g. grant influence to the new home fief instead of editing the Clan influence field by hand:
                // ChangeClanInfluenceAction.Apply(Hero.MainHero.Clan, 50f);
            }
        });
}
```

### Common anti-patterns (avoid these)

- **`new CampaignEventReceiver()` then override `On*`:** you get an empty shell and no event flows through it (unless you also `AddCampaignEventReceiver`, which duplicates the behavior system). Just use `CampaignBehaviorBase` + `CampaignEvents`.
- **Editing `Hero.Gold`, `Settlement.OwnerClan`, etc. directly inside an event callback:** bypassing `*Action.Apply` drops notifications, relations, influence, and save-dirty flags, and risks double counting. Route world-state changes through the matching Action.
- **Calling `KillCharacterAction.Apply` again inside `OnHeroKilled`-style callbacks:** the dispatcher is iterating `_eventReceivers`; re-entrancy there causes ordering bugs or exceptions. Defer chain reactions to `DailyTick` / `HourlyTick`.
- **Subscribing outside `RegisterEvents` / not passing `this` as owner:** the subscription is lost after load and `RemoveListeners` cannot clean up, leaving a dangling reference.

## See Also

- ↑ Parent (bucket index): [campaign-ext index](../)
- ↔ Siblings:
  - [CampaignEvents](../CampaignEvents/) — the event bus; all subscription entry points live here
  - [CampaignEventDispatcher](../CampaignEventDispatcher/) — the dispatcher that actually broadcasts events
  - [CampaignBehaviorBase](../CampaignBehaviorBase/) — the base class modders should inherit (subscribe in `RegisterEvents`)
  - [ICampaignBehavior](../ICampaignBehavior/) — the behavior contract
- Upstream / related:
  - [Campaign](../../campaign/Campaign/) — owns the dispatcher and events, drives ticks
  - Domain objects (derive from [MBObjectBase](../MBObjectBase/)): [Hero](../../campaign/Hero/), [Settlement](../../campaign/Settlement/), [Clan](../../campaign/Clan/), [Kingdom](../../campaign/Kingdom/), [MobileParty](../../campaign/MobileParty/), [IssueBase](../IssueBase/)
  - Actions for changing world state: [KillCharacterAction](../KillCharacterAction/), [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/), [ChangeRelationAction](../ChangeRelationAction/), [ChangeKingdomAction](../ChangeKingdomAction/), [MakePeaceAction](../MakePeaceAction/), [DeclareWarAction](../DeclareWarAction/)
  - Module lifecycle: [MBSubModuleBase](../../core/MBSubModuleBase/)
  - Saving: [SaveManager](../../save-system/SaveManager/)

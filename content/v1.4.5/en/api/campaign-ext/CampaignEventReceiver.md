---
title: "CampaignEventReceiver"
description: "The abstract contract base of the campaign event pipeline: it defines ~275 empty virtual On* hooks, and is the shared base of CampaignEvents (the event bus), CampaignEventDispatcher (the dispatcher), and every campaign behavior. Mod developers almost never inherit or instantiate it directly; instead they use CampaignBehaviorBase + CampaignEvents to subscribe."
---
# CampaignEventReceiver

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class CampaignEventReceiver`  
**Base:** none (it is itself an abstract base class)  
**Source path (1.4.5 authoritative):** `TaleWorlds.CampaignSystem/CampaignEventReceiver.cs`  
**Mirror implementations:** `CampaignEvents.cs` (same folder, `CampaignEvents : CampaignEventReceiver`), `CampaignEventDispatcher.cs` (same folder, `CampaignEventDispatcher : CampaignEventReceiver`)

## Overview

The notification interface for everything that "something happened" in the campaign world — it declares a large set of `On*` hooks (hero death, settlement capture, clan switching kingdom, hourly tick, and so on), each defaulting to an empty implementation, called by the engine at the matching moment so systems that care can react.

## Mental Model

Think of `CampaignEventReceiver` as the **"plug standard" of the campaign event bus**, not an object you `new`:

- It does nothing itself. Every `On*` method body is an empty `{}`. It is just a checklist of "which events the campaign broadcasts".
- It has three direct subclasses, playing different roles:
  - **`CampaignEvents`** — the event **bus/hub**. It holds one `MbEvent<...>` multicast-delegate field per event internally, and overrides each `On*` to forward the call to the matching `MbEvent.Invoke(...)`. The static properties mods subscribe to (`CampaignEvents.HeroKilledEvent`, etc.) are exposed from here.
  - **`CampaignEventDispatcher`** — the event **dispatcher**. Its `On*` override iterates the `_eventReceivers` array and forwards the same event to every receiver in turn. What the game really calls via `Campaign` is `CampaignEventDispatcher.Instance.OnX(...)`.
  - Your **`CampaignBehaviorBase` subclass** — does **not** directly inherit `CampaignEventReceiver`. A behavior "listens" to events by registering a lambda with the `MbEvent` of `CampaignEvents` inside `RegisterEvents()`; it is not inside the dispatcher's `_eventReceivers` array.
- By default `_eventReceivers` has only three entries: `CampaignEvents`, `IssueManager`, `QuestManager` (`new CampaignEventDispatcher(new CampaignEventReceiver[3] { CampaignEvents, IssueManager, QuestManager })` in `Campaign.cs`). Only if you really call `Campaign.Current.AddCampaignEventReceiver(receiver)` does it become the fourth.

### How an event flows

Taking "hero killed" as an example, the call chain is:

```
KillCharacterAction.Apply(...)                        // somewhere mutates world state
  └─ CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)
       └─ foreach receiver in _eventReceivers:        // [CampaignEvents, IssueManager, QuestManager, ...]
            receiver.OnHeroKilled(...)                 // base empty impl / CampaignEvents' forwarding
                 └─ Instance._heroKilled.Invoke(...)   // CampaignEvents' internal multicast delegate
                      └─ your lambda (registered in RegisterEvents)
```

In other words: `On*` is the "engine → receiver" push entry; while the place a mod developer really hooks is `AddNonSerializedListener` on the static `IMbEvent<...>` property exposed by `CampaignEvents`. **Do not override `On*`, and do not `new` a `CampaignEventReceiver`.**

## When to Use / When Not to Use

**How you should use it (the correct path):**

- Write a `CampaignBehaviorBase` subclass and subscribe to the events you care about inside `RegisterEvents()` with `CampaignEvents.<event>Event.AddNonSerializedListener(this, handler)`.
- When you need to actively change world state, call the matching `*Action.Apply` (e.g. `ChangeOwnerOfSettlementAction.Apply` for a capture, `KillCharacterAction.ApplyBy...` for a kill), and **do not** directly write fields such as `Hero.Gold` or `Settlement.OwnerClan`.
- When you want periodic logic every hour/day, override the behavior's own `HourlyTick()` / `DailyTick()` (they are also `On*` hooks of `CampaignEventReceiver`, called on schedule by the dispatcher), rather than mutating state inline inside an event callback.

**How you should NOT use it (anti-patterns):**

- ❌ `new CampaignEventReceiver()` then override `On*` — it is just an empty shell, and you get no event stream (unless you also `AddCampaignEventReceiver`, which is usually unnecessary and easily duplicates the behavior system).
- ❌ Directly `hero.Gold += 1000` or `settlement.OwnerClan = clan` inside an event callback — bypassing `*Action.Apply` loses side effects (notifications, relations, save dirty flags) and may produce **double application / save mismatch** with systems already in progress.
- ❌ Synchronously triggering another re-entrant event inside an `On*` callback (e.g. `KillCharacterAction.Apply` again inside `OnHeroKilled`) — the dispatcher is iterating the `_eventReceivers` array; re-entrancy causes order-dependent bugs or even exceptions. Defer such chain reactions to `DailyTick` / `HourlyTick`.
- ❌ Subscribing to `CampaignEvents` anywhere outside `RegisterEvents` — see the "Risks" section below on serialization/reload.

## Dependencies

**Upstream (who calls these On\*):**

- [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) — the real dispatcher, through which `Campaign` broadcasts each event.
- [Campaign](../../campaign/Campaign/) — holds `CampaignEventDispatcher` and `CampaignEvents`, driving events during tick / load / battle.
- The various `*Action` types (such as [KillCharacterAction](../KillCharacterAction/), [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/), [ChangeRelationAction](../ChangeRelationAction/)) — they trigger the matching `On*` when world state changes.

**Downstream (receive events and react):**

- [CampaignEvents](../CampaignEvents/) — the bus implementation, forwarding `On*` to listeners subscribed to `IMbEvent`.
- Your own [CampaignBehaviorBase](../CampaignBehaviorBase/) subclass (via `RegisterEvents`, not by inheriting this class).
- `IssueManager` / `QuestManager` — the two built-in receivers already in `_eventReceivers`.

**Related Events / Behaviors / Actions / Models / save points:**

- Event bus static entry: [CampaignEvents](../CampaignEvents/) (all `...Event` static properties).
- Behavior contracts: [ICampaignBehavior](../../campaign/ICampaignBehavior), [CampaignBehaviorBase](../CampaignBehaviorBase/).
- The Actions you should use for state changes: [KillCharacterAction](../KillCharacterAction/), [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/), [ChangeRelationAction](../ChangeRelationAction/), [ChangeKingdomAction](../ChangeKingdomAction/), [MakePeaceAction](../MakePeaceAction/), [DeclareWarAction](../DeclareWarAction/), [AddCompanionAction](../AddCompanionAction/), [RemoveCompanionAction](../RemoveCompanionAction/), [TeleportHeroAction](../TeleportHeroAction/), [SiegeAftermathAction](../SiegeAftermathAction/).
- Domain objects involved: [Hero](../../campaign/Hero/), [Settlement](../../campaign/Settlement/), [Clan](../../campaign/Clan/), [Kingdom](../../campaign/Kingdom/), [MobileParty](../../campaign/MobileParty/), [IssueBase](../../campaign/IssueBase).
- Save lifecycle: [SaveManager](../../save-system/SaveManager/) (`OnBeforeSave` / `OnSaveStarted` / `OnSaveOver` / `OnGameLoaded` are all hooks of this class).

## Risks (three big pitfalls of event handling)

> Most hooks of `CampaignEventReceiver` are called synchronously **mid-campaign-tick**. The upper bound of the following usages is a crash, a freeze, or a corrupt save.

1. **Re-entrancy / order-dependent bugs inside an event callback.** The dispatcher `CampaignEventDispatcher` uses a `for` loop to iterate `_eventReceivers` and call `receiver.OnX(...)` one by one. If you synchronously trigger another event that broadcasts inside the callback (especially re-entering the same `On*`), you nest the iteration, mutate the collection, or produce unexpected double logic. When you need chain changes, collect the intent first and execute it in `DailyTick` / `HourlyTick`.

2. **Changing fields directly instead of going through `*Action.Apply`.** Writing `settlement.OwnerClan = clan` inside `OnSettlementOwnerChanged` does not trigger the related faction relations, influence, vassals, or save dirty-flag updates; worse, if some other system already computed based on the old state in the same frame, you get **double application / save mismatch**. Always route world-state changes through the matching Action (see Dependencies).

3. **Listeners do not enter the save (`AddNonSerializedListener`).** `MbEvent` only has `AddNonSerializedListener`; the subscription record is **not serialized into the save**. Therefore:
   - You must subscribe inside `CampaignBehaviorBase.RegisterEvents()` — `Campaign` calls `RegisterEvents` again after `OnGameLoaded`, and only then is the subscription restored.
   - If you subscribe elsewhere (constructor, dialogue script, UI callback), the subscription is lost after a load, and if the `owner` is already invalid it leaves a dangling reference.
   - Pass `this` (the behavior itself) as `owner` when subscribing, so that `CampaignEvents.RemoveListeners(this)` cleans up correctly on unload/reload; a closure that captured a concrete `Hero` / `Settlement` instance will have its **old reference invalidated after a load** because those objects are rebuilt — re-look them up inside the callback with `Hero.Find(...)` by `stringId`, rather than holding object references long-term in the closure.

4. **The `Can*` family is "ask/veto", not "notify".** Hooks such as `CanHeroDie`, `CanHeroMarry`, `CanHeroLeadParty`, `CanMoveToSettlement`, `IsSettlementBusy` carry `ref bool result`; the engine calls them to **ask you to vote whether something is allowed**, and you must (or may) set `result` to `false` to veto. They are also called mid-logic; do not perform heavy world mutations inside, and especially do not throw, or you break the whole receiver chain.

## Member Reference (grouped by topic)

Below is not a signature wall of all ~275 hooks, but a categorization by the scenarios mods care about most, giving the **real signature + when it fires + side effects/semantics**. The remaining hooks follow the same pattern: the name is the semantics, the parameters are the event payload, and the default is an empty implementation.

### 1. Session / save lifecycle

These fire in order at game start, load, and save, and are the usual places for behavior init/cleanup.

- `public virtual void OnNewGameCreated(CampaignGameStarter starter)` — fires after a new game is created. `starter` can register dialogues/game menus. Side effect: the world is already initialized, good for generating initial data.
- `public virtual void OnGameEarlyLoaded(CampaignGameStarter starter)` — fires at the **earliest** point of a load, just after world objects are rebuilt but before many systems are in place. Do not depend on not-yet-loaded subsystems here.
- `public virtual void OnGameLoaded(CampaignGameStarter starter)` — fires after the load completes and systems are ready. Behaviors are usually (re)subscribed to events here or by the framework via `RegisterEvents`.
- `public virtual void OnSessionStart(CampaignGameStarter starter)` / `OnAfterSessionStart(...)` — start of a session and after start, used to register Gauntlet UI, dialogue lines, etc.
- `public virtual void OnBeforeSave()` / `OnSaveStarted()` / `OnSaveOver(bool isSuccessful, string saveName)` — before/during/after a save. Good for writing non-serialized state back to savable fields, or rolling back on save failure.
- `public virtual void OnGameOver()` — fires when the game ends (main hero dead with no heir, etc.).

### 2. Periodic ticks (campaign clock)

All called by the `Campaign` clock at the matching rhythm; the place for "every frame / every hour / every day" scanning logic.

- `public virtual void Tick(float dt)` / `MissionTick(float dt)` — every frame (with delta time). Cost-sensitive, do no heavy work inside.
- `public virtual void HourlyTick()` / `QuarterHourlyTick()` — every campaign hour / quarter-hour.
- `public virtual void DailyTick()` / `WeeklyTick()` — every day / week.
- Object-carrying variants: `HourlyTickParty(MobileParty)`, `HourlyTickSettlement(Settlement)`, `HourlyTickClan(Clan)`, `DailyTickHero(Hero)`, `DailyTickParty(MobileParty)`, `DailyTickClan(Clan)`, `DailyTickSettlement(Settlement)`, `DailyTickTown(Town)` — the engine calls these one by one while iterating the matching collection, with the parameter being the ticked object.
- AI-related: `AiHourlyTick(MobileParty, PartyThinkParams)`, `QuarterDailyPartyTick(MobileParty)`, `TickPartialHourlyAi(MobileParty)` — party AI decision timing.

> If your logic is "check every hero/settlement once a day", overriding `DailyTickHero` / `DailyTickSettlement` fits the engine rhythm better than iterating yourself inside `DailyTick`.

### 3. Hero lifecycle

- `public virtual void OnHeroCreated(Hero hero, bool isBornNaturally = false)` — fires after a hero is created (including natural birth). `isBornNaturally` distinguishes natural vs `HeroCreator`-generated.
- `public virtual void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` — fires **before** `KillCharacterAction` actually executes. Corresponds to `CampaignEvents.BeforeHeroKilledEvent`.
- `public virtual void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` — broadcast **after** the hero death has happened. At this point `victim.IsDead == true`. Corresponds to the static property `CampaignEvents.HeroKilledEvent` (`IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>`).
- `public virtual void OnHeroWounded(Hero woundedHero)` — a hero is wounded (not dead).
- `public virtual void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)` — after a relationship value between two heroes changes; includes the change amount, a detail enum, and the "original/actual" hero pair (for faction vs personal relations).
- `public virtual void OnHeroComesOfAge(Hero hero)` / `OnHeroReachesTeenAge(Hero)` / `OnHeroGrowsOutOfInfancy(Hero)` / `OnChildConceived(Hero mother)` / `OnGivenBirth(Hero mother, List<Hero> aliveChildren, int stillbornCount)` — age-stage and birth-related nodes.
- `public virtual void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)` / `OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)` — taken prisoner / released.
- `public virtual void OnHeroChangedClan(Hero hero, Clan oldClan)` / `OnClanLeaderChanged(Hero oldLeader, Hero newLeader)` — hero switches clan / clan switches leader.

### 4. Settlement / fief

- `public virtual void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)` — broadcast after a settlement changes hands (with new/old lord, conqueror, and reason). Corresponds to `CampaignEvents.OnSettlementOwnerChangedEvent`. **Note:** this is a "already happened" notification; to change ownership, go through `ChangeOwnerOfSettlementAction.Apply`, do not assign `OwnerClan` directly in the callback.
- `public virtual void OnBeforeSettlementEntered(MobileParty, Settlement, Hero)` / `OnSettlementEntered(...)` / `OnAfterSettlementEntered(...)` / `OnSettlementLeft(MobileParty, Settlement)` — the three timings (before/during/after) of a party entering/leaving a settlement.
- `public virtual void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)` — governor change.
- `public virtual void OnVillageBeingRaided(Village)` / `OnVillageLooted(Village)` / `OnVillageStateChanged(Village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)` / `OnVillageBecomeNormal(Village)` — village raiding and state machine.
- `public virtual void OnBuildingLevelChanged(Town town, Building building, int levelChange)` — town building upgrade.

### 5. Clan / Kingdom / diplomacy

- `public virtual void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)` — a clan joins/leaves/switches kingdom. Corresponds to `CampaignEvents.OnClanChangedKingdomEvent`.
- `public virtual void OnClanTierChanged(Clan clan, bool shouldNotify = true)` / `OnClanCreated(Clan clan, bool isCompanion)` / `OnClanDefected(Clan, Kingdom, Kingdom)` / `OnClanDestroyed(Clan)` — clan tier/creation/defection/destruction.
- `public virtual void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)` / `OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)` — declare war / make peace.
- `public virtual void OnKingdomCreated(Kingdom)` / `OnKingdomDestroyed(Kingdom)` / `OnRulingClanChanged(Kingdom kingdom, Clan newRulingClan)` — kingdom creation/destruction/ruling-clan change.
- `public virtual void OnAllianceStarted(Kingdom, Kingdom)` / `OnAllianceEnded(Kingdom, Kingdom)` / `OnCallToWarAgreementStarted(...)` / `OnCallToWarAgreementEnded(...)` — alliances and war-participation agreements (present since 1.4.5).

### 6. Battle / quest / scene

- `public virtual void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)` / `OnMapEventEnded(MapEvent mapEvent)` — map event (encounter) start/end.
- `public virtual void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)` — battle starts.
- `public virtual void OnPlayerBattleEnd(MapEvent mapEvent)` / `OnPlayerDesertedBattle(int sacrificedMenCount)` — player battle ended / deserted.
- `public virtual void OnSiegeEventStarted(SiegeEvent)` / `OnSiegeEventEnded(SiegeEvent)` / `OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)` — siege events and spoils distribution.
- `public virtual void OnMissionStarted(IMission mission)` / `OnMissionEnded(IMission mission)` / `OnAfterMissionStarted(IMission iMission)` / `BeforeMissionOpened()` — Mission scene start/end.
- `public virtual void OnQuestStarted(QuestBase quest)` / `OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)` / `OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)` — quest and issue lifecycle.

### 7. Economy / resources

- `public virtual void OnHeroOrPartyTradedGold((Hero, PartyBase) giver, (Hero, PartyBase) recipient, (int, string) goldAmount, bool showNotification)` — gold transfer (tuple carries `(hero, party)` and `(amount, reason)`). Corresponds to `CampaignEvents.HeroOrPartyTradedGold`. This is a "transfer already happened" notification; initiate the transfer through the matching economy Action, not by directly changing `Gold`.
- `public virtual void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)` / `OnClanInfluenceChanged(Clan clan, float change)` / `OnPlayerTradeProfit(int profit)` / `OnClanEarnedGoldFromTribute(Clan receiverClan, IFaction payingFaction)` — renown/influence/trade profit/tribute.

### 8. Query / veto class (`Can*`, `Is*`)

These are **query hooks** with `ref bool result`. The engine asks "can X be done?", and you veto by setting `result` to `false` in the method; not setting it keeps the default (usually allowed). They are called mid-decision, so do not mutate world state or throw inside:

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

This class has about two hundred more `On*` hooks (village, caravan, workshop, barter, tournament, romance, crafting, ship, map marker, tutorial, persuasion, hideout, blockade, etc.). They all follow the same convention: **the name is the firing timing, the parameters are the event payload, the default is an empty implementation, and you subscribe via the `CampaignEvents.<sameName>Event` static property**. When writing a mod and you wonder "is there an event for X", just search `OnXxx` in this class by name, then subscribe with the matching `CampaignEvents.XxxEvent`.

## Minimal Real Examples

### Example 1: subscribe to "hero killed" inside a behavior (correct path)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

public class MyKillLogger : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Subscribe inside RegisterEvents; Campaign re-calls it after a load, so the subscription auto-restores.
        // Pass owner: this so CampaignEvents.RemoveListeners(this) can clean up.
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(
            this,
            (Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification) =>
            {
                // The callback runs synchronously mid-campaign-tick: only read, only log; do not re-enter events here.
                if (victim != null && victim.IsPlayerCompanion)
                {
                    InformationManager.DisplayMessage(
                        new InformationMessage($"{victim.Name} fell, killer={killer?.Name}"));
                }
            });
    }

    public override void SyncData(IDataStore dataStore)
    {
        // Leave empty when there are no fields to save; do not subscribe to events here.
    }
}
```

Register the behavior: obtain `CampaignGameStarter` from `MBSubModuleBase.InitializeGameStarter` or `OnGameStart`, and call `AddBehavior(new MyKillLogger())`; do not call the non-existent `Campaign.Current.AddCampaignBehavior`.

### Example 2: subscribe to "settlement changed hands" inside a behavior and react safely

```csharp
public override void RegisterEvents()
{
    CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(
        this,
        (Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero,
         ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail) =>
        {
            // This is a "capture already happened" notification. If you want to apply your own follow-up,
            // go through the matching *Action.Apply, not settlement.OwnerClan = ... direct field write.
            if (newOwner == Hero.MainHero && settlement.IsTown)
            {
                // e.g. give the new capital some influence, rather than manually editing the Clan influence field:
                // ChangeClanInfluenceAction.Apply(Hero.MainHero.Clan, 50f);
            }
        });
}
```

### Common Anti-Patterns (avoid these)

- **`new CampaignEventReceiver()` then override `On*`:** you get an empty shell and no event flows through it (unless you also `AddCampaignEventReceiver`, which duplicates the behavior system). Just use `CampaignBehaviorBase` + `CampaignEvents` to subscribe.
- **Directly changing `Hero.Gold`, `Settlement.OwnerClan`, etc. inside an event callback:** bypassing `*Action.Apply` loses notifications, relations, influence, and save dirty flags, and may double-count. Route world-state changes through the matching Action.
- **Calling `KillCharacterAction.Apply` again inside a callback such as `OnHeroKilled`:** the dispatcher is iterating the `_eventReceivers` array; in-place re-entrant triggering causes order-dependent bugs or even exceptions. Defer chain reactions to `DailyTick` / `HourlyTick`.
- **Subscribing outside `RegisterEvents` / not passing `this` as owner:** the subscription is lost after a load, and `RemoveListeners` cannot clean up, leaving a dangling reference.

## Cross-Version Notes

- **v1.3.15:** this class lives at `TaleWorlds.CampaignSystem/CampaignEventReceiver.cs`, and the count of public `On*` hooks is essentially the same as 1.4.5 (1.4.5 only dropped two hooks, `OnHeroActivated` and `CollectMetadataEntries`, compared to 1.3.15; the rest align in name/signature). The subscription mechanism is also `CampaignEvents.<event>Event.AddNonSerializedListener`.
- **v1.4.5 (authoritative source of this page):** `CampaignEvents` exposes `IMbEvent<...>` through static properties (such as `HeroKilledEvent`, `OnSettlementOwnerChangedEvent`, `OnClanChangedKingdomEvent`); the dispatcher `CampaignEventDispatcher`'s `_eventReceivers` default is still `[CampaignEvents, IssueManager, QuestManager]`. Added hooks such as `OnAllianceStarted/Ended`, `OnCallToWarAgreementStarted/Ended`, `OnShipCreated`, `OnMercenaryServiceStarted`, `OnHeirSelectionOver`, for the diplomacy/ship/inheritance systems.
- Regardless of version: **mod developers must not inherit or instantiate `CampaignEventReceiver`**; uniformly use [CampaignBehaviorBase](../CampaignBehaviorBase/) + [CampaignEvents](../CampaignEvents/) to subscribe.

## See Also

- ↑ Parent (this bucket index): [campaign-ext index](../)
- ↔ Sibling:
  - [CampaignEvents](../CampaignEvents/) — the event bus, where subscription entry points live
  - [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) — the dispatcher that really broadcasts events
  - [CampaignBehaviorBase](../CampaignBehaviorBase/) — the base class mod developers should inherit (subscribe in `RegisterEvents`)
  - [ICampaignBehavior](../../campaign/ICampaignBehavior) — the behavior contract
- Related classes / upstream:
  - [Campaign](../../campaign/Campaign/) — holds the dispatcher and events, drives the tick
  - [Hero](../../campaign/Hero/), [Settlement](../../campaign/Settlement/), [Clan](../../campaign/Clan/), [Kingdom](../../campaign/Kingdom/), [MobileParty](../../campaign/MobileParty/), [IssueBase](../../campaign/IssueBase)
  - The Action to route world-state changes through: [KillCharacterAction](../KillCharacterAction/), [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/), [ChangeRelationAction](../ChangeRelationAction/), [ChangeKingdomAction](../ChangeKingdomAction/), [MakePeaceAction](../MakePeaceAction/), [DeclareWarAction](../DeclareWarAction/)
  - Module lifecycle: [MBSubModuleBase](../../core/MBSubModuleBase/)
  - Save: [SaveManager](../../save-system/SaveManager/)

---
title: "CampaignEvents"
description: "The campaign event bus directory: 258 public static IMbEvent properties paired with 269 public override triggers. Listeners fire last-in-first-out, and ClearListeners removes only one registration per call."
---

# CampaignEvents

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignEvents : CampaignEventReceiver`
**Base:** [CampaignEventReceiver](../CampaignEventReceiver) (`public abstract class`, 273 empty `public virtual void` methods); does not derive from `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/CampaignEvents.cs` (5495 lines total)

## Overview

`CampaignEvents` is **the single directory of events for the whole campaign layer**. It does no business logic; it does exactly two things: **expose the event objects**, and **set them on fire when the engine's notification arrives**. Every line a mod writes against it is, in the end, one `AddNonSerializedListener` on some `IMbEvent`.

The surface is enormous, yet **the structure is perfectly uniform**. These are the exact numbers measured in the source:

| Count | What | Where |
| --- | --- | --- |
| **258** | `public static IMbEvent...` properties | starting at `:322` `OnPlayerBodyPropertiesChangedEvent`, one every 16 lines |
| **269** | getter bodies of the form `return CampaignEvents.Instance._x;` | includes the 12 query events' getters |
| **269** | `public override void OnXxx(...)` triggers | = the 258 properties + the 12 query triggers − 1 (`RemoveListeners` is not a trigger) |
| **257** | `private readonly MbEvent<...>` fields | declared in the field block starting at `:4677` |
| **1** | `private static CampaignEvents Instance` | `get { return Campaign.Current.CampaignEvents; }` |

**It is not a self-`new`ed singleton class.** `Campaign.cs:1876` reads `this.CampaignEvents = new CampaignEvents();` — the instance is owned by `Campaign`, whose `internal CampaignEvents CampaignEvents { get; private set; }` is **`internal`**. A mod cannot reach that property, but **every static event property routes through it**, so you keep using `CampaignEvents.HeroKilled` as usual.

**The most easily missed rule: listeners are last-in-first-out.** The body of `MbEvent.AddNonSerializedListener` is

```csharp
MbEvent.EventHandlerRec eventHandlerRec = new MbEvent.EventHandlerRec(owner, action);
MbEvent.EventHandlerRec nonSerializedListenerList = this._nonSerializedListenerList;
this._nonSerializedListenerList = eventHandlerRec;
eventHandlerRec.Next = nonSerializedListenerList;
```

It **prepends** into a singly linked list, and `InvokeList` walks from the head. So **the most recently registered listener runs first**. When two behaviors both write the same field, the later-loading mod moves first.

## Mental Model

Treat it as **a one-to-one table of property/trigger pairs**, and locate yourself with four questions: *who produces, who consumes, what order, how to unsubscribe.*

**Question 1 — who produces.** All 269 `public override void OnXxx(...)` methods come from the base class [CampaignEventReceiver](../CampaignEventReceiver)'s virtual methods. The engine never calls `CampaignEvents` directly — it calls `CampaignEventDispatcher.Instance.OnXxx(...)`, and that singleton holds `Campaign.Current.CampaignEvents` and invokes its `override`. Take hero death: `CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)` forwards to `CampaignEvents.OnHeroKilled`, whose entire body is `CampaignEvents.Instance._heroKilled.Invoke(victim, killer, detail, showNotification);`

**Question 2 — who consumes.** You write, inside [CampaignBehaviorBase](../CampaignBehaviorBase)'s `RegisterEvents()`:

```csharp
CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, this.OnHeroKilled);
```

`AddNonSerializedListener(object owner, Action<...>)` takes the **owning object** and the **callback**. The owner is not decoration — it is the only thing `ClearListeners(object o)` matches on.

**Question 3 — the 258 properties are really two kinds, not three and not one.** The first kind is `IMbEvent` / `IMbEvent<T1>` / … / `IMbEvent<T1..T6>`: 246 of them, backed by `MbEvent<...>` fields. The second kind is `ReferenceIMBEvent<...>`: 12 of them, all the `Can...` / `IsSettlementBusy` / `OnBeforePlayerAgentSpawn` **queries**, backed by `ReferenceMBEvent<...>` fields, with a trailing `bool` or `int` type parameter that the trigger declares as `ref`:

```csharp
public static ReferenceIMBEvent<Hero, KillCharacterAction.KillCharacterActionDetail, bool> CanHeroDieEvent
{
    get { return CampaignEvents.Instance._canHeroDieEvent; }
}

public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)
{
    CampaignEvents.Instance._canHeroDieEvent.Invoke(hero, causeOfDeath, ref result);
}
```

`ReferenceMBEvent<T1>.Invoke(ref T1 t1)` threads the reference down the chain, so **every listener can write back to `result`**. That is the whole veto mechanism: the engine supplies a default, listeners may change it. The 12 are: `canKingdomBeDiscontinued`, `canHeroDieEvent`, `canHeroLeadPartyEvent`, `canMoveToSettlementEvent`, `canMarryEvent`, `canHeroBecomePrisonerEvent`, `canPlayerMeetWithHeroAfterConversationEvent`, `canBeGovernorOrHavePartyRoleEvent`, `canHeroEquipmentBeChangedEvent`, `canHaveCampaignIssues`, `isSettlementBusy`, `onBeforePlayerAgentSpawn`. **Their subscription delegate is `ReferenceAction<T1,T2,T3>`, not `Action<T1,T2,T3>`** — using the wrong generic delegate does not compile, which is a mercy.

**Question 4 — unsubscribing, which is where the real trap lives.** `MbEvent.ClearListeners(object o)` forwards to `ClearListenerOfList(ref list, o)`, which finds the **first** node whose `Owner == o` and unlinks it, then finishes — **one call removes exactly one registration**. `AddNonSerializedListener` lets you call it several times with the same owner, so "registered twice, unsubscribed once" leaves **a listener still running**, with no warning whatsoever.

The only broad entry point is `CampaignEvents.RemoveListeners(object obj)`: `public override void RemoveListeners(object obj)` has a body of two hundred-odd `this._xxx.ClearListeners(obj);` lines covering **all** events — but **still one registration per event**. The genuinely batched removal is `CampaignBehaviorManager.RemoveBehavior<T>()`, which calls `CampaignEventDispatcher.Instance.RemoveListeners(t)`; that too merely clears each event once. So the rule is hard: **register a given behavior on a given event exactly once.**

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `.ctor` | (compiler-generated, parameterless) | Field initializers construct the 257 `MbEvent` fields in place. `Campaign.cs:1876`'s `new CampaignEvents()` is immediately usable, **no extra initialization needed**. |
| `Instance` | `private static CampaignEvents Instance { get; }` | `get { return Campaign.Current.CampaignEvents; }`. **private** — the single path used by all 258 static properties and 269 triggers. Because it reaches through to `Campaign.Current`, **touching any event property outside a campaign NREs**, including in pure-battle scenes and the editor. |
| `OnPlayerBodyPropertiesChangedEvent` | `public static IMbEvent OnPlayerBodyPropertiesChangedEvent { get; }` | Player body properties changed. `:322`, **the very first event property** in the class, and one of the 18 zero-argument ones. Its getter body is `return CampaignEvents.Instance._onPlayerBodyPropertiesChangedEvent;` — **all 246 ordinary events have exactly this shape**, with no extra logic. |
| `HeroKilledEvent` | `public static IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> HeroKilledEvent { get; }` | Hero death — the representative four-argument event (there are 6). One of the events mods subscribe to most often; it hands you `(victim, killer, detail, showNotification)`. |
| `HeroCreated` | `public static IMbEvent<Hero, bool> HeroCreated { get; }` | A new hero is born. `:402`. The second parameter `bool` is "born naturally". |
| `DailyTickHeroEvent` | `public static IMbEvent<Hero> DailyTickHeroEvent { get; }` | **Per-hero daily tick.** `AgingCampaignBehavior` hooks it in `RegisterEvents` and runs its entire aging / coming-of-age logic from there. The representative of the 104 one-argument events, by far the largest bucket. |
| `HourlyTickEvent` / `DailyTickEvent` / `WeeklyTickEvent` | `public static IMbEvent ...Event { get; }` | Three zero-argument global periodic ticks, matching `HourlyTick()` / `DailyTick()` / `WeeklyTick()` on `CampaignEventReceiver`. **Do not hand-roll "iterate every hero / every party / every settlement"** — the engine already provides per-object tiers: `DailyTickPartyEvent`, `DailyTickSettlementEvent`, `DailyTickClanEvent`, `DailyTickHeroEvent`, `HourlyTickPartyEvent`, and so on. |
| `SettlementEntered` / `BeforeSettlementEnteredEvent` / `AfterSettlementEntered` | `public static IMbEvent<MobileParty, Settlement, Hero> ... { get; }` | The **before / during / after** trio for the player entering a settlement, all with identical parameter lists, differing only in timing. Logic that decides "may we enter" belongs on `BeforeSettlementEnteredEvent`; logic that adjusts post-entry state belongs on `AfterSettlementEntered`. |
| `CanHeroDieEvent` | `public static ReferenceIMBEvent<Hero, KillCharacterAction.KillCharacterActionDetail, bool> CanHeroDieEvent { get; }` | **A veto event**: subscribing lets you change `ref bool result` before a hero dies. The subscription signature is `ReferenceAction<Hero, KillCharacterAction.KillCharacterActionDetail, bool>` with the last parameter as `ref bool`. It is the heaviest of the 12 queries — setting `result` to false effectively grants that hero immortality. |
| `IsSettlementBusy` | `public static ReferenceIMBEvent<Settlement, object, int> IsSettlementBusy { get; }` | "Is this settlement busy right now". The trigger is `public virtual void IsSettlementBusy(Settlement settlement, object asker, ref int flags)` — **`ref int flags`, not a bool**: it is a bit flag, not a single veto bit. The only one of the 12 that does not start with `Can`. |
| `OnBeforePlayerAgentSpawn` | `public static ReferenceIMBEvent<ref MatrixFrame> OnBeforePlayerAgentSpawn { get; }` | Reposition the player agent before spawn. The trigger is `public virtual void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)`. **It is a Reference event despite the `On` prefix** — the shape is query-style. |
| `OnHeroKilled` | `public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | A **trigger**, not a subscription point. The body is one `Invoke`: `CampaignEvents.Instance._heroKilled.Invoke(victim, killer, detail, showNotification);`. **All 269 triggers have this shape**: a single `Invoke` line, default parameters matching the base verbatim. The engine reaches it indirectly via `CampaignEventDispatcher.Instance.OnHeroKilled(...)`. |
| `RemoveListeners` | `public override void RemoveListeners(object obj)` | The only `override` that is not a trigger. Its body is two hundred-odd `this._xxx.ClearListeners(obj);` lines covering **all** events. **Still only one registration per event** — it is wide, not thorough. A clean unsubscribe requires that each event was registered only once. |
| `ClearListeners` | `public void ClearListeners(object o)` | **Not on this class** — on [IMbEvent](../IMbEvent) (and `IMbEventBase`). `IMbEvent` declares only two methods, `AddNonSerializedListener` and `ClearListeners`. `MbEvent.ClearListeners` → `ClearListenerOfList` → **unlinks only the first node whose Owner matches**. |
| `Invoke` | `public void Invoke(...)` / `public void Invoke(ref T1 t1)` | **Not on this class** either — on [MbEvent](../MbEvent) and [ReferenceMBEvent](../ReferenceMBEvent) respectively. `MbEvent.Invoke()` takes no arguments; `ReferenceMBEvent<T1>.Invoke(ref T1)` threads the reference onward. `InvokeList` starts at the head, i.e. at the most recently registered listener. |

**A practical index of the 258 properties** (a high-traffic subset grouped by domain; the rest share the same shape — see `CampaignEvents.cs:322-4670`):

| Domain | Representative events (type arguments) |
| --- | --- |
| Campaign lifecycle | `OnNewGameCreatedEvent<CampaignGameStarter>` · `OnGameEarlyLoadedEvent<CampaignGameStarter>` · `OnGameLoadedEvent<CampaignGameStarter>` · `OnGameLoadFinishedEvent<>` · `OnGameOverEvent<>` · `OnBeforeSaveEvent<>` · `OnSaveStartedEvent<>` · `OnSaveOverEvent<bool,string>` · `OnCharacterCreationIsOverEvent<>` · `OnConfigChangedEvent<>` |
| Periodic ticks | `TickEvent<float>` · `MissionTickEvent<float>` · `HourlyTickEvent<>` · `DailyTickEvent<>` · `WeeklyTickEvent<>` · `DailyTickHeroEvent<Hero>` · `DailyTickPartyEvent<MobileParty>` · `DailyTickSettlementEvent<Settlement>` · `DailyTickClanEvent<Clan>` · `HourlyTickPartyEvent<MobileParty>` · `AiHourlyTickEvent<MobileParty,PartyThinkParams>` · `OnQuarterDailyPartyTick<MobileParty>` |
| Hero | `HeroLevelledUp<Hero,bool>` · `HeroGainedSkill<Hero,SkillObject,int,bool>` · `HeroCreated<Hero,bool>` · `HeroWounded<Hero>` · `HeroRelationChanged<Hero,Hero,int,bool,ChangeRelationAction.ChangeRelationDetail,Hero,Hero>` · `HeroComesOfAgeEvent<Hero>` · `HeroReachesTeenAgeEvent<Hero>` · `HeroGrowsOutOfInfancyEvent<Hero>` · `OnHeroChangedClanEvent<Hero,Clan>` · `OnHeroUnregisteredEvent<Hero>` |
| Party and army | `MobilePartyCreated<MobileParty>` · `MobilePartyDestroyed<MobileParty,PartyBase>` · `OnPartyDisbandedEvent<MobileParty,Settlement>` · `OnPartyLeaderChangedEvent<MobileParty,Hero>` · `OnPartySizeChangedEvent<PartyBase>` · `ArmyCreated<Army>` · `ArmyGathered<Army,IMapPoint>` · `OnPartyJoinedArmyEvent<MobileParty>` · `OnPartyLeftArmyEvent<MobileParty,Army>` · `ArmyOverlaySetDirtyEvent<>` |
| Settlement | `SettlementEntered<MobileParty,Settlement,Hero>` · `AfterSettlementEntered<...>` · `BeforeSettlementEnteredEvent<...>` · `OnSettlementLeftEvent<MobileParty,Settlement>` · `VillageLooted<Village>` · `VillageBeingRaided<Village>` · `AlleyOwnerChanged<Alley,Hero,Hero>` · `PrisonersChangeInSettlement<Settlement,FlattenedTroopRoster,Hero,bool>` |
| Kingdom and diplomacy | `KingdomDecisionAdded<KingdomDecision,bool>` · `KingdomDecisionConcluded<KingdomDecision,DecisionOutcome,bool>` · `RulingClanChanged<Kingdom,Clan>` · `OnClanInfluenceChangedEvent<Clan,float>` · `OnAllianceStartedEvent<Kingdom,Kingdom>` · `OnCallToWarAgreementStartedEvent<Kingdom,Kingdom,Kingdom>` · `OnPeaceOfferedToPlayerEvent<IFaction,int>` |
| Trade and items | `OnItemSoldEvent<PartyBase,PartyBase,ItemRosterElement,int,Settlement>` · `OnNewItemCraftedEvent<ItemObject,ItemModifier,bool>` · `OnCraftingOrderCompletedEvent<Town,CraftingOrder,ItemObject,Hero>` · `WorkshopOwnerChangedEvent<Workshop,Hero>` · `OnPlayerTradeProfitEvent<int>` |
| Quest and issues | `OnQuestStartedEvent<QuestBase>` · `QuestLogAddedEvent<QuestBase,bool>` · `OnNewIssueCreatedEvent<IssueBase>` · `OnIssueOwnerChangedEvent<IssueBase,Hero>` |

## Real Example

Hooking up a behavior — copied verbatim from the shape of `AgingCampaignBehavior.RegisterEvents`:

```csharp
public override void RegisterEvents()
{
    CampaignEvents.DailyTickHeroEvent.AddNonSerializedListener(this, this.DailyTickHero);
    CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, this.OnHeroKilled);
    CampaignEvents.OnGameLoadedEvent.AddNonSerializedListener(this, this.OnGameLoaded);
    CampaignEvents.PerkOpenedEvent.AddNonSerializedListener(this, this.OnPerkOpened);
}

private void DailyTickHero(Hero hero)
{
    if (hero.Age >= Campaign.Current.Models.AgeModel.BecomeOldAge)
    {
        Debug.Print(hero.Name + " is old: " + hero.Age, 0);
    }
}

private void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
{
    Debug.Print("killed " + victim.Name + " by " + (killer == null ? "nobody" : killer.Name), 0);
}
```

The four delegate signatures line up one-for-one with the four events' type arguments: `DailyTickHeroEvent` is `IMbEvent<Hero>` for an `Action<Hero>`; `HeroKilledEvent` has four; `OnGameLoadedEvent` is `IMbEvent<CampaignGameStarter>`; `PerkOpenedEvent` is `Action<Hero, PerkObject>`. **Method names are free** — C#'s method-group-to-delegate conversion goes by signature only.

A veto event (one of the 12 Reference events):

```csharp
CampaignEvents.CanHeroDieEvent.AddNonSerializedListener(this, this.CanHeroDie);

private void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)
{
    if (hero == Hero.MainHero && hero.Clan != null && hero.Clan.Heroes.Count > 1)
    {
        result = false;   // Main hero with other heirs in the clan: this blow does not land.
    }
}
```

The third parameter must be declared `ref bool`, and the event name is **capital-C `CanHeroDieEvent`** — matching `public virtual void CanHeroDie(Hero, KillCharacterAction.KillCharacterActionDetail, ref bool)` on the base class. Writing `CampaignEvents.OnHeroDieEvent`, or using `Action<Hero, KillCharacterAction.KillCharacterActionDetail, bool>`, both fail to compile.

## Risks and Boundaries

- **Listeners fire last-in-first-out.** `AddNonSerializedListener` prepends to a linked list and `InvokeList` walks from the head, so the later registration runs first. That is the **opposite** of `CampaignBehaviorManager.GetBehavior<T>()`'s "first registration wins" — do not carry intuition from one to the other.
- **`ClearListeners` removes one registration per call.** `ClearListenerOfList` finds the first node with `Owner == o`, unlinks it and stops. Registering twice with one owner and unsubscribing once leaves **a listener still running**, silently. `CampaignEvents.RemoveListeners(obj)` covers all 258 events but is still one-per-event. **Rule: one behavior, one registration, one event.**
- **The 12 query events do not take `Action`.** They are `ReferenceIMBEvent<...>` and require `ReferenceAction<...>`, with the final type parameter arriving as `ref`. Getting this wrong is a compile error — which is strictly better than silent runtime failure.
- **`IsSettlementBusy` uses `ref int flags`, not `ref bool`.** It is a bit flag rather than a single veto bit.
- **`OnBeforePlayerAgentSpawn` starts with `On` but is a Reference event.** Modifying it means `ref MatrixFrame`, not `Action`.
- **Static properties reach through `Campaign.Current`.** Every getter is `return CampaignEvents.Instance._x;` and `Instance` is `Campaign.Current.CampaignEvents`. **Touching any event property outside a campaign NREs**, including pure-battle and editor scenes.
- **`Campaign.Current.CampaignEvents` is `internal`.** A mod cannot obtain the instance, and constructing one is pointless since all its fields are `private readonly`.
- **Zero extension points.** All 258 properties are `get`-only — no `set`, no `+=`. **You cannot add your own campaign-level event to this bus**; to notify elsewhere you must hold your own `MbEvent` in a static.
- **Two properties initialize lazily.** `ArmyOverlaySetDirtyEvent` (`:2651`) and `PartyVisibilityChangedEvent` (`:2692`) have getters of the form `if ((result = Instance._x) == null) { result = (Instance._x = new MbEvent()); } return result;` — their fields are **not `readonly`**. The other 256 are. Behaviorally equivalent, but these are the only two exceptions in the class.
- **`RemoveListeners` is the one `public override` that is not a trigger.** The remaining 269 methods all have a one-line `Invoke` body.
- **Default parameters are declared twice.** `OnHeroKilled(..., bool showNotification = true)` appears once on `CampaignEventReceiver` and again on the `CampaignEvents` override. Neither is reachable from the other; they are independent compilation units.

## Cross-Version Notes

`CampaignEvents` is **one of the fastest-growing types** across the three major versions from 1.3 to 1.5. The number of `public virtual void` members on the base [CampaignEventReceiver](../CampaignEventReceiver) keeps rising — naval, the industry system, and formations each bring their own `OnShipXxx` / `OnSteamXxx` callbacks — and `CampaignEvents` mirrors them with matching properties and triggers.

**The structural constants do not change**: `public class CampaignEvents : CampaignEventReceiver` (not sealed), the `public static IMbEvent` properties, the `public override void` triggers, the `private readonly MbEvent` fields, and the `private static CampaignEvents Instance` reaching through to `Campaign.Current.CampaignEvents`. **The property count changes; the shape does not.**

The practical consequence for mod authors: **an event you already subscribe to may have its signature changed** across an upgrade (a parameter added, `ref`/value semantics altered), and *that* is what breaks compilation. New events added by the engine **cannot** affect you, since they arrive as new properties plus new virtual methods. The safest style is therefore to **subscribe only to the handful of events you actually need** rather than hooking the whole directory in one large `RegisterEvents`.

Also note that the "veto" virtual methods on `CampaignEventReceiver` (`CanHeroDie`, `CanHeroMarry`, `CanMoveToSettlement`, …) are **the engine's query entry points**. Calling them directly bypasses `CampaignEvents` dispatch entirely, so your listeners are never asked. They exist and are stable in 1.3.0, but **do not bypass `CampaignEvents` to call them**.

## Dependencies

- Base class: [CampaignEventReceiver](../CampaignEventReceiver) declares all 273 empty `public virtual void` methods; `CampaignEvents` overrides each into a one-line `Invoke`
- The producer: [CampaignEventDispatcher](../CampaignEventDispatcher)'s singleton methods hold `Campaign.Current.CampaignEvents` and call its overrides — the only channel through which the engine enters this bus
- Event object types: [MbEvent](../MbEvent) implements `IMbEvent` for 0..6 arguments (247 fields use it) and [ReferenceMBEvent](../ReferenceMBEvent) implements `ReferenceIMBEvent` (12 query fields use it); the contracts are in [IMbEvent](../IMbEvent) and `IMbEventBase`
- The host: [Campaign](../Campaign)'s `internal CampaignEvents CampaignEvents` (assigned at `Campaign.cs:1876`) and its `Models`
- The consumption convention: `RegisterEvents` on [CampaignBehaviorBase](../CampaignBehaviorBase) is the official subscription moment; [AgingCampaignBehavior](../AgingCampaignBehavior) subscribes to nine events in one call
- The linked list in [MbEvent](../MbEvent) is what produces the last-in-first-out call order
- Sibling on the same host: [GameModels](../GameModels), the model-side counterpart hanging off `Campaign`
- Bucket index: [campaign API section](../)
---
title: "CampaignEvents"
description: "The Campaign layer's central publish/subscribe event hub: mods subscribe to static events to react safely to world changes — hero deaths, settlement captures, wars, clan defections — without polling or touching internal fields."
---

# CampaignEvents

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEvents : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**Source:** `TaleWorlds.CampaignSystem/CampaignEvents.cs`

## Overview

`CampaignEvents` is the Campaign layer's central notification hub. When a hero dies, a settlement changes hands, a war is declared, a clan switches kingdoms, or gold changes ownership, it broadcasts a payload-carrying event to every subscriber. This lets your mod react to world changes the instant they happen instead of scanning the whole world every tick. It holds roughly 200 `IMbEvent<T>` delegate containers and the forwarding logic that turns `*Action` calls into broadcasts — it is not a data store.

## Mental Model

Think of `CampaignEvents` as the **broadcast loudspeaker of the campaign map**, not a box that holds data. It holds no business state like a hero list or a settlement list — it only holds the event containers and the code that translates a game-internal `*Action` into a broadcast.

- **Layer:** Pure Campaign layer. It is unrelated to the Mission layer's `IMissionListener` system. Events that happen *inside a battle scene* go through the Mission system and are out of scope here.
- **Owner:** Created by `Campaign` at campaign start and stored as `Campaign.Current.CampaignEvents`. One instance per save; lives and dies with the campaign.
- **Dual role:** It is a `CampaignEventReceiver` (the dispatcher can call back into it) *and* it exposes the underlying `MbEvent<T>` containers to mods through `public static IMbEvent<T>` properties you subscribe to.
- **You never `new CampaignEvents()`:** there is no public constructor. Just access the static properties directly, e.g. `CampaignEvents.HeroKilledEvent`.

### The publish/subscribe pipeline

A "hero killed" notification travels four steps from cause to your code:

1. **Trigger:** some `*Action` mutates world state, then calls `CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)` (`KillCharacterAction.cs`).
2. **Dispatch:** `CampaignEventDispatcher` fans the call out to every registered `CampaignEventReceiver` (the central `CampaignEvents` hub plus native SandBox receivers).
3. **Deliver:** the `CampaignEvents` override of `OnHeroKilled(...)` invokes the underlying event, firing every lambda registered via `AddNonSerializedListener`.
4. **Subscribe:** your mod calls `CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled)` inside `RegisterEvents()`, so your lambda runs.

### Two subscription styles

| Style | How | Who uses it |
|-------|-----|-------------|
| **Lambda listener (recommended)** | `CampaignEvents.XEvent.AddNonSerializedListener(this, handler)` inside `RegisterEvents()` | virtually all mods |
| **Receiver override** | your behavior extends `CampaignEventReceiver` and overrides `OnXxx` | native SandBox behaviors; rarely needed by mods |

> **Serialized vs. non-serialized:** in this version `IMbEvent` only exposes `AddNonSerializedListener`, so the delegate closure itself is **not written to the save**. But the owning behavior (`CampaignBehaviorBase`) is part of the campaign object: `CampaignBehaviorManager` rebuilds behaviors after load and calls `RegisterEvents()` again, so the lambda is re-attached. What you must watch is the **owner's lifetime** — if the owner is a transient object (UI / menu), its lambda will neither restore nor auto-clear after load, risking leaks or duplicate registration (see Risks).

## When to Use / When NOT to Use

**Use events** when you need "do something when X happens": show a notification, log it, nudge a related value, unlock a feature, or fire custom logic.

**Do NOT use events for:**

- Changing the world. An event is only a *notification*. To change the world, call the matching `*Action.Apply` (e.g. if you want to give the player gold after a lord dies, call `ChangeHeroGold` / `GoldGainAction` inside the `HeroKilledEvent` handler — don't mutate fields yourself).
- Faking a trigger. `CampaignEvents` has no public `Fire` / `Trigger` API for mods. To make the world change, call the `*Action`; it broadcasts the event itself.
- Heavy or blocking work in a handler. The handler runs **synchronously inside the campaign tick that raised it** — slowing it down or throwing stalls the whole tick (see Risks).
- Polling (e.g. "scan every `Hero` each hour to see who died") instead of subscribing.

## High-Frequency Events (Categorized)

Only the most-subscribed events are listed here — there are ~200+ total (in `CampaignEvents.cs`). Each is a `public static IMbEvent<T>` property; the timing column tells you *when* it fires during the campaign lifecycle.

### Hero

| Event | Purpose | Typical timing |
|-------|---------|----------------|
| `HeroKilledEvent` | A hero (including the main hero) died | After `KillCharacterAction` resolves |
| `BeforeHeroKilledEvent` | Salvage loot / record last state before removal | Before the death is applied |
| `HeroPrisonerTaken` | A hero became a prisoner | After `TakePrisonerAction` |
| `OnHeroChangedClan` | A hero switched clan (e.g. became a companion) | After the clan change applies |

### Settlement

| Event | Purpose | Typical timing |
|-------|---------|----------------|
| `OnSettlementOwnerChangedEvent` | A town/castle changed owner | After `ChangeOwnerOfSettlementAction` |
| `VillageStateChanged` | Village state flipped (e.g. raided) | When the village state updates |
| `TownRebelliosStateChanged` | A town entered/left rebellion | After a rebellion resolves |

### War & Diplomacy

| Event | Purpose | Typical timing |
|-------|---------|----------------|
| `WarDeclared` | Two factions declared war | After `DeclareWarAction` |
| `MakePeace` | Two factions signed peace | After `MakePeaceAction` |
| `OnClanChangedKingdomEvent` | A clan changed kingdoms | After `ChangeKingdomAction` |
| `OnClanDestroyedEvent` | A clan was wiped out | When the clan is removed |

### Party & MobileParty

| Event | Purpose | Typical timing |
|-------|---------|----------------|
| `OnPartyRemovedEvent` | A party left the map (disbanded/destroyed) | After a `MobileParty` is removed |
| `MobilePartyDestroyed` | A mobile party was destroyed | On party destruction |
| `OnPartyLeaderChangedEvent` | A party's leader changed | After leadership transfer |

### Siege & Map Battles

| Event | Purpose | Typical timing |
|-------|---------|----------------|
| `OnSiegeEventStartedEvent` / `OnSiegeEventEndedEvent` | A siege began / ended | At siege start / resolution |
| `MapEventStarted` / `MapEventEnded` | A map battle/raid began / ended | At map-event start / cleanup |
| `BattleStarted` | A map battle or raid started | When the battle component spawns |

### Periodic Ticks (highest frequency)

`DailyTickEvent` / `HourlyTickEvent` / `WeeklyTickEvent` (no payload) plus per-object `DailyTickPartyEvent` (`IMbEvent<MobileParty>`), `DailyTickTownEvent`, `DailyTickHeroEvent`, `DailyTickClanEvent` and their `HourlyTick*` siblings. These are the **highest-frequency** hooks — perfect for periodic logic, but keep them light.

### Lifecycle / Save

`OnNewGameCreatedEvent` (`IMbEvent<CampaignGameStarter>`) fires after a new campaign is built and `OnSessionLaunched` — the safe point to initialize per-playthrough state. `OnGameLoadedEvent` / `OnGameLoadFinishedEvent` fire after a save is read. `OnBeforeSaveEvent` / `OnSaveOverEvent` bracket the save.

## Dependencies

**Upstream (who triggers / owns it)**

- [Campaign](../../campaign/Campaign/) — owns the single `CampaignEvents` instance, created and destroyed with the campaign
- [CampaignEventReceiver](../CampaignEventReceiver/) — the abstract base defining every `OnXxx` virtual method
- `*Action` types (`KillCharacterAction`, `ChangeOwnerOfSettlementAction`, `DeclareWarAction`, `ChangeKingdomAction`, …) raise the corresponding event after mutating state

**Downstream (who consumes)**

- [CampaignEventReceiver](../CampaignEventReceiver/) — override it to receive events as a receiver
- Native `CampaignBehavior` classes (e.g. `DefaultLogsCampaignBehavior` listens to `BattleStarted`)

**Related**

- [Hero](../../campaign/Hero/) · [Settlement](../../campaign/Settlement/) · [Clan](../../campaign/Clan/) · [Kingdom](../../campaign/Kingdom/) · [MobileParty](../../campaign/MobileParty/) — the payload types carried by most events

## Risks

1. **Raising an event in the wrong phase.** There is no public trigger API for mods. Calling a low-level `MbEvent.Invoke` directly bypasses the consistency checks the rest of the system relies on. To notify the world, call the matching `*Action`.
2. **Mission vs. Campaign timing.** `CampaignEvents` is Campaign-layer only. Hits, agent deaths, and `Mission` start/end that happen *inside a battle scene* are delivered through the Mission / `IMissionListener` system, not here. Don't expect `CampaignEvents` to fire for in-scene combat.
3. **Capturing dead `MBObject` references.** If your lambda holds a `Hero` / `Settlement` and the save reloads such that instance is gone, the handler can still be called during a tick → `NullReferenceException` or a corrupted save. Fetch objects fresh inside the handler or null-check first.
4. **Lifetime / serialization mismatch.** The `AddNonSerializedListener` closure is not saved. If the owner is a transient object (one-shot UI, menu), the handler won't restore after load and won't be auto-cleared — possible leak or duplicate registration on the next `RegisterEvents()`.
5. **Duplicate subscription.** `RegisterEvents()` can be called more than once (e.g. runtime `CampaignBehaviorManager.AddBehavior`). De-dupe by calling `CampaignEvents.XEvent.ClearListeners(this)` at the top of `RegisterEvents()`, which routes through `CampaignEventDispatcher.RemoveListeners(obj)`.
6. **Uncaught exception in a handler.** It runs synchronously in the tick that raised it; an exception breaks the entire tick chain and can cascade into a bad save. Wrap critical paths in try/catch.
7. **Adding/removing listeners of the same event inside its callback.** `MbEvent` traverses a linked list while invoking; mutating it mid-invoke can skip or double-fire. Don't subscribe/unsubscribe yourself from within the callback.

## Example

A complete, minimal behavior that logs lord deaths. The handler runs inside the campaign tick that raised the death, so it stays light and null-checks its payload.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class LordDeathLogger : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Pass `this` as owner: when the behavior is removed,
        // CampaignEventDispatcher.RemoveListeners(this) clears every
        // listener this behavior registered, preventing leaks.
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
    }

    private void OnHeroKilled(Hero victim, Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        if (victim == null || !victim.IsLord) return;
        InformationManager.DisplayMessage(
            new InformationMessage(
                new TextObject("{=}Lord {VICTIM} was slain by {KILLER}")
                    .SetTextVariable("VICTIM", victim.Name)
                    .SetTextVariable("KILLER", killer?.Name ?? "an unknown hand")));

        // To change the world, call an *Action — e.g.:
        // Hero.MainHero.ChangeHeroGold(100);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // No persistent fields here; serialize state through this hook.
    }
}
```

Register the behavior from your `MBSubModuleBase` so `CampaignBehaviorManager` calls `RegisterEvents()` and the listener attaches:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public class MySubModule : MBSubModuleBase
{
    protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
    {
        if (game.GameType is Campaign campaign)
        {
            ((CampaignGameStarter)starterObject).AddBehavior(new LordDeathLogger());
        }
    }
}
```

## See Also

- ↑ Parent: [campaign-ext index](../)
- ↔ Sibling: [CampaignEventReceiver](../CampaignEventReceiver/)
- Related: [Campaign](../../campaign/Campaign/) · [Hero](../../campaign/Hero/) · [Settlement](../../campaign/Settlement/) · [Clan](../../campaign/Clan/) · [Kingdom](../../campaign/Kingdom/) · [MobileParty](../../campaign/MobileParty/)

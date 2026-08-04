---
title: "CampaignEventDispatcher"
description: "The synchronous campaign event forwarder: it fans out OnXxx calls from Actions, Campaign lifecycle, and ticks to CampaignEvents, IssueManager, QuestManager, and added receivers."
---

# CampaignEventDispatcher

**Namespace:** `TaleWorlds.CampaignSystem`<br>
**Module:** `TaleWorlds.CampaignSystem`<br>
**Type:** `public class CampaignEventDispatcher : CampaignEventReceiver`<br>
**Base:** [CampaignEventReceiver](../CampaignEventReceiver/)<br>
**1.3.15 source:** `R:\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\CampaignEventDispatcher.cs`<br>
**1.4.5 comparison:** `R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\CampaignEventDispatcher.cs`

## Responsibility in one sentence

It does not own business state or create world changes; it synchronously fans out `OnXxx` calls already emitted by campaign code to a set of `CampaignEventReceiver` instances.

## Mental model: the forwarding layer behind the bus

`CampaignEventDispatcher` is the **receiver fan-out layer**, not the event container that most mods should subscribe to.

- `Campaign` constructs the dispatcher and initially puts `CampaignEvents`, `IssueManager`, and `QuestManager` in its receiver array. Receivers can then be appended through the public `Campaign.AddCampaignEventReceiver` method.
- `CampaignEventDispatcher.Instance` reads `Campaign.Current.CampaignEventDispatcher`. It returns `null` when there is no active campaign, so module loading, menu, and unload paths must not dereference it unconditionally.
- Every public `OnXxx` or tick method follows the same pattern: it calls the same virtual method on each receiver in array order. There is no exception isolation, priority system, or asynchronous queue.
- `CampaignEvents` is the normal mod-facing event surface. It overrides receiver methods and forwards them to `MbEvent`; behaviors should subscribe to `CampaignEvents.XEvent` rather than call dispatcher `OnXxx` methods directly.

The real hero-death path is:

1. `KillCharacterAction.Apply` performs the death flow. In 1.3.15, `KillCharacterAction.cs:58` sends `OnBeforeHeroKilled`, and `:149` sends `OnHeroKilled`.
2. `CampaignEventDispatcher.Instance.OnHeroKilled(...)` walks the receiver array.
3. The `CampaignEvents.OnHeroKilled(...)` receiver invokes the `HeroKilledEvent` `MbEvent`.
4. A handler registered with `AddNonSerializedListener` in `CampaignBehaviorBase.RegisterEvents()` runs synchronously.

The dispatcher is therefore the bridge that delivers calls to receiver layers. It is not a hero-death object, not an `*Action`, and not an API for fabricating campaign events.

## Lifecycle, owner, and layer

### Creation and ownership

- `Campaign` creates `_campaignPeriodicEventManager` in its constructor. During `Campaign.OnInitialize()` it creates `CampaignEvents`, `CustomPeriodicCampaignEvents`, and `CampaignEventDispatcher`; the 1.3.15 locations are `Campaign.cs:1889-1891`.
- The initial receiver array is `{ CampaignEvents, IssueManager, QuestManager }`, which is why issue and quest systems receive the same campaign callbacks.
- `Campaign.AddCampaignEventReceiver(CampaignEventReceiver receiver)` is public, but the dispatcher's constructor and its own `AddCampaignEventReceiver` method are `internal`. An appended receiver has no matching removal API; the caller must own its lifetime.
- `CampaignEventDispatcher` lives with `Campaign.Current`. Do not cache a dispatcher across campaigns or save loads. Reacquire it from `CampaignEventDispatcher.Instance` and null-check it when needed.

### Where dispatch comes from

- World-changing actions such as [KillCharacterAction](../KillCharacterAction/), [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/), and [DeclareWarAction](../DeclareWarAction/) call dispatcher methods at their state boundaries.
- `Campaign` calls lifecycle methods such as `OnGameEarlyLoaded`, `OnGameLoaded`, `OnNewGameCreated`, `OnSessionStart`, and `OnAfterSessionStart` during load, new-game, and session startup.
- The campaign main tick sends `Tick(float)`, `HourlyTick()`, `QuarterHourlyTick()`, `DailyTick()`, `WeeklyTick()`, and entity tick methods through the dispatcher. [CampaignPeriodicEventManager](../CampaignPeriodicEventManager/) also bridges per-party, per-settlement, per-clan, per-town, and per-hero ticks back into the dispatcher.
- All of these calls are synchronous on the thread that triggered the campaign work. The dispatcher does not queue handlers or automatically spread a slow handler across frames.

## When to use it, and when not to

### Recommended: subscribe to `CampaignEvents`

When the requirement is “run logic after a world fact occurs,” use an event property on [CampaignEvents](../CampaignEvents/) and make a long-lived [CampaignBehaviorBase](../CampaignBehaviorBase/) instance the owner. Events avoid scanning every `Hero`, `Settlement`, or `MobileParty` on a timer.

### Do not treat the dispatcher as these things

- **Do not use `OnXxx` to change the world.** `OnSettlementOwnerChanged`, `OnHeroKilled`, and `OnWarDeclared` are notification paths. To change ownership, kill a hero, or declare war, call the relevant `*Action.Apply` so the action owns state, rules, and event order.
- **Do not call `CampaignEventDispatcher.Instance.OnXxx(...)` to “broadcast” an event.** That can notify native behaviors without the real state transition, producing duplicate logs, duplicate resolution, or ordering bugs.
- **Do not inherit it as a replacement for behavior subscriptions.** A campaign-level receiver is appropriate for infrastructure that must receive the complete virtual callback surface. Ordinary mods should use `CampaignBehaviorBase.RegisterEvents()`.
- **Do not call it while `Campaign.Current` is null.** This includes pre-campaign module paths, campaign transitions, and unload paths.
- **Do not perform blocking I/O, long loops, or UI waits in a handler.** An uncaught exception propagates through the synchronous call because the dispatcher has no `try/catch` boundary.

## Dependency graph

**Upstream:**

- [Campaign](../../campaign/Campaign/) owns the dispatcher and calls it during initialization, ticks, load, and save boundaries.
- [KillCharacterAction](../KillCharacterAction/), [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/), [DeclareWarAction](../DeclareWarAction/), and other actions call a specific `OnXxx` at the relevant state boundary.
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager/) bridges per-object hourly, daily, and AI slices into dispatcher tick callbacks.

**Downstream:**

- [CampaignEvents](../CampaignEvents/) converts callbacks into subscribable `MbEvent` instances; [CampaignBehaviorBase](../CampaignBehaviorBase/) normally consumes them from `RegisterEvents()`.
- [CampaignEventReceiver](../CampaignEventReceiver/) defines the virtual callback surface. `IssueManager`, `QuestManager`, and receivers appended through `Campaign.AddCampaignEventReceiver` are also called.
- [SaveManager](../../save-system/SaveManager/) related flows use `OnBeforeSave`, `OnSaveStarted`, and `OnSaveOver` to notify campaign systems, but listener delegates are not business save data.

**Adjacent types:**

- [CampaignGameStarter](../CampaignGameStarter/) registers behaviors; [CampaignBehaviorManager](../CampaignBehaviorManager/) owns the behavior list, event registration, and behavior removal.
- [MBCampaignEvent](../MBCampaignEvent/) is a custom time-period event entity, not an `MbEvent` member exposed by `CampaignEvents`.

## Key members and side effects

### `public static CampaignEventDispatcher Instance { get; }`

Returns the dispatcher belonging to the current `Campaign`, or `null` when `Campaign.Current == null`. It is a runtime lookup and cleanup entry point; it does not make arbitrary `OnXxx` calls safe. Do not store it in a global static field.

### `public override void RemoveListeners(object o)`

Forwards `RemoveListeners(o)` to every receiver in the array. For the default `CampaignEvents` receiver, this clears listeners owned by `o` from every `MbEvent`; a custom receiver controls its own override. This removes listeners only; it does not remove a receiver from the dispatcher array.

When `CampaignBehaviorManager.RemoveBehavior<T>()` removes a behavior, it uses `CampaignEventDispatcher.Instance.RemoveListeners(behavior)` to clean that behavior's subscriptions. One-shot quests and issues use the same boundary when they finish. A mod that manages listeners dynamically should use a stable owner and clean it up when the owner ends.

### `internal CampaignEventDispatcher(IEnumerable<CampaignEventReceiver>)` and `internal void AddCampaignEventReceiver(...)`

The constructor materializes the enumerable into an array; the append method copies the old array and puts the receiver at the end. These are not normal mod construction/registration APIs. The public `Campaign.AddCampaignEventReceiver` can append indirectly, but it provides no automatic unregister, event priority, or duplicate detection.

### Event forwarding: `OnBeforeHeroKilled`, `OnHeroKilled`, `OnSettlementOwnerChanged`, `OnWarDeclared`, and others

These methods do not apply business rules; they pass the original arguments through. A `Before` method means the action has not completed its final application, while the ordinary `On` method normally marks a reached state boundary. The exact timing belongs to the action source. `ActionDetail`, `showNotification`, and old/new object arguments provide context to consumers; they are not state for the dispatcher to interpret or mutate.

### Lifecycle forwarding: `OnNewGameCreated`, `OnGameLoaded`, `OnGameLoadFinished`, `OnSessionStart`, and `OnAfterSessionStart`

These callbacks define behavior initialization windows. A behavior registers through [CampaignBehaviorManager](../CampaignBehaviorManager/) and its events; whether world objects, models, or menus are ready depends on the specific phase. Do not assume a complete campaign world in `RegisterEvents()`; move settlement, model, or menu initialization to the lifecycle callback where its prerequisites exist.

### Tick forwarding: `Tick`, `HourlyTick*`, `DailyTick*`, `WeeklyTick`, and `TickPartialHourlyAi`

These methods are the native scheduler bridge, not a promise that every method runs on every real frame. Some ticks are driven by campaign periodic events, and entity ticks are sliced by [CampaignPeriodicEventManager](../CampaignPeriodicEventManager/) using debt/round-robin scheduling. High-frequency handlers must be short, repeatable, and able to handle inactive objects.

## Real acquisition and subscription example

The following uses the same subscription shape as 1.3.15 native behaviors. It only records hero-death notifications; the count is persisted through `SyncData`, while the listener itself is registered with `AddNonSerializedListener` and is not treated as a serialized delegate closure.

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.SaveSystem;

public sealed class HeroDeathLedgerBehavior : CampaignBehaviorBase
{
    private int _observedHeroDeaths;

    public override void RegisterEvents()
    {
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(
            this,
            new Action<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>(OnHeroKilled));
    }

    private void OnHeroKilled(
        Hero victim,
        Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail,
        bool showNotification)
    {
        if (victim != null)
        {
            _observedHeroDeaths++;
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("ObservedHeroDeaths", ref _observedHeroDeaths);
    }

    public void Detach()
    {
        CampaignEventDispatcher dispatcher = CampaignEventDispatcher.Instance;
        if (dispatcher != null)
        {
            dispatcher.RemoveListeners(this);
        }
    }
}
```

`CampaignEventDispatcher.Instance` is the real runtime lookup path; `Detach` clears listeners owned by this behavior. It does not retract a receiver appended through `Campaign.Current.AddCampaignEventReceiver(...)`, so infrastructure using that public method must own its lifetime. Ordinary mods should not register a temporary UI object as a receiver.

## Event, behavior, and save boundaries

- `CampaignEvents.XEvent` listeners are non-serialized delegates. After a load, the behavior manager rebuilds behaviors and registers them again. Store persistent state in behavior `SyncData`; do not rely on closures or static fields to restore it.
- The receiver array is called in registration order; adding a receiver changes the order of later calls. Do not make two behaviors depend on undocumented array ordering.
- Calling `ChangeOwnerOfSettlementAction.Apply`, `KillCharacterAction.Apply`, or another action from a handler can nest new dispatcher callbacks. Avoid unconditionally triggering the same kind of action from its own event, which can recurse or resolve twice.
- `OnBeforeSave` and related save events are suitable for refreshing behavior save caches. Do not create temporary receivers, mutate the save object graph, or perform non-repeatable world actions from a save callback.
- An object may already be inactive or on its removal boundary when `OnPartyRemoved`, `OnMobilePartyDestroyed`, or `OnHeroKilled` runs. Recheck validity in the handler instead of retaining the object for later ticks.

## Version risks

The core structure is unchanged between 1.3.15 and 1.4.5: `Instance`, the receiver array, `RemoveListeners`, and ordered forwarding are still present, and periodic tick bridging is still the same.

1.4.5 adds `OnHeroActivated` and `CollectMetadataEntries` to the dispatcher surface. Do not treat the complete 1.4.5 method set as a 1.3.15 API. This page uses 1.3.15 event names, parameters, and examples; cross-version mods should isolate added/missing callbacks with conditional compilation or version-specific code rather than reflectively invoking an absent `OnXxx` method.

## Navigation

### ↑ Parent

- [Campaign extension API index](../)
- [Campaign](../../campaign/Campaign/)

### ↔ Sibling

- [CampaignEvents](../CampaignEvents/) - the event table mods normally subscribe to
- [CampaignEventReceiver](../CampaignEventReceiver/) - the virtual callback contract forwarded by the dispatcher
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager/) - tick and custom periodic-event scheduling

### Related

- [CampaignBehaviorBase](../CampaignBehaviorBase/) · [CampaignBehaviorManager](../CampaignBehaviorManager/) · [CampaignGameStarter](../CampaignGameStarter/)
- [MBCampaignEvent](../MBCampaignEvent/) · [CampaignTime](../CampaignTime/)
- [KillCharacterAction](../KillCharacterAction/) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/) · [DeclareWarAction](../DeclareWarAction/)
- [SaveManager](../../save-system/SaveManager/)

---
title: "CampaignEventDispatcher"
description: "CampaignEventDispatcher is the active campaign's internal receiver fan-out layer for engine callbacks, CampaignEvents, issues, and quests."
---
# CampaignEventDispatcher

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CampaignEventDispatcher : CampaignEventReceiver`  
**Base:** [CampaignEventReceiver](../CampaignEventReceiver)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignEventDispatcher.cs`

## One-sentence responsibility

It fans campaign lifecycle, settlement, party, hero, and tick callbacks out to registered receivers; it is an internal forwarding layer, not the event-subscription facade that a mod should call directly.

## Mental Model

**One synchronous fan-out chain**

`Campaign.Current` creates `CampaignEvents`, `IssueManager`, and `QuestManager`, then places them in the receiver array owned by `CampaignEventDispatcher`. `CampaignEventDispatcher.Instance` resolves the current campaign's instance. Public callbacks such as `OnHeroJoinedParty`, `OnSettlementEntered`, `HourlyTickParty`, and `DailyTick` call the matching method on each receiver in order.

The dispatcher's job is to **forward an event that has already happened**. It does not decide gameplay rules and it is not a subscription table for a mod to own. The mod-facing static entry points live on [CampaignEvents](../CampaignEvents), whose `IMbEvent` objects deliver dispatcher notifications to listeners registered with an owner.

**Why direct calls are wrong**

Although many forwarding methods are public, calling `CampaignEventDispatcher.Instance.OnSettlementEntered(...)` fabricates an engine lifecycle callback. That bypasses the state update, source timing, and other receiver work that should have produced the callback. A behavior should subscribe to [CampaignEvents](../CampaignEvents) from [CampaignBehaviorBase](../CampaignBehaviorBase).`RegisterEvents()` and use the relevant Action when it needs to mutate the world.

`RemoveListeners(object)` is the shared cleanup boundary: the dispatcher passes the owner to every receiver, and `CampaignEvents` clears that owner's non-serialized listeners. It is not equivalent to clearing the behavior list and does not save a mod's fields.

## When to use and when not to use

- **Use its public relationship:** to understand how Actions, campaign ticks, and map events reach [CampaignEvents](../CampaignEvents), or to trace why a callback runs at a particular phase.
- **Do not use it:** to call `On*` or `Tick*` methods to trigger business behavior. Subscribe to `CampaignEvents` so listener ownership and lifecycle remain intact.
- **Do not use it:** to construct a `CampaignEventDispatcher`; its constructor and receiver registration are part of Campaign initialization.
- **Clean up:** let [CampaignBehaviorManager](../CampaignBehaviorManager) remove a behavior or use the normal owner-based cleanup path instead of dropping the behavior reference.

## Dependencies

- **Owner:** [Campaign](../Campaign) creates the dispatcher and registers [CampaignEvents](../CampaignEvents), the issue manager, and the quest manager as receivers.
- **Upstream callbacks:** [CampaignPeriodicEventManager](../CampaignPeriodicEventManager) supplies party, settlement, hero, and faction ticks; map and Action code also report state changes through the dispatcher.
- **Mod downstream:** [CampaignBehaviorBase](../CampaignBehaviorBase) subscribes to [CampaignEvents](../CampaignEvents) from `RegisterEvents()`, while handlers work with [MobileParty](../MobileParty), [Settlement](../Settlement), and [Hero](../Hero).

## Forwarding surface and timing

| Callback group | Dispatcher behavior | Mod observation point |
| --- | --- | --- |
| `OnHeroJoinedParty` | Forwards the hero-joined-party notification to each receiver in order. | `CampaignEvents.OnHeroJoinedPartyEvent`. |
| `OnBeforeSettlementEntered` / `OnSettlementEntered` / `OnAfterSettlementEntered` | Preserves the before, main, and after phases while fanning each one out. | `CampaignEvents.BeforeSettlementEnteredEvent`, `SettlementEntered`, and `AfterSettlementEntered`. |
| `HourlyTickParty` / `DailyTick` | Receives periodic-manager ticks and forwards them to each receiver. | `CampaignEvents.HourlyTickPartyEvent` or `DailyTickEvent`. |
| `OnGameLoaded` / `OnGameLoadFinished` | Notifies receivers during the save-load lifecycle. | Behavior registration and `SyncData` must respect load timing. |
| `RemoveListeners(owner)` | Sends one owner to all receivers for listener cleanup. | Behavior manager and event owners maintain the lifecycle. |

## Real example: subscribe instead of fabricating a dispatcher callback

This uses the v1.4.5 public static event entry points. `CampaignEvents.OnHeroJoinedPartyEvent` supplies `Hero, MobileParty`, while `SettlementEntered` supplies `MobileParty, Settlement, Hero`; the dispatcher reaches these listeners after the real state transition occurs.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.SaveSystem;

namespace MyMod
{
    public sealed class PartyObservationBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents()
        {
            CampaignEvents.OnHeroJoinedPartyEvent.AddNonSerializedListener(this, OnHeroJoinedParty);
            CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnSettlementEntered);
        }

        private void OnHeroJoinedParty(Hero hero, MobileParty party)
        {
            string partyId = party.StringId;
        }

        private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
        {
            Settlement enteredSettlement = settlement;
        }

        public override void SyncData(IDataStore dataStore)
        {
        }
    }
}
```

The example never calls `CampaignEventDispatcher.Instance`. If the behavior needs persistent counters, synchronize its own fields in `SyncData(IDataStore)`; listener relationships are not the dispatcher's save data.

## Risks and boundaries

- **Fabricated callbacks:** direct `On*` calls make receivers observe a notification without the corresponding entity mutation, which can duplicate rewards, roster work, or settlement-entry processing.
- **Active campaign requirement:** `Instance` depends on `Campaign.Current`; module load, the main menu, and campaign teardown are invalid phases for using it.
- **Listener leaks:** removing a behavior without preserving its owner can leave non-serialized listeners holding an old object. Use the behavior manager's removal path or clear the same owner explicitly.
- **Ordering:** before, main, after, and tick callbacks are not interchangeable. An early callback must not assume that a later Action phase has completed every state write.
- **Re-entry:** the dispatcher synchronously walks its receiver array. Triggering the same business event again from a handler can re-enter processing; make observation handlers idempotent.

## Version note

This page follows the v1.4.5 `CampaignEventDispatcher`, `CampaignEvents`, and `Campaign` initialization paths. For another version, recheck event names and parameters, especially `OnHeroJoinedPartyEvent`, settlement-entry phases, and tick events; internal dispatcher callback names are not a stable registration API.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- Related lifecycle: [MobileParty](../MobileParty) · [Settlement](../Settlement) · [Hero](../Hero) · [CampaignBehaviorManager](../CampaignBehaviorManager)

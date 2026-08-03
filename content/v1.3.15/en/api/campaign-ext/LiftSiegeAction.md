---
title: "LiftSiegeAction"
description: "The campaign action that removes every registered besieger from an active siege through the normal SiegeEvent lifecycle."
---

# LiftSiegeAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class`  
**Source:** `TaleWorlds.CampaignSystem/Actions/LiftSiegeAction.cs`

## What it actually does

`LiftSiegeAction` is a very small public wrapper around the besieger-camp cleanup path. It does not resolve a siege result, choose a siege reason, return an enum, or perform a separate "lift" calculation.

Its only public method receives one **besieging** [`MobileParty`](../../campaign/MobileParty/) and follows this chain:

```text
side1Party
  -> side1Party.BesiegedSettlement
  -> settlement.SiegeEvent
  -> siegeEvent.BesiegerCamp
  -> RemoveAllSiegeParties()
```

The source implementation is equivalent to:

```csharp
private static void ApplyInternal(MobileParty side1Party, Settlement settlement)
{
    settlement.SiegeEvent.BesiegerCamp.RemoveAllSiegeParties();
}

public static void GetGameAction(MobileParty side1Party)
{
    ApplyInternal(side1Party, side1Party.BesiegedSettlement);
}
```

The name `GetGameAction` is misleading: it returns `void` and does not read an action value. Calling it mutates the campaign siege state immediately.

## Public API

### `GetGameAction`

```csharp
public static void GetGameAction(MobileParty side1Party)
```

`side1Party` is the input used to identify the siege. It must be a party whose `BesiegerCamp` is the active attacker camp. `MobileParty.BesiegedSettlement` is implemented through that camp, so the party must currently be participating in a siege.

There is no return value, reason argument, settlement argument, result object, or `SiegeAction` enum involved.

## Which parties are affected?

The argument is not the only party removed. The action reaches the settlement's [`SiegeEvent`](../SiegeEvent/)'s [`BesiegerCamp`](../BesiegerCamp/) and calls `RemoveAllSiegeParties()`. That method repeatedly clears the `BesiegerCamp` property of every party currently registered in the camp's internal besieger-party list.

Therefore the action affects:

- The camp leader.
- All other mobile parties that have joined that same besieger camp.
- Attached parties as propagated by the `MobileParty.BesiegerCamp` setter.
- The player's siege state and UI when the main party is one of the removed parties.

It does **not** selectively remove only `side1Party`, and it does not remove defender parties, garrison parties, or besiegers belonging to another settlement's siege. The party is only an acquisition key for its one current `BesiegedSettlement`.

When the last registered besieger is detached, `BesiegerCamp.RemoveSiegePartyInternal` calls `SiegeEvent.FinalizeSiegeEvent()`. Finalization broadcasts the end event, finalizes both siege sides, clears `Settlement.SiegeEvent`, finalizes an eligible map event, and performs player-siege/menu cleanup. `SiegeEvent.ReadyToBeRemoved` then becomes true, and `SiegeEventManager` removes the object on its next tick.

## Required lifecycle

The expected object graph is:

```text
Settlement.SiegeEvent
        ^
        | BesiegedSettlement
SiegeEvent <-> BesiegerCamp <-> MobileParty.BesiegerCamp
```

An active siege is normally created by `SiegeEventManager.StartSiegeEvent(settlement, besiegerParty)`. The `SiegeEvent` constructor sets `settlement.SiegeEvent`, creates the `BesiegerCamp`, and assigns that camp to the first besieger party. Additional attackers join by receiving the same `BesiegerCamp` through the campaign encounter flow.

Call `GetGameAction` only while all of these invariants still hold:

1. `side1Party` is active and is an attacker-side party.
2. `side1Party.BesiegedSettlement` is non-null.
3. That settlement still has a non-null `Settlement.SiegeEvent`.
4. The siege is not being torn down by an unfinished siege-assault `MapEvent`.

The method does not create a missing `SiegeEvent`, repair a party with a null camp, or null-check the internal chain for a caller. A stale or non-besieging party can therefore produce a `NullReferenceException`.

## How to acquire the input party

For the player's attacking party, the normal acquisition path is direct:

```csharp
MobileParty besieger = MobileParty.MainParty;
if (besieger.BesiegedSettlement != null)
{
    LiftSiegeAction.GetGameAction(besieger);
}
```

For an existing siege observed from a settlement, resolve the current camp leader at the moment of the call:

```csharp
Settlement settlement = MobileParty.MainParty.BesiegedSettlement;
SiegeEvent siegeEvent = settlement.SiegeEvent;
MobileParty besieger = siegeEvent?.BesiegerCamp?.LeaderParty;

if (besieger != null && besieger.BesiegedSettlement == settlement)
{
    LiftSiegeAction.GetGameAction(besieger);
}
```

If the leader is temporarily unavailable, use a currently involved attacker from `BesiegerCamp.GetInvolvedPartiesForEventType()` and take its `PartyBase.MobileParty`. Re-fetch this value immediately before lifting; do not retain it across a battle, capture, party destruction, or save load.

The 1.4.5 source tree contains no vanilla call to `LiftSiegeAction.GetGameAction`. The real engine callsites operate on the same lower-level cleanup method: settlement capture in `KingdomManager`, battle-result handling in `MapEvent`, and camp teardown in `BesiegerCamp`. A mod calling `GetGameAction` is using the public action wrapper for that established cleanup path.

## When to use it

Use this action when a mod needs the attacker to abandon an otherwise active campaign siege and wants the normal event, camp, settlement, player-siege, map-event, and save-state cleanup to run.

Typical uses include:

- Cancelling a custom siege objective before changing the settlement.
- Making an AI or player besieger withdraw after a quest, diplomacy result, or scripted condition.
- Ending a siege before removing, transferring, or otherwise substantially changing the besieged settlement.

## When not to use it

Do not use it to:

- Pick or document `SiegeStrategyActionModel.SiegeAction` values. That enum describes per-side siege strategy operations such as construction/deployment decisions; it is unrelated to this static action.
- Remove one attacker while leaving the siege active. Change that party's siege participation through the appropriate party/encounter flow instead.
- End an assault or sally-out battle while its `MapEvent` is still active. The underlying camp method asserts if an unfinished siege-assault map event is present.
- Call it with a defender, garrison, settlement party, or a party that has already left the siege.
- Set `Settlement.SiegeEvent = null` manually or call `SiegeEvent.FinalizeSiegeEvent()` as a shortcut. Those bypass the intended ordering and can leave party/camp state inconsistent.

## Dependencies and side effects

The action depends on:

- [`MobileParty`](../../campaign/MobileParty/) for the reverse `BesiegedSettlement` lookup and `BesiegerCamp` link.
- [`Settlement`](../../campaign/Settlement/) for the active `SiegeEvent` reference.
- [`SiegeEvent`](../SiegeEvent/) for the lifetime of one siege.
- [`BesiegerCamp`](../BesiegerCamp/) for the registered attacker list and removal loop.
- [`SiegeEventManager`](../SiegeEventManager/) for the saved active-siege collection and next-tick removal.
- Campaign event, player-siege, map-event, AI, and party-impairment systems reached by party removal/finalization.

Removal can disorganize a party, put its movement mode on hold, refresh the player's menu/time control, deactivate a blockade, finalize player-siege state, and broadcast campaign events. Treat the call as a world-state transition, not as a harmless query.

## Crash and save risks

- **Null chain:** `side1Party.BesiegedSettlement`, `settlement.SiegeEvent`, and `SiegeEvent.BesiegerCamp` are dereferenced without a defensive guard in the action path. Validate the current active siege immediately before calling.
- **Active assault:** `RemoveAllSiegeParties()` checks `settlement.Party.MapEvent`. An unfinished siege-assault map event triggers a failed assertion because parties must not be removed before that map event is cleared.
- **Stale references:** after the last party leaves, `Settlement.SiegeEvent` is cleared during finalization. Re-fetch `settlement.SiegeEvent` rather than using a cached `SiegeEvent`, `BesiegerCamp`, or leader afterward.
- **Ordering:** if a mod changes ownership, destroys/removes a settlement, or edits siege state while the camp still exists, the saved object graph can retain a stale siege reference. Lift the siege first, then wait for the normal finalization boundary before changing the settlement.
- **Map and menu transitions:** finalization may end an eligible map event and switch player menus. Do not assume the current menu, encounter, or campaign time-control state survives the call unchanged.

## Version note

This page is under the `v1.3.15` documentation tree. The authoritative 1.4.5 source supplied for verification has the same implementation and signature as the 1.3.15 source copy: one private `ApplyInternal` helper and one public `void GetGameAction(MobileParty)` wrapper. The behavioral details above describe that implementation, not a generic meaning inferred from the class name.

## Reciprocal navigation

- [`SiegeEvent`](../SiegeEvent/) — active siege lifecycle and finalization boundary.
- [`BesiegerCamp`](../BesiegerCamp/) — attacker-side party list and removal operation.
- [`MobileParty`](../../campaign/MobileParty/) — source of `BesiegedSettlement` and `BesiegerCamp`.
- [`Settlement`](../../campaign/Settlement/) — source of `SiegeEvent` and `IsUnderSiege`.
- [`SiegeEventManager`](../SiegeEventManager/) — creates, ticks, saves, and removes siege events.
- [`SiegeAction`](../SiegeAction/) — unrelated strategy enum; do not confuse it with this action.
- [Campaign action index](../actions-index/)

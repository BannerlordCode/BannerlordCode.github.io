---
title: "EnterSettlementAction"
description: "The v1.4.5 campaign lifecycle boundary for a party, character, alley visit, or prisoner entering a settlement."
---

# EnterSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class EnterSettlementAction`  
**Source:** `TaleWorlds.CampaignSystem/Actions/EnterSettlementAction.cs`  
**Version:** This page describes the v1.4.5 implementation.

## One-line responsibility

`EnterSettlementAction` closes a settlement-entry transition that has already been authorized by a map, encounter, or settlement owner flow. It synchronizes the entering party or hero with the settlement, dispatches the settlement lifecycle events, and applies the side effects that listeners and later save/load cycles expect. It is not a teleport helper and it is not the settlement access validator.

## Mental model

Treat entry as a lifecycle transition, not as an assignment to `MobileParty.CurrentSettlement` or a settlement roster. The caller first resolves a real current-Campaign subject and destination, then lets the appropriate public entry perform the mutation and event cascade.

The private `EnterSettlementDetail` enum has four values: `WarParty`, `PartyEntersAlley`, `Character`, and `Prisoner`. This enum is an implementation detail; it is not a public mod-facing type and does not have a separate page. The four public methods select those details:

| Public entry | Internal detail | What it means |
| --- | --- | --- |
| `ApplyForParty` | `WarParty` | A `MobileParty` reaches the settlement boundary. |
| `ApplyForPartyEntersAlley` | `PartyEntersAlley` | A party enters an alley flow; the caller owns the alley semantics. |
| `ApplyForCharacterOnly` | `Character` | A `Hero` enters without a `MobileParty`. |
| `ApplyForPrisoner` | `Prisoner` | A `Hero` has been made a prisoner of the settlement. |

All non-disbanding variants converge on the same ordered dispatcher callbacks. The selected detail controls the state work after those callbacks, especially prisoner notifications; it is not a permission level.

## Dependencies

The entry subject comes from [MobileParty](../../campaign/MobileParty), [Hero](../../campaign/Hero), and [Settlement](../../campaign/Settlement). The action's event boundary is forwarded by [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) to [CampaignEvents](../../campaign/CampaignEvents); owner flows such as [EncounterManager](../../campaign/EncounterManager), [DisbandPartyCampaignBehavior](../../campaign/DisbandPartyCampaignBehavior), and `PartyScreenHelper` decide when the transition is legal.

The downstream state includes the settlement component, [PartyBase](../../campaign/PartyBase), army/map-event relationships, prisoner notifications, owner-visit timestamps, and naval anchors. Disbanding entry delegates its terminal lifecycle to [DestroyPartyAction](../DestroyPartyAction), while normal departure remains the responsibility of [LeaveSettlementAction](../LeaveSettlementAction).

## Entry prerequisites belong to the caller

`EnterSettlementAction` assumes that the owner flow has already established that the transition is legal. Check the relevant [SettlementAccessModel](../../campaign/SettlementAccessModel) or game-specific access model, ownership/faction rules, encounter state, and menu/location state before calling it. The action itself does not decide whether the main hero may enter a town, castle, village, dungeon, or lord's hall.

The stock [EncounterManager](../../campaign/EncounterManager) separates several cases before entry. It avoids processing inactive, attached, map-event, already-settled, or invalidly targeted parties; siege behavior can start or join a [SiegeEvent](../../campaign/SiegeEvent), and a settlement with an active [MapEvent](../../campaign/MapEvent) can require encounter resolution instead of a normal arrival. [PlayerEncounter](../../campaign/PlayerEncounter) creates the location encounter and then calls `ApplyForParty(MobileParty.MainParty, encounterSettlement)` for the confirmed player settlement-entry route.

Therefore, do not use this action to bypass:

- a hostile ownership or access decision;
- an active map event, battle, siege assault, sally-out, or blockade;
- army attachment and leader-party synchronization;
- an encounter/menu transition that still needs to create or finish its location state.

For an AI party, the owner is normally the encounter/AI flow. For the player, the owner is normally `PlayerEncounter` and the settlement menu flow. A mod should integrate at that boundary rather than calling the action because a settlement object happens to be available.

## Public entries

### `ApplyForParty`

```csharp
public static void ApplyForParty(MobileParty mobileParty, Settlement settlement)
```

This is the normal map-party entry. In v1.4.5 it performs the following work before the common event path:

1. If an attached army party follows its army leader into the same settlement, it is merged into the leader's merged-party state when the source conditions allow it.
2. It derives the new naval state from land-navigation capability and whether a ship party is targeting a port.
3. It sets `mobileParty.CurrentSettlement` and, for a ship party targeting a port, moves the ship anchor to the destination when needed.
4. It calls `settlement.SettlementComponent.OnPartyEntered(mobileParty)`.
5. It enters the common lifecycle path with the party leader as the hero argument.

The assignment in step 3 is only one part of the contract. The army merge, naval state, anchor, settlement component, and events must stay together.

### `ApplyForPartyEntersAlley`

```csharp
public static void ApplyForPartyEntersAlley(
    MobileParty party,
    Settlement settlement,
    Alley alley,
    bool isPlayerInvolved = false)
```

This selects `PartyEntersAlley` and passes the real `Alley` plus `isPlayerInvolved` into the private path. The current v1.4.5 action does not directly branch on either value after receiving them; the alley flow that owns those objects remains responsible for location, access, and player-involvement behavior. It also does not perform the `ApplyForParty` naval, anchor, army-merge, `CurrentSettlement`, or settlement-component writes. Do not treat this overload as an alternative party teleport or invent an alley object when the owning alley flow has not established one.

No stock v1.4.5 call site is required to make this entry valid. A mod should call it only from a real, already-authorized alley transition and should preserve the common event ordering described below.

### `ApplyForCharacterOnly`

```csharp
public static void ApplyForCharacterOnly(Hero hero, Settlement settlement)
```

This first sets `hero.StayingInSettlement = settlement`, then enters the common path with no `MobileParty`. It is for a hero who is being placed in a settlement without entering as a map party. It does not set a party's `CurrentSettlement`, add the hero to a roster, or perform a prisoner transfer.

The stock `PartyScreenHelper` uses this path after a real current-settlement party-screen operation has placed a hero into a garrison or is processing a hero in the settlement. The owner flow must have completed its roster operation and must pass the same live `Settlement`; this Action only records the character-entry lifecycle and notifications.

### `ApplyForPrisoner`

```csharp
public static void ApplyForPrisoner(Hero hero, Settlement settlement)
```

This first calls `hero.ChangeState(Hero.CharacterStates.Prisoner)`, then enters the common path with no `MobileParty`. After the three settlement callbacks, the prisoner detail emits `PrisonersChangeInSettlement` for the hero with `takenFromDungeon: false`.

The Action is not the operation that decides who was captured or adds a hero to a dungeon roster. The stock `PartyScreenHelper` calls it after its current-settlement prisoner transfer has identified real hero entries. A mod must keep the transfer/roster owner and this notification boundary in the same lifecycle; changing only `Hero` state or only a settlement prison roster is incomplete.

## Event and state order

For an ordinary entry, the dispatcher receives these callbacks in exactly this order:

1. `CampaignEventDispatcher.Instance.OnBeforeSettlementEntered(...)`, exposed through the [CampaignEvents](../../campaign/CampaignEvents) `BeforeSettlementEnteredEvent` hook.
2. `OnSettlementEntered(...)`, exposed through `CampaignEvents.SettlementEntered`.
3. `OnAfterSettlementEntered(...)`, exposed through `CampaignEvents.AfterSettlementEntered`.

The [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) forwards each callback to campaign behaviors. Listeners can open menus, update quest state, or mutate other campaign state, so a listener must not recursively call this Action for the same transition or assume that the entering object remains unchanged after a callback.

After the common callbacks, the action applies further v1.4.5 consequences:

- For `Prisoner`, it raises the settlement prisoner-change notification. The private path can also notify a flattened party prisoner roster when it is supplied internally; the public `ApplyForPrisoner` overload supplies a hero.
- It reads the entering leader (or character-only hero) and updates `settlement.LastVisitTimeOfOwner` when that hero is both the settlement owner clan leader and the clan leader recorded by the settlement owner clan.
- If `MobileParty.MainParty` is the leader of an army, it recursively calls `ApplyForParty` for its attached parties so the army does not split between map and settlement state.
- A player-clan hero entering without a party, without prisoner ownership, and without being a governor can receive the `OnHeroGetsBusyEvent` emissary-busy notification.
- A fleeing party has its AI disabled for five hours after the path completes. Player/main-party entry also writes a diagnostic message; that log is not a substitute for the events.

## Disbanding is a different branch

Before the ordinary callbacks, the private path checks whether the supplied `MobileParty` is disbanding and its `TargetSettlement` is the same destination. If so, it calls [DestroyPartyAction](../DestroyPartyAction).`ApplyForDisbanding` and skips the normal settlement-entry callback chain. The party owner, not this Action, has already decided that the party's lifecycle ends at that settlement.

This makes the target and owner state important: do not call a normal entry for a party that the owning disband flow expects to destroy, and do not call the disband path merely because a party has an `IsDisbanding` flag. The related [DisbandPartyAction](../DisbandPartyAction), [LeaveSettlementAction](../LeaveSettlementAction), and [DisbandPartyCampaignBehavior](../../campaign/DisbandPartyCampaignBehavior) pages describe the owner-side cleanup and settlement relationship.

## Real current-Campaign example

The following helper uses the real main party and its live target. It is appropriate only when the caller is the owner of a map-arrival flow and has already completed the access, ownership, encounter, and menu checks described above. The guards prevent stale, inactive, already-settled, disbanding, or map-event parties from being treated as a fresh arrival.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static void EnterConfirmedTargetSettlement()
{
    if (Campaign.Current == null)
        return;

    MobileParty party = MobileParty.MainParty;
    Settlement target = party?.TargetSettlement;
    if (party == null || target == null || !party.IsActive ||
        party.CurrentSettlement != null || party.IsDisbanding ||
        party.MapEvent != null || party.BesiegedSettlement != null)
        return;

    // The owning map/encounter flow has already validated access and legality.
    EnterSettlementAction.ApplyForParty(party, target);
}
```

This example does not construct a `MobileParty`, `Settlement`, or `PartyBase`, and it does not assign `CurrentSettlement`. If the caller is the player encounter flow, follow its real location-encounter setup; if the caller is an AI or army flow, let [EncounterManager](../../campaign/EncounterManager) complete its map-event, siege, and army decisions first. For character-only or prisoner entry, pass the live settlement and hero produced by the owning party-screen or captivity flow; do not use this party example with those overloads.

## Direct mutation and save risks

Do not replace this Action with any of the following:

- `mobileParty.CurrentSettlement = settlement` without the naval state, anchor, settlement-component callback, event chain, owner-visit update, fleeing AI handling, and army recursion;
- writing settlement owner, party, prison, or garrison fields directly to imitate an arrival;
- assigning `Hero.StayingInSettlement` or changing `Hero.CharacterStates.Prisoner` without the matching dispatcher callbacks and prisoner notification;
- manually publishing `CampaignEvents` after a partial field mutation, which can publish an event for a party whose location and settlement component disagree.

These shortcuts can leave an army with only its leader in a settlement, a ship with a stale anchor, a settlement component without its party, or a prisoner notification without the corresponding hero state. A save made during or after that mismatch can restore references that no longer agree.

Treat the entering object as owned by the current Campaign flow. Do not call during an active battle, siege, encounter, or menu transition unless that owner explicitly reaches this action as its next state. Do not continue a disbanded party or a recursively entered attached party as though the call were a harmless notification. On load, reacquire live `MobileParty`, `Hero`, and `Settlement` objects from Campaign state instead of persisting a temporary transition object.

## Navigation

- **Parent:** [Campaign extension API index](../) · [Campaign system](../../campaign/)
- **Siblings:** [DestroyPartyAction](../DestroyPartyAction) · [DisbandPartyAction](../DisbandPartyAction) · [LeaveSettlementAction](../LeaveSettlementAction)
- **Related entities:** [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [Hero](../../campaign/Hero) · [Settlement](../../campaign/Settlement) · [Army](../../campaign/Army)
- **Related flow and events:** [EncounterManager](../../campaign/EncounterManager) · [SettlementAccessModel](../../campaign/SettlementAccessModel) · [MapEvent](../../campaign/MapEvent) · [SiegeEvent](../../campaign/SiegeEvent) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [DisbandPartyCampaignBehavior](../../campaign/DisbandPartyCampaignBehavior)

---
title: "StartBattleAction"
description: "Creates or joins the Campaign MapEvent for a validated encounter and publishes the battle-start boundary used by campaign and mission flows."
---
# StartBattleAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class StartBattleAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/StartBattleAction.cs`

## One-line responsibility

Turns two validated Campaign parties into a `MapEvent` battle or adds a party to an existing event, then notifies the campaign that battle start has been reached.

## Mental model

`StartBattleAction` is the Campaign map-event **creation/join boundary**. It does not run the 3D mission, resolve casualties, choose a war, or replace [EncounterManager](../../campaign/EncounterManager)'s responsibility for deciding whether two parties may interact. The owning encounter flow must establish the legal attacker and defender first.

The general `Apply(PartyBase, PartyBase)` route infers a `MapEvent.BattleTypes` value from current settlement, siege, raid, blockade, and existing map-event state. The explicit routes are narrower: `ApplyStartBattle` creates a field battle, `ApplyStartRaid` creates a raid against a settlement, `ApplyStartSallyOut` uses the town garrison against a defender, and `ApplyStartAssaultAgainstWalls` creates a siege assault.

If no event exists, the private path asks the active `EncounterModel` to create the map-event component. If an event already exists, it attaches the attacker to the opposite side. It may interrupt a player encounter when the player is inside a settlement, calculates whether the start notification should be shown, and dispatches `CampaignEventReceiver.OnStartBattle` through the campaign dispatcher. Later `MapEvent` and `PlayerEncounter` flows own mission entry and resolution.

Use this Action only when a mod is extending an established encounter owner and has live, active parties. Do not set `MapEventSide`, call it during arbitrary ticks, or use it as a teleport/mission-start shortcut.

## Dependency graph

```text
EncounterManager / siege / raid owner
  -> StartBattleAction.Apply(attackerParty, defenderParty)
      -> Campaign.Current.Models.EncounterModel
          -> MapEvent component creation or side join
      -> CampaignEventDispatcher.OnStartBattle
          -> CampaignEvents / CampaignEventReceiver listeners
      -> PlayerEncounter / MapEvent / Mission projection
```

**Upstream:** [EncounterManager](../../campaign/EncounterManager), `PlayerEncounter`, siege and raid flows provide the current parties and settlement context.  
**Downstream:** [MapEvent](../../campaign/MapEvent), `CampaignEvents](../../campaign/CampaignEvents), map-event behaviors, player encounter state, and eventually [Mission](../../mission/Mission) consume the resulting event.  
**Related entities:** [PartyBase](../../campaign/PartyBase), [MobileParty](../../campaign/MobileParty), [Settlement](../../campaign/Settlement), and [SiegeEvent](../../campaign/SiegeEvent).

## Key entry points and battle-type selection

### `Apply`

```csharp
public static void Apply(PartyBase attackerParty, PartyBase defenderParty)
```

With no existing defender event, the source infers field battle, siege, siege-outside, hideout, sally-out, raid, blockade, or blockade-sally-out from the live party and settlement state. With an existing event, it preserves the event's current family and can convert a special all-at-sea raid case into a field battle. The `subject` passed to the event is the relevant settlement when one exists.

### Explicit routes

| Entry point | Required live objects | Meaning |
| --- | --- | --- |
| `ApplyStartBattle(MobileParty, MobileParty)` | attacker and defender parties | Join/create a field battle. |
| `ApplyStartRaid(MobileParty, Settlement)` | attacker and settlement | Start a raid against the settlement party. |
| `ApplyStartSallyOut(Settlement, MobileParty)` | town garrison and defender | Start a sally-out battle; requires `settlement.Town.GarrisonParty`. |
| `ApplyStartAssaultAgainstWalls(MobileParty, Settlement)` | attacker and settlement | Start a siege assault against the settlement party. |

The explicit names do not remove the caller's obligation to validate activity, faction hostility, siege/raid state, and player encounter ownership.

## State and event order

1. Create a map-event component through the active `EncounterModel` when the defender has no event; otherwise attach the attacker to the appropriate side.
2. If the player is in a settlement encounter that must be interrupted, call `PlayerEncounter.InterruptEncounter`.
3. Compute `showNotification` only when both parties are their respective army leaders; settlement events with multiple defender parties suppress that flag.
4. Dispatch `OnStartBattle(attackerParty, defenderParty, subject, showNotification)`.
5. The map event, player encounter, siege, and mission flows continue from the created/updated `MapEvent`; this Action does not finalize it.

Observe `CampaignEvents.MapEventStarted` for map-event creation and `CampaignEvents.MapEventEnded` for cleanup. Observe `CampaignEvents`/receiver battle callbacks for the immediate `OnStartBattle` boundary; do not confuse either notification with battle resolution.

## Real current-Campaign examples

### Start a mod-owned field encounter after validating live parties

The stock encounter manager supplies live parties from the current Campaign and normally calls `StartPartyEncounter` before this Action. A narrow mod-owned encounter can use the explicit field route only after making the same kind of checks:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void StartValidatedFieldBattle()
{
    if (Campaign.Current == null || MobileParty.MainParty == null)
        return;

    MobileParty attacker = MobileParty.MainParty;
    MobileParty defender = Campaign.Current.MobileParties.FirstOrDefault(p =>
        p != attacker && p.IsActive && p.MapEvent == null &&
        p.MapFaction != attacker.MapFaction);
    if (defender == null || attacker.MapEvent != null || attacker.CurrentSettlement != null ||
        defender.CurrentSettlement != null)
        return;

    StartBattleAction.ApplyStartBattle(attacker, defender);
}
```

This example deliberately narrows the call to two active map parties with no current event or settlement. A real encounter feature should prefer [EncounterManager](../../campaign/EncounterManager) when it needs player encounter setup, army joining, siege checks, or AI interaction rules.

### Observe the created event and battle-start boundary

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

private void RegisterEvents()
{
    CampaignEvents.MapEventStarted.AddNonSerializedListener(this, OnMapEventStarted);
}

private void OnMapEventStarted(MapEvent mapEvent, PartyBase attacker, PartyBase defender)
{
    if (mapEvent != null && attacker != null && defender != null)
        RecordBattle(mapEvent.StringId, attacker.StringId, defender.StringId);
}
```

Copy the IDs or other required values in the callback. A `MapEvent` can be finalized later, so keeping it as persistent mod state is unsafe.

## Risks and save boundaries

- **The Action has no legality result.** It assumes an active Campaign, live parties, and a coherent encounter. Null or stale inputs can fail inside `Campaign.Current.Models.EncounterModel` or party/event access.
- **Use the owner flow for player encounters.** Calling the explicit route without `PlayerEncounter`, siege, army, or encounter setup can create a map event that has no correct menu or mission projection.
- **Do not force a type that contradicts the world.** `ApplyStartRaid`, `ApplyStartSallyOut`, and `ApplyStartAssaultAgainstWalls` expect their settlement components and current AI/siege state. Passing an ordinary village or a town without a garrison violates the source contract.
- **Existing events are shared state.** The Action may join a side, interrupt a player encounter, or change a special naval raid branch. Do not call it again from `MapEventStarted` for the same parties.
- **Starting is not resolving.** Do not remove troops, finalize the event, or enter a Mission from the `OnStartBattle` listener unless the owning player/mission flow explicitly requires it; another Campaign behavior may still be preparing the event.
- **Map events are not save-stable callback objects.** Store stable party/event IDs and reacquire live objects after load. Do not serialize an event reference or assume a listener's temporary `showNotification` choice is persistent state.
- **Raw side writes are unsafe.** Assigning `MapEventSide` or `MapEvent` manually skips `EncounterModel` creation, event dispatch, player interruption, and participant bookkeeping, which can surface as a broken encounter or bad save later.

## Navigation

- **Parent:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **Siblings:** [EnterSettlementAction](../EnterSettlementAction) · [TakePrisonerAction](../TakePrisonerAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- **Related entities:** [MapEvent](../../campaign/MapEvent) · [PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [SiegeEvent](../../campaign/SiegeEvent)
- **Owners and notifications:** [EncounterManager](../../campaign/EncounterManager) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [Mission](../../mission/Mission)

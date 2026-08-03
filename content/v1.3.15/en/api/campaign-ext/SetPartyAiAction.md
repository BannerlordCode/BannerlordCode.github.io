---
title: "SetPartyAiAction"
description: "Commits an AI decision as a coherent party movement target, coordinating behavior, target objects, land/naval routing, port transitions, and army-leader strategy metadata."
---
# SetPartyAiAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`

**Module:** `TaleWorlds.CampaignSystem`

**Type:** `public static class SetPartyAiAction`

**Base:** none (static class)

**Source:** `TaleWorlds.CampaignSystem/Actions/SetPartyAiAction.cs`

## One-line job

Writes a chosen strategic intent into `MobileParty` movement state as one operation, including army and port-navigation semantics where required.

## Overview

Each hour, `AiPartyThinkBehavior` compares candidate `AiBehaviorData` and uses this class to commit travel, patrol, raid, siege, engagement, defense, escort, or return-to-land behavior to a map party. Caravan, villager, and quest Behaviors also call the corresponding entry point after selecting a target. Despite the `GetActionFor*` names, every public method returns `void`: these are mutating commands, not queries.

## Mental model

Map AI is not one `DefaultBehavior` field. A valid command must coordinate the behavior enum, target settlement or party, target position, and `DesiredAiNavigationType`, and may need to schedule a port exit on the next frame. The underlying `MobileParty.SetMove*` methods reset old movement parameters and force short-term AI recalculation. For an army leader, several settlement commands also update `ArmyType` and `AiBehaviorObject`.

Treat this class as the commit layer for an upstream AI decision. It does not determine whether a target is sensible, whether the factions are hostile, whether the party can sail, or whether the current battle state permits retargeting. The AI, quest, or Behavior caller owns those checks. Native code calls `MobileParty.SetMoveModeHold()` directly for Hold because this Action has no Hold entry point.

## ApplyInternal contract

The private `ApplyInternal` maps an internal detail value to a `SetMove*` call. Most branches first compare the current behavior, target, and navigation arguments so an unchanged command does not reset the path. A changed command follows this sequence:

```text
Upstream selects MobileParty + target + NavigationType
  -> If departing a port and no transition is active, schedule a port exit next frame
  -> MobileParty.SetMove* resets old movement state and writes the new target
  -> Settlement commands may synchronize the army leader's ArmyType / AiBehaviorObject
  -> A later map-AI tick recalculates short-term behavior and routing
```

The Action dispatches no dedicated `CampaignEvent`. Its downstream cascade comes from `MobileParty` setters marking AI state dirty and from army strategy metadata changes.

## Key entry points and timing

| Entry-point group | Target and side effects | Typical timing |
|---|---|---|
| `GetActionForVisitingSettlement` | Sets `GoToSettlement`, targeting a gate or port. An army leader is marked Defender with the settlement as its behavior object. | After a caravan selects its next town, a villager returns, or a quest party receives a destination. |
| `GetActionForPatrollingAroundSettlement` / `GetActionForPatrollingAroundPoint` | Sets `PatrolAroundPoint`; the settlement form retains `TargetSettlement` and can synchronize an army defense target. The point form accepts `isFromPort`, but its current internal branch never reads it. | When patrol or quest AI needs to operate around a settlement or coordinate. The point form cannot substitute for a port-exit flow. |
| `GetActionForRaidingSettlement` / `GetActionForBesiegingSettlement` | Writes raid or siege targets and marks an army leader Raider or Besieger. | After upstream code verifies war state, a live target, and that the same attack is not already represented by the current `MapEvent`. |
| `GetActionForEngagingParty` / `GetActionForGoingAroundParty` | Writes a target `MobileParty` for pursuit or avoidance. | After AI confirms that the target is live, reachable, and not locked by a battle workflow. |
| `GetActionForDefendingSettlement` | Defends the settlement gate or port and marks an army leader Defender. | When a settlement is threatened and the party has not already entered it. |
| `GetActionForEscortingParty` | Follows a target party and can carry port-targeting semantics. | For army members following their leader, quest escorts, or scripted caravans. |
| `GetActionForMovingToNearestLand` | Switches to `MoveToNearestLandOrPort`, optionally recording a port settlement. The underlying party chooses Naval or All from its capabilities. | When a sea party can no longer continue naval travel and must recover to land or port. |

## Land, naval, and port arguments

`MobileParty.NavigationType` is a Flags enum: `Default` means land routing, `Naval` means sea routing, and `All` permits both. `isFromPort` means that this command starts by leaving a port; when no transition is active, the Action sets `StartTransitionNextFrameToExitFromPort`. It does not mean that the destination is a port. `isTargetingPort` selects the settlement's port position instead of its gate position. Do not interchange the two flags.

## Dependencies and upstream/downstream state

| Dependency | Relationship |
|---|---|
| [`MobileParty`](../../campaign/MobileParty) | Owns the state. `SetMove*` resets old movement parameters and writes behavior, target, position, and navigation type. |
| [`Settlement`](../../campaign/Settlement) | Supplies gate, port, siege, and defense targets. A removed or incompatible settlement leaves invalid AI state. |
| [`AiBehavior`](../AiBehavior) | Shared enum between the upstream thought result and `DefaultBehavior`; matching names do not imply that target arguments also match. |
| [`Army`](../Army) | For an army leader, visit, patrol, raid, siege, and defense commands synchronize the army type and strategic object. |
| [`CampaignEvents`](../CampaignEvents) | Native AI is driven by hourly events, but this Action itself dispatches none. Mods commonly acquire a live party from an event listener before committing a command. |

## Do not edit fields directly

Do not assign `DefaultBehavior`, `TargetParty`, target coordinates, or `DesiredAiNavigationType` separately. Those values must agree, and the complete setters reset routing and mark AI for recalculation. Calling a `MobileParty.SetMove*` method directly can establish a basic target but skips this Action's port-exit scheduling and army-leader metadata. Prefer this layer when reusing a native strategic intent. Use a complete `SetMove*` method directly only for an explicit behavior this class does not expose, such as Hold.

## Lifecycle and save-corruption risks

- Every entry point assumes that `owner` and its required target are non-null, active, and owned by the current Campaign. Invalid targets can fail immediately or later during AI tick/pathfinding.
- Do not force a target change during a `MapEvent`, siege assault, port transition, or party-removal callback. Native `AiPartyThinkBehavior` respects `DoNotChangeBehavior` and skips duplicate raid or siege commands when the current map event already represents them.
- `NavigationType` must match party capabilities and target geography. Sending a land-only party down a Naval route, or targeting a port on a settlement without one, can produce path failures, permanent stalls, or repeated recalculation after loading.
- Target parties and settlements enter saveable `MobileParty` AI state. If a mod deletes a target before putting followers on Hold or rerouting them, a later load can restore dangling strategic intent. Close out all referencing parties before destroying a target.
- `StartTransitionNextFrameToExitFromPort` is next-frame state. Do not cache it in mod save data or fabricate it during load synchronization; submit a fresh command after the Campaign and map navigation are restored.
- Repeated commands with different arguments continually reset routing. Commit only when the decision changes, and prevent multiple Behaviors from fighting over the same party.
- In both v1.3.15 and the inspected v1.4.5 decompiled code, the Engage and GoAround deduplication guards compare `owner` with the target party rather than comparing the current `TargetParty`. They therefore usually reissue the underlying `SetMove*`; never submit either command unconditionally every frame.

## Real acquisition path

This example acquires a live party from the native `CampaignEvents.HourlyTickPartyEvent`, then gets a real target from `HomeSettlement`. A stable `StringId` prefix limits ownership to parties created by the mod instead of taking over native caravan AI.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public override void RegisterEvents()
{
    CampaignEvents.HourlyTickPartyEvent.AddNonSerializedListener(this, OnHourlyTickParty);
}

private void OnHourlyTickParty(MobileParty party)
{
    Settlement home = party.HomeSettlement;
    if (party.StringId.StartsWith("my_mod_caravan_") &&
        party.IsActive && party.MapEvent == null &&
        home != null && party.CurrentSettlement != home)
    {
        SetPartyAiAction.GetActionForVisitingSettlement(
            party,
            home,
            MobileParty.NavigationType.Default,
            isFromPort: false,
            isTargetingPort: false);
    }
}
```

`RegisterEvents` belongs on a `CampaignBehaviorBase` subclass. Non-serialized listeners are registered again with the Behavior lifecycle; do not add duplicate anonymous listeners after every load.

## Version notes

In v1.3.15, `GetActionForRaidingSettlement` has the signature `(MobileParty, Settlement, NavigationType, bool isFromPort)` and always uses non-port raid targeting. The v1.4.5 core assembly adds `bool isTargetingPort` and forwards it to `SetMoveRaidSettlement`. Every other public entry point still returns `void`, and the class remains in `TaleWorlds.CampaignSystem.Actions`. A mod compiled for both versions must conditionally adapt this overload difference.

## Navigation

- Save boundary: [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner/) registers persistent `MobileParty` state; AI events and short-term targets are not replayed as history after loading.
- Parent: [Campaign extension API](../)
- Sibling: [AiBehavior](../AiBehavior) · [Army](../Army) · [DisbandArmyAction](../DisbandArmyAction)
- Children: no separate child page; the navigation query entries are documented above
- Related: [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [CampaignEvents](../CampaignEvents)

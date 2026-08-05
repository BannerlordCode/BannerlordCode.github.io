---
title: "PlayerEncounter"
description: "The campaign-owned state machine that carries the player's encounter from menus and map battle through results, capture, loot, and cleanup."
---
# PlayerEncounter

**Namespace:** `TaleWorlds.CampaignSystem.Encounters`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PlayerEncounter`
**Base:** `object`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encounters/PlayerEncounter.cs`

## One-line responsibility

`PlayerEncounter` owns the campaign-side state machine for the encounter involving the player's party: it connects encounter menus to a `MapEvent`, waits for a result from simulation or a Mission, applies that result, then drives victory, defeat, capture, freeing, looting, and cleanup.

## Mental model

This is a campaign coordinator, not the battle itself. `Campaign.PlayerEncounter` holds at most one current instance, while `_mapEvent` points at the map-level battle that the encounter is currently coordinating. A `Mission` is a separate 3D scene and runtime; `StartVillageBattleMission`, `StartSiegeAmbushMission`, and related methods bridge into that scene, but `PlayerEncounter` remains the owner of the menu/result flow. `MapEvent` owns participants, sides, battle state, and world-result calculation; `PlayerEncounter` decides when the player is waiting, when the result may be committed, and which post-battle states must run.

The exact state enum is `Begin -> Wait -> PrepareResults -> ApplyResults -> PlayerVictory` or `PlayerTotalDefeat -> CaptureHeroes -> FreeHeroes -> LootParty -> LootInventory -> LootShips -> End`. Some branches finish earlier: a disengage or a non-loot encounter can reach `End`, and `LeaveEncounter` can call `Finish` before the normal result path. `Update()` advances this state machine; it is not a general-purpose refresh method to call while an encounter is absent.

## When to use it

Use `Campaign.Current.PlayerEncounter` or `PlayerEncounter.Current` when a campaign feature needs to observe or extend the player's active encounter: read `EncounterState`, determine `PlayerSide`, inspect a valid `Battle`, or coordinate a menu/Mission transition at an encounter-specific hook. Use `StartBattleAction.Apply` when the mod's intent is to create a new world battle and dispatch the normal campaign events. Use `MapEvent` and `MapEventManager` when the concern is battle membership, map-event lifecycle, or simulation/finalization rather than player menu state.

Do not treat `PlayerEncounter` as a replacement for `MapEvent`, `Mission`, or an `Action`. Do not directly edit party rosters, settlement ownership, or battle results here when an `Action` or `MapEvent` result pipeline owns that mutation. Do not call static accessors merely because the type exists: most of them dereference `Current`, `_mapEvent`, or `_encounteredParty` and are valid only during the corresponding phase.

## Dependency graph

The normal flow is:

`Campaign.PlayerEncounter` -> `PlayerEncounter` -> [`MapEvent`](../MapEvent) -> [`MapEventManager`](../MapEventManager) -> campaign result calculation

The external creation boundary is [`StartBattleAction`](../../campaign-ext/StartBattleAction), which selects a battle type and either creates a map event through the active encounter model or attaches the party to an existing event. The scene boundary is [`Mission`](../../mission/Mission): a Mission can produce a battle result, but it does not own this campaign state machine. The campaign tick that drives the surrounding systems is documented with [`Campaign`](../Campaign), and event delivery is exposed through [`CampaignEvents`](../CampaignEvents).

| Direction | Related type or system | Why it matters |
| --- | --- | --- |
| Owner | `Campaign.PlayerEncounter` | Stores the saveable encounter object and clears it at `Finish`. |
| Upstream creation | `StartBattleAction` | Creates or joins a `MapEvent` and dispatches `OnStartBattle`; it is the normal mutation boundary. |
| Coordinated battle | `MapEvent`, `MapEventManager` | Supplies sides, winner, simulation state, finalization, and campaign result calculation. |
| Scene bridge | `Mission`, `CampaignMission` | Runs the real-time scene; returning from it leaves result application to the encounter state machine. |
| Notifications | `CampaignEvents` / `CampaignEventDispatcher` | `DoApplyMapEventResults` invokes `OnPlayerBattleEnd` before committing map-event results. |

## Acquisition and lifecycle

The constructor is private. `PlayerEncounter.Start()` creates a new instance and assigns it to `Campaign.Current.PlayerEncounter`; `PlayerEncounter.Current` is only a shortcut for that campaign-owned property. `RestartPlayerEncounter` first finishes the old instance when one exists, starts a new one, and calls `SetupFields` with the attacker and defender. `Init` creates an instance if needed and initializes fields from the main party's current map event.

`SetupFields` records the attacker and defender, resolves an encounter settlement or besieged settlement, chooses `PlayerSide` and `OpponentSide`, and identifies the mobile party or settlement being encountered. `StartBattle()` then creates or reuses the appropriate map event: field, raid, hideout, siege, sally-out, blockade, or siege-outside. `JoinBattle(side)` attaches the main party to an existing event and records the strength ratio before joining. Neither operation creates a 3D Mission by itself.

`Campaign.Tick()` runs `MapEventManager.Tick()` before `EncounterManager.Tick()`. The latter is the encounter/menu side of campaign ticking; `PlayerEncounter.Update()` runs the state-machine loop, and its internal switch handles one or more states until the current state marks itself handled. When results are ready, `ApplyResults` calls `CampaignEventDispatcher.Instance.OnPlayerBattleEnd(_mapEvent)` and then `_mapEvent.CalculateAndCommitMapEventResults()`. `Finish()` exits menus, finalizes the map event, ends battle simulation, optionally leaves the settlement, and finally clears `Campaign.Current.PlayerEncounter` and `Campaign.Current.LocationEncounter`.

## Access patterns and timing

The safe observation pattern is to acquire the current instance once, check it, and then check the map event before reading map-event-backed properties:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.MapEvents;

PlayerEncounter encounter = Campaign.Current.PlayerEncounter;
if (encounter == null || !PlayerEncounter.IsActive)
{
    return;
}

PlayerEncounterState phase = encounter.EncounterState;
MapEvent battle = PlayerEncounter.Battle;
if (battle != null && phase == PlayerEncounterState.Wait)
{
    BattleSideEnum playerSide = encounter.PlayerSide;
    bool playerIsAttacker = PlayerEncounter.PlayerIsAttacker;
}
```

To request a normal campaign battle, call the action boundary with real parties. The action chooses the event type from the parties' settlement/siege context, creates or joins the `MapEvent`, and emits the normal start-battle notification. A mod should not manufacture a `PlayerEncounter` with `new`, because the constructor is private and the campaign owns its lifetime:

```csharp
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

public static void AttackMobileParty(MobileParty hostileParty)
{
    if (hostileParty == null || !hostileParty.IsActive)
    {
        return;
    }

    StartBattleAction.Apply(MobileParty.MainParty.Party, hostileParty.Party);
}
```

Joining is a separate path. Only pass a side that the existing event accepts; `JoinBattle` binds the main party to that side and updates `IsJoinedBattle` and the pre-join strength ratio:

```csharp
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.Party;

PlayerEncounter encounter = PlayerEncounter.Current;
if (encounter != null && PlayerEncounter.EncounteredBattle != null)
{
    BattleSideEnum side = PlayerEncounter.EncounteredBattle.CanPartyJoinBattle(
        PartyBase.MainParty, BattleSideEnum.Attacker)
        ? BattleSideEnum.Attacker
        : BattleSideEnum.Defender;

    PlayerEncounter.JoinBattle(side);
}
```

## Menu and Mission bridge

`DoMeeting` opens the party encounter conversation or switches to an army/encounter menu. `EnterSettlement`, `LeaveBattle`, and `LeaveSettlement` change the campaign menu/location context; they are not Mission constructors. `StartAttackMission`, `StartVillageBattleMission`, and `StartSiegeAmbushMission` are specific bridge methods used after the campaign has established the appropriate encounter. `StartCombatMissionWithDialogueInTownCenter` opens a combat conversation scene for a character. After the scene ends, `Update()` uses the resulting `CampaignBattleResult` or `MapEvent.BattleState` to move from `Wait` to result application.

If the mod only needs to react to an actual Mission lifecycle, subscribe to the Mission-side hook and then reacquire `PlayerEncounter.Current` when control returns to the campaign. Holding a `MapEvent` or `PlayerEncounter` reference across a Mission transition is unsafe because `Finish()` can finalize and clear the campaign object while the scene is closing.

## Members by job

| Members | Timing and side effects |
| --- | --- |
| `Current`, `IsActive`, `LocationEncounter`, `EncounterSettlement` | Use while a campaign is loaded. `Current` reads `Campaign.Current.PlayerEncounter`; `LocationEncounter` writes through to `Campaign.Current.LocationEncounter`; `EncounterSettlement` is null when no current encounter exists. |
| `Battle`, `EncounteredBattle`, `BattleState`, `WinningSide` | Read only after `Current` and the relevant map event exist. `Battle` is this coordinator's `_mapEvent`; `EncounteredBattle` resolves the other party's existing event or siege event. `BattleState` and `WinningSide` directly dereference the current map event. |
| `PlayerSide`, `OpponentSide`, `IsJoinedBattle`, `EncounterState` | Set during `SetupFields`/`JoinBattle` and advanced by `Update`; `EncounterState` has a private setter, so external code should request a supported transition rather than assign it. |
| `PlayerSurrender`, `EnemySurrender`, `LeaveEncounter`, `BattleChallenge` | These are state flags with workflow effects. Setting surrender invokes internal surrender logic; setting `LeaveEncounter` causes the next update to finish the encounter. They are not passive annotations. |
| `CampaignBattleResult`, `CurrentBattleSimulation`, `IsPlayerWaiting` | Use during wait/result or simulation phases. The result is saveable state; the simulation may be null outside simulation; waiting flags affect load reconstruction and menu flow. |
| `Start`, `RestartPlayerEncounter`, `Init`, `SetupFields` | Lifecycle setup. `RestartPlayerEncounter` can finish and clear an existing encounter before replacing it, so do not call it from arbitrary UI code. |
| `StartBattle`, `JoinBattle`, `Update`, `FinalizeBattle`, `Finish` | Workflow transitions. They attach parties, apply results, finalize map events, close menus, and clear campaign state; calls must be made at the phase their names imply. |
| `DoMeeting`, `EnterSettlement`, `LeaveBattle`, `LeaveSettlement` | Menu/conversation bridge methods. They can switch or exit game menus and may depend on a valid encountered party or settlement. |
| `GetBattleRewards`, `RosterToReceiveLootItems`, `RosterToReceiveLootMembers`, `RosterToReceiveLootPrisoners`, `ReceivedLootShips` | Result/loot handoff. The roster properties lazily create alternative loot containers; they are not a substitute for applying party or prisoner Actions. |
| `FindNonAttachedNpcPartiesWhoWillJoinEvent`, `FindAllNpcPartiesWhoWillJoinEvent` | Populate caller-provided lists from nearby eligible parties. Call during an active, non-finalized map event and do not retain the lists as authoritative membership. |

## Save and load boundary

The encounter is part of the campaign save graph. `PlayerEncounter` stores fields such as `_mapEvent`, `_mapEventState`, `_encounteredParty`, `_attackerParty`, `_defenderParty`, surrender/leave flags, battle result, loot rosters, and the capture lists with `SaveableField` identifiers. `PlayerSide`, `OpponentSide`, `IsJoinedBattle`, `EncounterSettlementAux`, waiting/interruption flags, and the raid-restart flag use saveable properties. These values preserve an in-progress campaign workflow; they do not make a stale `MapEvent` safe to use after finalization.

On load, `OnLoad()` can rebuild a `LocationEncounter` when the main party is inside a settlement or waiting at a village, repairs old blockade/sally-out saves, and recreates the captured-ship list. `OnLoadInitialization` also handles older save versions. A behavior that stores its own encounter-related data still needs its own stable `SyncData` contract; changing `PlayerEncounter` fields by reflection or assuming a new load order can produce missing parties, invalid battle references, or a save that cannot continue.

## Failure boundaries

- `PlayerEncounter.Current` is null before `Start()` and after `Finish()`. `Battle`, `EncounteredParty`, and `CurrentBattleSimulation` have some null protection, but `BattleState`, `WinningSide`, `CampaignBattleResult`, `PlayerSurrender`, and `EnemySurrender` dereference current state. Check the exact property contract instead of assuming all static properties are safe.
- `MapEvent` can be finalized while a menu or Mission is unwinding. A cached `MapEvent`, `PartyBase`, settlement, or roster can therefore be stale even when the C# reference is non-null. Reacquire from `PlayerEncounter.Current` or the active party at the point of use.
- `StartBattle()` is not the world-mutation API for arbitrary hostile encounters. Use `StartBattleAction.Apply` or its specific `ApplyStartBattle`, `ApplyStartRaid`, `ApplyStartSallyOut`, or `ApplyStartAssaultAgainstWalls` entry points so event selection, attachment, and `OnStartBattle` dispatch stay coherent.
- Do not call `Update`, `FinalizeBattle`, `Finish`, `JoinBattle`, or surrender setters without the required current map event and campaign phase. They can close menus, commit results, capture/free heroes, transfer loot, teleport parties, or clear the campaign encounter.
- Do not treat alternative loot rosters as authoritative party state. They are encounter handoff containers; the normal result/action pipeline owns persistent roster, prisoner, relation, and settlement mutations.
- Do not confuse a completed `Mission` with a completed campaign encounter. The Mission returns a result; `ApplyResults` and later states are still required to commit the `MapEvent` and clean up campaign references.

## Reciprocal navigation

- [↑ Campaign API parent](../)
- [↔ MapEvent](../MapEvent)
- [↔ MapEventManager](../MapEventManager)
- [↔ Campaign](../Campaign)
- [↔ StartBattleAction](../../campaign-ext/StartBattleAction)
- [↔ Mission](../../mission/Mission)
- [↔ CampaignEvents](../CampaignEvents)

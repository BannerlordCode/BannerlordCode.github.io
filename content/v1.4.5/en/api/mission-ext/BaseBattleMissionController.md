---
title: "BaseBattleMissionController"
description: "The abstract battle MissionLogic contract for creating attacker and defender teams, installing TeamAI, deciding battle results, and guarding retreat; in the 1.4.5 source tree it is not the controller used by SandBox's normal battle factory."
---
# BaseBattleMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class BaseBattleMissionController : MissionLogic`  
**Base:** [`MissionLogic`](.././MissionLogic)  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/BaseBattleMissionController.cs`

## One-line responsibility

This abstract `MissionLogic` defines a small battle-controller contract: it creates the two side teams, chooses a `TeamAIComponent` for each team, detects the standard player/side victory conditions, and mediates the player's retreat request.

## Mental model

### What it owns

`BaseBattleMissionController` is a **Mission-layer runtime rule object**, not a Campaign behavior, save object, or general AI service. A concrete subclass is expected to be created by a Mission factory and attached as a `MissionBehavior`. The host `Mission` then drives its lifecycle and polls its `MissionLogic` callbacks.

The constructor accepts `isPlayerAttacker` and captures `Game.Current`. It does not receive a `Mission`; the `Mission` back-reference is assigned later by `Mission.AddMissionBehavior`. Do not inspect `Mission`, `Teams`, `Agents`, or `Mission.Current` from the constructor. They are not guaranteed to exist yet.

### What the current game actually uses

The 1.4.5 source tree contains only the abstract declaration. A source-wide search found no concrete `: BaseBattleMissionController` subclass and no `new BaseBattleMissionController(...)`. SandBox's normal `OpenBattleMission` instead creates [`MissionCombatantsLogic`](../MissionCombatantsLogic), `BattleDeploymentMissionController`, and other behaviors inside a `MissionState.OpenNew` factory. `MissionCombatantsLogic.EarlyStart` installs `TeamAIGeneral`, siege, or sally-out AI according to `Mission.MissionTeamAITypeEnum`.

That distinction matters: this page documents an extension contract that a mod can deliberately adopt; it is not an object that can be retrieved from every running battle. For the normal game battle, query the behavior that the factory actually registered. The source tree does not define a universal hook that replaces SandBox's factory; a mod-owned battle must provide its own `MissionState.OpenNew` behavior delegate.

### Lifecycle

1. A Mission factory constructs the concrete subclass before the Mission is running.
2. `Mission.AddMissionBehavior` assigns the host `Mission`, classifies the object as `MissionLogic`, and calls `OnCreated`.
3. During Mission startup, `EarlyStart` runs before `AfterStart`. The base `AfterStart` calls `CreateTeams`, then sets `MissionMode.Battle`.
4. During `State.Continuing`, Mission polls `MissionEnded(ref MissionResult)` about every 0.1 seconds and calls `OnEndMissionRequest` when the player asks to leave.
5. Once a Logic returns a result, Mission broadcasts `OnMissionResultReady`, shows results, and later enters `EndMissionInternal`. Agents are deleted, teams are cleared, and the runtime Mission is over; none of this is a save/load lifecycle.

## When to use, when not to

**Use it when:**

- You own a complete battle Mission factory and need the base's standard two-side setup and result rules.
- You need to override `GetTeamAI` for a concrete battle controller while retaining the base result and retreat contract.
- You are deliberately replacing the battle behavior pipeline and can guarantee that the controller is attached before Mission startup.

**Do not use it when:**

- You only need to observe Agents, hits, or scene ticks; use [`MissionBehavior`](../../mission/MissionBehavior).
- You need the current SandBox battle's already-installed combatant and TeamAI behavior; use [`MissionCombatantsLogic`](.././MissionCombatantsLogic) and the existing `Team` objects.
- You need Campaign state, gold, relations, war, or persistence. Keep those changes in Campaign behaviors and Actions; do not put save-world mutations in a Mission tick or result callback.
- You want to attach this after teams and deployment have already been initialized. The base assumes it owns team creation and can throw or overwrite runtime state when added too late.

## Team creation and AI contract

### `AfterStart`

The override calls `base.AfterStart()`, then calls the private `CreateTeams()` helper, and finally calls `Mission.SetMissionMode(MissionMode.Battle, atStart: true)`. `CreateTeams()` requires `Mission.Teams` to be empty. It creates one defender and one attacker team, chooses `PlayerTeam` from `IsPlayerAttacker`, obtains one AI object for each side through `GetTeamAI`, and installs them with `Team.AddTeamAI`.

The base implementation does **not** call `SetupTeam` from `CreateTeams`. `SetupTeam` is a protected helper that invokes the abstract `CreateAttackerTroops` or `CreateDefenderTroops` method and calls `CreatePlayer` for the player team. A concrete controller must arrange the troop/deployment path explicitly; merely deriving from this class does not create a complete battle.

### `GetTeamAI(Team, float, float)`

The default implementation returns:

```csharp
new TeamAIGeneral(Mission, team, thinkTimerTime, applyTimerTime)
```

The default timers are 5 seconds for thinking and 1 second for applying. `TeamAIComponent` captures the same `Mission` and `Team`, scans active mission objects, and owns tactic/formation decisions. A valid `Team` from the current Mission is therefore required.

`Team.AddTeamAI` is more than a setter. It assigns the component, changes formation AI control, initializes detachments, creates mission-specific behaviors, resets tactics, ticks occupied formations, and calls `TickOccasionally`. Calling it twice replaces the previous component and repeats those side effects.

### `SetupTeam`, troop counts, and player creation

- `SetupTeam(Team)` dispatches to the attacker/defender troop hook based on `Team.Side`, then creates the player if this is `Mission.PlayerTeam`.
- `CreateAttackerTroops()` and `CreateDefenderTroops()` are abstract and are the subclass's required troop/deployment boundary.
- `IncrementDeploymedTroops(BattleSideEnum)` updates the protected counters. The misspelling is part of the public-to-mod-visible source name; do not silently rename it when overriding or reflecting over the API.
- `CreatePlayer()` resolves `main_hero` from `Game.Current.ObjectManager`, spawns an `Agent` with `AgentBuildData`, equips it, and writes `Mission.MainAgent`. It must run only after teams and spawn frames are valid.

## Start, tick, result, and retreat callbacks

### `EarlyStart`

The checked 1.4.5 source body is:

```csharp
public override void EarlyStart()
{
    EarlyStart();
}
```

This is a self-call, not a call to `base.EarlyStart()`. Treat it as a source/binary hazard: calling `base.EarlyStart()` from a subclass will recurse until a stack overflow. A subclass that needs this phase must implement its own safe work and must not delegate back to this base implementation without first verifying the exact binary/version being loaded.

### `OnMissionTick(float dt)`

The base override only calls `base.OnMissionTick(dt)`; it does not advance the Team AI or deployment counters. Use it as a lifecycle slot for subclass logic that is valid during Mission ticking, and keep the usual `Mission.CurrentState`/`IsLoadingFinished` checks. Do not treat it as a Campaign tick and do not keep Agent or Team references after teardown.

### `MissionEnded(ref MissionResult)`

The base result rule returns `false` until deployment is finished. It then returns a defeated result if `MainAgent` is absent or inactive, or produces a result when all attackers or all defenders have left. The player's side determines whether an empty side is a victory or defeat.

Mission's own `CheckMissionEnded` gives each `MissionLogic` a fresh `null` result reference and accepts the first Logic that returns `true`. Therefore a subclass must assign a non-null `MissionResult` in the same call that returns `true`, and must return `false` while deployment or the battle condition is incomplete. Do not call `Mission.EndMission()` from this callback; Mission owns the end state machine.

### `OnEndMissionRequest(out bool canPlayerLeave)`

The base method first allows leaving. If the player is alive and `Mission.IsPlayerCloseToAnEnemy()` is true, it sets `canPlayerLeave = false` and reports `str_can_not_retreat` through `MBInformationManager`. Otherwise, while the player is alive and the battle has not already ended, it returns an `InquiryData` using `str_retreat_question`; confirmation calls `Mission.OnEndMissionResult`.

`Mission.OnEndMissionRequest` interprets the contract as follows: `canPlayerLeave == false` rejects immediately; a non-null `InquiryData` pauses the game and displays the inquiry; `null` with `true` allows the next Logic to be asked. Returning `null` does not itself end the Mission.

### `OnAgentRemoved`

The base override is empty. It does not release references, count kills, or alter the result. A subclass that reacts to removal must implement that policy itself and must treat the affected `Agent` as a short-lived Mission object.

## Dependencies

```text
MissionState.OpenNew / Mission factory
            │ creates and attaches
            ▼
BaseBattleMissionController : MissionLogic
            ├── Mission.Teams ──► Team.AddTeamAI ──► TeamAIComponent / TeamAIGeneral
            ├── Mission.Agents ──► Agent / MainAgent / MissionResult
            ├── Mission callbacks ──► EarlyStart, AfterStart, tick, result, retreat
            └── Mission teardown ──► OnMissionResultReady / EndMissionInternal

Current SandBox battle path:
MissionState.OpenNew ──► MissionCombatantsLogic ──► TeamAIComponent
                      └─► BattleDeploymentMissionController
```

- **Host and upstream:** [`Mission`](../../mission/Mission) owns the behavior, assigns its `Mission` reference, calls lifecycle methods, polls results, and performs teardown.
- **Base contract:** [`MissionLogic`](.././MissionLogic) routes the object into `MissionLogics`; [`MissionBehavior`](../../mission/MissionBehavior) supplies common Mission callbacks and cleanup.
- **Team downstream:** [`Team`](.././Team) holds the installed AI; [`TeamAIComponent`](.././TeamAIComponent) owns tactic, formation, and mission-object decisions; [`TeamQuerySystem`](.././TeamQuerySystem) is a runtime query surface used by team logic.
- **Current factory alternative:** [`MissionCombatantsLogic`](.././MissionCombatantsLogic) creates teams in `OnBehaviorInitialize` and installs the current field/siege/sally-out AI in `EarlyStart`; [`BattleDeploymentMissionController`](.././BattleDeploymentMissionController) handles deployment-specific behavior.
- **Result downstream:** `MissionResult`, `InquiryData`, and `Mission.OnEndMissionResult` consume the result. SandBox's [`CampaignMissionComponent`](../../campaign-ext/CampaignMissionComponent) `OnMissionResultReady` updates `PlayerEncounter`; its `OnEndMission` broadcasts Campaign's `OnMissionEnded` and clears `CampaignMission.Current`. This class does not serialize its counters or the Mission itself.
- **Persistence boundary:** save Campaign state from Campaign-owned saveable behaviors. Do not store `Mission`, `Agent`, `Team`, `TeamAIComponent`, or this controller as persistent references.

## Risks and crash boundaries

1. **`EarlyStart` recursion:** calling `base.EarlyStart()` follows the self-call in the checked source and can cause `StackOverflowException`. Verify the loaded binary before relying on a different decompiled body.
2. **Existing teams:** `CreateTeams()` throws `MBIllegalValueException` if `Mission.Teams` is not empty. Adding this controller after another Logic has created teams is not a harmless extension.
3. **AI replacement:** `Team.AddTeamAI` overwrites `Team.TeamAI` and immediately mutates formations, detachments, tactics, and mission-specific behaviors. Do not use it as a read-only way to obtain an AI.
4. **Wrong phase:** `GetTeamAI`, `CreatePlayer`, `SetupTeam`, and troop hooks require a live Mission and valid Teams/spawn data. Calling them from a Campaign tick or from the constructor can produce null or invalid native state.
5. **Result contract:** returning `true` without assigning `missionResult`, or reading `PlayerTeam` before `CreateTeams`, can make the first result Logic win with invalid state or throw during side evaluation.
6. **Retreat and Agent lifetime:** `OnEndMissionRequest` runs during active Mission input; `OnAgentRemoved` may still see an object that will later be cleared. Do not carry `Agent`, `Team`, or `Formation` references into Campaign code or the next Mission.
7. **Team AI end callback is not guaranteed:** `Team.OnMissionEnded()` forwards to `TeamAIComponent.OnMissionEnded()`, but the current managed source search found no call from `Mission.EndMissionInternal`; do not assume a custom TeamAI cleanup hook is reached. Put essential cleanup in a Mission behavior's own end callback and make it idempotent.
8. **Teardown and saves:** `EndMissionInternal` calls behavior cleanup, deletes/clears Agents, and clears Teams. `CampaignMissionComponent` separately performs Campaign result publication and clears `CampaignMission.Current`. This controller has no save contract; persisting its runtime fields or keeping them as a proxy for Campaign state can create stale data and load-order bugs.
9. **Current route mismatch:** normal SandBox battles do not register this class. Assuming `Mission.Current.GetMissionBehavior<BaseBattleMissionController>()` succeeds is a null path in the current source tree.

## Real API examples

### Inspect the behavior that the normal battle factory actually installs

The 1.4.5 SandBox battle factory puts `MissionCombatantsLogic` in the `MissionState.OpenNew` behavior delegate. A Mission-side behavior can acquire that registered object through the real `GetMissionBehavior<T>` path:

```csharp
Mission mission = Mission.Current;
if (mission == null)
{
    return;
}
MissionCombatantsLogic combatants = mission.GetMissionBehavior<MissionCombatantsLogic>();

if (combatants != null && mission.CurrentState == Mission.State.Continuing)
{
    BattleSideEnum playerSide = combatants.PlayerSide;
    foreach (IBattleCombatant combatant in combatants.GetAllCombatants())
    {
        Banner banner = combatant.Banner;
    }
}
```

This example intentionally does not query `BaseBattleMissionController`: the current factory did not register one. It also limits access to a running Mission; after `EndMissionInternal`, the host and its Agents/Teams are no longer valid runtime state.

### Install the default Team AI inside a concrete subclass

For a mod that owns a concrete subclass and has reached the base class's team-creation path, the real override shape is the same API used by the base implementation:

```csharp
public override TeamAIComponent GetTeamAI(
    Team team,
    float thinkTimerTime = 5f,
    float applyTimerTime = 1f)
{
    return new TeamAIGeneral(
        Mission,
        team,
        thinkTimerTime,
        applyTimerTime);
}
```

Do not call this from a Campaign behavior, pass a Team from another Mission, or call `Team.AddTeamAI` again merely to read the component. The base `AfterStart` will pass the returned component to `Team.AddTeamAI` for both sides.

## Cross-version note

This page is written against the complete 1.4.5 source tree. The `TaleWorlds.MountAndBlade.Source.Missions` namespace, the `EarlyStart` body, and the normal battle factory's behavior list must be rechecked before porting the pattern to 1.3.x; do not assume a same-named controller is registered in another version.

## Navigation

### ↑ Parent

- [Mission extensions module home](../)
- [Version home](../../)

### ↔ Siblings and related children

- [MissionLogic](.././MissionLogic)
- [MissionCombatantsLogic](.././MissionCombatantsLogic)
- [BattleDeploymentMissionController](.././BattleDeploymentMissionController)
- [BattleEndLogic](.././BattleEndLogic)
- [Team](.././Team)
- [TeamAIComponent](.././TeamAIComponent)
- [TeamQuerySystem](.././TeamQuerySystem)

### Related upstream and downstream

- [Mission](../../mission/Mission)
- [MissionBehavior](../../mission/MissionBehavior)
- [Doc Contract](../../../architecture/doc-contract)

---
title: "TeamAIComponent"
description: "Mission-scoped tactical AI owned by a Team; selects tactics, receives formation callbacks, and drives formation behavior during an active battle."
---
# TeamAIComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class TeamAIComponent`
**Base:** none
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## Responsibility in one sentence

`TeamAIComponent` is the Mission-time tactical controller for one `Team`: it owns tactic state and tactical areas, receives formation-level notifications, and periodically lets the selected tactic/behaviors decide what the team should do.

## Mental model

This is a battle runtime component, not an `Agent` component and not a campaign or save object. A concrete subclass is created for the current battle mode, bound to one `Mission` and one `Team`, and then installed into `Team.TeamAI`. The `Mission` owns the lifetime indirectly through the `Team`; `Team.Tick` drives it only while the battle is allowed to tick AI and the team still has bots.

The protected constructor receives the owning `Mission`, the owning `Team`, and the think/apply timer intervals. Mods normally do not call that constructor or `new TeamAIComponent(...)`. Read the runtime instance from a live team, or provide a concrete subclass through the battle mission controller's `GetTeamAI(...)` path.

The selected `TacticComponent` is a state machine boundary. Changing the current tactic can cancel the old tactic, apply the new tactic, and perform an occasional tick. Adding a tactic option only changes the candidate set; it does not itself select or apply that tactic.

## When to use it

- Read `Mission.Current.AttackerTeam?.TeamAI` or `Mission.Current.DefenderTeam?.TeamAI` when a Mission behavior needs to observe the active battle AI.
- Implement or replace a concrete `TeamAIComponent` only when the battle controller is the correct extension point for the behavior you need. The standard path is `BaseBattleMissionController.GetTeamAI(...)`, followed by `Team.AddTeamAI(...)`.
- Use the tactical-area and tactic-option methods from the phase that owns the battle setup or tactical decision. Keep the operation on the Mission thread and the owning Team.
- Override the lifecycle callbacks in a concrete subclass when the callback's timing is part of the AI design: deployment completion, formation-frame changes, first unit in a previously empty formation, or Mission-specific cleanup.

## When not to use it

- Do not use it to alter campaign parties, heroes, settlements, or save data. Use campaign Actions, Models, or save contracts for those systems.
- Do not use it as a per-Agent state holder. Agent lifecycle and death callbacks belong to `Agent`, `MissionBehavior`, and the relevant `Formation` path.
- Do not assume `TeamAI.Tick` runs every frame. `Team.Tick` skips the normal AI path when `Mission.AllowAiTicking` is false, when the Team has no bots, or when the Team is taking a retreat path.
- Do not call `OnMissionEnded()` as proof that the object has been detached. The method exists, but the current `Mission.EndMissionInternal` cleanup path clears Teams without a verified automatic call to `Team.OnMissionEnded()`.
- Do not persist a `TeamAIComponent`, a `TacticComponent`, a `Mission`, or a tactical area in a save. These are Mission runtime objects and must be reacquired for a new Mission.

## Creation, installation, and ticking

There are two source-backed setup paths, not one mandatory call sequence:

- **Battle-controller path:** `BaseBattleMissionController.AfterStart` creates the attacker/defender Teams, and its `GetTeamAI(...)` path supplies the concrete AI that is installed through `Team.AddTeamAI(...)`.
- **Combatants-logic path:** `MissionCombatantsLogic.EarlyStart` selects a concrete AI such as `TeamAIGeneral`, a siege AI, or a Sally Out AI according to the battle mode and installs it for that path.

Both paths converge on the `Team.AddTeamAI(...)` side effects: it replaces `Team.TeamAI`, initializes detachments and Mission-specific behaviors, calls `ResetTactic()`, ticks existing non-empty formations once, and calls `TickOccasionally()`. After setup, `Mission` ticks Agents and then Teams; `Team.Tick` may call the installed AI and then ticks detachments and non-empty formations.

That installation step is consequential. Installing a second AI changes the controller for every formation on that Team. It is not a harmless setter and should be done only by the owner of the battle setup.

```csharp
using TaleWorlds.MountAndBlade;

public sealed class TeamAiReadoutBehavior : MissionBehavior
{
    public override void AfterStart()
    {
        Mission mission = Mission.Current;
        if (mission == null)
        {
            return;
        }

        Team team = mission.PlayerTeam;
        if (team == null)
        {
            return;
        }

        TeamAIComponent teamAI = team.TeamAI;
        if (teamAI == null)
        {
            return;
        }

        teamAI.CheckIsDefenseApplicable();
        bool defenseCanBeUsed = teamAI.IsDefenseApplicable;
    }
}
```

This example reads the runtime AI after the Mission has a Team. It does not instantiate the abstract component, replace the Team's AI, or assume a particular concrete subclass.

## Lifecycle callbacks

| Member | Use and timing | Side effects and boundary |
|---|---|---|
| `OnDeploymentFinished()` | Runs when Mission deployment is finished, before the Mission forwards the corresponding behavior callbacks. Use it to finish deployment-dependent tactical setup. | Do not read deployment-only objects before deployment has completed. |
| `OnUnitAddedToFormationForTheFirstTime` | Runs when a formation changes from empty to non-empty. It is a first-unit transition, not a callback for every Agent joining an already populated formation. | A formation, its Team, and its Mission must still be live. |
| `OnFormationFrameChanged(Agent, bool, WorldPosition)` | Receives formation-frame changes for an Agent. Use it to update AI state that depends on formation positioning. | The Agent may be leaving the formation; validate the Agent and owning formation before following other references. |
| `OnMissionEnded()` | Intended for AI-specific end cleanup. The current source does not prove that Mission teardown automatically reaches it through `Team.OnMissionEnded()`. | The implementation stops machines used by active formations. It is not a replacement for explicit teardown owned by the mod. |
| `TickOccasionally()` | Runs on the AI's occasional timer rather than serving as an unconditional per-frame callback. `Team.AddTeamAI` calls it once after installation. | It can be called before the normal Team tick has settled; do not use it as a general-purpose Mission update hook. |
| `ResetTacticalPositions()` | Re-scans the live Mission's `TacticalPosition` and `TacticalRegion` mission objects. Tactics use it when tactical geometry must be refreshed during a tactic transition. | It reads `Mission.ActiveMissionObjects`; call it only while that Mission is live. |
| `OnTacticAppliedForFirstTime()` | Called by `TacticComponent.TickOccasionally()` when `GetIsFirstTacticChosen` is still true. It marks that first-application transition as handled. | It changes the first-tactic marker; it does not choose a tactic or apply a formation order by itself. |
| `IsCurrentTactic(TacticComponent)` | Compares the supplied tactic by reference with `CurrentTactic`. Use it when a tactic needs to decide whether it still owns the Team. | It is a status query only; it does not refresh or switch the tactic. |
| `NotifyTacticalDecision(in TacticalDecision)` | Sends a tactical decision to the AI's notification path. | This is a runtime notification, not a campaign event or save event. |

## Tactical state and options

### Tactical positions, regions, and strategic areas

`TacticalPositions` and `TacticalRegions` are collected from the active Mission's mission objects during construction. They describe the tactical geometry available to this AI instance. `StrategicAreas` and `HasStrategicAreas` describe the dynamic strategic areas currently registered for the Team.

`AddStrategicArea`, `RemoveStrategicArea`, and `RemoveAllStrategicAreas` mutate the AI's current tactical set. They do not create a campaign settlement or persist the area. Use them while the Mission owns the relevant `StrategicArea`, and remove them when the owning tactical phase ends.

### Tactic options and selection

- `AddTacticOption(TacticComponent)` adds a concrete tactic to the candidate list. It does not select it by itself.
- `RemoveTacticOption(Type)` removes by the exact runtime type. Passing a base type does not mean “remove every derived tactic.”
- `ClearTacticOptions()` removes the current candidate list. Clearing it while a tactic is active does not by itself perform the full cleanup that a tactic transition performs.
- `ResetTactic(bool keepCurrentTactic = true)` resets the tactical selection. With `false`, the current tactic is canceled and a new selection can be applied; application and occasional-tick side effects can therefore happen immediately.
- `CheckIsDefenseApplicable()` recalculates the defense decision used by `IsDefenseApplicable`. It is a query refresh for the active battle, not a request to start a defense order.
- `GetIsFirstTacticChosen` reports whether the first-tactic selection phase has completed. It should not be treated as “the battle has a stable tactic forever.”

`CurrentTactic` is managed by the AI rather than by a mod's arbitrary field assignment. The setter invokes the old tactic's cancellation path, applies the new tactic, and can trigger an occasional tick. Use the concrete controller's intended reset/selection path instead of swapping this state behind the AI's back.

### Tactical decision notifications

`OnNotifyTacticalDecision` is a delegate-style notification hook. Subscribe with `+=` and unsubscribe with `-=` when the listener has a bounded lifetime. Direct assignment replaces existing listeners and can silently disconnect the battle controller or another mod. `NotifyTacticalDecision` only reports a decision; it does not itself apply a formation order.

## Dependency map

**Upstream**

- [`Mission`](../../mission/Mission) owns the active battle and determines whether AI ticking is allowed.
- [`Team`](../Team) owns the component and calls the Team-level tick/install paths.
- [`MissionLogic`](../MissionLogic) and the battle controller choose the concrete AI and install tactic options.
- [`MissionTime`](../MissionTime) supplies the Mission-time basis for timer-driven behavior.
- [`StrategicArea`](../StrategicArea) supplies dynamic tactical areas.
- [`TacticComponent`](../TacticComponent) defines the tactic state applied by the AI.

**Downstream**

- [`Formation`](../../mission/Formation) receives the AI's formation decisions and reports first-unit/frame transitions.
- [`Agent`](../../mission/Agent) is the unit referenced by formation-frame callbacks; it is not owned by this component.
- [`TeamAIGeneral`](../TeamAIGeneral) and [`TeamAISiegeComponent`](../TeamAISiegeComponent) are concrete AI families that implement the abstract behavior for different battle modes.
- [`BehaviorFlank`](../BehaviorFlank) and [`BehaviorSergeantMPMounted`](../BehaviorSergeantMPMounted), along with detachments, siege machines, and Sally Out controllers, consume the tactic decisions and tactical areas.

## Failure and crash boundaries

1. **AI not installed:** `Team.TeamAI` can be null during setup or for a Team that does not use this controller. Guard the read before calling members.
2. **Wrong phase:** a subclass that assumes deployment objects, formations, or siege machines exist can fail when called from construction or before deployment. Put phase checks in the subclass.
3. **AI replacement:** a second `AddTeamAI` replaces the Team's controller and changes formation ownership. It can leave old tactic state, detachments, or delegate subscriptions alive if the replacement owner does not clean them up.
4. **Callback lifetime:** Agent and Formation references are valid only inside the current Mission. Do not queue them into campaign code or save data.
5. **Teardown assumption:** `OnMissionEnded()` is not a reliable automatic disposal signal in the current source path. Use the mod's explicit Mission behavior cleanup and stop observing the Team once Mission teardown starts.
6. **Delegate overwrite:** assigning a notification delegate instead of subscribing can remove the game's existing listener and break tactical coordination without an immediate exception.
7. **Wrong update hook:** `TickOccasionally` and the normal AI tick are controlled by Mission/Team timers and AI gates. Use `MissionBehavior` for an unconditional Mission callback rather than forcing a Team AI tick.

## Version note

This page describes the 1.4.5 `TaleWorlds.MountAndBlade` implementation. Older versions can differ in concrete battle controllers and tactic subclasses. Keep the lifecycle rule as the stable contract: acquire from the current Mission's Team, install through the battle setup path, and never carry the component across Missions.

## Navigation

- [↑ Parent: Mission extension API](../)
- [↔ Sibling: Team](../Team)
- [↔ Sibling: TeamQuerySystem](../TeamQuerySystem)
- [Related: Mission](../../mission/Mission)
- [Related: Formation](../../mission/Formation)
- [Related: TacticComponent](../TacticComponent)

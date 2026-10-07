---
title: "AssignPlayerRoleInTeamMissionController"
description: "Auto-generated class reference for AssignPlayerRoleInTeamMissionController."
---
# AssignPlayerRoleInTeamMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AssignPlayerRoleInTeamMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs`

## Overview

`AssignPlayerRoleInTeamMissionController` is the mission behavior that resolves the age-old "which formation does each named hero lead?" question when a battle mission deploys. It is constructed explicitly with three booleans — `SandBoxMissions` passes `new AssignPlayerRoleInTeamMissionController(!isPlayerSergeant, isPlayerSergeant, isPlayerInArmy, heroesOnPlayerSideByPriority)` (`SandBoxMissions.cs:457`), so the general/sergeant/in-army decision is fixed at mission-construction time and never re-derived. Note the first argument is the *negation* of `isPlayerSergeant`: "not a sergeant" is the code for "general".

`AfterStart` applies those flags to the team (`AssignPlayerRoleInTeamMissionController.cs:52`), `OnTeamDeployed` points `PlayerOrderController.Owner` at `Agent.Main` and, if the player is general, stamps `Agent.Main` as `PlayerOwner` on every formation (`AssignPlayerRoleInTeamMissionController.cs:61`). The interesting work happens later, in `OnPlayerTeamDeployed` and the two-choice sequence that follows.

Two dictionaries carry the whole model, and the distinction between them is the thing to hold on to. `FormationsLockedWithSergeants` holds choices made *before* the player decided — they are never revisited. `FormationsWithLooselyChosenSergeants` holds the ones allocated *after*, and is cleared and rebuilt every time the player changes their mind (`AssignPlayerRoleInTeamMissionController.cs:124`). Both are keyed by `int`, not `Formation`.

## Mental Model

Read it as a two-phase negotiation, and note that it does nothing at all unless the battle initialization model allows it.

**Gate.** `OnPlayerTeamDeployed` opens with `MissionGameModels.Current.BattleInitializationModel.CanPlayerSideDeployWithOrderOfBattle()` (`AssignPlayerRoleInTeamMissionController.cs:76`). In a battle without an order-of-battle phase that returns false and the method returns immediately — no dictionaries, no events, no sergeant. If you subscribe to `OnPlayerTurnToChooseFormationToLead` expecting a callback in every mission, it simply never fires.

**Phase one (auto-assign).** For a non-general player, the queue of `Character.StringId` values supplied at construction is drained: each name is matched against `PlayerTeam.ActiveAgents` by `Character.StringId` (`AssignPlayerRoleInTeamMissionController.cs:93`), then handed to `ChooseFormationToLead`. The player agent itself aborts the loop if encountered (`break`), because you cannot be your own sergeant. The same drain runs again after the player's choice.

**Phase two (player picks).** `OnPlayerChoiceMade(int chosenIndex)` stores the index and rebuilds the loose map. `chosenIndex == -1` means "no preference" and skips the player's own formation entirely (`AssignPlayerRoleInTeamMissionController.cs:127`). `OnPlayerChoiceFinalized` is the only thing that actually writes `Formation.Captain` / `Formation.PlayerOwner`, via `AssignSergeant` (`AssignPlayerRoleInTeamMissionController.cs:169`, `AssignPlayerRoleInTeamMissionController.cs:174`).

`ChooseFormationToLead` is where the interesting heuristic lives, and it is worth knowing because it decides assignments you did not ask for. It takes the formation with the highest `QuerySystem.FormationPower`, then rejects it unless the agent's equipment matches the formation's type — dismounting an archer into a cavalry formation, or mounting a lancer into infantry, is skipped (`AssignPlayerRoleInTeamMissionController.cs:189`). The loop can exhaust the list and return `null`, meaning that named hero ends up leading nothing.

The `int` keys are `Formation.Index` values, and `OnPlayerChoiceFinalized` casts them back with `GetFormation((FormationClass)keyValuePair.Key)` (`AssignPlayerRoleInTeamMissionController.cs:160`). That cast is a reinterpretation, not a lookup by identity: it is only correct as long as the dictionary keys really are `FormationClass` ordinals.

## How to use

**Getting it.** Construct it yourself in the mission behaviour array when you build a custom battle, or fetch the existing one from any behaviour:

```csharp
Mission mission = Mission.Current;
AssignPlayerRoleInTeamMissionController roles =
    mission.GetMissionBehavior<AssignPlayerRoleInTeamMissionController>();
```

Subclassing is the supported route when you want to change what "choose a formation" means — `OnPlayerTeamDeployed`, `OnPlayerChoiceMade` and `AssignSergeant` are all `virtual`, but `OnPlayerChoiceFinalized` is not, so you cannot skip the captain write by overriding alone.

**Typical use** — act on the two events it raises, both fired only after the phase-one auto-assignment:

```csharp
public class MyRoleWatcher : MissionLogic
{
    public override void AfterStart()
    {
        AssignPlayerRoleInTeamMissionController roles =
            Mission.Current.GetMissionBehavior<AssignPlayerRoleInTeamMissionController>();
        if (roles == null) return;

        roles.OnAllFormationsAssignedSergeants += (loose) =>
        {
            foreach (var pair in loose)
                Debug.Print("formation " + pair.Key + " -> " + pair.Value.Name.ToString());
        };
    }

    public override void OnTeamDeployed(Team team)
    {
        // Safe to call once the player team exists; the controller owns the dictionaries.
        Mission.Current.GetMissionBehavior<AssignPlayerRoleInTeamMissionController>()?.OnPlayerChoiceFinalized();
    }
}
```

**Most common mistake, and what it costs.** Calling `OnPlayerChoiceFinalized` before `OnPlayerChoiceMade`, or in a mission where `OnPlayerTeamDeployed` never ran. Both dictionaries are allocated at the top of `OnPlayerTeamDeployed` (`AssignPlayerRoleInTeamMissionController.cs:79`) and nowhere else, so the `foreach` in `OnPlayerChoiceFinalized` dereferences a null `Dictionary` and you get a `NullReferenceException` the moment the mission ends. Also note that a hero whose `Character.StringId` is not present in `PlayerTeam.ActiveAgents` is silently skipped — the `FirstOrDefault` at `AssignPlayerRoleInTeamMissionController.cs:93` returns null and the loop just moves on, so a typo in a hero name produces no sergeant and no warning.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlayerInArmy` | `public bool IsPlayerInArmy { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant { get; set; }` |
| `PlayerChosenIndex` | `public int PlayerChosenIndex { get; set; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of AssignPlayerRoleInTeamMissionController from the subsystem API first
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.AfterStart();
```

### OnTeamDeployed
`public override void OnTeamDeployed(Team team)`

**Purpose:** Invoked when the team deployed event is raised.

```csharp
// Obtain an instance of AssignPlayerRoleInTeamMissionController from the subsystem API first
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnTeamDeployed(team);
```

### OnPlayerTeamDeployed
`public virtual void OnPlayerTeamDeployed()`

**Purpose:** Invoked when the player team deployed event is raised.

```csharp
// Obtain an instance of AssignPlayerRoleInTeamMissionController from the subsystem API first
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnPlayerTeamDeployed();
```

### OnPlayerChoiceMade
`public virtual void OnPlayerChoiceMade(int chosenIndex)`

**Purpose:** Invoked when the player choice made event is raised.

```csharp
// Obtain an instance of AssignPlayerRoleInTeamMissionController from the subsystem API first
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnPlayerChoiceMade(0);
```

### OnPlayerChoiceFinalized
`public void OnPlayerChoiceFinalized()`

**Purpose:** Invoked when the player choice finalized event is raised.

```csharp
// Obtain an instance of AssignPlayerRoleInTeamMissionController from the subsystem API first
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnPlayerChoiceFinalized();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<AssignPlayerRoleInTeamMissionController>();
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic)
- [DeploymentMissionController](../DeploymentMissionController)
- [BattleEndLogic](../BattleEndLogic)
- [FormationAI](../FormationAI)
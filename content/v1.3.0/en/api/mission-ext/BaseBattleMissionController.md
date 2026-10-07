---
title: "BaseBattleMissionController"
description: "Auto-generated class reference for BaseBattleMissionController."
---
# BaseBattleMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BaseBattleMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs`

## Overview

`BaseBattleMissionController` is the abstract scaffolding a battle mission needs and the game does not ship: it is a `MissionLogic` subclass (`BaseBattleMissionController.cs:11`) with two abstract troop factories — `CreateAttackerTroops` (`BaseBattleMissionController.cs:70`) and `CreateDefenderTroops` (`BaseBattleMissionController.cs:67`) — so it is an abstract base with *no subclass anywhere in the shipped assemblies*. Its job is to make a mission a two-team battle: `AfterStart` calls `CreateTeams()` and switches the mission to `MissionMode.Battle` (`BaseBattleMissionController.cs:42`), and `CreateTeams` adds a Defender team and an Attacker team with hard-coded colours `4278190335U` and `4278255360U` (`BaseBattleMissionController.cs:161`), then points `Mission.PlayerTeam` at whichever side `IsPlayerAttacker` names (`BaseBattleMissionController.cs:163`) and attaches a `TeamAIGeneral` to each (`BaseBattleMissionController.cs:171`).

Its lifetime is the mission's, one instance added as a mission behaviour, with teams created once during `AfterStart`. Troops come from `SetupTeam`, called per team, which routes by `team.Side` and additionally spawns the player when the team being set up is `Mission.PlayerTeam` (`BaseBattleMissionController.cs:50`). `CreatePlayer` then spawns `Game.Current.ObjectManager.GetObject<BasicCharacterObject>("main_hero")` (`BaseBattleMissionController.cs:194`) as the main agent with `AgentControllerType.Player` and assigns `Mission.MainAgent` (`BaseBattleMissionController.cs:208`).

Win/loss is decided by `MissionEnded` (`BaseBattleMissionController.cs:105`): it refuses to answer while deployment is unfinished, then resolves to defeated if the player is dead or a side has zero members, choosing `MissionResult.CreateDefeated` or `CreateSuccessful` from `Mission.PlayerTeam.Side`.

## Mental Model

The `EarlyStart` override is a trap, and it is the first thing to know before subclassing. The override body calls `this.EarlyStart()` (`BaseBattleMissionController.cs:38`) — with no arguments, and with no other parameterless `EarlyStart` in scope, that call binds to itself. Any subclass that does *not* declare its own parameterless `EarlyStart()` gets infinite recursion the moment the mission starts. The pattern only works because a derived type is expected to declare `protected virtual void EarlyStart()`, which hides the base member by name and becomes the better overload candidate.

`CreateTeams` is exclusive, not additive: it throws `MBIllegalValueException("Number of teams is not 0.")` if `Mission.Teams` is not empty (`BaseBattleMissionController.cs:157`). So a mission may carry exactly one of these controllers, and it must be the thing that creates the teams — adding it to a mission that already has teams, or adding two, fails at `AfterStart` rather than at registration.

`MissionEnded` is a query that the base also *uses*: `OnEndMissionRequest` calls it to decide whether a retreat confirmation is needed (`BaseBattleMissionController.cs:141`), and if the mission has not ended it shows the `str_retreat_question` inquiry whose accept handler goes to `Mission.OnEndMissionResult` (`BaseBattleMissionController.cs:143`). It also hard-blocks retreat when the player is alive and within 5 units of an enemy — `Mission.IsPlayerCloseToAnEnemy(5f)` (`BaseBattleMissionController.cs:133`) — and sets `canPlayerLeave = false` with a `str_can_not_retreat` quick message.

Read `GetTeamAI` as the AI seam, not as a query: it is `virtual` and returns `new TeamAIGeneral(mission, team, thinkTimerTime, applyTimerTime)` with defaults of `5f` and `1f` (`BaseBattleMissionController.cs:73`), and `CreateTeams` calls it explicitly with `5f, 1f` (`BaseBattleMissionController.cs:171`) rather than relying on those defaults.

The debug side-swapping helpers are unreachable in a shipped build. `DebugTick` is `private` and `[Conditional("DEBUG")]` (`BaseBattleMissionController.cs:85`) and nothing in the tree calls it, yet the hotkey it reads is genuinely registered — `RegisterDebugHotkey("BaseBattleMissionControllerHotkeyBecomePlayer", InputKey.P, Ctrl|Shift)` (`DebugHotKeyCategory.cs:89`). So `BecomePlayer`, `BecomeEnemy` and `SwapTeams` (`BaseBattleMissionController.cs:212`) work but have no input path in release; if you call `BecomeEnemy` yourself, remember it flips both `Mission.MainAgent.Controller` and `Mission.PlayerEnemyTeam.Leader.Controller` and then swaps `Mission.PlayerTeam` (`BaseBattleMissionController.cs:228`), which also inverts `IsPlayerAttacker` for any later team setup.

`OnMissionTick` (`BaseBattleMissionController.cs:79`) and `OnAgentRemoved` (`BaseBattleMissionController.cs:150`) are empty overrides that do nothing but call base or nothing at all — they exist purely as hook points for subclasses.

## How to use

**Getting one.** Nothing in the game constructs it; you add your own subclass as a mission behaviour. Implement the two abstract factories, then `Mission.Current.AddMissionLogic(new MyBattleController(isPlayerAttacker: true))` before the mission starts. Because `CreateTeams` runs in `AfterStart` (`BaseBattleMissionController.cs:45`), the behaviour must be present *before* the mission starts, not added later.

**Typical use:**

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions;

public class MyBattleController : BaseBattleMissionController
{
    private MissionAgentSpawnLogic _spawnLogic;

    public MyBattleController(bool isPlayerAttacker)
        : base(isPlayerAttacker)
    {
    }

    // The parameterless EarlyStart is NOT optional: without it the base
    // override's this.EarlyStart() call recurses into itself forever.
    protected virtual void EarlyStart()
    {
        _spawnLogic = Mission.GetMissionBehavior<MissionAgentSpawnLogic>();
    }

    protected override void CreateAttackerTroops()
    {
        _spawnLogic.SetSpawnTroops(BattleSideEnum.Attacker, true, true);
        IncrementDeploymedTroops(BattleSideEnum.Attacker);
    }

    protected override void CreateDefenderTroops()
    {
        _spawnLogic.SetSpawnTroops(BattleSideEnum.Defender, true, true);
        IncrementDeploymedTroops(BattleSideEnum.Defender);
    }

    // Swap the AI cadence for one side only.
    public override TeamAIComponent GetTeamAI(Team team, float thinkTimerTime = 5f, float applyTimerTime = 1f)
    {
        return new TeamAIGeneral(Mission, team, 1f, 0.25f);
    }
}

// Register before the mission starts: CreateTeams runs in AfterStart.
Mission.Current.AddMissionBehavior(new MyBattleController(isPlayerAttacker: true));
```

`Mission.GetMissionBehavior<T>()` and `MissionAgentSpawnLogic.SetSpawnTroops(BattleSideEnum, bool, bool)` (`MissionAgentSpawnLogic.cs:325`) are what the vanilla deployment controller uses, and `GetTeamAI`'s return type is the seam the base fills with `new TeamAIGeneral(...)` by default. `IncrementDeploymedTroops(BattleSideEnum)` (`BaseBattleMissionController.cs:178`) is the deployment counter the class maintains for you.

**Most common mistake:** leaving `EarlyStart` to the base.

```csharp
public class MyBattleController : BaseBattleMissionController
{
    public MyBattleController(bool isPlayerAttacker) : base(isPlayerAttacker) { }
    protected override void CreateAttackerTroops() { }
    protected override void CreateDefenderTroops() { }
}
```

This compiles and fails at runtime, not at load: the mission calls `EarlyStart`, which calls itself, and the mission dies with a `StackOverflowException` — uncatchable, and it takes the process with it. The alternative failure mode is the mirror image: overriding `AfterStart` and calling `base.AfterStart()` twice, which runs `CreateTeams` twice and throws `MBIllegalValueException` on the second call because the first one already filled `Mission.Teams`.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.AfterStart();
```

### GetTeamAI
`public virtual TeamAIComponent GetTeamAI(Team team, float thinkTimerTime = 5f, float applyTimerTime = 1f)`

**Purpose:** Reads and returns the team a i value held by the this instance.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
var result = baseBattleMissionController.GetTeamAI(team, 0, 0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.OnMissionTick(0);
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Executes the MissionEnded logic.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
var result = baseBattleMissionController.MissionEnded(missionResult);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
var result = baseBattleMissionController.OnEndMissionRequest(canPlayerLeave);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BaseBattleMissionController from the subsystem API first
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BaseBattleMissionController instance = ...;
```

## See Also

- [Area Index](../)
- [BattleEndLogic — the `ExitResult` this handler branches on](../BattleEndLogic)
- [BattleDeploymentMissionController — the deployment-phase sibling controller](../BattleDeploymentMissionController)
- [MissionLogic — the base class it extends](../MissionLogic)
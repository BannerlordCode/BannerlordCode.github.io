---
title: "EquipmentTestMissionController"
description: "Auto-generated class reference for EquipmentTestMissionController."
---
# EquipmentTestMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentTestMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/EquipmentTestMissionController.cs`

## Overview

`EquipmentTestMissionController` is a three-line mission behaviour whose entire body is one `AfterStart` override (`EquipmentTestMissionController.cs:11`). It exists so the equipment/loadout screen has a live mission with one controllable agent to look at.

The body is a lookup and a spawn. It finds the scene entity tagged `"spawnpoint_player"` (`EquipmentTestMissionController.cs:14`), then spawns an agent built from `Game.Current.PlayerTroop` on the **attacker** team, positioned and oriented from that spawn point, with civilian equipment disabled and controller set to `AgentControllerType.Player` (`EquipmentTestMissionController.cs:15`). The fluent chain is `AgentBuildData`: `.Team(...)`, `.InitialFrameFromSpawnPointEntity(entity)`, `.CivilianEquipment(false)`, `.Controller(...)`, handed to `Mission.SpawnAgent(...)`.

Note what it does *not* do: it never assigns `Mission.MainAgent`. The agent is player-controlled but is not the mission's main agent, so code that reaches for `Mission.MainAgent` — camera, most view logic — will not see it.

The `spawnpoint_player` tag is a hard requirement, not a convention you can rename. The lookup is a scene tag string and nothing guards the result, so a mission scene without that entity gives you a null `WeakGameEntity` straight into the spawn builder.

## Mental Model

`AfterStart` is the right hook here and the wrong one to extend. It runs once, after the mission has started, so the scene exists and the spawn logic is available. Anything you want to happen *per agent* does not belong here — this class has no other members.

`Game.Current.PlayerTroop` is the vanilla player character, resolved at spawn time rather than in a constructor (`EquipmentTestMissionController.cs:15`). If your mod replaces the player troop, this behaviour picks up the replacement; if it has not, you get `"main_hero"`.

`CivilianEquipment(false)` is the one flag that changes what the agent looks like. Passing `false` means the agent gets the character's normal equipment rather than the undressed civilian set, which is why this behaviour shows the real loadout.

The spawn lands on `Mission.AttackerTeam` unconditionally (`EquipmentTestMissionController.cs:15`). There is no `isPlayerAttacker` flag here, unlike the deployment and battle controllers — the side is hard-coded, so this controller is a singleplayer-editor tool rather than something you can reuse for a defender-side test.

Because there is no `Mission.MainAgent` assignment, treat this as "a controllable agent exists", not "the player agent exists". Anything that needs the main agent — `Agent.Main`, camera control, the crosshair — will not respond to this spawn.

## How to use

**Getting one.** Construct it and add it as a mission behaviour before the mission starts. The mission scene must contain an entity tagged `spawnpoint_player` and must already have an attacker team.

**Typical use** — the same spawn, with the main agent assigned as well:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions;

public class MyEquipmentTestController : MissionLogic
{
    public override void AfterStart()
    {
        base.AfterStart();

        // Scene tag lookup: no guard in the shipped controller.
        WeakGameEntity spawnPoint = Mission.Scene.FindWeakEntityWithTag("spawnpoint_player");
        if (!spawnPoint.IsValid)
        {
            return;
        }

        Agent agent = Mission.SpawnAgent(
            new AgentBuildData(Game.Current.PlayerTroop)
                .Team(Mission.AttackerTeam)
                .InitialFrameFromSpawnPointEntity(spawnPoint)
                .CivilianEquipment(false)
                .Controller(AgentControllerType.Player),
            false);

        // The shipped controller never does this; add it if you need the
        // camera and other main-agent-dependent logic to follow this agent.
        if (agent != null)
        {
            Mission.MainAgent = agent;
        }
    }
}
```

`Mission.Scene.FindWeakEntityWithTag(string)`, `AgentBuildData`, `Mission.SpawnAgent(AgentBuildData, bool)` and `Mission.MainAgent` are the real members — the first three are exactly what `EquipmentTestMissionController.cs:14` and `EquipmentTestMissionController.cs:15` use.

**Most common mistake:** expecting the spawned agent to be the mission's main agent.

```csharp
// After the shipped controller has run:
Agent main = Mission.Current.MainAgent;   // null
```

`AfterStart` spawns a player-controlled agent and stops there — there is no `Mission.MainAgent = agent` anywhere in the class. So camera control, the crosshair, and anything else gated on the main agent stay inactive, and the agent you can see standing there is not the one those systems are watching. Either assign `Mission.MainAgent` yourself, as in the example, or drive the test agent directly by reference.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of EquipmentTestMissionController from the subsystem API first
EquipmentTestMissionController equipmentTestMissionController = ...;
equipmentTestMissionController.AfterStart();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<EquipmentTestMissionController>();
```

## See Also

- [Area Index](../)
- [AgentBuildData — the fluent builder the spawn uses](../AgentBuildData)
- [DebugObjectDestroyerMissionController — the other developer tool in this namespace](../DebugObjectDestroyerMissionController)
- [中文页面](../../../../zh/api/mission-ext/EquipmentTestMissionController)
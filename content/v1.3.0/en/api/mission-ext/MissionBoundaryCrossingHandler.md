---
title: "MissionBoundaryCrossingHandler"
description: "Auto-generated class reference for MissionBoundaryCrossingHandler."
---
# MissionBoundaryCrossingHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBoundaryCrossingHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionBoundaryCrossingHandler.cs`

## Overview

`MissionBoundaryCrossingHandler` is the `MissionLogic` that polices "don't leave the battlefield". It watches every networked agent on the server, watches the local player in singleplayer, and after a leeway period it does something drastic: kills the offender outright, or retreats the whole mission. It derives from `MissionLogic` (`MissionBoundaryCrossingHandler.cs:13`), takes one constructor argument — the leeway in seconds, defaulting to `10f` (`MissionBoundaryCrossingHandler.cs:31`) — and is added by hand to mission behaviour arrays with an explicit `10f` (`SandBoxMissions.cs:112`, `SandBoxMissions.cs:196`, `BannerlordMissions.cs:231`).

It exposes three events for UI: `StartTime(float leeway, float zero)` (`MissionBoundaryCrossingHandler.cs:18`), `StopTime` (`MissionBoundaryCrossingHandler.cs:23`) and `TimeCount(float progress)` (`MissionBoundaryCrossingHandler.cs:28`). Those are the intended way for a mod to draw a countdown; there is no polling property for it.

## Mental Model

The punishment is deliberately blunt and it is **not** the same in multiplayer and singleplayer. `DecideOrHandleAgentPunishment` branches on `GameNetwork.IsSessionActive` (`MissionBoundaryCrossingHandler.cs:155`): in a session it queues the agent onto `_agentsToPunish`, and if the agent has a mount it queues the mount too (`MissionBoundaryCrossingHandler.cs:159`, `MissionBoundaryCrossingHandler.cs:162`). Outside a session it does not kill anyone — it calls `base.Mission.RetreatMission()` (`MissionBoundaryCrossingHandler.cs:169`). So the player in singleplayer loses the battle; a player in a multiplayer server is *killed* by the server.

`HandleAgentPunishmentsServer` shows how the kill is fabricated: a `Blow` is constructed by hand, `FillAsMeleeBlow(null, null, -1, 0)` with no attacker and no victim item, damage type `Blunt`, `BaseMagnitude = 10000f`, `WeaponClass.Undefined`, `DamagedPercentage = 1f`, and then `agent.Die(b, Agent.KillInfo.Invalid)` (`MissionBoundaryCrossingHandler.cs:140` through `MissionBoundaryCrossingHandler.cs:147`). The attacker is null, so the kill is unattributed — it will not show up in a kill feed as being done by anyone, and a mod that inspects `KillingBlow.InflictedAgent` sees null.

Only the server ticks agents. `OnMissionTick` runs `TickForAgentAsServer` for every agent in `Mission.Agents` that has a non-null `MissionPeer` (`MissionBoundaryCrossingHandler.cs:214`, `MissionBoundaryCrossingHandler.cs:216`), and calls `HandleAgentPunishmentsServer` right after (`MissionBoundaryCrossingHandler.cs:219`). The `else if` branch — `TickForMainAgent` — is reached only when there is no session at all (`MissionBoundaryCrossingHandler.cs:221`). So a non-networked mission is judged solely on `Agent.Main`'s own position.

The timer creation differs by role in a way that matters for the UI. `OnAgentWentOut` builds a `MissionTimer.CreateSynchedTimerClient(startTimeInSeconds, _leewayTime)` on a client and a plain `new MissionTimer(_leewayTime)` otherwise (`MissionBoundaryCrossingHandler.cs:75`), then on the server sends `SetBoundariesState(true, timer.GetStartTime().NumberOfTicks)` to the offending peer (`MissionBoundaryCrossingHandler.cs:84`). The client handler replays that by calling `OnAgentWentOut(Mission.MainAgent, message.StateStartTimeInSeconds)` (`MissionBoundaryCrossingHandler.cs:287`). So on a client the countdown is driven by a server-supplied start time, and the local `GameNetwork.IsClient` branch is what makes the progress bar agree with the server's clock.

The `TimeCount` progress value is computed only for the main agent, and only while `_mainAgentLeaveTimer` is non-null (`MissionBoundaryCrossingHandler.cs:225`): `1f - remaining / _leewayTime`, clamped by the timer itself. It is emitted *after* the per-agent work, and it returns early if no subscriber exists (`MissionBoundaryCrossingHandler.cs:230`) — so with no UI attached the rest of the tick's tail is skipped, which is harmless because nothing follows it.

The vehicle branch is the only place `_vehicleHandler` is used, and in 1.3.0 it is always null: the lookup happens once in `OnBehaviorInitialize` (`MissionBoundaryCrossingHandler.cs:49`) and nothing in the tree implements `IVehicleHandler`. So a rider is judged by the rider's own agent position, not the vehicle's.

`OnClearScene` unwinds timers on the server by copying `_agentTimers.Keys` into a list before enumerating, because `OnAgentWentInOrRemoved` mutates the dictionary (`MissionBoundaryCrossingHandler.cs:178`, `MissionBoundaryCrossingHandler.cs:110`). On a non-server it only handles the main agent, and only nulls `_mainAgentLeaveTimer` if `Mission.MainAgent` is already null (`MissionBoundaryCrossingHandler.cs:190`, `MissionBoundaryCrossingHandler.cs:195`).

## How to use

**Getting it.** Construct it with your leeway and add it as a mission behaviour; do not rely on the game's instance if you want a different grace period.

```csharp
using TaleWorlds.MountAndBlade;

public class BoundaryUi : MissionBehavior
{
    private MissionBoundaryCrossingHandler _handler;

    public override void OnBehaviorInitialize()
    {
        _handler = new MissionBoundaryCrossingHandler(15f);   // 15s grace
        Mission.AddMissionBehavior(_handler);

        _handler.StartTime += (leeway, zero) => Debug.Print("out of bounds, " + leeway + "s", false);
        _handler.StopTime += () => Debug.Print("back in bounds", false);
        _handler.TimeCount += progress => Debug.Print("countdown " + progress, false);
    }

    public override void OnRemoveBehavior()
    {
        if (_handler != null)
        {
            // The events hold this object; detach or the next mission keeps calling it.
            _handler.StartTime -= OnStart;
            _handler.StopTime -= OnStop;
            _handler.TimeCount -= OnCount;
        }
    }

    private void OnStart(float a, float b) { }
    private void OnStop() { }
    private void OnCount(float p) { }
}
```

Read the same state yourself if you do not want the events:

```csharp
MissionBoundaryCrossingHandler handler =
    Mission.GetMissionBehavior<MissionBoundaryCrossingHandler>();
if (handler != null)
{
    Debug.Print("main agent outside: " + !Mission.IsPositionInsideBoundaries(Agent.Main.Position.AsVec2), false);
}
```

**The mistake that adds the handler twice and double-punishes.** Calling `Mission.AddMissionBehavior(new MissionBoundaryCrossingHandler(10f))` in a mission that already has one from `SandBoxMissions`. Both instances tick; both keep their own `_agentTimers`, but both also fire `Mission.RetreatMission()` on the same frame in singleplayer and both queue the agent for death on a server (`MissionBoundaryCrossingHandler.cs:159`, `MissionBoundaryCrossingHandler.cs:169`). Nothing de-duplicates them, so the player is killed twice or the mission retreats and then ends — and because the death is unattributed (`MissionBoundaryCrossingHandler.cs:147`), the log shows nothing useful.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionBoundaryCrossingHandler from the subsystem API first
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionBoundaryCrossingHandler from the subsystem API first
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnRemoveBehavior();
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of MissionBoundaryCrossingHandler from the subsystem API first
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnClearScene();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionBoundaryCrossingHandler from the subsystem API first
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionBoundaryCrossingHandler from the subsystem API first
MissionBoundaryCrossingHandler missionBoundaryCrossingHandler = ...;
missionBoundaryCrossingHandler.OnMissionTick(0);
```

## Usage Example

```csharp
The lookup line previously on this page is the right shape but needs to exist first — this type is never auto-created. The full form is:

```csharp
var handler = new MissionBoundaryCrossingHandler(10f);
Mission.Current.AddMissionBehavior(handler);
```
```

## See Also

- [IVehicleHandler — the optional contract whose single branch this type consults](../IVehicleHandler)
- [MissionLogic — the base class whose end-of-mission policy this type joins](../MissionLogic)
- [MissionBoundaryCrossingHandler's retaliation path calls Mission.RetreatMission — see MissionLogic's MissionEnded contract](../MissionLogic)
- [Area Index](../)
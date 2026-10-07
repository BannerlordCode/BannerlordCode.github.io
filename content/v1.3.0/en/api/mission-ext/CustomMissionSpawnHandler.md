---
title: "CustomMissionSpawnHandler"
description: "Auto-generated class reference for CustomMissionSpawnHandler."
---
# CustomMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomMissionSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomMissionSpawnHandler.cs`

## Overview

`CustomMissionSpawnHandler` is a deliberately tiny `MissionLogic` (`CustomMissionSpawnHandler.cs:6`) that exists to hold one thing: a reference to the mission's spawn logic, fetched once during initialisation. That is the whole of its instance state — a single `protected MissionAgentSpawnLogic _missionAgentSpawnLogic`, resolved in `OnBehaviorInitialize` via `Mission.GetMissionBehavior<MissionAgentSpawnLogic>()` (`CustomMissionSpawnHandler.cs:12`).

Its one other member is `protected static MissionSpawnSettings CreateCustomBattleWaveSpawnSettings()`, which returns a fully-formed settings object describing the stock "battle with reinforcing waves" cadence (`CustomMissionSpawnHandler.cs:16`). It is static and protected, which makes it the intended factory hook for subclasses that need a different spawn cadence without re-deriving the twelve constructor arguments.

The class is a base, not a finished handler. In the shipped game the concrete wave-reinforcement behaviour derives from it and does the actual spawning; this type contributes the lookup and the settings factory and nothing else.

## Mental Model

The important structural fact is that `OnBehaviorInitialize` is a one-shot that runs before other behaviours may exist. `GetMissionBehavior<MissionAgentSpawnLogic>()` returning null at that moment is permanently baked in — `_missionAgentSpawnLogic` is never re-fetched, so the field stays null for the entire mission and every use site must tolerate it. Behaviour-list order in a custom mission therefore matters here in a way it does not for most logic.

`CreateCustomBattleWaveSpawnSettings` returns an object built from three enum choices and a run of bare floats: `BattleSizeAllocating` for initial spawn, `GlobalTimer` for reinforcement timing, `Wave` for reinforcement spawn method, then `3f, 0f, 0f, 0.5f, 0, 0f, 0f, 1f, 0.75f` (`CustomMissionSpawnHandler.cs:18`). Because the numbers are positional and unnamed at the call site, do not "tidy" them — the ordering is the `MissionSpawnSettings` constructor's parameter order and every one of them means something different (intermission delay, initial delay, ratios, probabilities). Read them against the constructor signature before changing any of them.

It is `protected static`, not `public static`, so it is reachable from your subclass and from nothing else. If you need the same settings outside a subclass, you must construct a `MissionSpawnSettings` yourself or expose a wrapper.

## How to use

**Getting it.** Register it as a behaviour and reach it from subclasses:

```csharp
public class MyWaveSpawnHandler : CustomMissionSpawnHandler
{
    protected override MissionSpawnSettings CreateInitialSpawnSettings()
    {
        // Reuse the stock cadence, then adjust the object it produced.
        MissionSpawnSettings settings = CreateCustomBattleWaveSpawnSettings();
        return settings;
    }
}
```

The already-resolved spawn logic is available to the subclass without another lookup:

```csharp
public class MyWaveSpawnHandler : CustomMissionSpawnHandler
{
    public override void OnMissionTick(float dt)
    {
        if (_missionAgentSpawnLogic == null) return;  // legitimate: behaviour-list order
        _missionAgentSpawnLogic.StopSpawner(BattleSideEnum.Defender);
    }
}
```

**Typical use** — verify the lookup actually resolved, which is the failure this class invites:

```csharp
public override void OnBehaviorInitialize()
{
    base.OnBehaviorInitialize();
    MBDebug.Print("spawn logic bound: " + (_missionAgentSpawnLogic != null));
}
```

**Most common mistake, and what it costs.** Registering this behaviour before `MissionAgentSpawnLogic` in the mission behaviour array and then using the cached field. `OnBehaviorInitialize` runs once, at initialisation, so a null result is never retried (`CustomMissionSpawnHandler.cs:12`) and every later use sees null. Because the field is `protected` and reads naturally like a guaranteed handle, the failure surfaces far from its cause: your spawn override simply never fires, the stock wave cadence runs instead, and nothing is logged. Either order the behaviours so `MissionAgentSpawnLogic` initialises first, or null-check the field at every use and fall back to `Mission.Current.GetMissionBehavior<MissionAgentSpawnLogic>()` at the point of use.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of CustomMissionSpawnHandler from the subsystem API first
CustomMissionSpawnHandler customMissionSpawnHandler = ...;
customMissionSpawnHandler.OnBehaviorInitialize();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CustomMissionSpawnHandler>();
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic)
- [MissionAgentSpawnLogic](../MissionAgentSpawnLogic)
- [CustomMissionSpawnHandler (中文页面)](../../../../zh/api/mission-ext/CustomMissionSpawnHandler)
- [BattleSpawnLogic](../BattleSpawnLogic)
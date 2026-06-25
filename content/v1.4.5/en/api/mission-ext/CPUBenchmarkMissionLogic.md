---
title: "CPUBenchmarkMissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CPUBenchmarkMissionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CPUBenchmarkMissionLogic

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CPUBenchmarkMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs`

## Overview

`CPUBenchmarkMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `CPUBenchmarkMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Called when the `pre mission tick` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### CPUBenchmarkMission
`public static string CPUBenchmarkMission(List<string> strings)`

**Purpose:** Handles logic related to `c p u benchmark mission`.

### CPUBenchmark
`public static string CPUBenchmark(List<string> strings)`

**Purpose:** Handles logic related to `c p u benchmark`.

### BenchmarkStateStart
`public static string BenchmarkStateStart(List<string> strings)`

**Purpose:** Handles logic related to `benchmark state start`.

### BenchmarkStateEnd
`public static string BenchmarkStateEnd(List<string> strings)`

**Purpose:** Handles logic related to `benchmark state end`.

### OpenCPUBenchmarkMission
`public static Mission OpenCPUBenchmarkMission(string scene)`

**Purpose:** Handles logic related to `open c p u benchmark mission`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new CPUBenchmarkMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)
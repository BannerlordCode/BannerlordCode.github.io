---
title: "CPUBenchmarkMissionLogic"
description: "Auto-generated class reference for CPUBenchmarkMissionLogic."
---
# CPUBenchmarkMissionLogic

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CPUBenchmarkMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs`

## Overview

`CPUBenchmarkMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `CPUBenchmarkMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of CPUBenchmarkMissionLogic from the subsystem API first
CPUBenchmarkMissionLogic cPUBenchmarkMissionLogic = ...;
cPUBenchmarkMissionLogic.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of CPUBenchmarkMissionLogic from the subsystem API first
CPUBenchmarkMissionLogic cPUBenchmarkMissionLogic = ...;
cPUBenchmarkMissionLogic.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of CPUBenchmarkMissionLogic from the subsystem API first
CPUBenchmarkMissionLogic cPUBenchmarkMissionLogic = ...;
cPUBenchmarkMissionLogic.OnMissionTick(0);
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the pre mission tick event is raised.

```csharp
// Obtain an instance of CPUBenchmarkMissionLogic from the subsystem API first
CPUBenchmarkMissionLogic cPUBenchmarkMissionLogic = ...;
cPUBenchmarkMissionLogic.OnPreMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of CPUBenchmarkMissionLogic from the subsystem API first
CPUBenchmarkMissionLogic cPUBenchmarkMissionLogic = ...;
cPUBenchmarkMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### CPUBenchmarkMission
`public static string CPUBenchmarkMission(List<string> strings)`

**Purpose:** Executes the CPUBenchmarkMission logic.

```csharp
// Static call; no instance required
CPUBenchmarkMissionLogic.CPUBenchmarkMission(strings);
```

### CPUBenchmark
`public static string CPUBenchmark(List<string> strings)`

**Purpose:** Executes the CPUBenchmark logic.

```csharp
// Static call; no instance required
CPUBenchmarkMissionLogic.CPUBenchmark(strings);
```

### BenchmarkStateStart
`public static string BenchmarkStateStart(List<string> strings)`

**Purpose:** Executes the BenchmarkStateStart logic.

```csharp
// Static call; no instance required
CPUBenchmarkMissionLogic.BenchmarkStateStart(strings);
```

### BenchmarkStateEnd
`public static string BenchmarkStateEnd(List<string> strings)`

**Purpose:** Executes the BenchmarkStateEnd logic.

```csharp
// Static call; no instance required
CPUBenchmarkMissionLogic.BenchmarkStateEnd(strings);
```

### OpenCPUBenchmarkMission
`public static Mission OpenCPUBenchmarkMission(string scene)`

**Purpose:** Opens the resource or UI associated with c p u benchmark mission.

```csharp
// Static call; no instance required
CPUBenchmarkMissionLogic.OpenCPUBenchmarkMission("example");
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CPUBenchmarkMissionLogic>();
```

## See Also

- [Area Index](../)
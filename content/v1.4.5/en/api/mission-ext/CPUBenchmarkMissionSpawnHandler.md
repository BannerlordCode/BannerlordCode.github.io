---
title: "CPUBenchmarkMissionSpawnHandler"
description: "Auto-generated class reference for CPUBenchmarkMissionSpawnHandler."
---
# CPUBenchmarkMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CPUBenchmarkMissionSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs`

## Overview

`CPUBenchmarkMissionSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CPUBenchmarkMissionSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of CPUBenchmarkMissionSpawnHandler from the subsystem API first
CPUBenchmarkMissionSpawnHandler cPUBenchmarkMissionSpawnHandler = ...;
cPUBenchmarkMissionSpawnHandler.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of CPUBenchmarkMissionSpawnHandler from the subsystem API first
CPUBenchmarkMissionSpawnHandler cPUBenchmarkMissionSpawnHandler = ...;
cPUBenchmarkMissionSpawnHandler.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CPUBenchmarkMissionSpawnHandler>();
```

## See Also

- [Area Index](../)
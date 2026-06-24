<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CPUBenchmarkMissionSpawnHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CPUBenchmarkMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CPUBenchmarkMissionSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs`

## Overview

`CPUBenchmarkMissionSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CPUBenchmarkMissionSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new CPUBenchmarkMissionSpawnHandler());
```

## See Also

- [Complete Class Catalog](../catalog)
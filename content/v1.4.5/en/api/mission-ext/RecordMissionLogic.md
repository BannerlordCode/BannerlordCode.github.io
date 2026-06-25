---
title: "RecordMissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecordMissionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RecordMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RecordMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/RecordMissionLogic.cs`

## Overview

`RecordMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `RecordMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnEndMissionInternal
`public override void OnEndMissionInternal()`

**Purpose:** Called when the `end mission internal` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new RecordMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)
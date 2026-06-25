---
title: "CaravanBattleMissionHandler"
description: "Auto-generated class reference for CaravanBattleMissionHandler."
---
# CaravanBattleMissionHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CaravanBattleMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/CaravanBattleMissionHandler.cs`

## Overview

`CaravanBattleMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CaravanBattleMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of CaravanBattleMissionHandler from the subsystem API first
CaravanBattleMissionHandler caravanBattleMissionHandler = ...;
caravanBattleMissionHandler.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CaravanBattleMissionHandler>();
```

## See Also

- [Area Index](../)
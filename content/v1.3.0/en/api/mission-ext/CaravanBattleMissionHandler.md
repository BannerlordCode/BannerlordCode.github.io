---
title: "CaravanBattleMissionHandler"
description: "Auto-generated class reference for CaravanBattleMissionHandler."
---
# CaravanBattleMissionHandler

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CaravanBattleMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/CaravanBattleMissionHandler.cs`

## Overview

`CaravanBattleMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CaravanBattleMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

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
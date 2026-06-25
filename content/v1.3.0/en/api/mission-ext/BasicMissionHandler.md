---
title: "BasicMissionHandler"
description: "Auto-generated class reference for BasicMissionHandler."
---
# BasicMissionHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs`

## Overview

`BasicMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `BasicMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsWarningWidgetOpened` | `public bool IsWarningWidgetOpened { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of BasicMissionHandler from the subsystem API first
BasicMissionHandler basicMissionHandler = ...;
basicMissionHandler.OnBehaviorInitialize();
```

### CreateWarningWidgetForResult
`public void CreateWarningWidgetForResult(BattleEndLogic.ExitResult result)`

**Purpose:** Constructs a new warning widget for result entity and returns it to the caller.

```csharp
// Obtain an instance of BasicMissionHandler from the subsystem API first
BasicMissionHandler basicMissionHandler = ...;
basicMissionHandler.CreateWarningWidgetForResult(result);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BasicMissionHandler>();
```

## See Also

- [Area Index](../)
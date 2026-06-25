---
title: "MissionMessageUIHandler"
description: "Auto-generated class reference for MissionMessageUIHandler."
---
# MissionMessageUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMessageUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionMessageUIHandler.cs`

## Overview

`MissionMessageUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionMessageUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ShowMessage
`public void ShowMessage(string str, float duration, bool hasPriority = true)`

**Purpose:** Displays the UI or element associated with message.

```csharp
// Obtain an instance of MissionMessageUIHandler from the subsystem API first
MissionMessageUIHandler missionMessageUIHandler = ...;
missionMessageUIHandler.ShowMessage("example", 0, false);
```

### DeleteMessage
`public void DeleteMessage(string str)`

**Purpose:** Executes the DeleteMessage logic.

```csharp
// Obtain an instance of MissionMessageUIHandler from the subsystem API first
MissionMessageUIHandler missionMessageUIHandler = ...;
missionMessageUIHandler.DeleteMessage("example");
```

### DeleteCurrentMessage
`public void DeleteCurrentMessage()`

**Purpose:** Executes the DeleteCurrentMessage logic.

```csharp
// Obtain an instance of MissionMessageUIHandler from the subsystem API first
MissionMessageUIHandler missionMessageUIHandler = ...;
missionMessageUIHandler.DeleteCurrentMessage();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionMessageUIHandler>();
```

## See Also

- [Area Index](../)
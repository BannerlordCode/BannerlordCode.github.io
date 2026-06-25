---
title: "MissionScoreboardUIHandler"
description: "Auto-generated class reference for MissionScoreboardUIHandler."
---
# MissionScoreboardUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MissionScoreboardUIHandler.cs`

## Overview

`MissionScoreboardUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionScoreboardUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionScoreboardUIHandler>();
```

## See Also

- [Area Index](../)
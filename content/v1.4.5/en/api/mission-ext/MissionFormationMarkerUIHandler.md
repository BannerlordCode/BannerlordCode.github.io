---
title: "MissionFormationMarkerUIHandler"
description: "Auto-generated class reference for MissionFormationMarkerUIHandler."
---
# MissionFormationMarkerUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFormationMarkerUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionFormationMarkerUIHandler.cs`

## Overview

`MissionFormationMarkerUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionFormationMarkerUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionFormationMarkerUIHandler>();
```

## See Also

- [Area Index](../)
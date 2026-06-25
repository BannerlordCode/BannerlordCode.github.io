---
title: "MissionOptionsUIHandler"
description: "Auto-generated class reference for MissionOptionsUIHandler."
---
# MissionOptionsUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOptionsUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionOptionsUIHandler.cs`

## Overview

`MissionOptionsUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionOptionsUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionOptionsUIHandler>();
```

## See Also

- [Area Index](../)
---
title: "MissionOrderUIHandler"
description: "Auto-generated class reference for MissionOrderUIHandler."
---
# MissionOrderUIHandler

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionOrderUIHandler.cs`

## Overview

`MissionOrderUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionOrderUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionOrderUIHandler>();
```

## See Also

- [Area Index](../)
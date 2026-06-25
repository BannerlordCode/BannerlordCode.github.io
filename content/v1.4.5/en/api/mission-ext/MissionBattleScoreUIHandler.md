---
title: "MissionBattleScoreUIHandler"
description: "Auto-generated class reference for MissionBattleScoreUIHandler."
---
# MissionBattleScoreUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleScoreUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionBattleScoreUIHandler.cs`

## Overview

`MissionBattleScoreUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionBattleScoreUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionBattleScoreUIHandler>();
```

## See Also

- [Area Index](../)
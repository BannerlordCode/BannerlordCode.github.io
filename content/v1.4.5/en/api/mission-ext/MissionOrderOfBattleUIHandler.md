---
title: "MissionOrderOfBattleUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionOrderOfBattleUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionOrderOfBattleUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderOfBattleUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionOrderOfBattleUIHandler.cs`

## Overview

`MissionOrderOfBattleUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionOrderOfBattleUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionOrderOfBattleUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)
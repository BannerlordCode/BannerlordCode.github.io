---
title: "MissionScoreUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionScoreUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionScoreUIHandler.cs`

## Overview

`MissionScoreUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionScoreUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetName
`public void SetName(string name, int index)`

**Purpose:** Sets the value or state of `name`.

### SaveScore
`public void SaveScore(int score, int index)`

**Purpose:** Saves `score` data.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionScoreUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)
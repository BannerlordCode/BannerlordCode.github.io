---
title: "MissionScoreUIHandler"
description: "Auto-generated class reference for MissionScoreUIHandler."
---
# MissionScoreUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionScoreUIHandler.cs`

## Overview

`MissionScoreUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionScoreUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetName
`public void SetName(string name, int index)`

**Purpose:** **Purpose:** Assigns a new value to name and updates the object's internal state.

```csharp
// Obtain an instance of MissionScoreUIHandler from the subsystem API first
MissionScoreUIHandler missionScoreUIHandler = ...;
missionScoreUIHandler.SetName("example", 0);
```

### SaveScore
`public void SaveScore(int score, int index)`

**Purpose:** **Purpose:** Writes score to persistent storage or a stream.

```csharp
// Obtain an instance of MissionScoreUIHandler from the subsystem API first
MissionScoreUIHandler missionScoreUIHandler = ...;
missionScoreUIHandler.SaveScore(0, 0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionScoreUIHandler>();
```

## See Also

- [Area Index](../)
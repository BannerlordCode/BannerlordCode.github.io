---
title: "MissionCampaignView"
description: "Auto-generated class reference for MissionCampaignView."
---
# MissionCampaignView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionCampaignView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionCampaignView.cs`

## Overview

`MissionCampaignView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionCampaignView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenPreLoad
`public override void OnMissionScreenPreLoad()`

**Purpose:** Invoked when the mission screen pre load event is raised.

```csharp
// Obtain an instance of MissionCampaignView from the subsystem API first
MissionCampaignView missionCampaignView = ...;
missionCampaignView.OnMissionScreenPreLoad();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionCampaignView from the subsystem API first
MissionCampaignView missionCampaignView = ...;
missionCampaignView.OnMissionScreenFinalize();
```

### GetFaceAndHelmetInfoOfFollowedAgent
`public static string GetFaceAndHelmetInfoOfFollowedAgent(List<string> strings)`

**Purpose:** Reads and returns the face and helmet info of followed agent value held by the this instance.

```csharp
// Static call; no instance required
MissionCampaignView.GetFaceAndHelmetInfoOfFollowedAgent(strings);
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionCampaignView from the subsystem API first
MissionCampaignView missionCampaignView = ...;
missionCampaignView.EarlyStart();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionCampaignView view = ...;
```

## See Also

- [Area Index](../)
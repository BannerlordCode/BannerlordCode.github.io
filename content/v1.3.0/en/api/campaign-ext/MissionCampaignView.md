---
title: "MissionCampaignView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionCampaignView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionCampaignView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionCampaignView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionCampaignView.cs`

## Overview

`MissionCampaignView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionCampaignView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenPreLoad
`public override void OnMissionScreenPreLoad()`

**Purpose:** Called when the `mission screen pre load` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### GetFaceAndHelmetInfoOfFollowedAgent
`public static string GetFaceAndHelmetInfoOfFollowedAgent(List<string> strings)`

**Purpose:** Gets the current value of `face and helmet info of followed agent`.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

## Usage Example

```csharp
var view = new MissionCampaignView();
```

## See Also

- [Complete Class Catalog](../catalog)
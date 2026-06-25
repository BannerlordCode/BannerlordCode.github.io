---
title: "MissionCampaignBattleSpectatorView"
description: "Auto-generated class reference for MissionCampaignBattleSpectatorView."
---
# MissionCampaignBattleSpectatorView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionCampaignBattleSpectatorView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionCampaignBattleSpectatorView.cs`

## Overview

`MissionCampaignBattleSpectatorView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionCampaignBattleSpectatorView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionCampaignBattleSpectatorView from the subsystem API first
MissionCampaignBattleSpectatorView missionCampaignBattleSpectatorView = ...;
missionCampaignBattleSpectatorView.AfterStart();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionCampaignBattleSpectatorView view = ...;
```

## See Also

- [Area Index](../)
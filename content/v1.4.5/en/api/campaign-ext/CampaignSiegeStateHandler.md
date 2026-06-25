---
title: "CampaignSiegeStateHandler"
description: "Auto-generated class reference for CampaignSiegeStateHandler."
---
# CampaignSiegeStateHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CampaignSiegeStateHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CampaignSiegeStateHandler.cs`

## Overview

`CampaignSiegeStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CampaignSiegeStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnRetreatMission
`public override void OnRetreatMission()`

**Purpose:** Invoked when the `retreat mission` event is raised.

```csharp
// Obtain an instance of CampaignSiegeStateHandler from the subsystem API first
CampaignSiegeStateHandler campaignSiegeStateHandler = ...;
campaignSiegeStateHandler.OnRetreatMission();
```

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**Purpose:** Invoked when the `mission result ready` event is raised.

```csharp
// Obtain an instance of CampaignSiegeStateHandler from the subsystem API first
CampaignSiegeStateHandler campaignSiegeStateHandler = ...;
campaignSiegeStateHandler.OnMissionResultReady(missionResult);
```

### OnSurrenderMission
`public override void OnSurrenderMission()`

**Purpose:** Invoked when the `surrender mission` event is raised.

```csharp
// Obtain an instance of CampaignSiegeStateHandler from the subsystem API first
CampaignSiegeStateHandler campaignSiegeStateHandler = ...;
campaignSiegeStateHandler.OnSurrenderMission();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CampaignSiegeStateHandler>();
```

## See Also

- [Area Index](../)
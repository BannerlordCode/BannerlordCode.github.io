---
title: "MissionNameMarkerUIHandler"
description: "Auto-generated class reference for MissionNameMarkerUIHandler."
---
# MissionNameMarkerUIHandler

**Namespace:** SandBox.View.Missions.NameMarkers
**Module:** SandBox.View
**Type:** `public class MissionNameMarkerUIHandler : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/NameMarkers/MissionNameMarkerUIHandler.cs`

## Overview

`MissionNameMarkerUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionNameMarkerUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetMarkersDirty
`public virtual void SetMarkersDirty()`

**Purpose:** **Purpose:** Assigns a new value to markers dirty and updates the object's internal state.

```csharp
// Obtain an instance of MissionNameMarkerUIHandler from the subsystem API first
MissionNameMarkerUIHandler missionNameMarkerUIHandler = ...;
missionNameMarkerUIHandler.SetMarkersDirty();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionNameMarkerUIHandler>();
```

## See Also

- [Area Index](../)
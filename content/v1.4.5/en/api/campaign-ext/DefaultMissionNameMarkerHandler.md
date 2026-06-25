---
title: "DefaultMissionNameMarkerHandler"
description: "Auto-generated class reference for DefaultMissionNameMarkerHandler."
---
# DefaultMissionNameMarkerHandler

**Namespace:** SandBox.View.Missions.NameMarkers
**Module:** SandBox.View
**Type:** `public class DefaultMissionNameMarkerHandler : MissionNameMarkerProvider`
**Base:** `MissionNameMarkerProvider`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions.NameMarkers/DefaultMissionNameMarkerHandler.cs`

## Overview

`DefaultMissionNameMarkerHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `DefaultMissionNameMarkerHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateMarkers
`public override void CreateMarkers(List<MissionNameMarkerTargetBaseVM> markers)`

**Purpose:** Constructs a new `markers` entity and returns it to the caller.

```csharp
// Obtain an instance of DefaultMissionNameMarkerHandler from the subsystem API first
DefaultMissionNameMarkerHandler defaultMissionNameMarkerHandler = ...;
defaultMissionNameMarkerHandler.CreateMarkers(markers);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<DefaultMissionNameMarkerHandler>();
```

## See Also

- [Area Index](../)
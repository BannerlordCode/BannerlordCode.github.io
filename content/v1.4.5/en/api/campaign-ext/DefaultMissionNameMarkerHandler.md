---
title: "DefaultMissionNameMarkerHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMissionNameMarkerHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMissionNameMarkerHandler

**Namespace:** SandBox.View.Missions.NameMarkers
**Module:** SandBox.View
**Type:** `public class DefaultMissionNameMarkerHandler : MissionNameMarkerProvider`
**Base:** `MissionNameMarkerProvider`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions.NameMarkers/DefaultMissionNameMarkerHandler.cs`

## Overview

`DefaultMissionNameMarkerHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `DefaultMissionNameMarkerHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateMarkers
`public override void CreateMarkers(List<MissionNameMarkerTargetBaseVM> markers)`

**Purpose:** Creates a new `markers` instance or object.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new DefaultMissionNameMarkerHandler());
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "MissionNameMarkerUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionNameMarkerUIHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionNameMarkerUIHandler

**Namespace:** SandBox.View.Missions.NameMarkers
**Module:** SandBox.View
**Type:** `public class MissionNameMarkerUIHandler : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions.NameMarkers/MissionNameMarkerUIHandler.cs`

## Overview

`MissionNameMarkerUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionNameMarkerUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetMarkersDirty
`public virtual void SetMarkersDirty()`

**Purpose:** Sets the value or state of `markers dirty`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionNameMarkerUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)
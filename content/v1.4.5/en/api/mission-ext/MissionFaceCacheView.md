---
title: "MissionFaceCacheView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionFaceCacheView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionFaceCacheView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFaceCacheView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionFaceCacheView.cs`

## Overview

`MissionFaceCacheView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionFaceCacheView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Called when the `pre mission tick` event is raised.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

## Usage Example

```csharp
var view = new MissionFaceCacheView();
```

## See Also

- [Complete Class Catalog](../catalog)
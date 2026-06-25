---
title: "MissionFormationTargetSelectionHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionFormationTargetSelectionHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionFormationTargetSelectionHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFormationTargetSelectionHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionFormationTargetSelectionHandler.cs`

## Overview

`MissionFormationTargetSelectionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionFormationTargetSelectionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**Purpose:** Called when the `pre display mission tick` event is raised.

### SetIsFormationTargetingDisabled
`public void SetIsFormationTargetingDisabled(bool isDisabled)`

**Purpose:** Sets the value or state of `is formation targeting disabled`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionFormationTargetSelectionHandler());
```

## See Also

- [Complete Class Catalog](../catalog)
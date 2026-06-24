<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionEntitySelectionUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionEntitySelectionUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionEntitySelectionUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionEntitySelectionUIHandler.cs`

## Overview

`MissionEntitySelectionUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionEntitySelectionUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### TickDebug
`public void TickDebug()`

**Purpose:** Handles logic related to `tick debug`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionEntitySelectionUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)
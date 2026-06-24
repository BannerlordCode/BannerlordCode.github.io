<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSingleplayerViewHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSingleplayerViewHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionSingleplayerViewHandler : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionSingleplayerViewHandler.cs`

## Overview

`MissionSingleplayerViewHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionSingleplayerViewHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionSingleplayerViewHandler());
```

## See Also

- [Complete Class Catalog](../catalog)
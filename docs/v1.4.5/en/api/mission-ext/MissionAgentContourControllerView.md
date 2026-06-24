<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentContourControllerView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentContourControllerView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentContourControllerView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionAgentContourControllerView.cs`

## Overview

`MissionAgentContourControllerView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionAgentContourControllerView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnFocusGained
`public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Called when the `focus gained` event is raised.

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**Purpose:** Called when the `focus lost` event is raised.

## Usage Example

```csharp
var view = new MissionAgentContourControllerView();
```

## See Also

- [Complete Class Catalog](../catalog)
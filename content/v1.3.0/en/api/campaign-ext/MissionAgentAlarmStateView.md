---
title: "MissionAgentAlarmStateView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentAlarmStateView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentAlarmStateView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionAgentAlarmStateView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionAgentAlarmStateView.cs`

## Overview

`MissionAgentAlarmStateView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionAgentAlarmStateView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MissionAgentAlarmStateView();
```

## See Also

- [Complete Class Catalog](../catalog)
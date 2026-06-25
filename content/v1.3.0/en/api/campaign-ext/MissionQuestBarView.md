---
title: "MissionQuestBarView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionQuestBarView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionQuestBarView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionQuestBarView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionQuestBarView.cs`

## Overview

`MissionQuestBarView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionQuestBarView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MissionQuestBarView();
```

## See Also

- [Complete Class Catalog](../catalog)
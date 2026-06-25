---
title: "AgentWeaponPassiveUsageVisualBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentWeaponPassiveUsageVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentWeaponPassiveUsageVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentWeaponPassiveUsageVisualBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/AgentWeaponPassiveUsageVisualBrushWidget.cs`

## Overview

`AgentWeaponPassiveUsageVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `AgentWeaponPassiveUsageVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CouchLanceState` | `public int CouchLanceState { get; set; }` |

## Key Methods

### AgentWeaponPassiveUsageVisualBrushWidget
`public class AgentWeaponPassiveUsageVisualBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `agent weapon passive usage visual brush widget`.

## Usage Example

```csharp
var widget = new AgentWeaponPassiveUsageVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
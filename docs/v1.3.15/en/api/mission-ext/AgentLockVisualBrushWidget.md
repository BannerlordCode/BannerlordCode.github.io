<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentLockVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentLockVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentLockVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentLockVisualBrushWidget.cs`

## Overview

`AgentLockVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `AgentLockVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `LockState` | `public int LockState { get; set; }` |

## Usage Example

```csharp
var widget = new AgentLockVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
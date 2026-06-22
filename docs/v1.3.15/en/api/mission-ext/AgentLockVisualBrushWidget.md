<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentLockVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `LockState` | `public int LockState { get; set; }` |

## Usage Example

```csharp
// Typical usage of AgentLockVisualBrushWidget (Widget)
// 声明/访问一个 AgentLockVisualBrushWidget
var widget = root.GetChild("agentLockVisualBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
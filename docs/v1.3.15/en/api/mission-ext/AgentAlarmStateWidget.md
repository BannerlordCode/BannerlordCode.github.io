<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentAlarmStateWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentAlarmStateWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentAlarmStateWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentAlarmStateWidget.cs`

## Overview

`AgentAlarmStateWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlarmState` | `public string AlarmState { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |

## Usage Example

```csharp
// Typical usage of AgentAlarmStateWidget (Widget)
// 声明/访问一个 AgentAlarmStateWidget
var widget = root.GetChild("agentAlarmStateWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
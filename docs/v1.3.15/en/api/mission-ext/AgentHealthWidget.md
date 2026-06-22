<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentHealthWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentHealthWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentHealthWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentHealthWidget.cs`

## Overview

`AgentHealthWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Health` | `public int Health { get; set; }` |
| `MaxHealth` | `public int MaxHealth { get; set; }` |
| `HealthBar` | `public FillBarWidget HealthBar { get; set; }` |
| `HealthDropContainer` | `public Widget HealthDropContainer { get; set; }` |
| `HealthDropBrush` | `public Brush HealthDropBrush { get; set; }` |
| `ShowHealthBar` | `public bool ShowHealthBar { get; set; }` |

## Usage Example

```csharp
// Typical usage of AgentHealthWidget (Widget)
// 声明/访问一个 AgentHealthWidget
var widget = root.GetChild("agentHealthWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
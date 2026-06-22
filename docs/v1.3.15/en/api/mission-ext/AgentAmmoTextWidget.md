<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentAmmoTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentAmmoTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentAmmoTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentAmmoTextWidget.cs`

## Overview

`AgentAmmoTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAlertEnabled` | `public bool IsAlertEnabled { get; set; }` |

## Usage Example

```csharp
// Typical usage of AgentAmmoTextWidget (Widget)
// 声明/访问一个 AgentAmmoTextWidget
var widget = root.GetChild("agentAmmoTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
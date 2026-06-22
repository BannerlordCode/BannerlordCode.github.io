<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EscapeMenuButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EscapeMenuButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EscapeMenuButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/EscapeMenu/EscapeMenuButtonWidget.cs`

## Overview

`EscapeMenuButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPositiveBehaviored` | `public bool IsPositiveBehaviored { get; set; }` |
| `PositiveBehaviorBrush` | `public Brush PositiveBehaviorBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of EscapeMenuButtonWidget (Widget)
// 声明/访问一个 EscapeMenuButtonWidget
var widget = root.GetChild("escapeMenuButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
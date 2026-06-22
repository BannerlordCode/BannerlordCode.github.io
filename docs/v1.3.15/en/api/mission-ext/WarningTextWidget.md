<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WarningTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WarningTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WarningTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/WarningTextWidget.cs`

## Overview

`WarningTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsWarned` | `public bool IsWarned { get; set; }` |

## Usage Example

```csharp
// Typical usage of WarningTextWidget (Widget)
// 声明/访问一个 WarningTextWidget
var widget = root.GetChild("warningTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
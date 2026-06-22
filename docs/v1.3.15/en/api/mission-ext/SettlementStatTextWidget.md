<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementStatTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementStatTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementStatTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SettlementStatTextWidget.cs`

## Overview

`SettlementStatTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsWarning` | `public bool IsWarning { get; set; }` |

## Usage Example

```csharp
// Typical usage of SettlementStatTextWidget (Widget)
// 声明/访问一个 SettlementStatTextWidget
var widget = root.GetChild("settlementStatTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
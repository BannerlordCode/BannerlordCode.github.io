<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFinanceTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFinanceTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanFinanceTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinanceTextWidget.cs`

## Overview

`ClanFinanceTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `NegativeMarkWidget` | `public TextWidget NegativeMarkWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of ClanFinanceTextWidget (Widget)
// 声明/访问一个 ClanFinanceTextWidget
var widget = root.GetChild("clanFinanceTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
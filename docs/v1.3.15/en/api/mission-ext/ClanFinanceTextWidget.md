<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFinanceTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `ClanFinanceTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NegativeMarkWidget` | `public TextWidget NegativeMarkWidget { get; set; }` |

## Usage Example

```csharp
var widget = new ClanFinanceTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
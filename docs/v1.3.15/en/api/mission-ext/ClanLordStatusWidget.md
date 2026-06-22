<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanLordStatusWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanLordStatusWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanLordStatusWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanLordStatusWidget.cs`

## Overview

`ClanLordStatusWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `StatusType` | `public int StatusType { get; set; }` |

## Usage Example

```csharp
// Typical usage of ClanLordStatusWidget (Widget)
// 声明/访问一个 ClanLordStatusWidget
var widget = root.GetChild("clanLordStatusWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
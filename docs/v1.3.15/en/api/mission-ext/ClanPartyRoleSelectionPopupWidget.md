<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPartyRoleSelectionPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPartyRoleSelectionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanPartyRoleSelectionPopupWidget : AutoClosePopupWidget`
**Base:** `AutoClosePopupWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionPopupWidget.cs`

## Overview

`ClanPartyRoleSelectionPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveToggleWidget` | `public Widget ActiveToggleWidget { get; set; }` |

## Key Methods

### AddToggleWidget
```csharp
public void AddToggleWidget(Widget widget)
```

## Usage Example

```csharp
// Typical usage of ClanPartyRoleSelectionPopupWidget (Widget)
// 声明/访问一个 ClanPartyRoleSelectionPopupWidget
var widget = root.GetChild("clanPartyRoleSelectionPopupWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
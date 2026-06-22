<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPartyRoleSelectionToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPartyRoleSelectionToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanPartyRoleSelectionToggleWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionToggleWidget.cs`

## Overview

`ClanPartyRoleSelectionToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Popup` | `public ClanPartyRoleSelectionPopupWidget Popup { get; set; }` |

## Usage Example

```csharp
// Typical usage of ClanPartyRoleSelectionToggleWidget (Widget)
// 声明/访问一个 ClanPartyRoleSelectionToggleWidget
var widget = root.GetChild("clanPartyRoleSelectionToggleWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
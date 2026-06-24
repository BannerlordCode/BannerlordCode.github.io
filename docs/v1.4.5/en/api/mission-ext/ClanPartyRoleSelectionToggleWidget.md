<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPartyRoleSelectionToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanPartyRoleSelectionToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanPartyRoleSelectionToggleWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan/ClanPartyRoleSelectionToggleWidget.cs`

## Overview

`ClanPartyRoleSelectionToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ClanPartyRoleSelectionToggleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Popup` | `public ClanPartyRoleSelectionPopupWidget Popup { get; set; }` |

## Usage Example

```csharp
var widget = new ClanPartyRoleSelectionToggleWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
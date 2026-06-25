---
title: "ClanPartyRoleSelectionPopupWidget"
description: "Auto-generated class reference for ClanPartyRoleSelectionPopupWidget."
---
# ClanPartyRoleSelectionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanPartyRoleSelectionPopupWidget : AutoClosePopupWidget`
**Base:** `AutoClosePopupWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan/ClanPartyRoleSelectionPopupWidget.cs`

## Overview

`ClanPartyRoleSelectionPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ClanPartyRoleSelectionPopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveToggleWidget` | `public Widget ActiveToggleWidget { get; set; }` |

## Key Methods

### AddToggleWidget
`public void AddToggleWidget(Widget widget)`

**Purpose:** Adds `toggle widget` to the current collection or state.

```csharp
// Obtain an instance of ClanPartyRoleSelectionPopupWidget from the subsystem API first
ClanPartyRoleSelectionPopupWidget clanPartyRoleSelectionPopupWidget = ...;
clanPartyRoleSelectionPopupWidget.AddToggleWidget(widget);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ClanPartyRoleSelectionPopupWidget widget = ...;
```

## See Also

- [Area Index](../)
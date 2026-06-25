---
title: "ClanLordStatusWidget"
description: "Auto-generated class reference for ClanLordStatusWidget."
---
# ClanLordStatusWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanLordStatusWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan/ClanLordStatusWidget.cs`

## Overview

`ClanLordStatusWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ClanLordStatusWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `StatusType` | `public int StatusType { get; set; }` |

## Key Methods

### ClanLordStatusWidget
`public class ClanLordStatusWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ClanLordStatusWidget from the subsystem API first
ClanLordStatusWidget clanLordStatusWidget = ...;
var result = clanLordStatusWidget.ClanLordStatusWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ClanLordStatusWidget widget = ...;
```

## See Also

- [Area Index](../)
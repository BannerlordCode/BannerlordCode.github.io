---
title: "MultiplayerAdminMessageItemWidget"
description: "Auto-generated class reference for MultiplayerAdminMessageItemWidget."
---
# MultiplayerAdminMessageItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.AdminMessage
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminMessageItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/AdminMessage/MultiplayerAdminMessageItemWidget.cs`

## Overview

`MultiplayerAdminMessageItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerAdminMessageItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Remove
`public void Remove()`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of MultiplayerAdminMessageItemWidget from the subsystem API first
MultiplayerAdminMessageItemWidget multiplayerAdminMessageItemWidget = ...;
multiplayerAdminMessageItemWidget.Remove();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerAdminMessageItemWidget widget = ...;
```

## See Also

- [Area Index](../)
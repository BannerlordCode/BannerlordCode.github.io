---
title: "ClickableCharacterTableauWidget"
description: "Auto-generated class reference for ClickableCharacterTableauWidget."
---
# ClickableCharacterTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClickableCharacterTableauWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ClickableCharacterTableauWidget.cs`

## Overview

`ClickableCharacterTableauWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ClickableCharacterTableauWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ClickableCharacterTableauWidget
`public class ClickableCharacterTableauWidget(UIContext context)`

**Purpose:** Executes the ClickableCharacterTableauWidget logic.

```csharp
// Obtain an instance of ClickableCharacterTableauWidget from the subsystem API first
ClickableCharacterTableauWidget clickableCharacterTableauWidget = ...;
var result = clickableCharacterTableauWidget.ClickableCharacterTableauWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ClickableCharacterTableauWidget widget = ...;
```

## See Also

- [Area Index](../)
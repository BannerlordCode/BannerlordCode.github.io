---
title: "ClickableCharacterTableauWidget"
description: "Auto-generated class reference for ClickableCharacterTableauWidget."
---
# ClickableCharacterTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClickableCharacterTableauWidget : CharacterTableauWidget`
**Base:** `CharacterTableauWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ClickableCharacterTableauWidget.cs`

## Overview

`ClickableCharacterTableauWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ClickableCharacterTableauWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ClickableCharacterTableauWidget widget = ...;
```

## See Also

- [Area Index](../)
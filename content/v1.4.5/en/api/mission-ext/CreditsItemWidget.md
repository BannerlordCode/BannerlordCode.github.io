---
title: "CreditsItemWidget"
description: "Auto-generated class reference for CreditsItemWidget."
---
# CreditsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsItemWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits/CreditsItemWidget.cs`

## Overview

`CreditsItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CreditsItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemType` | `public string ItemType { get; set; }` |
| `CategoryWidget` | `public Widget CategoryWidget { get; set; }` |
| `ImageWidget` | `public Widget ImageWidget { get; set; }` |
| `SectionWidget` | `public Widget SectionWidget { get; set; }` |
| `EntryWidget` | `public Widget EntryWidget { get; set; }` |
| `EmptyLineWidget` | `public Widget EmptyLineWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CreditsItemWidget widget = ...;
```

## See Also

- [Area Index](../)
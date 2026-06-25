---
title: "PartyPlayerNameplateWidget"
description: "Auto-generated class reference for PartyPlayerNameplateWidget."
---
# PartyPlayerNameplateWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyPlayerNameplateWidget : PartyNameplateWidget`
**Base:** `PartyNameplateWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs`

## Overview

`PartyPlayerNameplateWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyPlayerNameplateWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPrisoner` | `public bool IsPrisoner { get; set; }` |
| `MainPartyArrowWidget` | `public Widget MainPartyArrowWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyPlayerNameplateWidget widget = ...;
```

## See Also

- [Area Index](../)
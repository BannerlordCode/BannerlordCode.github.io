---
title: "PartyFormationDropdownWidget"
description: "Auto-generated class reference for PartyFormationDropdownWidget."
---
# PartyFormationDropdownWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyFormationDropdownWidget : DropdownWidget`
**Base:** `DropdownWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs`

## Overview

`PartyFormationDropdownWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyFormationDropdownWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SeperatorStateChanger` | `public DelayedStateChanger SeperatorStateChanger { get; set; }` |
| `ListStateChanger` | `public DelayedStateChanger ListStateChanger { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyFormationDropdownWidget widget = ...;
```

## See Also

- [Area Index](../)
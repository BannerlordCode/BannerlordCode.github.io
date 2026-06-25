---
title: "PartyHealthFillBarWidget"
description: "Auto-generated class reference for PartyHealthFillBarWidget."
---
# PartyHealthFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyHealthFillBarWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyHealthFillBarWidget.cs`

## Overview

`PartyHealthFillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyHealthFillBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Health` | `public int Health { get; set; }` |
| `IsWounded` | `public bool IsWounded { get; set; }` |
| `HealthText` | `public TextWidget HealthText { get; set; }` |

## Key Methods

### PartyHealthFillBarWidget
`public class PartyHealthFillBarWidget(UIContext context)`

**Purpose:** Executes the PartyHealthFillBarWidget logic.

```csharp
// Obtain an instance of PartyHealthFillBarWidget from the subsystem API first
PartyHealthFillBarWidget partyHealthFillBarWidget = ...;
var result = partyHealthFillBarWidget.PartyHealthFillBarWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyHealthFillBarWidget widget = ...;
```

## See Also

- [Area Index](../)
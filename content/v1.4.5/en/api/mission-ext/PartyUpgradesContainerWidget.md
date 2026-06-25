---
title: "PartyUpgradesContainerWidget"
description: "Auto-generated class reference for PartyUpgradesContainerWidget."
---
# PartyUpgradesContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyUpgradesContainerWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyUpgradesContainerWidget.cs`

## Overview

`PartyUpgradesContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyUpgradesContainerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnyUpgradeHasRequirement` | `public bool AnyUpgradeHasRequirement { get; set; }` |

## Key Methods

### PartyUpgradesContainerWidget
`public class PartyUpgradesContainerWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PartyUpgradesContainerWidget from the subsystem API first
PartyUpgradesContainerWidget partyUpgradesContainerWidget = ...;
var result = partyUpgradesContainerWidget.PartyUpgradesContainerWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyUpgradesContainerWidget widget = ...;
```

## See Also

- [Area Index](../)
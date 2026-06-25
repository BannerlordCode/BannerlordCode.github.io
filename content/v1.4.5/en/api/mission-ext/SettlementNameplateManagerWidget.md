---
title: "SettlementNameplateManagerWidget"
description: "Auto-generated class reference for SettlementNameplateManagerWidget."
---
# SettlementNameplateManagerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementNameplateManagerWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate/SettlementNameplateManagerWidget.cs`

## Overview

`SettlementNameplateManagerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SettlementNameplateManagerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SettlementNameplateManagerWidget
`public class SettlementNameplateManagerWidget(UIContext context)`

**Purpose:** **Purpose:** Assigns a new value to tlement nameplate manager widget and updates the object's internal state.

```csharp
// Obtain an instance of SettlementNameplateManagerWidget from the subsystem API first
SettlementNameplateManagerWidget settlementNameplateManagerWidget = ...;
var result = settlementNameplateManagerWidget.SettlementNameplateManagerWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SettlementNameplateManagerWidget widget = ...;
```

## See Also

- [Area Index](../)
---
title: "DoubleTabControlListPanel"
description: "Auto-generated class reference for DoubleTabControlListPanel."
---
# DoubleTabControlListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DoubleTabControlListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/DoubleTabControlListPanel.cs`

## Overview

`DoubleTabControlListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FirstListButton` | `public ButtonWidget FirstListButton { get; set; }` |
| `SecondListButton` | `public ButtonWidget SecondListButton { get; set; }` |
| `FirstList` | `public Widget FirstList { get; set; }` |
| `SecondList` | `public Widget SecondList { get; set; }` |

## Key Methods

### OnFirstTabClick
`public void OnFirstTabClick(Widget widget)`

**Purpose:** **Purpose:** Invoked when the first tab click event is raised.

```csharp
// Obtain an instance of DoubleTabControlListPanel from the subsystem API first
DoubleTabControlListPanel doubleTabControlListPanel = ...;
doubleTabControlListPanel.OnFirstTabClick(widget);
```

### OnSecondTabClick
`public void OnSecondTabClick(Widget widget)`

**Purpose:** **Purpose:** Invoked when the second tab click event is raised.

```csharp
// Obtain an instance of DoubleTabControlListPanel from the subsystem API first
DoubleTabControlListPanel doubleTabControlListPanel = ...;
doubleTabControlListPanel.OnSecondTabClick(widget);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DoubleTabControlListPanel doubleTabControlListPanel = ...;
doubleTabControlListPanel.OnFirstTabClick(widget);
```

## See Also

- [Area Index](../)
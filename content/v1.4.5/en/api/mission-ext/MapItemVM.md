---
title: "MapItemVM"
description: "Auto-generated class reference for MapItemVM."
---
# MapItemVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapItemVM : SelectorItemVM`
**Base:** `SelectorItemVM`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem/MapItemVM.cs`

## Overview

`MapItemVM` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapName` | `public string MapName { get; }` |
| `MapId` | `public string MapId { get; }` |
| `ForcedSceneLevel` | `public string ForcedSceneLevel { get; }` |
| `NameText` | `public string NameText { get; set; }` |

## Key Methods

### UpdateSearchedText
`public void UpdateSearchedText(string searchedText)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of searched text.

```csharp
// Obtain an instance of MapItemVM from the subsystem API first
MapItemVM mapItemVM = ...;
mapItemVM.UpdateSearchedText("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapItemVM mapItemVM = ...;
mapItemVM.UpdateSearchedText("example");
```

## See Also

- [Area Index](../)
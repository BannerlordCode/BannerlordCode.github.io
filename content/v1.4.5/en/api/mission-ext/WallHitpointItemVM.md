---
title: "WallHitpointItemVM"
description: "Auto-generated class reference for WallHitpointItemVM."
---
# WallHitpointItemVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WallHitpointItemVM : SelectorItemVM`
**Base:** `SelectorItemVM`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem/WallHitpointItemVM.cs`

## Overview

`WallHitpointItemVM` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WallState` | `public string WallState { get; }` |
| `BreachedWallCount` | `public int BreachedWallCount { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
WallHitpointItemVM instance = ...;
```

## See Also

- [Area Index](../)
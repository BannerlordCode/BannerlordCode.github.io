---
title: "SelectionGroup"
description: "Auto-generated class reference for SelectionGroup."
---
# SelectionGroup

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SelectionGroup : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/SelectionGroup.cs`

## Overview

`SelectionGroup` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |
| `TextList` | `public List<string> TextList { get; set; }` |
| `Index` | `public int Index { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SelectionGroup instance = ...;
```

## See Also

- [Area Index](../)
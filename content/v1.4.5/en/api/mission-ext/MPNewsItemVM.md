---
title: "MPNewsItemVM"
description: "Auto-generated class reference for MPNewsItemVM."
---
# MPNewsItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPNewsItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPNewsItemVM.cs`

## Overview

`MPNewsItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewsImageUrl` | `public string NewsImageUrl { get; set; }` |
| `Category` | `public string Category { get; set; }` |
| `Title` | `public string Title { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MPNewsItemVM instance = ...;
```

## See Also

- [Area Index](../)
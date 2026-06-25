---
title: "LauncherNewsItemVM"
description: "Auto-generated class reference for LauncherNewsItemVM."
---
# LauncherNewsItemVM

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherNewsItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherNewsItemVM.cs`

## Overview

`LauncherNewsItemVM` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewsImageUrl` | `public string NewsImageUrl { get; set; }` |
| `Category` | `public string Category { get; set; }` |
| `Title` | `public string Title { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
LauncherNewsItemVM instance = ...;
```

## See Also

- [Area Index](../)
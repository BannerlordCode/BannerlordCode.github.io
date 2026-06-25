---
title: "LauncherConfirmStartVM"
description: "Auto-generated class reference for LauncherConfirmStartVM."
---
# LauncherConfirmStartVM

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherConfirmStartVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherConfirmStartVM.cs`

## Overview

`LauncherConfirmStartVM` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `Title` | `public string Title { get; set; }` |

## Key Methods

### EnableWith
`public void EnableWith(List<SubModuleInfo> unverifiedSubModules, List<DependentVersionMissmatchItem> missmatchedDependentModules)`

**Purpose:** Executes the EnableWith logic.

```csharp
// Obtain an instance of LauncherConfirmStartVM from the subsystem API first
LauncherConfirmStartVM launcherConfirmStartVM = ...;
launcherConfirmStartVM.EnableWith(unverifiedSubModules, missmatchedDependentModules);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LauncherConfirmStartVM launcherConfirmStartVM = ...;
launcherConfirmStartVM.EnableWith(unverifiedSubModules, missmatchedDependentModules);
```

## See Also

- [Area Index](../)
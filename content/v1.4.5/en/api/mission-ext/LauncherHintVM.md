---
title: "LauncherHintVM"
description: "Auto-generated class reference for LauncherHintVM."
---
# LauncherHintVM

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherHintVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherHintVM.cs`

## Overview

`LauncherHintVM` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |

## Key Methods

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with begin hint.

```csharp
// Obtain an instance of LauncherHintVM from the subsystem API first
LauncherHintVM launcherHintVM = ...;
launcherHintVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with end hint.

```csharp
// Obtain an instance of LauncherHintVM from the subsystem API first
LauncherHintVM launcherHintVM = ...;
launcherHintVM.ExecuteEndHint();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LauncherHintVM launcherHintVM = ...;
launcherHintVM.ExecuteBeginHint();
```

## See Also

- [Area Index](../)
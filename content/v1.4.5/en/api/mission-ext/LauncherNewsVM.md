---
title: "LauncherNewsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherNewsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LauncherNewsVM

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherNewsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherNewsVM.cs`

## Overview

`LauncherNewsVM` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDisabledOnMultiplayer` | `public bool IsDisabledOnMultiplayer { get; set; }` |
| `MainNews` | `public LauncherNewsItemVM MainNews { get; set; }` |
| `NewsItems` | `public MBBindingList<LauncherNewsItemVM> NewsItems { get; set; }` |

## Key Methods

### Refresh
`public void Refresh(bool isMultiplayer)`

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var value = new LauncherNewsVM();
value.Refresh(false);
```

## See Also

- [Complete Class Catalog](../catalog)
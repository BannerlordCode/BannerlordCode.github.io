---
title: "LauncherModuleVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherModuleVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherModuleVM

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherModuleVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherModuleVM.cs`

## Overview

`LauncherModuleVM` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SubModules` | `public MBBindingList<LauncherSubModule> SubModules { get; set; }` |
| `DangerousHint` | `public LauncherHintVM DangerousHint { get; set; }` |
| `DependencyHint` | `public LauncherHintVM DependencyHint { get; set; }` |
| `VersionText` | `public string VersionText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `AnyDependencyAvailable` | `public bool AnyDependencyAvailable { get; set; }` |
| `IsDangerous` | `public bool IsDangerous { get; set; }` |
| `IsOfficial` | `public bool IsOfficial { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Usage Example

```csharp
var value = new LauncherModuleVM();
```

## See Also

- [Complete Class Catalog](../catalog)
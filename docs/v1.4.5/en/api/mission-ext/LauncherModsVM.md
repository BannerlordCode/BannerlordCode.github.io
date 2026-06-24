<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherModsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LauncherModsVM

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherModsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsVM.cs`

## Overview

`LauncherModsVM` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ModuleListCode` | `public string ModuleListCode { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `NameCategoryText` | `public string NameCategoryText { get; set; }` |
| `VersionCategoryText` | `public string VersionCategoryText { get; set; }` |
| `Modules` | `public MBBindingList<LauncherModuleVM> Modules { get; set; }` |

## Key Methods

### Refresh
`public void Refresh(bool isDisabled, bool isMultiplayer)`

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var value = new LauncherModsVM();
value.Refresh(false, false);
```

## See Also

- [Complete Class Catalog](../catalog)
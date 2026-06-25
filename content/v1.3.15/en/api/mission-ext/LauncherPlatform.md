---
title: "LauncherPlatform"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherPlatform`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherPlatform

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class LauncherPlatform`
**Area:** mission-ext

## Overview

`LauncherPlatform` lives in `TaleWorlds.MountAndBlade.Launcher.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlatformType` | `public static LauncherPlatformType PlatformType { get; }` |

## Key Methods

### Initialize
`public static void Initialize(List<string> args)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Destroy
`public static void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### SetLauncherMode
`public static void SetLauncherMode(bool isLauncherModeActive)`

**Purpose:** Sets the value or state of `launcher mode`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
LauncherPlatform.Initialize(args);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)

---
title: "DependentVersionMissmatchItem"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DependentVersionMissmatchItem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DependentVersionMissmatchItem

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct DependentVersionMissmatchItem`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/DependentVersionMissmatchItem.cs`

## Overview

`DependentVersionMissmatchItem` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MissmatchedModuleId` | `public string MissmatchedModuleId { get; }` |
| `MissmatchedDependencies` | `public List<Tuple<DependedModule, ApplicationVersion>> MissmatchedDependencies { get; }` |

## Usage Example

```csharp
var example = new DependentVersionMissmatchItem();
```

## See Also

- [Complete Class Catalog](../catalog)
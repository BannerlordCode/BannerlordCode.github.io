---
title: "MultiThreadedStressTestsScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiThreadedStressTestsScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiThreadedStressTestsScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiThreadedStressTestsScreen : ScreenBase`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/Scripts/MultiThreadedStressTestsScreen.cs`

## Overview

`MultiThreadedStressTestsScreen` lives in `TaleWorlds.MountAndBlade.View.Screens.Scripts` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Screens.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MeshMerger
`public static void MeshMerger(InputLayout layout)`

**Purpose:** Handles logic related to `mesh merger`.

### SceneHandler
`public static void SceneHandler(SceneView view)`

**Purpose:** Handles logic related to `scene handler`.

## Usage Example

```csharp
MultiThreadedStressTestsScreen.MeshMerger(layout);
```

## See Also

- [Complete Class Catalog](../catalog)
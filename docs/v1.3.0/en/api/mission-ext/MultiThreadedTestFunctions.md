<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiThreadedTestFunctions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiThreadedTestFunctions

**Namespace:** TaleWorlds.MountAndBlade.View.Screens.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiThreadedTestFunctions`
**Area:** mission-ext

## Overview

`MultiThreadedTestFunctions` lives in `TaleWorlds.MountAndBlade.View.Screens.Scripts`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
MultiThreadedTestFunctions.MeshMerger(layout);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)

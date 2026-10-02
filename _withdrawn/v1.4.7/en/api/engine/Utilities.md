---
title: "Utilities"
description: "Utilities — class in TaleWorlds.Engine. 154 public members (154 static)."
---

<!-- v147-skeleton -->
# Utilities

**Namespace:** `TaleWorlds.Engine`  
**Module:** `TaleWorlds.Engine`  
**Type:** `public static class Utilities`  
**Source:** `TaleWorlds.Engine/Utilities.cs`

## Overview

`Utilities` is a named type in the TaleWorlds.Engine namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (154): `ConstructMainThreadJob`, `ConstructMainThreadJob`, `RunJobs`, `WaitJobs`, `OutputBenchmarkValuesToPerformanceReporter`, `SetLoadingScreenPercentage`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddCommandLineFunction` | method (static) | Static entry point. Takes 1 argument: `string concatName`. Adds to the collection or relation this type owns. |
| `AddPerformanceReportToken` | method (static) | Static entry point. Takes 3 arguments: `string performance_type`, `string name`, `float loading_time`. Adds to the collection or relation this type owns. |
| `AddSceneObjectReport` | method (static) | Static entry point. Takes 3 arguments: `string scene_name`, `string report_name`, `float report_value`. Adds to the collection or relation this type owns. |
| `CheckIfAssetsAndSourcesAreSame` | method (static) | Static entry point. Takes no arguments. |
| `CheckIfTerrainShaderHeaderGenerationFinished` | method (static) | Static entry point. Takes no arguments. Returns `bool`. |
| `CheckResourceModifications` | method (static) | Static entry point. Takes no arguments. |
| `CheckSceneForProblems` | method (static) | Static entry point. Takes 1 argument: `string sceneName`. |
| `CheckShaderCompilation` | method (static) | Static entry point. Takes no arguments. Returns `bool`. |
| `ClearDecalAtlas` | method (static) | Static entry point. Takes 1 argument: `DecalAtlasGroup atlasGroup`. Removes from or clears the collection this type owns. |
| `ClearOldResourcesAndObjects` | method (static) | Static entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ClearShaderMemory` | method (static) | Static entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `CommandLineArgumentExists` | method (static) | Static entry point. Takes 1 argument: `string str`. Returns `bool`. |
| `CompileAllShaders` | method (static) | Static entry point. Takes 1 argument: `string targetPlatform`. |
| `CompileTerrainShadersDist` | method (static) | Static entry point. Takes 3 arguments: `string targetPlatform`, `string targetConfig`, `string output_path`. |
| `ConstructMainThreadJob` | method (static) | Static entry point. Takes 2 arguments: `Delegate function`, `params object[] parameters`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `ConstructMainThreadJob` | method (static) | Static entry point. Takes 3 arguments: `Semaphore semaphore`, `Delegate function`, `params object[] parameters`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateSelectionInEditor` | method (static) | Static entry point. Takes 2 arguments: `List<GameEntity> gameEntities`, `string name`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `DebugSetGlobalLoadingWindowState` | method (static) | Static entry point. Takes 1 argument: `bool newState`. |
| `DeleteEntitiesInEditorScene` | method (static) | Static entry point. Takes 1 argument: `List<GameEntity> gameEntities`. Removes from or clears the collection this type owns. |
| `DetachWatchdog` | method (static) | Static entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `DidAutomatedGIBakeFinished` | method (static) | Static entry point. Takes no arguments. Returns `bool`. |
| `DisableCoreGame` | method (static) | Static entry point. Takes no arguments. |
| `DisableGlobalEditDataCacher` | method (static) | Static entry point. Takes no arguments. |
| `DisableGlobalLoadingWindow` | method (static) | Static entry point. Takes no arguments. |

130 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on Utilities:
Utilities.ConstructMainThreadJob(function, theTarget);
Utilities.ConstructMainThreadJob(semaphore, function, theTarget);
Utilities.RunJobs();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Engine/Utilities.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/engine/](../) — the other types in this bucket.

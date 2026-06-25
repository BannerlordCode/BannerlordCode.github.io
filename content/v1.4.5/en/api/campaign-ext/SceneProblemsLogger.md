---
title: "SceneProblemsLogger"
description: "Auto-generated class reference for SceneProblemsLogger."
---
# SceneProblemsLogger

**Namespace:** (global)
**Module:** (global)
**Type:** `public class SceneProblemsLogger`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/SceneProblemsLogger.cs`

## Overview

`SceneProblemsLogger` lives in `(global)` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `(global)` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LogScene
`public void LogScene(int sceneIndex, string sceneId, string log)`

**Purpose:** **Purpose:** Executes the LogScene logic.

```csharp
// Obtain an instance of SceneProblemsLogger from the subsystem API first
SceneProblemsLogger sceneProblemsLogger = ...;
sceneProblemsLogger.LogScene(0, "example", "example");
```

### FinishLogging
`public void FinishLogging()`

**Purpose:** **Purpose:** Concludes the logging flow and performs any cleanup.

```csharp
// Obtain an instance of SceneProblemsLogger from the subsystem API first
SceneProblemsLogger sceneProblemsLogger = ...;
sceneProblemsLogger.FinishLogging();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SceneProblemsLogger sceneProblemsLogger = ...;
sceneProblemsLogger.LogScene(0, "example", "example");
```

## See Also

- [Area Index](../)
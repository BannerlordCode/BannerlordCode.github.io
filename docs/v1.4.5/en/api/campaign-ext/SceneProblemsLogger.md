<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneProblemsLogger`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SceneProblemsLogger

**Namespace:** (global)
**Module:** (global)
**Type:** `public class SceneProblemsLogger`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/SceneProblemsLogger.cs`

## Overview

`SceneProblemsLogger` lives in `(global)` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `(global)` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LogScene
`public void LogScene(int sceneIndex, string sceneId, string log)`

**Purpose:** Handles logic related to `log scene`.

### FinishLogging
`public void FinishLogging()`

**Purpose:** Handles logic related to `finish logging`.

## Usage Example

```csharp
var value = new SceneProblemsLogger();
value.LogScene(0, "example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)
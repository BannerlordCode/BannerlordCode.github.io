<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SimpleSceneTestWithMission`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SimpleSceneTestWithMission

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SimpleSceneTestWithMission`
**Base:** none
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/SimpleSceneTestWithMission.cs`

## Overview

`SimpleSceneTestWithMission` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadingFinished
`public bool LoadingFinished()`

**Purpose:** Loads `ing finished` data.

## Usage Example

```csharp
var value = new SimpleSceneTestWithMission();
value.LoadingFinished();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "CameraFadeState__TaleWorlds_MountAndBlade_View_MissionViews"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CameraFadeState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CameraFadeState

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum CameraFadeState`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionCameraFadeView.cs`

## Overview

`CameraFadeState` lives in `TaleWorlds.MountAndBlade.View.MissionViews` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
CameraFadeState example = CameraFadeState.Value;
```

## See Also

- [Complete Class Catalog](../catalog)
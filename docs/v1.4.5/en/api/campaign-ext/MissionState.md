<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionState

**Namespace:** Storymode.Missions
**Module:** Storymode.Missions
**Type:** `public enum MissionState`
**Base:** none
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/Storymode.Missions/SneakIntoTheVillaMissionController.cs`

## Overview

`MissionState` lives in `Storymode.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Storymode.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
MissionState example = MissionState.Value;
```

## See Also

- [Complete Class Catalog](../catalog)
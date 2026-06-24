<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeViewCreator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeViewCreator

**Namespace:** StoryMode.View
**Module:** StoryMode.View
**Type:** `public static class StoryModeViewCreator`
**Area:** campaign-ext

## Overview

`StoryModeViewCreator` lives in `StoryMode.View`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `StoryMode.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateTrainingFieldObjectiveView
`public static MissionView CreateTrainingFieldObjectiveView(Mission mission)`

**Purpose:** Creates a new `training field objective view` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
StoryModeViewCreator.CreateTrainingFieldObjectiveView(mission);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)

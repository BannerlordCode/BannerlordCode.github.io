<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeMissionViews`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeMissionViews

**Namespace:** StoryMode.View.Missions
**Module:** StoryMode.View
**Type:** `public class StoryModeMissionViews`
**Area:** campaign-ext

## Overview

`StoryModeMissionViews` lives in `StoryMode.View.Missions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `StoryMode.View.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenVillageMission
`public static MissionView OpenVillageMission(Mission mission)`

**Purpose:** Handles logic related to `open village mission`.

### OpenSneakIntoTheVillaMission
`public static MissionView OpenSneakIntoTheVillaMission(Mission mission)`

**Purpose:** Handles logic related to `open sneak into the villa mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
StoryModeMissionViews.OpenVillageMission(mission);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)

---
title: "StoryModeMissions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeMissions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeMissions

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public static class StoryModeMissions`
**Area:** campaign-ext

## Overview

`StoryModeMissions` lives in `StoryMode.Missions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `StoryMode.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTrainingFieldMission
`public static Mission OpenTrainingFieldMission(string scene, Location location, CharacterObject talkToChar = null, string sceneLevels = null)`

**Purpose:** Handles logic related to `open training field mission`.

### OpenSneakIntoTheVillaMission
`public static Mission OpenSneakIntoTheVillaMission(string scene, CampaignTime overridenCt, string sceneLevels = null)`

**Purpose:** Handles logic related to `open sneak into the villa mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
StoryModeMissions.OpenTrainingFieldMission("example", location, null, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)

---
title: "StoryModeMissions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeMissions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeMissions

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public static class StoryModeMissions`
**Base:** none
**File:** `StoryMode/Missions/StoryModeMissions.cs`

## Overview

`StoryModeMissions` lives in `StoryMode.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
StoryModeMissions.OpenTrainingFieldMission("example", location, null, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "MetaDataExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MetaDataExtensions`
- [← Area / Back to gameplay](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MetaDataExtensions

**Namespace:** StoryMode.Extensions
**Module:** StoryMode.Extensions
**Type:** `public static class MetaDataExtensions`
**Base:** none
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Extensions/MetaDataExtensions.cs`

## Overview

`MetaDataExtensions` lives in `StoryMode.Extensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HasStoryMode
`public static bool HasStoryMode(this MetaData metaData)`

**Purpose:** Checks whether the current object has/contains `story mode`.

### AreAchievementsDisabled
`public static bool AreAchievementsDisabled(this MetaData metaData)`

**Purpose:** Handles logic related to `are achievements disabled`.

## Usage Example

```csharp
MetaDataExtensions.HasStoryMode(metaData);
```

## See Also

- [Complete Class Catalog](../catalog)
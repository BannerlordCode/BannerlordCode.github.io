---
title: "StatsAndAchievementsStoreListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StatsAndAchievementsStoreListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StatsAndAchievementsStoreListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class StatsAndAchievementsStoreListener : GlobalStatsAndAchievementsStoreListener`
**Base:** `GlobalStatsAndAchievementsStoreListener`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/StatsAndAchievementsStoreListener.cs`

## Overview

`StatsAndAchievementsStoreListener` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UserStatsAndAchievementsStored
`public delegate void UserStatsAndAchievementsStored(bool success, FailureReason? failureReason)`

**Purpose:** Handles logic related to `user stats and achievements stored`.

### OnUserStatsAndAchievementsStoreFailure
`public override void OnUserStatsAndAchievementsStoreFailure(FailureReason failureReason)`

**Purpose:** Called when the `user stats and achievements store failure` event is raised.

### OnUserStatsAndAchievementsStoreSuccess
`public override void OnUserStatsAndAchievementsStoreSuccess()`

**Purpose:** Called when the `user stats and achievements store success` event is raised.

## Usage Example

```csharp
var value = new StatsAndAchievementsStoreListener();
value.UserStatsAndAchievementsStored(false, failureReason);
```

## See Also

- [Complete Class Catalog](../catalog)
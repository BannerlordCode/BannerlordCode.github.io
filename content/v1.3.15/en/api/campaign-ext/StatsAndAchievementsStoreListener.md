---
title: "StatsAndAchievementsStoreListener"
description: "Auto-generated class reference for StatsAndAchievementsStoreListener."
---
# StatsAndAchievementsStoreListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class StatsAndAchievementsStoreListener : GlobalStatsAndAchievementsStoreListener`
**Base:** `GlobalStatsAndAchievementsStoreListener`
**File:** `TaleWorlds.PlatformService.GOG/StatsAndAchievementsStoreListener.cs`

## Overview

`StatsAndAchievementsStoreListener` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUserStatsAndAchievementsStoreFailure
`public override void OnUserStatsAndAchievementsStoreFailure(IStatsAndAchievementsStoreListener.FailureReason failureReason)`

**Purpose:** Invoked when the user stats and achievements store failure event is raised.

```csharp
// Obtain an instance of StatsAndAchievementsStoreListener from the subsystem API first
StatsAndAchievementsStoreListener statsAndAchievementsStoreListener = ...;
statsAndAchievementsStoreListener.OnUserStatsAndAchievementsStoreFailure(failureReason);
```

### OnUserStatsAndAchievementsStoreSuccess
`public override void OnUserStatsAndAchievementsStoreSuccess()`

**Purpose:** Invoked when the user stats and achievements store success event is raised.

```csharp
// Obtain an instance of StatsAndAchievementsStoreListener from the subsystem API first
StatsAndAchievementsStoreListener statsAndAchievementsStoreListener = ...;
statsAndAchievementsStoreListener.OnUserStatsAndAchievementsStoreSuccess();
```

### UserStatsAndAchievementsStored
`public delegate void UserStatsAndAchievementsStored(bool success, IStatsAndAchievementsStoreListener.FailureReason? failureReason)`

**Purpose:** Executes the UserStatsAndAchievementsStored logic.

```csharp
// Obtain an instance of StatsAndAchievementsStoreListener from the subsystem API first
StatsAndAchievementsStoreListener statsAndAchievementsStoreListener = ...;
statsAndAchievementsStoreListener.UserStatsAndAchievementsStored(false, failureReason);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StatsAndAchievementsStoreListener statsAndAchievementsStoreListener = ...;
statsAndAchievementsStoreListener.OnUserStatsAndAchievementsStoreFailure(failureReason);
```

## See Also

- [Area Index](../)
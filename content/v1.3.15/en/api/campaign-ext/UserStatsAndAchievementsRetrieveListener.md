---
title: "UserStatsAndAchievementsRetrieveListener"
description: "Auto-generated class reference for UserStatsAndAchievementsRetrieveListener."
---
# UserStatsAndAchievementsRetrieveListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class UserStatsAndAchievementsRetrieveListener : GlobalUserStatsAndAchievementsRetrieveListener`
**Base:** `GlobalUserStatsAndAchievementsRetrieveListener`
**File:** `TaleWorlds.PlatformService.GOG/UserStatsAndAchievementsRetrieveListener.cs`

## Overview

`UserStatsAndAchievementsRetrieveListener` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUserStatsAndAchievementsRetrieveSuccess
`public override void OnUserStatsAndAchievementsRetrieveSuccess(GalaxyID userID)`

**Purpose:** **Purpose:** Invoked when the user stats and achievements retrieve success event is raised.

```csharp
// Obtain an instance of UserStatsAndAchievementsRetrieveListener from the subsystem API first
UserStatsAndAchievementsRetrieveListener userStatsAndAchievementsRetrieveListener = ...;
userStatsAndAchievementsRetrieveListener.OnUserStatsAndAchievementsRetrieveSuccess(userID);
```

### OnUserStatsAndAchievementsRetrieveFailure
`public override void OnUserStatsAndAchievementsRetrieveFailure(GalaxyID userID, IUserStatsAndAchievementsRetrieveListener.FailureReason failureReason)`

**Purpose:** **Purpose:** Invoked when the user stats and achievements retrieve failure event is raised.

```csharp
// Obtain an instance of UserStatsAndAchievementsRetrieveListener from the subsystem API first
UserStatsAndAchievementsRetrieveListener userStatsAndAchievementsRetrieveListener = ...;
userStatsAndAchievementsRetrieveListener.OnUserStatsAndAchievementsRetrieveFailure(userID, failureReason);
```

### UserStatsAndAchievementsRetrieved
`public delegate void UserStatsAndAchievementsRetrieved(GalaxyID userID, bool success, IUserStatsAndAchievementsRetrieveListener.FailureReason? failureReason)`

**Purpose:** **Purpose:** Executes the UserStatsAndAchievementsRetrieved logic.

```csharp
// Obtain an instance of UserStatsAndAchievementsRetrieveListener from the subsystem API first
UserStatsAndAchievementsRetrieveListener userStatsAndAchievementsRetrieveListener = ...;
userStatsAndAchievementsRetrieveListener.UserStatsAndAchievementsRetrieved(userID, false, failureReason);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
UserStatsAndAchievementsRetrieveListener userStatsAndAchievementsRetrieveListener = ...;
userStatsAndAchievementsRetrieveListener.OnUserStatsAndAchievementsRetrieveSuccess(userID);
```

## See Also

- [Area Index](../)
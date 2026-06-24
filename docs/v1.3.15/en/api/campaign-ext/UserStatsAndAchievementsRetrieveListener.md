<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UserStatsAndAchievementsRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `user stats and achievements retrieve success` event is raised.

### OnUserStatsAndAchievementsRetrieveFailure
`public override void OnUserStatsAndAchievementsRetrieveFailure(GalaxyID userID, IUserStatsAndAchievementsRetrieveListener.FailureReason failureReason)`

**Purpose:** Called when the `user stats and achievements retrieve failure` event is raised.

### UserStatsAndAchievementsRetrieved
`public delegate void UserStatsAndAchievementsRetrieved(GalaxyID userID, bool success, IUserStatsAndAchievementsRetrieveListener.FailureReason? failureReason)`

**Purpose:** Handles logic related to `user stats and achievements retrieved`.

## Usage Example

```csharp
var value = new UserStatsAndAchievementsRetrieveListener();
value.OnUserStatsAndAchievementsRetrieveSuccess(userID);
```

## See Also

- [Complete Class Catalog](../catalog)
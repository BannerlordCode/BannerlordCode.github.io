<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UserStatsAndAchievementsRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UserStatsAndAchievementsRetrieveListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `UserStatsAndAchievementsRetrieveListener` is a class in the `TaleWorlds.PlatformService.GOG` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### OnUserStatsAndAchievementsRetrieveSuccess

```csharp
public override void OnUserStatsAndAchievementsRetrieveSuccess(GalaxyID userID)
```

### OnUserStatsAndAchievementsRetrieveFailure

```csharp
public override void OnUserStatsAndAchievementsRetrieveFailure(GalaxyID userID, IUserStatsAndAchievementsRetrieveListener.FailureReason failureReason)
```

### UserStatsAndAchievementsRetrieved

```csharp
public delegate void UserStatsAndAchievementsRetrieved(GalaxyID userID, bool success, IUserStatsAndAchievementsRetrieveListener.FailureReason? failureReason)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
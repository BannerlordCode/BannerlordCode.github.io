<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UserStatsAndAchievementsRetrieveListener`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UserStatsAndAchievementsRetrieveListener

**命名空间:** TaleWorlds.PlatformService.GOG
**模块:** TaleWorlds.PlatformService
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`UserStatsAndAchievementsRetrieveListener` 是 `TaleWorlds.PlatformService.GOG` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StatsAndAchievementsStoreListener`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StatsAndAchievementsStoreListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class StatsAndAchievementsStoreListener : GlobalStatsAndAchievementsStoreListener`
**Base:** `GlobalStatsAndAchievementsStoreListener`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/StatsAndAchievementsStoreListener.cs`

## 概述

`StatsAndAchievementsStoreListener` 位于 `TaleWorlds.PlatformService.GOG`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService.GOG` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### UserStatsAndAchievementsStored
`public delegate void UserStatsAndAchievementsStored(bool success, FailureReason? failureReason)`

**用途 / Purpose:** 处理 `user stats and achievements stored` 相关逻辑。

### OnUserStatsAndAchievementsStoreFailure
`public override void OnUserStatsAndAchievementsStoreFailure(FailureReason failureReason)`

**用途 / Purpose:** 当 `user stats and achievements store failure` 事件触发时调用此方法。

### OnUserStatsAndAchievementsStoreSuccess
`public override void OnUserStatsAndAchievementsStoreSuccess()`

**用途 / Purpose:** 当 `user stats and achievements store success` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new StatsAndAchievementsStoreListener();
value.UserStatsAndAchievementsStored(false, failureReason);
```

## 参见

- [完整类目录](../catalog)
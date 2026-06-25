---
title: "UserStatsAndAchievementsRetrieveListener"
description: "UserStatsAndAchievementsRetrieveListener 的自动生成类参考。"
---
# UserStatsAndAchievementsRetrieveListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class UserStatsAndAchievementsRetrieveListener : GlobalUserStatsAndAchievementsRetrieveListener`
**Base:** `GlobalUserStatsAndAchievementsRetrieveListener`
**File:** `TaleWorlds.PlatformService.GOG/UserStatsAndAchievementsRetrieveListener.cs`

## 概述

`UserStatsAndAchievementsRetrieveListener` 位于 `TaleWorlds.PlatformService.GOG`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService.GOG` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnUserStatsAndAchievementsRetrieveSuccess
`public override void OnUserStatsAndAchievementsRetrieveSuccess(GalaxyID userID)`

**用途 / Purpose:** 在 「user stats and achievements retrieve success」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UserStatsAndAchievementsRetrieveListener 实例
UserStatsAndAchievementsRetrieveListener userStatsAndAchievementsRetrieveListener = ...;
userStatsAndAchievementsRetrieveListener.OnUserStatsAndAchievementsRetrieveSuccess(userID);
```

### OnUserStatsAndAchievementsRetrieveFailure
`public override void OnUserStatsAndAchievementsRetrieveFailure(GalaxyID userID, IUserStatsAndAchievementsRetrieveListener.FailureReason failureReason)`

**用途 / Purpose:** 在 「user stats and achievements retrieve failure」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UserStatsAndAchievementsRetrieveListener 实例
UserStatsAndAchievementsRetrieveListener userStatsAndAchievementsRetrieveListener = ...;
userStatsAndAchievementsRetrieveListener.OnUserStatsAndAchievementsRetrieveFailure(userID, failureReason);
```

### UserStatsAndAchievementsRetrieved
`public delegate void UserStatsAndAchievementsRetrieved(GalaxyID userID, bool success, IUserStatsAndAchievementsRetrieveListener.FailureReason? failureReason)`

**用途 / Purpose:** 处理与 「user stats and achievements retrieved」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 UserStatsAndAchievementsRetrieveListener 实例
UserStatsAndAchievementsRetrieveListener userStatsAndAchievementsRetrieveListener = ...;
userStatsAndAchievementsRetrieveListener.UserStatsAndAchievementsRetrieved(userID, false, failureReason);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
UserStatsAndAchievementsRetrieveListener userStatsAndAchievementsRetrieveListener = ...;
userStatsAndAchievementsRetrieveListener.OnUserStatsAndAchievementsRetrieveSuccess(userID);
```

## 参见

- [本区域目录](../)
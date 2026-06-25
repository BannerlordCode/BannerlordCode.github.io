---
title: "AchievementsCampaignBehavior"
description: "AchievementsCampaignBehavior 的自动生成类参考。"
---
# AchievementsCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode.GameComponents
**Type:** `public class AchievementsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/AchievementsCampaignBehavior.cs`

## 概述

`AchievementsCampaignBehavior` 位于 `StoryMode.GameComponents.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.GameComponents.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 AchievementsCampaignBehavior 实例
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 AchievementsCampaignBehavior 实例
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.RegisterEvents();
```

### CheckAchievementSystemActivity
`public bool CheckAchievementSystemActivity(out TextObject reason)`

**用途 / Purpose:** 检查achievement system activity在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 AchievementsCampaignBehavior 实例
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
var result = achievementsCampaignBehavior.CheckAchievementSystemActivity(reason);
```

### OnRadagosDuelWon
`public void OnRadagosDuelWon()`

**用途 / Purpose:** 在 radagos duel won 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AchievementsCampaignBehavior 实例
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.OnRadagosDuelWon();
```

### DeactivateAchievements
`public void DeactivateAchievements(TextObject reason = null, bool showMessage = true, bool temporarily = false)`

**用途 / Purpose:** 停用achievements对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 AchievementsCampaignBehavior 实例
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.DeactivateAchievements(null, false, false);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AchievementsCampaignBehavior 实例
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 在 score hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AchievementsCampaignBehavior 实例
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.SyncData(dataStore);
```

## 参见

- [本区域目录](../)
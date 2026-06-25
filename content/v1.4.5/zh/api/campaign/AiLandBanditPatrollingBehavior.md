---
title: "AiLandBanditPatrollingBehavior"
description: "AiLandBanditPatrollingBehavior 的自动生成类参考。"
---
# AiLandBanditPatrollingBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AiLandBanditPatrollingBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiLandBanditPatrollingBehavior.cs`

## 概述

`AiLandBanditPatrollingBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 AiLandBanditPatrollingBehavior 实例
AiLandBanditPatrollingBehavior aiLandBanditPatrollingBehavior = ...;
aiLandBanditPatrollingBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 AiLandBanditPatrollingBehavior 实例
AiLandBanditPatrollingBehavior aiLandBanditPatrollingBehavior = ...;
aiLandBanditPatrollingBehavior.SyncData(dataStore);
```

### AiHourlyTick
`public void AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`

**用途 / Purpose:** 推进 「ai hourly」 状态的周期性更新。

```csharp
// 先通过子系统 API 拿到 AiLandBanditPatrollingBehavior 实例
AiLandBanditPatrollingBehavior aiLandBanditPatrollingBehavior = ...;
aiLandBanditPatrollingBehavior.AiHourlyTick(mobileParty, p);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AiLandBanditPatrollingBehavior aiLandBanditPatrollingBehavior = ...;
aiLandBanditPatrollingBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)
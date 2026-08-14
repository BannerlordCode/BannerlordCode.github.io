---
title: "AiArmyMemberBehavior"
description: "AiArmyMemberBehavior 的自动生成类参考。"
---
# AiArmyMemberBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AiArmyMemberBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiArmyMemberBehavior.cs`

## 概述

`AiArmyMemberBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 AiArmyMemberBehavior 实例
AiArmyMemberBehavior aiArmyMemberBehavior = ...;
aiArmyMemberBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 AiArmyMemberBehavior 实例
AiArmyMemberBehavior aiArmyMemberBehavior = ...;
aiArmyMemberBehavior.SyncData(dataStore);
```

### AiHourlyTick
`public void AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`

**用途 / Purpose:** 调用 AiHourlyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 AiArmyMemberBehavior 实例
AiArmyMemberBehavior aiArmyMemberBehavior = ...;
aiArmyMemberBehavior.AiHourlyTick(mobileParty, p);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AiArmyMemberBehavior aiArmyMemberBehavior = ...;
aiArmyMemberBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)
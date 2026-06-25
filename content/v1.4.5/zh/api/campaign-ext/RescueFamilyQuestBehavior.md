---
title: "RescueFamilyQuestBehavior"
description: "RescueFamilyQuestBehavior 的自动生成类参考。"
---
# RescueFamilyQuestBehavior

**Namespace:** StoryMode.Quests.PlayerClanQuests
**Module:** StoryMode.Quests
**Type:** `public class RescueFamilyQuestBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.PlayerClanQuests/RescueFamilyQuestBehavior.cs`

## 概述

`RescueFamilyQuestBehavior` 位于 `StoryMode.Quests.PlayerClanQuests`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Quests.PlayerClanQuests` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have campaign issues info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RescueFamilyQuestBehavior 实例
RescueFamilyQuestBehavior rescueFamilyQuestBehavior = ...;
rescueFamilyQuestBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 RescueFamilyQuestBehavior 实例
RescueFamilyQuestBehavior rescueFamilyQuestBehavior = ...;
rescueFamilyQuestBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 RescueFamilyQuestBehavior 实例
RescueFamilyQuestBehavior rescueFamilyQuestBehavior = ...;
rescueFamilyQuestBehavior.SyncData(dataStore);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RescueFamilyQuestBehavior rescueFamilyQuestBehavior = ...;
rescueFamilyQuestBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## 参见

- [本区域目录](../)
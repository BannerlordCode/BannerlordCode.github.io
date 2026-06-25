---
title: "DefeatTheConspiracyQuestBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefeatTheConspiracyQuestBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefeatTheConspiracyQuestBehavior

**Namespace:** StoryMode.Quests.ThirdPhase
**Module:** StoryMode.Quests
**Type:** `public class DefeatTheConspiracyQuestBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.ThirdPhase/DefeatTheConspiracyQuestBehavior.cs`

## 概述

`DefeatTheConspiracyQuestBehavior` 位于 `StoryMode.Quests.ThirdPhase`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Quests.ThirdPhase` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### CalculateReinforcedWarScore
`public void CalculateReinforcedWarScore()`

**用途 / Purpose:** 处理 `calculate reinforced war score` 相关逻辑。

### IsMobilePartyCreatedForQuest
`public bool IsMobilePartyCreatedForQuest(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `is mobile party created for quest` 相关逻辑。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

## 使用示例

```csharp
var value = new DefeatTheConspiracyQuestBehavior();
value.CalculateReinforcedWarScore();
```

## 参见

- [完整类目录](../catalog)
---
title: "RebuildPlayerClanQuestBehaviorTypeDefiner"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RebuildPlayerClanQuestBehaviorTypeDefiner`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RebuildPlayerClanQuestBehaviorTypeDefiner

**命名空间:** StoryMode.Quests.PlayerClanQuests
**模块:** StoryMode.Quests
**类型:** `public class RebuildPlayerClanQuestBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**领域:** campaign-ext

## 概述

`RebuildPlayerClanQuestBehaviorTypeDefiner` 位于 `StoryMode.Quests.PlayerClanQuests`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `StoryMode.Quests.PlayerClanQuests` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have campaign issues info is requested` 事件触发时调用此方法。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 RebuildPlayerClanQuestBehaviorTypeDefiner 实例，再调用它的公开方法
var value = new RebuildPlayerClanQuestBehaviorTypeDefiner();
value.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)

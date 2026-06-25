---
title: "MarriageOfferCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MarriageOfferCampaignBehavior`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MarriageOfferCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferCampaignBehavior : CampaignBehaviorBase, IMarriageOfferCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/MarriageOfferCampaignBehavior.cs`

## 概述

`MarriageOfferCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### CreateMarriageOffer
`public void CreateMarriageOffer(Hero currentOfferedPlayerClanHero, Hero currentOfferedOtherClanHero)`

**用途 / Purpose:** 创建一个 `marriage offer` 实例或对象。

### GetMarriageAcceptedConsequences
`public MBBindingList<TextObject> GetMarriageAcceptedConsequences()`

**用途 / Purpose:** 获取 `marriage accepted consequences` 的当前值。

### OnMarriageOfferAcceptedOnPopUp
`public void OnMarriageOfferAcceptedOnPopUp()`

**用途 / Purpose:** 当 `marriage offer accepted on pop up` 事件触发时调用此方法。

### OnMarriageOfferedToPlayer
`public void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**用途 / Purpose:** 当 `marriage offered to player` 事件触发时调用此方法。

### OnMarriageOfferDeclinedOnPopUp
`public void OnMarriageOfferDeclinedOnPopUp()`

**用途 / Purpose:** 当 `marriage offer declined on pop up` 事件触发时调用此方法。

### OnMarriageOfferCanceled
`public void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**用途 / Purpose:** 当 `marriage offer canceled` 事件触发时调用此方法。

### IsHeroEngaged
`public bool IsHeroEngaged(Hero hero)`

**用途 / Purpose:** 处理 `is hero engaged` 相关逻辑。

## 使用示例

```csharp
var value = new MarriageOfferCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)
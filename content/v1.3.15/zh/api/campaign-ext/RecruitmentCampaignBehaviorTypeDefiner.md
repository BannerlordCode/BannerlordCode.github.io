---
title: "RecruitmentCampaignBehaviorTypeDefiner"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecruitmentCampaignBehaviorTypeDefiner`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitmentCampaignBehaviorTypeDefiner

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class RecruitmentCampaignBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**领域:** campaign-ext

## 概述

`RecruitmentCampaignBehaviorTypeDefiner` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopType` | `public CharacterObject TroopType { get; }` |
| `Number` | `public int Number { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### GetMercenaryData
`public RecruitmentCampaignBehavior.TownMercenaryData GetMercenaryData(Town town)`

**用途 / Purpose:** 获取 `mercenary data` 的当前值。

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `hourly tick party` 相关逻辑。

### OnBeforeSettlementEntered
`public void OnBeforeSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**用途 / Purpose:** 当 `before settlement entered` 事件触发时调用此方法。

### ChangeMercenaryType
`public void ChangeMercenaryType(CharacterObject troopType, int number)`

**用途 / Purpose:** 处理 `change mercenary type` 相关逻辑。

### ChangeMercenaryCount
`public void ChangeMercenaryCount(int difference)`

**用途 / Purpose:** 处理 `change mercenary count` 相关逻辑。

### HasAvailableMercenary
`public bool HasAvailableMercenary(Occupation occupation = Occupation.NotAssigned)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `available mercenary`。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 RecruitmentCampaignBehaviorTypeDefiner 实例，再调用它的公开方法
var value = new RecruitmentCampaignBehaviorTypeDefiner();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)

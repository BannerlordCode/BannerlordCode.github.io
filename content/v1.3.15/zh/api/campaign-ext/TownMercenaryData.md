---
title: "TownMercenaryData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TownMercenaryData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownMercenaryData

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class TownMercenaryData`
**领域:** campaign-ext

## 概述

`TownMercenaryData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `TownMercenaryData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var value = new TownMercenaryData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)

<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleFormationData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationData

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class OrderOfBattleFormationData`
**领域:** campaign-ext

## 概述

`OrderOfBattleFormationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `OrderOfBattleFormationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### GetFormationDataAtIndex
`public OrderOfBattleCampaignBehavior.OrderOfBattleFormationData GetFormationDataAtIndex(int formationIndex, bool isSiegeBattle, bool isInArmy)`

**用途 / Purpose:** 获取 `formation data at index` 的当前值。

### SetFormationInfos
`public void SetFormationInfos(List<OrderOfBattleCampaignBehavior.OrderOfBattleFormationData> formationInfos, bool isSiegeBattle, bool isInArmy)`

**用途 / Purpose:** 设置 `formation infos` 的值或状态。

## 使用示例

```csharp
var value = new OrderOfBattleFormationData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)

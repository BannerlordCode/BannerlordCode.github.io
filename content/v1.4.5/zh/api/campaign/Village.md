---
title: "Village"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Village`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/Village](/versions/Village)
<!-- END BREADCRUMB -->
# Village

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Village : SettlementComponent`
**Base:** `SettlementComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Village.cs`

## 概述

`Village` 位于 `TaleWorlds.CampaignSystem.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `VillageState` | `public VillageStates VillageState { get; set; }` |
| `LastDemandSatisfiedTime` | `public float LastDemandSatisfiedTime { get; }` |
| `Bound` | `public Settlement Bound { get; }` |
| `TradeBound` | `public Settlement TradeBound { get; set; }` |
| `Hearth` | `public float Hearth { get; set; }` |
| `TradeTaxAccumulated` | `public int TradeTaxAccumulated { get; set; }` |

## 主要方法

### GetDefenderParties
`public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 获取 `defender parties` 的当前值。

### GetNextDefenderParty
`public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 获取 `next defender party` 的当前值。

### DailyTick
`public void DailyTick()`

**用途 / Purpose:** 处理 `daily tick` 相关逻辑。

### OnInit
`public override void OnInit()`

**用途 / Purpose:** 当 `init` 事件触发时调用此方法。

### GetWarehouseCapacity
`public int GetWarehouseCapacity()`

**用途 / Purpose:** 获取 `warehouse capacity` 的当前值。

### GetItemPrice
`public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

**用途 / Purpose:** 获取 `item price` 的当前值。

### GetItemPrice
`public override int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

**用途 / Purpose:** 获取 `item price` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### IsProducing
`public bool IsProducing(ItemObject item)`

**用途 / Purpose:** 处理 `is producing` 相关逻辑。

### GetHearthLevel
`public int GetHearthLevel()`

**用途 / Purpose:** 获取 `hearth level` 的当前值。

### GetProsperityLevel
`public override ProsperityLevel GetProsperityLevel()`

**用途 / Purpose:** 获取 `prosperity level` 的当前值。

## 使用示例

```csharp
var value = new Village();
value.GetDefenderParties(battleType);
```

## 参见

- [完整类目录](../catalog)
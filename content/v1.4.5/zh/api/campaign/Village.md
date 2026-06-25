---
title: "Village"
description: "Village 的自动生成类参考。"
---
# Village

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Village : SettlementComponent`
**Base:** `SettlementComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Village.cs`

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

**用途 / Purpose:** 读取并返回当前对象中 「defender parties」 的结果。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
var result = village.GetDefenderParties(battleType);
```

### GetNextDefenderParty
`public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 读取并返回当前对象中 「next defender party」 的结果。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
var result = village.GetNextDefenderParty(partyIndex, battleType);
```

### DailyTick
`public void DailyTick()`

**用途 / Purpose:** 推进 「daily」 状态的周期性更新。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
village.DailyTick();
```

### OnInit
`public override void OnInit()`

**用途 / Purpose:** 在 「init」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
village.OnInit();
```

### GetWarehouseCapacity
`public int GetWarehouseCapacity()`

**用途 / Purpose:** 读取并返回当前对象中 「warehouse capacity」 的结果。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
var result = village.GetWarehouseCapacity();
```

### GetItemPrice
`public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

**用途 / Purpose:** 读取并返回当前对象中 「item price」 的结果。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
var result = village.GetItemPrice(item, null, false);
```

### GetItemPrice
`public override int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

**用途 / Purpose:** 读取并返回当前对象中 「item price」 的结果。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
var result = village.GetItemPrice(itemRosterElement, null, false);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
var result = village.ToString();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
village.Deserialize(objectManager, node);
```

### IsProducing
`public bool IsProducing(ItemObject item)`

**用途 / Purpose:** 判断当前对象是否处于 「producing」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
var result = village.IsProducing(item);
```

### GetHearthLevel
`public int GetHearthLevel()`

**用途 / Purpose:** 读取并返回当前对象中 「hearth level」 的结果。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
var result = village.GetHearthLevel();
```

### GetProsperityLevel
`public override ProsperityLevel GetProsperityLevel()`

**用途 / Purpose:** 读取并返回当前对象中 「prosperity level」 的结果。

```csharp
// 先通过子系统 API 拿到 Village 实例
Village village = ...;
var result = village.GetProsperityLevel();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Village village = ...;
village.GetDefenderParties(battleType);
```

## 参见

- [本区域目录](../)
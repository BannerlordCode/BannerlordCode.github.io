---
title: "CaravansCampaignBehavior"
description: "CaravansCampaignBehavior 的自动生成类参考。"
---
# CaravansCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaravansCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CaravansCampaignBehavior.cs`

## 概述

`CaravansCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TradeAgreementsCampaignBehavior` | `public ITradeAgreementsCampaignBehavior TradeAgreementsCampaignBehavior { get; }` |

## 主要方法

### OnSellAction
`public void OnSellAction(Settlement soldSettlement, int sellPrice)`

**用途 / Purpose:** 在 sell action 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.OnSellAction(soldSettlement, 0);
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.Reset();
```

### CreateNewLog
`public TradeActionLog CreateNewLog(Settlement boughtSettlement, int buyPrice, ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 构建一个新的 new log 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
var result = caravansCampaignBehavior.CreateNewLog(boughtSettlement, 0, itemRosterElement);
```

### ReleaseLog
`public void ReleaseLog(TradeActionLog log)`

**用途 / Purpose:** 调用 ReleaseLog 对应的操作。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.ReleaseLog(log);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
var result = caravansCampaignBehavior.ToString();
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 session launched 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### SpawnCaravan
`public void SpawnCaravan(Hero hero, bool initialSpawn = false)`

**用途 / Purpose:** 调用 SpawnCaravan 对应的操作。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.SpawnCaravan(hero, false);
```

### DailyTick
`public void DailyTick()`

**用途 / Purpose:** 调用 DailyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.DailyTick();
```

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** 调用 HourlyTickParty 对应的操作。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.HourlyTickParty(mobileParty);
```

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**用途 / Purpose:** 在 settlement entered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.OnSettlementEntered(mobileParty, settlement, hero);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** 在 settlement left 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CaravansCampaignBehavior 实例
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.OnSettlementLeft(mobileParty, settlement);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.OnSellAction(soldSettlement, 0);
```

## 参见

- [本区域目录](../)
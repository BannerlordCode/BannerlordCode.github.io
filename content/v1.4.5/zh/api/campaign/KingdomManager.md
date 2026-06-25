---
title: "KingdomManager"
description: "KingdomManager 的自动生成类参考。"
---
# KingdomManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomManager`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/KingdomManager.cs`

## 概述

`KingdomManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `KingdomManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnSessionStart
`public void OnSessionStart()`

**用途 / Purpose:** 在 session start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 KingdomManager 实例
KingdomManager kingdomManager = ...;
kingdomManager.OnSessionStart();
```

### CreateKingdom
`public void CreateKingdom(TextObject kingdomName, TextObject informalName, CultureObject culture, Clan founderClan, MBReadOnlyList<PolicyObject> initialPolicies = null, TextObject encyclopediaText = null, TextObject encyclopediaTitle = null, TextObject encyclopediaRulerTitle = null)`

**用途 / Purpose:** 构建一个新的 kingdom 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 KingdomManager 实例
KingdomManager kingdomManager = ...;
kingdomManager.CreateKingdom(kingdomName, informalName, culture, founderClan, null, null, null, null);
```

### AbdicateTheThrone
`public void AbdicateTheThrone(Kingdom kingdom)`

**用途 / Purpose:** 调用 AbdicateTheThrone 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManager 实例
KingdomManager kingdomManager = ...;
kingdomManager.AbdicateTheThrone(kingdom);
```

### RaidCompleted
`public void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**用途 / Purpose:** 调用 RaidCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManager 实例
KingdomManager kingdomManager = ...;
kingdomManager.RaidCompleted(winnerSide, raidEvent);
```

### SiegeCompleted
`public void SiegeCompleted(Settlement settlement, MobileParty capturerParty, bool isWin, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 调用 SiegeCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManager 实例
KingdomManager kingdomManager = ...;
kingdomManager.SiegeCompleted(settlement, capturerParty, false, battleType);
```

### RelinquishSettlementOwnership
`public void RelinquishSettlementOwnership(Settlement settlement)`

**用途 / Purpose:** 调用 RelinquishSettlementOwnership 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManager 实例
KingdomManager kingdomManager = ...;
kingdomManager.RelinquishSettlementOwnership(settlement);
```

### GiftSettlementOwnership
`public void GiftSettlementOwnership(Settlement settlement, Clan receiverClan)`

**用途 / Purpose:** 调用 GiftSettlementOwnership 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManager 实例
KingdomManager kingdomManager = ...;
kingdomManager.GiftSettlementOwnership(settlement, receiverClan);
```

### GetMercenaryWageAmount
`public int GetMercenaryWageAmount(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 mercenary wage amount 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomManager 实例
KingdomManager kingdomManager = ...;
var result = kingdomManager.GetMercenaryWageAmount(hero);
```

## 使用示例

```csharp
var manager = KingdomManager.Current;
```

## 参见

- [本区域目录](../)
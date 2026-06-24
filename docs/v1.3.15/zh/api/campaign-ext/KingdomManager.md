<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/KingdomManager](/versions/KingdomManager)
<!-- END BREADCRUMB -->
# KingdomManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/KingdomManager.cs`

## 概述

`KingdomManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `KingdomManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnSessionStart
`public void OnSessionStart()`

**用途 / Purpose:** 当 `session start` 事件触发时调用此方法。

### CreateKingdom
`public void CreateKingdom(TextObject kingdomName, TextObject informalName, CultureObject culture, Clan founderClan, MBReadOnlyList<PolicyObject> initialPolicies = null, TextObject encyclopediaText = null, TextObject encyclopediaTitle = null, TextObject encyclopediaRulerTitle = null)`

**用途 / Purpose:** 创建一个 `kingdom` 实例或对象。

### AbdicateTheThrone
`public void AbdicateTheThrone(Kingdom kingdom)`

**用途 / Purpose:** 处理 `abdicate the throne` 相关逻辑。

### RaidCompleted
`public void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**用途 / Purpose:** 处理 `raid completed` 相关逻辑。

### SiegeCompleted
`public void SiegeCompleted(Settlement settlement, MobileParty capturerParty, bool isWin, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 处理 `siege completed` 相关逻辑。

### RelinquishSettlementOwnership
`public void RelinquishSettlementOwnership(Settlement settlement)`

**用途 / Purpose:** 处理 `relinquish settlement ownership` 相关逻辑。

### GiftSettlementOwnership
`public void GiftSettlementOwnership(Settlement settlement, Clan receiverClan)`

**用途 / Purpose:** 处理 `gift settlement ownership` 相关逻辑。

### GetEligibleClansForSettlementOwnershipGift
`public IEnumerable<Clan> GetEligibleClansForSettlementOwnershipGift(Settlement settlement)`

**用途 / Purpose:** 获取 `eligible clans for settlement ownership gift` 的当前值。

### GetMercenaryWageAmount
`public int GetMercenaryWageAmount(Hero hero)`

**用途 / Purpose:** 获取 `mercenary wage amount` 的当前值。

## 使用示例

```csharp
var manager = KingdomManager.Current;
```

## 参见

- [完整类目录](../catalog)
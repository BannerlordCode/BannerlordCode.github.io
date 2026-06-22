<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
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

`KingdomManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### OnSessionStart
```csharp
public void OnSessionStart()
```

### CreateKingdom
```csharp
public void CreateKingdom(TextObject kingdomName, TextObject informalName, CultureObject culture, Clan founderClan, MBReadOnlyList<PolicyObject> initialPolicies = null, TextObject encyclopediaText = null, TextObject encyclopediaTitle = null, TextObject encyclopediaRulerTitle = null)
```

### AbdicateTheThrone
```csharp
public void AbdicateTheThrone(Kingdom kingdom)
```

### RaidCompleted
```csharp
public void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)
```

### SiegeCompleted
```csharp
public void SiegeCompleted(Settlement settlement, MobileParty capturerParty, bool isWin, MapEvent.BattleTypes battleType)
```

### RelinquishSettlementOwnership
```csharp
public void RelinquishSettlementOwnership(Settlement settlement)
```

### GiftSettlementOwnership
```csharp
public void GiftSettlementOwnership(Settlement settlement, Clan receiverClan)
```

### GetEligibleClansForSettlementOwnershipGift
```csharp
public IEnumerable<Clan> GetEligibleClansForSettlementOwnershipGift(Settlement settlement)
```

### GetMercenaryWageAmount
```csharp
public int GetMercenaryWageAmount(Hero hero)
```

## 使用示例

```csharp
// KingdomManager (Manager) 的典型用法
KingdomManager.Current;
```

## 参见

- [完整类目录](../catalog)
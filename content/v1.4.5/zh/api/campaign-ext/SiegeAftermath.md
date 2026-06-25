---
title: "SiegeAftermath"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeAftermath`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeAftermath

## 心智模型

先把 `SiegeAftermath` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/SiegeAftermathAction.cs`

SiegeAftermath 是一组静态方法，用于在战役中以特定原因触发"SiegeAftermath"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyAftermath

```csharp
public static void ApplyAftermath(MobileParty attackerParty, Settlement settlement, SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)
```

**用途 / Purpose:** aftermath。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
SiegeAftermath.ApplyAftermath(attackerParty, settlement, aftermathType, previousSettlementOwner, dictionary<MobileParty, 100);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)
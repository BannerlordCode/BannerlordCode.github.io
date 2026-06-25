---
title: "SiegeAftermathAction"
description: "SiegeAftermathAction 的自动生成战役动作参考。"
---
# SiegeAftermathAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/SiegeAftermathAction.cs`

SiegeAftermathAction 是一组静态方法，用于在战役中以特定原因触发"SiegeAftermath"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyAftermath

```csharp
public static void ApplyAftermath(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)
```

**用途 / Purpose:** aftermath。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
SiegeAftermathAction.ApplyAftermath(attackerParty, settlement, aftermathType, previousSettlementOwner, dictionary<MobileParty, 100);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)
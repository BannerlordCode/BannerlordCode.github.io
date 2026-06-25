---
title: "SellItemsAction"
description: "SellItemsAction 的自动生成战役动作参考。"
---
# SellItemsAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/SellItemsAction.cs`

SellItemsAction 是一组静态方法，用于在战役中以特定原因触发"SellItems"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement subject, int number, Settlement currentSettlement = null)
```

**用途 / Purpose:** 。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
SellItemsAction.Apply(receiverParty, payerParty, subject, 100, null);
```

## 参见

- [本区域目录](../)
- [战役系统](../campaign/)
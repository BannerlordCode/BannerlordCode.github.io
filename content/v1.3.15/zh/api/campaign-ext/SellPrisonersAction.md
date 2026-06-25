---
title: "SellPrisonersAction"
description: "SellPrisonersAction 的自动生成战役动作参考。"
---
# SellPrisonersAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/SellPrisonersAction.cs`

SellPrisonersAction 是一组静态方法，用于在战役中以特定原因触发"SellPrisoners"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyForAllPrisoners

```csharp
public static void ApplyForAllPrisoners(PartyBase sellerParty, PartyBase buyerParty)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for all prisoners 的效果应用到当前对象。

### ApplyForSelectedPrisoners

```csharp
public static void ApplyForSelectedPrisoners(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for selected prisoners 的效果应用到当前对象。

### ApplyByPartyScreen

```csharp
public static void ApplyByPartyScreen(TroopRoster prisoners)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by party screen 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
SellPrisonersAction.ApplyForAllPrisoners(sellerParty, buyerParty);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)
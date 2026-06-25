---
title: "ChangeOwnerOfSettlementAction"
description: "ChangeOwnerOfSettlementAction 的自动生成战役动作参考。"
---
# ChangeOwnerOfSettlementAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeOwnerOfSettlementAction.cs`

ChangeOwnerOfSettlementAction 是一组静态方法，用于在战役中以特定原因触发"ChangeOwnerOfSettlement"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByDefault

```csharp
public static void ApplyByDefault(Hero hero, Settlement settlement)
```

**用途 / Purpose:** 将 by default 的效果应用到当前对象。

### ApplyByKingDecision

```csharp
public static void ApplyByKingDecision(Hero hero, Settlement settlement)
```

**用途 / Purpose:** 将 by king decision 的效果应用到当前对象。

### ApplyBySiege

```csharp
public static void ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement settlement)
```

**用途 / Purpose:** 将 by siege 的效果应用到当前对象。

### ApplyByLeaveFaction

```csharp
public static void ApplyByLeaveFaction(Hero hero, Settlement settlement)
```

**用途 / Purpose:** 将 by leave faction 的效果应用到当前对象。

### ApplyByBarter

```csharp
public static void ApplyByBarter(Hero hero, Settlement settlement)
```

**用途 / Purpose:** 将 by barter 的效果应用到当前对象。

### ApplyByRebellion

```csharp
public static void ApplyByRebellion(Hero hero, Settlement settlement)
```

**用途 / Purpose:** 将 by rebellion 的效果应用到当前对象。

### ApplyByDestroyClan

```csharp
public static void ApplyByDestroyClan(Settlement settlement, Hero newOwner)
```

**用途 / Purpose:** 将 by destroy clan 的效果应用到当前对象。

### ApplyByGift

```csharp
public static void ApplyByGift(Settlement settlement, Hero newOwner)
```

**用途 / Purpose:** 将 by gift 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeOwnerOfSettlementAction.ApplyByDefault(hero, settlement);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)
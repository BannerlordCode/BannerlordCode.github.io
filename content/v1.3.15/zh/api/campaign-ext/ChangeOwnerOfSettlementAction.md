---
title: "ChangeOwnerOfSettlementAction"
description: "ChangeOwnerOfSettlementAction 的自动生成战役动作参考。"
---
# ChangeOwnerOfSettlementAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs`

ChangeOwnerOfSettlementAction 是一组静态方法，用于在战役中以特定原因触发"ChangeOwnerOfSettlement"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByDefault

```csharp
public static void ApplyByDefault(Hero hero, Settlement settlement)
```

**用途 / Purpose:** default。

### ApplyByKingDecision

```csharp
public static void ApplyByKingDecision(Hero hero, Settlement settlement)
```

**用途 / Purpose:** king decision。

### ApplyBySiege

```csharp
public static void ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement settlement)
```

**用途 / Purpose:** siege。

### ApplyByLeaveFaction

```csharp
public static void ApplyByLeaveFaction(Hero hero, Settlement settlement)
```

**用途 / Purpose:** leave faction。

### ApplyByBarter

```csharp
public static void ApplyByBarter(Hero hero, Settlement settlement)
```

**用途 / Purpose:** barter。

### ApplyByRebellion

```csharp
public static void ApplyByRebellion(Hero hero, Settlement settlement)
```

**用途 / Purpose:** rebellion。

### ApplyByDestroyClan

```csharp
public static void ApplyByDestroyClan(Settlement settlement, Hero newOwner)
```

**用途 / Purpose:** destroy clan。

### ApplyByGift

```csharp
public static void ApplyByGift(Settlement settlement, Hero newOwner)
```

**用途 / Purpose:** gift。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeOwnerOfSettlementAction.ApplyByDefault(hero, settlement);
```

## 参见

- [本区域目录](../)
- [战役系统](../campaign/)
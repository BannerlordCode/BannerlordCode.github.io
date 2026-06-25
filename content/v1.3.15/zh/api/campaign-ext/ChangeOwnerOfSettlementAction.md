---
title: "ChangeOwnerOfSettlementAction"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ChangeOwnerOfSettlementAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeOwnerOfSettlementAction

## 心智模型

先把 `ChangeOwnerOfSettlementAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

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

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)
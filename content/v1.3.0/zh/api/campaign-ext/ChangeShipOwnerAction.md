---
title: "ChangeShipOwnerAction"
description: "ChangeShipOwnerAction 的自动生成战役动作参考。"
---
# ChangeShipOwnerAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs`

ChangeShipOwnerAction 是一组静态方法，用于在战役中以特定原因触发"ChangeShipOwner"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByTransferring

```csharp
public static void ApplyByTransferring(PartyBase newOwner, Ship ship)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by transferring 的效果应用到当前对象。

### ApplyByTrade

```csharp
public static void ApplyByTrade(PartyBase newOwner, Ship ship)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by trade 的效果应用到当前对象。

### ApplyByLooting

```csharp
public static void ApplyByLooting(PartyBase newOwner, Ship ship)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by looting 的效果应用到当前对象。

### ApplyByProduction

```csharp
public static void ApplyByProduction(PartyBase newOwner, Ship ship)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by production 的效果应用到当前对象。

### ApplyByMobilePartyCreation

```csharp
public static void ApplyByMobilePartyCreation(PartyBase newOwner, Ship ship)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by mobile party creation 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeShipOwnerAction.ApplyByTransferring(newOwner, ship);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)
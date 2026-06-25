---
title: "ChangeOwnerOfWorkshopAction"
description: "ChangeOwnerOfWorkshopAction 的自动生成战役动作参考。"
---
# ChangeOwnerOfWorkshopAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeOwnerOfWorkshopAction.cs`

ChangeOwnerOfWorkshopAction 是一组静态方法，用于在战役中以特定原因触发"ChangeOwnerOfWorkshop"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByBankruptcy

```csharp
public static void ApplyByBankruptcy(Workshop workshop, Hero newOwner, WorkshopType workshopType, int cost)
```

**用途 / Purpose:** 将 by bankruptcy 的效果应用到当前对象。

### ApplyByPlayerBuying

```csharp
public static void ApplyByPlayerBuying(Workshop workshop)
```

**用途 / Purpose:** 将 by player buying 的效果应用到当前对象。

### ApplyByPlayerSelling

```csharp
public static void ApplyByPlayerSelling(Workshop workshop, Hero newOwner, WorkshopType workshopType)
```

**用途 / Purpose:** 将 by player selling 的效果应用到当前对象。

### ApplyByDeath

```csharp
public static void ApplyByDeath(Workshop workshop, Hero newOwner)
```

**用途 / Purpose:** 将 by death 的效果应用到当前对象。

### ApplyByWar

```csharp
public static void ApplyByWar(Workshop workshop, Hero newOwner, WorkshopType workshopType)
```

**用途 / Purpose:** 将 by war 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeOwnerOfWorkshopAction.ApplyByBankruptcy(workshop, newOwner, workshopType, 100);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)
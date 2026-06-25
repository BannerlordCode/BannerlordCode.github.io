---
title: "RemoveCompanionAction"
description: "RemoveCompanionAction 的自动生成战役动作参考。"
---
# RemoveCompanionAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs`

RemoveCompanionAction 是一组静态方法，用于在战役中以特定原因触发"RemoveCompanion"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByFire

```csharp
public static void ApplyByFire(Clan clan, Hero companion)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by fire 的效果应用到当前对象。

### ApplyAfterQuest

```csharp
public static void ApplyAfterQuest(Clan clan, Hero companion)
```

**用途 / Purpose:** **用途 / Purpose:** 将 after quest 的效果应用到当前对象。

### ApplyByDeath

```csharp
public static void ApplyByDeath(Clan clan, Hero companion)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by death 的效果应用到当前对象。

### ApplyByByTurningToLord

```csharp
public static void ApplyByByTurningToLord(Clan clan, Hero companion)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by by turning to lord 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
RemoveCompanionAction.ApplyByFire(clan, companion);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)
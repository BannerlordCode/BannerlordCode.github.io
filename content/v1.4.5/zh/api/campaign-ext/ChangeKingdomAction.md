---
title: "ChangeKingdomAction"
description: "ChangeKingdomAction 的自动生成战役动作参考。"
---
# ChangeKingdomAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeKingdomAction.cs`

ChangeKingdomAction 是一组静态方法，用于在战役中以特定原因触发"ChangeKingdom"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByJoinToKingdom

```csharp
public static void ApplyByJoinToKingdom(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by join to kingdom 的效果应用到当前对象。

### ApplyByJoinToKingdomByDefection

```csharp
public static void ApplyByJoinToKingdomByDefection(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by join to kingdom by defection 的效果应用到当前对象。

### ApplyByCreateKingdom

```csharp
public static void ApplyByCreateKingdom(Clan clan, Kingdom newKingdom, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by create kingdom 的效果应用到当前对象。

### ApplyByLeaveByKingdomDestruction

```csharp
public static void ApplyByLeaveByKingdomDestruction(Clan clan, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by leave by kingdom destruction 的效果应用到当前对象。

### ApplyByLeaveKingdom

```csharp
public static void ApplyByLeaveKingdom(Clan clan, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by leave kingdom 的效果应用到当前对象。

### ApplyByLeaveWithRebellionAgainstKingdom

```csharp
public static void ApplyByLeaveWithRebellionAgainstKingdom(Clan clan, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by leave with rebellion against kingdom 的效果应用到当前对象。

### ApplyByJoinFactionAsMercenary

```csharp
public static void ApplyByJoinFactionAsMercenary(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), int awardMultiplier = 50, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by join faction as mercenary 的效果应用到当前对象。

### ApplyByLeaveKingdomAsMercenary

```csharp
public static void ApplyByLeaveKingdomAsMercenary(Clan mercenaryClan, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by leave kingdom as mercenary 的效果应用到当前对象。

### ApplyByLeaveKingdomByClanDestruction

```csharp
public static void ApplyByLeaveKingdomByClanDestruction(Clan clan, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by leave kingdom by clan destruction 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeKingdomAction.ApplyByJoinToKingdom(clan, newKingdom, default(CampaignTime), false);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)
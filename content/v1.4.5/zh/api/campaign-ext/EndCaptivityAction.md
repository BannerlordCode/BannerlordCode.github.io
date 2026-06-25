---
title: "EndCaptivityAction"
description: "EndCaptivityAction 的自动生成战役动作参考。"
---
# EndCaptivityAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/EndCaptivityAction.cs`

EndCaptivityAction 是一组静态方法，用于在战役中以特定原因触发"EndCaptivity"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByReleasedAfterBattle

```csharp
public static void ApplyByReleasedAfterBattle(Hero character)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by released after battle 的效果应用到当前对象。

### ApplyByRansom

```csharp
public static void ApplyByRansom(Hero character, Hero facilitator)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by ransom 的效果应用到当前对象。

### ApplyByPeace

```csharp
public static void ApplyByPeace(Hero character, Hero facilitator = null)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by peace 的效果应用到当前对象。

### ApplyByEscape

```csharp
public static void ApplyByEscape(Hero character, Hero facilitator = null, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by escape 的效果应用到当前对象。

### ApplyByDeath

```csharp
public static void ApplyByDeath(Hero character)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by death 的效果应用到当前对象。

### ApplyByReleasedByChoice

```csharp
public static void ApplyByReleasedByChoice(FlattenedTroopRoster troopRoster)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by released by choice 的效果应用到当前对象。

### ApplyByReleasedByChoice

```csharp
public static void ApplyByReleasedByChoice(Hero character, Hero facilitator = null)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by released by choice 的效果应用到当前对象。

### ApplyByReleasedByCompensation

```csharp
public static void ApplyByReleasedByCompensation(Hero character)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by released by compensation 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
EndCaptivityAction.ApplyByReleasedAfterBattle(character);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)
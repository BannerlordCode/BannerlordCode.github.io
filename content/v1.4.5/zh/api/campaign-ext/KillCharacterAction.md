---
title: "KillCharacterAction"
description: "KillCharacterAction 的自动生成战役动作参考。"
---
# KillCharacterAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/KillCharacterAction.cs`

KillCharacterAction 是一组静态方法，用于在战役中以特定原因触发"KillCharacter"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByOldAge

```csharp
public static void ApplyByOldAge(Hero victim, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by old age 的效果应用到当前对象。

### ApplyByWounds

```csharp
public static void ApplyByWounds(Hero victim, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by wounds 的效果应用到当前对象。

### ApplyByBattle

```csharp
public static void ApplyByBattle(Hero victim, Hero killer, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by battle 的效果应用到当前对象。

### ApplyByMurder

```csharp
public static void ApplyByMurder(Hero victim, Hero killer = null, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by murder 的效果应用到当前对象。

### ApplyInLabor

```csharp
public static void ApplyInLabor(Hero lostMother, bool showNotification = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 in labor 的效果应用到当前对象。

### ApplyByExecution

```csharp
public static void ApplyByExecution(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by execution 的效果应用到当前对象。

### ApplyByExecutionAfterMapEvent

```csharp
public static void ApplyByExecutionAfterMapEvent(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by execution after map event 的效果应用到当前对象。

### ApplyByRemove

```csharp
public static void ApplyByRemove(Hero victim, bool showNotification = false, bool isForced = true)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by remove 的效果应用到当前对象。

### ApplyByDeathMark

```csharp
public static void ApplyByDeathMark(Hero victim, bool showNotification = false)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by death mark 的效果应用到当前对象。

### ApplyByDeathMarkForced

```csharp
public static void ApplyByDeathMarkForced(Hero victim, bool showNotification = false)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by death mark forced 的效果应用到当前对象。

### ApplyByPlayerIllness

```csharp
public static void ApplyByPlayerIllness()
```

**用途 / Purpose:** **用途 / Purpose:** 将 by player illness 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
KillCharacterAction.ApplyByOldAge(victim, false);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)
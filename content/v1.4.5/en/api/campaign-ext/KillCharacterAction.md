---
title: "KillCharacterAction"
description: "Auto-generated campaign action reference for KillCharacterAction."
---
# KillCharacterAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/KillCharacterAction.cs`

KillCharacterAction is a set of static methods that trigger "KillCharacter" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByOldAge

```csharp
public static void ApplyByOldAge(Hero victim, bool showNotification = true)
```

**Purpose:** Applies the effect of by old age to the this instance.

### ApplyByWounds

```csharp
public static void ApplyByWounds(Hero victim, bool showNotification = true)
```

**Purpose:** Applies the effect of by wounds to the this instance.

### ApplyByBattle

```csharp
public static void ApplyByBattle(Hero victim, Hero killer, bool showNotification = true)
```

**Purpose:** Applies the effect of by battle to the this instance.

### ApplyByMurder

```csharp
public static void ApplyByMurder(Hero victim, Hero killer = null, bool showNotification = true)
```

**Purpose:** Applies the effect of by murder to the this instance.

### ApplyInLabor

```csharp
public static void ApplyInLabor(Hero lostMother, bool showNotification = true)
```

**Purpose:** Applies the effect of in labor to the this instance.

### ApplyByExecution

```csharp
public static void ApplyByExecution(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)
```

**Purpose:** Applies the effect of by execution to the this instance.

### ApplyByExecutionAfterMapEvent

```csharp
public static void ApplyByExecutionAfterMapEvent(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)
```

**Purpose:** Applies the effect of by execution after map event to the this instance.

### ApplyByRemove

```csharp
public static void ApplyByRemove(Hero victim, bool showNotification = false, bool isForced = true)
```

**Purpose:** Applies the effect of by remove to the this instance.

### ApplyByDeathMark

```csharp
public static void ApplyByDeathMark(Hero victim, bool showNotification = false)
```

**Purpose:** Applies the effect of by death mark to the this instance.

### ApplyByDeathMarkForced

```csharp
public static void ApplyByDeathMarkForced(Hero victim, bool showNotification = false)
```

**Purpose:** Applies the effect of by death mark forced to the this instance.

### ApplyByPlayerIllness

```csharp
public static void ApplyByPlayerIllness()
```

**Purpose:** Applies the effect of by player illness to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
KillCharacterAction.ApplyByOldAge(victim, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
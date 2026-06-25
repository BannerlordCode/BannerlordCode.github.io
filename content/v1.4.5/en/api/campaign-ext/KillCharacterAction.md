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

**Purpose:** old age.

### ApplyByWounds

```csharp
public static void ApplyByWounds(Hero victim, bool showNotification = true)
```

**Purpose:** wounds.

### ApplyByBattle

```csharp
public static void ApplyByBattle(Hero victim, Hero killer, bool showNotification = true)
```

**Purpose:** battle.

### ApplyByMurder

```csharp
public static void ApplyByMurder(Hero victim, Hero killer = null, bool showNotification = true)
```

**Purpose:** murder.

### ApplyInLabor

```csharp
public static void ApplyInLabor(Hero lostMother, bool showNotification = true)
```

**Purpose:** in labor.

### ApplyByExecution

```csharp
public static void ApplyByExecution(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)
```

**Purpose:** execution.

### ApplyByExecutionAfterMapEvent

```csharp
public static void ApplyByExecutionAfterMapEvent(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)
```

**Purpose:** execution after map event.

### ApplyByRemove

```csharp
public static void ApplyByRemove(Hero victim, bool showNotification = false, bool isForced = true)
```

**Purpose:** remove.

### ApplyByDeathMark

```csharp
public static void ApplyByDeathMark(Hero victim, bool showNotification = false)
```

**Purpose:** death mark.

### ApplyByDeathMarkForced

```csharp
public static void ApplyByDeathMarkForced(Hero victim, bool showNotification = false)
```

**Purpose:** death mark forced.

### ApplyByPlayerIllness

```csharp
public static void ApplyByPlayerIllness()
```

**Purpose:** player illness.

## Usage Example

```csharp
// Trigger this action from a mod
KillCharacterAction.ApplyByOldAge(victim, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
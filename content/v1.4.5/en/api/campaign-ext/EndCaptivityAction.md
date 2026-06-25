---
title: "EndCaptivityAction"
description: "Auto-generated campaign action reference for EndCaptivityAction."
---
# EndCaptivityAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/EndCaptivityAction.cs`

EndCaptivityAction is a set of static methods that trigger "EndCaptivity" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByReleasedAfterBattle

```csharp
public static void ApplyByReleasedAfterBattle(Hero character)
```

**Purpose:** Applies the effect of by released after battle to the this instance.

### ApplyByRansom

```csharp
public static void ApplyByRansom(Hero character, Hero facilitator)
```

**Purpose:** Applies the effect of by ransom to the this instance.

### ApplyByPeace

```csharp
public static void ApplyByPeace(Hero character, Hero facilitator = null)
```

**Purpose:** Applies the effect of by peace to the this instance.

### ApplyByEscape

```csharp
public static void ApplyByEscape(Hero character, Hero facilitator = null, bool showNotification = true)
```

**Purpose:** Applies the effect of by escape to the this instance.

### ApplyByDeath

```csharp
public static void ApplyByDeath(Hero character)
```

**Purpose:** Applies the effect of by death to the this instance.

### ApplyByReleasedByChoice

```csharp
public static void ApplyByReleasedByChoice(FlattenedTroopRoster troopRoster)
```

**Purpose:** Applies the effect of by released by choice to the this instance.

### ApplyByReleasedByChoice

```csharp
public static void ApplyByReleasedByChoice(Hero character, Hero facilitator = null)
```

**Purpose:** Applies the effect of by released by choice to the this instance.

### ApplyByReleasedByCompensation

```csharp
public static void ApplyByReleasedByCompensation(Hero character)
```

**Purpose:** Applies the effect of by released by compensation to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
EndCaptivityAction.ApplyByReleasedAfterBattle(character);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
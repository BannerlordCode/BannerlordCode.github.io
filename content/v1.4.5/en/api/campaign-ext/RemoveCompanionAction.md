---
title: "RemoveCompanionAction"
description: "Auto-generated campaign action reference for RemoveCompanionAction."
---
# RemoveCompanionAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/RemoveCompanionAction.cs`

RemoveCompanionAction is a set of static methods that trigger "RemoveCompanion" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByFire

```csharp
public static void ApplyByFire(Clan clan, Hero companion)
```

**Purpose:** fire.

### ApplyAfterQuest

```csharp
public static void ApplyAfterQuest(Clan clan, Hero companion)
```

**Purpose:** after quest.

### ApplyByDeath

```csharp
public static void ApplyByDeath(Clan clan, Hero companion)
```

**Purpose:** death.

### ApplyByByTurningToLord

```csharp
public static void ApplyByByTurningToLord(Clan clan, Hero companion)
```

**Purpose:** by turning to lord.

## Usage Example

```csharp
// Trigger this action from a mod
RemoveCompanionAction.ApplyByFire(clan, companion);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
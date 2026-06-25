---
title: "RemoveCompanionAction"
description: "Auto-generated campaign action reference for RemoveCompanionAction."
---
# RemoveCompanionAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs`

RemoveCompanionAction is a set of static methods that trigger "RemoveCompanion" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByFire

```csharp
public static void ApplyByFire(Clan clan, Hero companion)
```

**Purpose:** Applies the effect of by fire to the this instance.

### ApplyAfterQuest

```csharp
public static void ApplyAfterQuest(Clan clan, Hero companion)
```

**Purpose:** Applies the effect of after quest to the this instance.

### ApplyByDeath

```csharp
public static void ApplyByDeath(Clan clan, Hero companion)
```

**Purpose:** Applies the effect of by death to the this instance.

### ApplyByByTurningToLord

```csharp
public static void ApplyByByTurningToLord(Clan clan, Hero companion)
```

**Purpose:** Applies the effect of by by turning to lord to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
RemoveCompanionAction.ApplyByFire(clan, companion);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
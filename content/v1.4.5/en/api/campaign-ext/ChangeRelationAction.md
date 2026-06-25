---
title: "ChangeRelationAction"
description: "Auto-generated campaign action reference for ChangeRelationAction."
---
# ChangeRelationAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeRelationAction.cs`

ChangeRelationAction is a set of static methods that trigger "ChangeRelation" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyPlayerRelation

```csharp
public static void ApplyPlayerRelation(Hero gainedRelationWith, int relation, bool affectRelatives = true, bool showQuickNotification = true)
```

**Purpose:** Applies the effect of player relation to the this instance.

### ApplyRelationChangeBetweenHeroes

```csharp
public static void ApplyRelationChangeBetweenHeroes(Hero hero, Hero gainedRelationWith, int relationChange, bool showQuickNotification = true)
```

**Purpose:** Applies the effect of relation change between heroes to the this instance.

### ApplyEmissaryRelation

```csharp
public static void ApplyEmissaryRelation(Hero emissary, Hero gainedRelationWith, int relationChange, bool showQuickNotification = true)
```

**Purpose:** Applies the effect of emissary relation to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeRelationAction.ApplyPlayerRelation(gainedRelationWith, 100, false, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
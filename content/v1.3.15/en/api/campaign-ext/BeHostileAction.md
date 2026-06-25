---
title: "BeHostileAction"
description: "Auto-generated campaign action reference for BeHostileAction."
---
# BeHostileAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/BeHostileAction.cs`

BeHostileAction is a set of static methods that trigger "BeHostile" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyHostileAction

```csharp
public static void ApplyHostileAction(PartyBase attackerParty, PartyBase defenderParty, float value)
```

**Purpose:** hostile action.

### ApplyMinorCoercionHostileAction

```csharp
public static void ApplyMinorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**Purpose:** minor coercion hostile action.

### ApplyMajorCoercionHostileAction

```csharp
public static void ApplyMajorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**Purpose:** major coercion hostile action.

### ApplyEncounterHostileAction

```csharp
public static void ApplyEncounterHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**Purpose:** encounter hostile action.

## Usage Example

```csharp
// Trigger this action from a mod
BeHostileAction.ApplyHostileAction(attackerParty, defenderParty, 100);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
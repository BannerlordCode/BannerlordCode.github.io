---
title: "BeHostileAction"
description: "Auto-generated campaign action reference for BeHostileAction."
---
# BeHostileAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/BeHostileAction.cs`

BeHostileAction is a set of static methods that trigger "BeHostile" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyHostileAction

```csharp
public static void ApplyHostileAction(PartyBase attackerParty, PartyBase defenderParty, float value)
```

**Purpose:** **Purpose:** Applies the effect of hostile action to the this instance.

### ApplyMinorCoercionHostileAction

```csharp
public static void ApplyMinorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**Purpose:** **Purpose:** Applies the effect of minor coercion hostile action to the this instance.

### ApplyMajorCoercionHostileAction

```csharp
public static void ApplyMajorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**Purpose:** **Purpose:** Applies the effect of major coercion hostile action to the this instance.

### ApplyEncounterHostileAction

```csharp
public static void ApplyEncounterHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**Purpose:** **Purpose:** Applies the effect of encounter hostile action to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
BeHostileAction.ApplyHostileAction(attackerParty, defenderParty, 100);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
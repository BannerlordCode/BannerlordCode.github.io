---
title: "StartBattleAction"
description: "Auto-generated campaign action reference for StartBattleAction."
---
# StartBattleAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/StartBattleAction.cs`

StartBattleAction is a set of static methods that trigger "StartBattle" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(PartyBase attackerParty, PartyBase defenderParty)
```

**Purpose:** **Purpose:** Applies the this instance's effect to its target.

### ApplyStartBattle

```csharp
public static void ApplyStartBattle(MobileParty attackerParty, MobileParty defenderParty)
```

**Purpose:** **Purpose:** Applies the effect of start battle to the this instance.

### ApplyStartRaid

```csharp
public static void ApplyStartRaid(MobileParty attackerParty, Settlement settlement)
```

**Purpose:** **Purpose:** Applies the effect of start raid to the this instance.

### ApplyStartSallyOut

```csharp
public static void ApplyStartSallyOut(Settlement settlement, MobileParty defenderParty)
```

**Purpose:** **Purpose:** Applies the effect of start sally out to the this instance.

### ApplyStartAssaultAgainstWalls

```csharp
public static void ApplyStartAssaultAgainstWalls(MobileParty attackerParty, Settlement settlement)
```

**Purpose:** **Purpose:** Applies the effect of start assault against walls to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
StartBattleAction.Apply(attackerParty, defenderParty);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
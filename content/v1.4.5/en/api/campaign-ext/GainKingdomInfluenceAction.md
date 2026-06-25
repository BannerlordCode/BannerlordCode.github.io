---
title: "GainKingdomInfluenceAction"
description: "Auto-generated campaign action reference for GainKingdomInfluenceAction."
---
# GainKingdomInfluenceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/GainKingdomInfluenceAction.cs`

GainKingdomInfluenceAction is a set of static methods that trigger "GainKingdomInfluence" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyForBattle

```csharp
public static void ApplyForBattle(Hero hero, float value)
```

**Purpose:** Applies the effect of for battle to the this instance.

### ApplyForGivingFood

```csharp
public static void ApplyForGivingFood(Hero hero1, Hero hero2, float value)
```

**Purpose:** Applies the effect of for giving food to the this instance.

### ApplyForDefault

```csharp
public static void ApplyForDefault(Hero hero, float value)
```

**Purpose:** Applies the effect of for default to the this instance.

### ApplyForJoiningFaction

```csharp
public static void ApplyForJoiningFaction(Hero hero, float value)
```

**Purpose:** Applies the effect of for joining faction to the this instance.

### ApplyForDonatePrisoners

```csharp
public static void ApplyForDonatePrisoners(MobileParty donatingParty, float value)
```

**Purpose:** Applies the effect of for donate prisoners to the this instance.

### ApplyForRaidingEnemyVillage

```csharp
public static void ApplyForRaidingEnemyVillage(MobileParty side1Party, float value)
```

**Purpose:** Applies the effect of for raiding enemy village to the this instance.

### ApplyForBesiegingEnemySettlement

```csharp
public static void ApplyForBesiegingEnemySettlement(MobileParty side1Party, float value)
```

**Purpose:** Applies the effect of for besieging enemy settlement to the this instance.

### ApplyForSiegeSafePassageBarter

```csharp
public static void ApplyForSiegeSafePassageBarter(MobileParty side1Party, float value)
```

**Purpose:** Applies the effect of for siege safe passage barter to the this instance.

### ApplyForCapturingEnemySettlement

```csharp
public static void ApplyForCapturingEnemySettlement(MobileParty side1Party, float value)
```

**Purpose:** Applies the effect of for capturing enemy settlement to the this instance.

### ApplyForLeavingTroopToGarrison

```csharp
public static void ApplyForLeavingTroopToGarrison(Hero hero, float value)
```

**Purpose:** Applies the effect of for leaving troop to garrison to the this instance.

### ApplyForBoardGameWon

```csharp
public static void ApplyForBoardGameWon(Hero hero, float value)
```

**Purpose:** Applies the effect of for board game won to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
GainKingdomInfluenceAction.ApplyForBattle(hero, 100);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
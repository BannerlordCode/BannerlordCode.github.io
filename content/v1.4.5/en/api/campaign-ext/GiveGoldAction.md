---
title: "GiveGoldAction"
description: "Auto-generated campaign action reference for GiveGoldAction."
---
# GiveGoldAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/GiveGoldAction.cs`

GiveGoldAction is a set of static methods that trigger "GiveGold" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyBetweenCharacters

```csharp
public static void ApplyBetweenCharacters(Hero giverHero, Hero recipientHero, int amount, bool disableNotification = false)
```

**Purpose:** Applies the effect of between characters to the this instance.

### ApplyForCharacterToSettlement

```csharp
public static void ApplyForCharacterToSettlement(Hero giverHero, Settlement settlement, int amount, bool disableNotification = false)
```

**Purpose:** Applies the effect of for character to settlement to the this instance.

### ApplyForSettlementToCharacter

```csharp
public static void ApplyForSettlementToCharacter(Settlement giverSettlement, Hero recipientHero, int amount, bool disableNotification = false)
```

**Purpose:** Applies the effect of for settlement to character to the this instance.

### ApplyForSettlementToParty

```csharp
public static void ApplyForSettlementToParty(Settlement giverSettlement, PartyBase recipientParty, int amount, bool disableNotification = false)
```

**Purpose:** Applies the effect of for settlement to party to the this instance.

### ApplyForPartyToSettlement

```csharp
public static void ApplyForPartyToSettlement(PartyBase giverParty, Settlement settlement, int amount, bool disableNotification = false)
```

**Purpose:** Applies the effect of for party to settlement to the this instance.

### ApplyForPartyToCharacter

```csharp
public static void ApplyForPartyToCharacter(PartyBase giverParty, Hero recipientHero, int amount, bool disableNotification = false)
```

**Purpose:** Applies the effect of for party to character to the this instance.

### ApplyForCharacterToParty

```csharp
public static void ApplyForCharacterToParty(Hero giverHero, PartyBase receipentParty, int amount, bool disableNotification = false)
```

**Purpose:** Applies the effect of for character to party to the this instance.

### ApplyForPartyToParty

```csharp
public static void ApplyForPartyToParty(PartyBase giverParty, PartyBase receipentParty, int amount, bool disableNotification = false)
```

**Purpose:** Applies the effect of for party to party to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
GiveGoldAction.ApplyBetweenCharacters(giverHero, recipientHero, 100, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
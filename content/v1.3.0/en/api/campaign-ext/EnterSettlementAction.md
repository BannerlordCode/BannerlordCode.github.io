---
title: "EnterSettlementAction"
description: "Auto-generated campaign action reference for EnterSettlementAction."
---
# EnterSettlementAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/EnterSettlementAction.cs`

EnterSettlementAction is a set of static methods that trigger "EnterSettlement" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyForParty

```csharp
public static void ApplyForParty(MobileParty mobileParty, Settlement settlement)
```

**Purpose:** for party.

### ApplyForPartyEntersAlley

```csharp
public static void ApplyForPartyEntersAlley(MobileParty party, Settlement settlement, Alley alley, bool isPlayerInvolved = false)
```

**Purpose:** for party enters alley.

### ApplyForCharacterOnly

```csharp
public static void ApplyForCharacterOnly(Hero hero, Settlement settlement)
```

**Purpose:** for character only.

### ApplyForPrisoner

```csharp
public static void ApplyForPrisoner(Hero hero, Settlement settlement)
```

**Purpose:** for prisoner.

## Usage Example

```csharp
// Trigger this action from a mod
EnterSettlementAction.ApplyForParty(mobileParty, settlement);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
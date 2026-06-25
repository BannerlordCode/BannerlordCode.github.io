---
title: "LeaveSettlementAction"
description: "Auto-generated campaign action reference for LeaveSettlementAction."
---
# LeaveSettlementAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/LeaveSettlementAction.cs`

LeaveSettlementAction is a set of static methods that trigger "LeaveSettlement" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyForParty

```csharp
public static void ApplyForParty(MobileParty mobileParty)
```

**Purpose:** **Purpose:** Applies the effect of for party to the this instance.

### ApplyForCharacterOnly

```csharp
public static void ApplyForCharacterOnly(Hero hero)
```

**Purpose:** **Purpose:** Applies the effect of for character only to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
LeaveSettlementAction.ApplyForParty(mobileParty);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
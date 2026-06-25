---
title: "SiegeAftermathAction"
description: "Auto-generated campaign action reference for SiegeAftermathAction."
---
# SiegeAftermathAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/SiegeAftermathAction.cs`

SiegeAftermathAction is a set of static methods that trigger "SiegeAftermath" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyAftermath

```csharp
public static void ApplyAftermath(MobileParty attackerParty, Settlement settlement, SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)
```

**Purpose:** aftermath.

## Usage Example

```csharp
// Trigger this action from a mod
SiegeAftermathAction.ApplyAftermath(attackerParty, settlement, aftermathType, previousSettlementOwner, dictionary<MobileParty, 100);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)
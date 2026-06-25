---
title: "SellItemsAction"
description: "Auto-generated campaign action reference for SellItemsAction."
---
# SellItemsAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/SellItemsAction.cs`

SellItemsAction is a set of static methods that trigger "SellItems" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement subject, int number, Settlement currentSettlement = null)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
SellItemsAction.Apply(receiverParty, payerParty, subject, 100, null);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)
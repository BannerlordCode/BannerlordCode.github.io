---
title: "TransferPrisonerAction"
description: "Auto-generated campaign action reference for TransferPrisonerAction."
---
# TransferPrisonerAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TransferPrisonerAction.cs`

TransferPrisonerAction is a set of static methods that trigger "TransferPrisoner" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(CharacterObject prisonerTroop, PartyBase prisonerOwnerParty, PartyBase newParty)
```

**Purpose:** Applies the this instance's effect to its target.

## Usage Example

```csharp
// Trigger this action from a mod
TransferPrisonerAction.Apply(prisonerTroop, prisonerOwnerParty, newParty);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
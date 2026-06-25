---
title: "ClaimSettlementAction"
description: "Auto-generated campaign action reference for ClaimSettlementAction."
---
# ClaimSettlementAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ClaimSettlementAction.cs`

ClaimSettlementAction is a set of static methods that trigger "ClaimSettlement" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero claimant, Settlement claimedSettlement)
```

**Purpose:** Applies the this instance's effect to its target.

## Usage Example

```csharp
// Trigger this action from a mod
ClaimSettlementAction.Apply(claimant, claimedSettlement);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
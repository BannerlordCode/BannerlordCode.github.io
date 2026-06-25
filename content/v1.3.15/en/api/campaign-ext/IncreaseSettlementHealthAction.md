---
title: "IncreaseSettlementHealthAction"
description: "Auto-generated campaign action reference for IncreaseSettlementHealthAction."
---
# IncreaseSettlementHealthAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/IncreaseSettlementHealthAction.cs`

IncreaseSettlementHealthAction is a set of static methods that trigger "IncreaseSettlementHealth" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Settlement settlement, float percentage)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
IncreaseSettlementHealthAction.Apply(settlement, 100);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)
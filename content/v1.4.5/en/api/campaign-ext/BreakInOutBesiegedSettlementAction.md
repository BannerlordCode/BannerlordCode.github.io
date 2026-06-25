---
title: "BreakInOutBesiegedSettlementAction"
description: "Auto-generated campaign action reference for BreakInOutBesiegedSettlementAction."
---
# BreakInOutBesiegedSettlementAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/BreakInOutBesiegedSettlementAction.cs`

BreakInOutBesiegedSettlementAction is a set of static methods that trigger "BreakInOutBesiegedSettlement" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyBreakIn

```csharp
public static void ApplyBreakIn(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)
```

**Purpose:** break in.

### ApplyBreakOut

```csharp
public static void ApplyBreakOut(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)
```

**Purpose:** break out.

## Usage Example

```csharp
// Trigger this action from a mod
BreakInOutBesiegedSettlementAction.ApplyBreakIn(casualties, armyCasualtiesCount, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)
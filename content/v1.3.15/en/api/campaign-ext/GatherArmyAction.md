---
title: "GatherArmyAction"
description: "Auto-generated campaign action reference for GatherArmyAction."
---
# GatherArmyAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GatherArmyAction.cs`

GatherArmyAction is a set of static methods that trigger "GatherArmy" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(MobileParty leaderParty, IMapPoint gatheringPoint)
```

**Purpose:** **Purpose:** Applies the this instance's effect to its target.

## Usage Example

```csharp
// Trigger this action from a mod
GatherArmyAction.Apply(leaderParty, gatheringPoint);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
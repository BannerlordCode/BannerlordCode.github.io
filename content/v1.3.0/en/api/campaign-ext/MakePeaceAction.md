---
title: "MakePeaceAction"
description: "Auto-generated campaign action reference for MakePeaceAction."
---
# MakePeaceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/MakePeaceAction.cs`

MakePeaceAction is a set of static methods that trigger "MakePeace" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyPardonPlayer

```csharp
public static void ApplyPardonPlayer(IFaction faction)
```

**Purpose:** **Purpose:** Applies the effect of pardon player to the this instance.

### Apply

```csharp
public static void Apply(IFaction faction1, IFaction faction2, int dailyTributeFrom1To2 = 0)
```

**Purpose:** **Purpose:** Applies the this instance's effect to its target.

### ApplyByKingdomDecision

```csharp
public static void ApplyByKingdomDecision(IFaction faction1, IFaction faction2, int dailyTributeFrom1To2 = 0)
```

**Purpose:** **Purpose:** Applies the effect of by kingdom decision to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
MakePeaceAction.ApplyPardonPlayer(faction);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
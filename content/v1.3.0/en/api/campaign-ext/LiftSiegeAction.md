---
title: "LiftSiegeAction"
description: "Auto-generated campaign action reference for LiftSiegeAction."
---
# LiftSiegeAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/LiftSiegeAction.cs`

LiftSiegeAction is a set of static methods that trigger "LiftSiege" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### GetGameAction

```csharp
public static void GetGameAction(MobileParty side1Party)
```

**Purpose:** Reads and returns the game action value held by the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
LiftSiegeAction.GetGameAction(side1Party);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
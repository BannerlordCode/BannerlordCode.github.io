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

### Apply

```csharp
public static void Apply(IFaction faction1, IFaction faction2)
```

**Purpose:** .

### ApplyByKingdomDecision

```csharp
public static void ApplyByKingdomDecision(IFaction faction1, IFaction faction2, int dailyTributeFrom1To2, int dailyTributeDuration)
```

**Purpose:** kingdom decision.

## Usage Example

```csharp
// Trigger this action from a mod
MakePeaceAction.Apply(faction1, faction2);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
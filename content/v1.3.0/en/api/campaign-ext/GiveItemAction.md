---
title: "GiveItemAction"
description: "Auto-generated campaign action reference for GiveItemAction."
---
# GiveItemAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GiveItemAction.cs`

GiveItemAction is a set of static methods that trigger "GiveItem" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyForHeroes

```csharp
public static void ApplyForHeroes(Hero giver, Hero receiver, in ItemRosterElement itemRosterElement)
```

**Purpose:** Applies the effect of for heroes to the this instance.

### ApplyForParties

```csharp
public static void ApplyForParties(PartyBase giverParty, PartyBase receiverParty, in ItemRosterElement itemRosterElement)
```

**Purpose:** Applies the effect of for parties to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
GiveItemAction.ApplyForHeroes(giver, receiver, itemRosterElement);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
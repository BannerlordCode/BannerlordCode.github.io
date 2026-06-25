---
title: "AddHeroToPartyAction"
description: "Auto-generated campaign action reference for AddHeroToPartyAction."
---
# AddHeroToPartyAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/AddHeroToPartyAction.cs`

AddHeroToPartyAction is a set of static methods that trigger "AddHeroToParty" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero hero, MobileParty party, bool showNotification = true)
```

**Purpose:** **Purpose:** Applies the this instance's effect to its target.

## Usage Example

```csharp
// Trigger this action from a mod
AddHeroToPartyAction.Apply(hero, party, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
---
title: "ChangeCrimeRatingAction"
description: "Auto-generated campaign action reference for ChangeCrimeRatingAction."
---
# ChangeCrimeRatingAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeCrimeRatingAction.cs`

ChangeCrimeRatingAction is a set of static methods that trigger "ChangeCrimeRating" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(IFaction faction, float deltaCrimeRating, bool showNotification = true)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
ChangeCrimeRatingAction.Apply(faction, 100, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
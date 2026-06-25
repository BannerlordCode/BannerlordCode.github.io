---
title: "MarriageAction"
description: "Auto-generated campaign action reference for MarriageAction."
---
# MarriageAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MarriageAction.cs`

MarriageAction is a set of static methods that trigger "Marriage" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero firstHero, Hero secondHero, bool showNotification = true)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
MarriageAction.Apply(firstHero, secondHero, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
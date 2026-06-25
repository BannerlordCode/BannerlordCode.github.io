---
title: "DisableHeroAction"
description: "Auto-generated campaign action reference for DisableHeroAction."
---
# DisableHeroAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DisableHeroAction.cs`

DisableHeroAction is a set of static methods that trigger "DisableHero" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero hero)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
DisableHeroAction.Apply(hero);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)
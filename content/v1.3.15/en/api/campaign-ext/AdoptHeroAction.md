---
title: "AdoptHeroAction"
description: "Auto-generated campaign action reference for AdoptHeroAction."
---
# AdoptHeroAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/AdoptHeroAction.cs`

AdoptHeroAction is a set of static methods that trigger "AdoptHero" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero adoptedHero)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
AdoptHeroAction.Apply(adoptedHero);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)
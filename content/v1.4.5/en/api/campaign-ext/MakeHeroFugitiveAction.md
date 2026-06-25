---
title: "MakeHeroFugitiveAction"
description: "Auto-generated campaign action reference for MakeHeroFugitiveAction."
---
# MakeHeroFugitiveAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MakeHeroFugitiveAction.cs`

MakeHeroFugitiveAction is a set of static methods that trigger "MakeHeroFugitive" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero fugitive, bool showNotification = false)
```

**Purpose:** Applies the this instance's effect to its target.

## Usage Example

```csharp
// Trigger this action from a mod
MakeHeroFugitiveAction.Apply(fugitive, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
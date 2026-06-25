---
title: "GainRenownAction"
description: "Auto-generated campaign action reference for GainRenownAction."
---
# GainRenownAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GainRenownAction.cs`

GainRenownAction is a set of static methods that trigger "GainRenown" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero hero, float renownValue, bool doNotNotify = false)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
GainRenownAction.Apply(hero, 100, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
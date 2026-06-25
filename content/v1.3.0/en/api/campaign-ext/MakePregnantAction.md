---
title: "MakePregnantAction"
description: "Auto-generated campaign action reference for MakePregnantAction."
---
# MakePregnantAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/MakePregnantAction.cs`

MakePregnantAction is a set of static methods that trigger "MakePregnant" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero mother)
```

**Purpose:** **Purpose:** Applies the this instance's effect to its target.

## Usage Example

```csharp
// Trigger this action from a mod
MakePregnantAction.Apply(mother);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
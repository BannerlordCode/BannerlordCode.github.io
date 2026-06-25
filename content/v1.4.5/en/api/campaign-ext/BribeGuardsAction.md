---
title: "BribeGuardsAction"
description: "Auto-generated campaign action reference for BribeGuardsAction."
---
# BribeGuardsAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/BribeGuardsAction.cs`

BribeGuardsAction is a set of static methods that trigger "BribeGuards" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Settlement settlement, int gold)
```

**Purpose:** **Purpose:** Applies the this instance's effect to its target.

## Usage Example

```csharp
// Trigger this action from a mod
BribeGuardsAction.Apply(settlement, 100);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
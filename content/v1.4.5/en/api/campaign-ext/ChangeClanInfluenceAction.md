---
title: "ChangeClanInfluenceAction"
description: "Auto-generated campaign action reference for ChangeClanInfluenceAction."
---
# ChangeClanInfluenceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeClanInfluenceAction.cs`

ChangeClanInfluenceAction is a set of static methods that trigger "ChangeClanInfluence" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Clan clan, float amount)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
ChangeClanInfluenceAction.Apply(clan, 100);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)
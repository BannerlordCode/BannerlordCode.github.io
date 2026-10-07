---
title: "ChangeCrimeRatingAction"
description: "Auto-generated campaign action reference for ChangeCrimeRatingAction."
---
# ChangeCrimeRatingAction

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeCrimeRatingAction.cs`

ChangeCrimeRatingAction is a set of static methods that trigger "ChangeCrimeRating" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(IFaction faction, float deltaCrimeRating, bool showNotification = true)
```

**Purpose:** Applies the this instance's effect to its target.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeCrimeRatingAction.Apply(faction, 100, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
---
title: "DestroyKingdomAction"
description: "Auto-generated campaign action reference for DestroyKingdomAction."
---
# DestroyKingdomAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DestroyKingdomAction.cs`

DestroyKingdomAction is a set of static methods that trigger "DestroyKingdom" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Kingdom destroyedKingdom)
```

**Purpose:** .

### ApplyByKingdomLeaderDeath

```csharp
public static void ApplyByKingdomLeaderDeath(Kingdom destroyedKingdom)
```

**Purpose:** kingdom leader death.

## Usage Example

```csharp
// Trigger this action from a mod
DestroyKingdomAction.Apply(destroyedKingdom);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
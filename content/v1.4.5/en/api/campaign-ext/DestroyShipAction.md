---
title: "DestroyShipAction"
description: "Auto-generated campaign action reference for DestroyShipAction."
---
# DestroyShipAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DestroyShipAction.cs`

DestroyShipAction is a set of static methods that trigger "DestroyShip" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Ship ship)
```

**Purpose:** .

### ApplyByDiscard

```csharp
public static void ApplyByDiscard(Ship ship)
```

**Purpose:** discard.

## Usage Example

```csharp
// Trigger this action from a mod
DestroyShipAction.Apply(ship);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)
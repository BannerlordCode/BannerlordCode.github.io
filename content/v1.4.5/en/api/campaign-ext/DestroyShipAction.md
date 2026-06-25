---
title: "DestroyShipAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DestroyShipAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DestroyShipAction

## Mental Model

Treat `DestroyShipAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DestroyShipAction.cs`

DestroyShipAction is a set of static methods that trigger "DestroyShip" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Ship ship)
```

**Purpose:** execute this entry point.

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

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)
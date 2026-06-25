---
title: "RemoveCompanionAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RemoveCompanionAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RemoveCompanionAction

## Mental Model

Treat `RemoveCompanionAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs`

RemoveCompanionAction is a set of static methods that trigger "RemoveCompanion" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByFire

```csharp
public static void ApplyByFire(Clan clan, Hero companion)
```

**Purpose:** fire.

### ApplyAfterQuest

```csharp
public static void ApplyAfterQuest(Clan clan, Hero companion)
```

**Purpose:** after quest.

### ApplyByDeath

```csharp
public static void ApplyByDeath(Clan clan, Hero companion)
```

**Purpose:** death.

### ApplyByByTurningToLord

```csharp
public static void ApplyByByTurningToLord(Clan clan, Hero companion)
```

**Purpose:** by turning to lord.

## Usage Example

```csharp
// Trigger this action from a mod
RemoveCompanionAction.ApplyByFire(clan, companion);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)
---
title: "BeHostileAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BeHostileAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BeHostileAction

## Mental Model

Treat `BeHostileAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/BeHostileAction.cs`

BeHostileAction is a set of static methods that trigger "BeHostile" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyHostileAction

```csharp
public static void ApplyHostileAction(PartyBase attackerParty, PartyBase defenderParty, float value)
```

**Purpose:** hostile action.

### ApplyMinorCoercionHostileAction

```csharp
public static void ApplyMinorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**Purpose:** minor coercion hostile action.

### ApplyMajorCoercionHostileAction

```csharp
public static void ApplyMajorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**Purpose:** major coercion hostile action.

### ApplyEncounterHostileAction

```csharp
public static void ApplyEncounterHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**Purpose:** encounter hostile action.

## Usage Example

```csharp
// Trigger this action from a mod
BeHostileAction.ApplyHostileAction(attackerParty, defenderParty, 100);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)
---
title: "ChangeVillageStateAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeVillageStateAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeVillageStateAction

## Mental Model

Treat `ChangeVillageStateAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeVillageStateAction.cs`

ChangeVillageStateAction is a set of static methods that trigger "ChangeVillageState" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyBySettingToNormal

```csharp
public static void ApplyBySettingToNormal(Settlement settlement)
```

**Purpose:** setting to normal.

### ApplyBySettingToBeingRaided

```csharp
public static void ApplyBySettingToBeingRaided(Settlement settlement, MobileParty raider)
```

**Purpose:** setting to being raided.

### ApplyBySettingToBeingForcedForSupplies

```csharp
public static void ApplyBySettingToBeingForcedForSupplies(Settlement settlement, MobileParty raider)
```

**Purpose:** setting to being forced for supplies.

### ApplyBySettingToBeingForcedForVolunteers

```csharp
public static void ApplyBySettingToBeingForcedForVolunteers(Settlement settlement, MobileParty raider)
```

**Purpose:** setting to being forced for volunteers.

### ApplyBySettingToLooted

```csharp
public static void ApplyBySettingToLooted(Settlement settlement, MobileParty raider)
```

**Purpose:** setting to looted.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeVillageStateAction.ApplyBySettingToNormal(settlement);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)
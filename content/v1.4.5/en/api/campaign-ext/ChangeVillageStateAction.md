---
title: "ChangeVillageStateAction"
description: "Auto-generated campaign action reference for ChangeVillageStateAction."
---
# ChangeVillageStateAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeVillageStateAction.cs`

ChangeVillageStateAction is a set of static methods that trigger "ChangeVillageState" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyBySettingToNormal

```csharp
public static void ApplyBySettingToNormal(Settlement settlement)
```

**Purpose:** Applies the effect of by setting to normal to the this instance.

### ApplyBySettingToBeingRaided

```csharp
public static void ApplyBySettingToBeingRaided(Settlement settlement, MobileParty raider)
```

**Purpose:** Applies the effect of by setting to being raided to the this instance.

### ApplyBySettingToBeingForcedForSupplies

```csharp
public static void ApplyBySettingToBeingForcedForSupplies(Settlement settlement, MobileParty raider)
```

**Purpose:** Applies the effect of by setting to being forced for supplies to the this instance.

### ApplyBySettingToBeingForcedForVolunteers

```csharp
public static void ApplyBySettingToBeingForcedForVolunteers(Settlement settlement, MobileParty raider)
```

**Purpose:** Applies the effect of by setting to being forced for volunteers to the this instance.

### ApplyBySettingToLooted

```csharp
public static void ApplyBySettingToLooted(Settlement settlement, MobileParty raider)
```

**Purpose:** Applies the effect of by setting to looted to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeVillageStateAction.ApplyBySettingToNormal(settlement);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)
---
title: "DefaultEncounterGameMenuModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultEncounterGameMenuModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterGameMenuModel : EncounterGameMenuModel`
**Base:** `EncounterGameMenuModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs`

## Overview

`DefaultEncounterGameMenuModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEncounterGameMenuModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEncounterMenu
`public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`

**Purpose:** Gets the current value of `encounter menu`.

### GetRaidCompleteMenu
`public override string GetRaidCompleteMenu()`

**Purpose:** Gets the current value of `raid complete menu`.

### GetNewPartyJoinMenu
`public override string GetNewPartyJoinMenu(MobileParty newParty)`

**Purpose:** Gets the current value of `new party join menu`.

### GetGenericStateMenu
`public override string GetGenericStateMenu()`

**Purpose:** Gets the current value of `generic state menu`.

### IsPlunderMenu
`public override bool IsPlunderMenu(string gameMenuId)`

**Purpose:** Handles logic related to `is plunder menu`.

## Usage Example

```csharp
DefaultEncounterGameMenuModel example = DefaultEncounterGameMenuModel.Value;
```

## See Also

- [Complete Class Catalog](../catalog)
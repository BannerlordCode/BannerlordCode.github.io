<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncounterGameMenuModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterGameMenuModel : MBGameModel<EncounterGameMenuModel>`
**Base:** `MBGameModel<EncounterGameMenuModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs`

## Overview

`EncounterGameMenuModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `EncounterGameMenuModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEncounterMenu
`public abstract string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`

**Purpose:** Gets the current value of `encounter menu`.

### GetRaidCompleteMenu
`public abstract string GetRaidCompleteMenu()`

**Purpose:** Gets the current value of `raid complete menu`.

### GetNewPartyJoinMenu
`public abstract string GetNewPartyJoinMenu(MobileParty newParty)`

**Purpose:** Gets the current value of `new party join menu`.

### GetGenericStateMenu
`public abstract string GetGenericStateMenu()`

**Purpose:** Gets the current value of `generic state menu`.

### IsPlunderMenu
`public abstract bool IsPlunderMenu(string menuId)`

**Purpose:** Handles logic related to `is plunder menu`.

## Usage Example

```csharp
var implementation = new CustomEncounterGameMenuModel();
```

## See Also

- [Complete Class Catalog](../catalog)
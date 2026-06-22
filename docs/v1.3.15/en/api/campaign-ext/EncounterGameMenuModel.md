<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncounterGameMenuModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterGameMenuModel : MBGameModel<EncounterGameMenuModel>`
**Base:** `MBGameModel<EncounterGameMenuModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs`

## Overview

`EncounterGameMenuModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<EncounterGameMenuModel>(new MyEncounterGameMenuModel())` to change how it computes.

## Key Methods

### GetEncounterMenu
```csharp
public abstract string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)
```

### GetRaidCompleteMenu
```csharp
public abstract string GetRaidCompleteMenu()
```

### GetNewPartyJoinMenu
```csharp
public abstract string GetNewPartyJoinMenu(MobileParty newParty)
```

### GetGenericStateMenu
```csharp
public abstract string GetGenericStateMenu()
```

### IsPlunderMenu
```csharp
public abstract bool IsPlunderMenu(string menuId)
```

## Usage Example

```csharp
// Typical usage of EncounterGameMenuModel (Model)
Game.Current.ReplaceModel<EncounterGameMenuModel>(new MyEncounterGameMenuModel());
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultEncounterGameMenuModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterGameMenuModel : EncounterGameMenuModel`
**Base:** `EncounterGameMenuModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs`

## Overview

`DefaultEncounterGameMenuModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultEncounterGameMenuModel>(new MyDefaultEncounterGameMenuModel())` to change how it computes.

## Key Methods

### GetEncounterMenu
```csharp
public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)
```

### GetRaidCompleteMenu
```csharp
public override string GetRaidCompleteMenu()
```

### GetNewPartyJoinMenu
```csharp
public override string GetNewPartyJoinMenu(MobileParty newParty)
```

### GetGenericStateMenu
```csharp
public override string GetGenericStateMenu()
```

### IsPlunderMenu
```csharp
public override bool IsPlunderMenu(string gameMenuId)
```

## Usage Example

```csharp
// Typical usage of DefaultEncounterGameMenuModel (Model)
Game.Current.ReplaceModel<DefaultEncounterGameMenuModel>(new MyDefaultEncounterGameMenuModel());
```

## See Also

- [Complete Class Catalog](../catalog)
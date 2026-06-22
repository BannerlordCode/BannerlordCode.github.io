<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyMoraleModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyMoraleModel : MBGameModel<MobilePartyMoraleModel>`
**Base:** `MBGameModel<MobilePartyMoraleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyMoraleModel.cs`

## Overview

`MobilePartyMoraleModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MobilePartyMoraleModel>(new MyMobilePartyMoraleModel())` to change how it computes.

## Key Methods

### CalculateMoraleChange
```csharp
public abstract float CalculateMoraleChange(MobileParty party)
```

### GetMoraleTooltipText
```csharp
public abstract TextObject GetMoraleTooltipText(MobileParty party)
```

## Usage Example

```csharp
// Typical usage of MobilePartyMoraleModel (Model)
Game.Current.ReplaceModel<MobilePartyMoraleModel>(new MyMobilePartyMoraleModel());
```

## See Also

- [Complete Class Catalog](../catalog)
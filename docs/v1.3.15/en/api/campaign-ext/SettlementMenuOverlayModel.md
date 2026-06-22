<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementMenuOverlayModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementMenuOverlayModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementMenuOverlayModel : MBGameModel<SettlementMenuOverlayModel>`
**Base:** `MBGameModel<SettlementMenuOverlayModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMenuOverlayModel.cs`

## Overview

`SettlementMenuOverlayModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementMenuOverlayModel>(new MySettlementMenuOverlayModel())` to change how it computes.

## Key Methods

### GetOverlayHeroes
```csharp
public abstract Dictionary<Hero, bool> GetOverlayHeroes()
```

## Usage Example

```csharp
// Typical usage of SettlementMenuOverlayModel (Model)
Game.Current.ReplaceModel<SettlementMenuOverlayModel>(new MySettlementMenuOverlayModel());
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultKingdomCreationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultKingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomCreationModel : KingdomCreationModel`
**Base:** `KingdomCreationModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultKingdomCreationModel.cs`

## Overview

`DefaultKingdomCreationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultKingdomCreationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsPlayerKingdomCreationPossible
`public override bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)`

**Purpose:** Handles logic related to `is player kingdom creation possible`.

### IsPlayerKingdomAbdicationPossible
`public override bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)`

**Purpose:** Handles logic related to `is player kingdom abdication possible`.

### GetAvailablePlayerKingdomCultures
`public override IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()`

**Purpose:** Gets the current value of `available player kingdom cultures`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultKingdomCreationModel>(new MyDefaultKingdomCreationModel());
```

## See Also

- [Complete Class Catalog](../catalog)
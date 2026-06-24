<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMinorFactionsModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMinorFactionsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMinorFactionsModel : MinorFactionsModel`
**Base:** `MinorFactionsModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMinorFactionsModel.cs`

## Overview

`DefaultMinorFactionsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMinorFactionsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMercenaryAwardFactorToJoinKingdom
`public override int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)`

**Purpose:** Gets the current value of `mercenary award factor to join kingdom`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMinorFactionsModel>(new MyDefaultMinorFactionsModel());
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultGenericXpModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultGenericXpModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultGenericXpModel : GenericXpModel`
**Base:** `GenericXpModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultGenericXpModel.cs`

## Overview

`DefaultGenericXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultGenericXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetXpMultiplier
`public override float GetXpMultiplier(Hero hero)`

**Purpose:** Gets the current value of `xp multiplier`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultGenericXpModel>(new MyDefaultGenericXpModel());
```

## See Also

- [Complete Class Catalog](../catalog)
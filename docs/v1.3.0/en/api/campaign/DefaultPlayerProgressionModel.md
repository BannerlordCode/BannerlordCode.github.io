<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPlayerProgressionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPlayerProgressionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPlayerProgressionModel : PlayerProgressionModel`
**Base:** `PlayerProgressionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPlayerProgressionModel.cs`

## Overview

`DefaultPlayerProgressionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPlayerProgressionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPlayerProgress
`public override float GetPlayerProgress()`

**Purpose:** Gets the current value of `player progress`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPlayerProgressionModel>(new MyDefaultPlayerProgressionModel());
```

## See Also

- [Complete Class Catalog](../catalog)
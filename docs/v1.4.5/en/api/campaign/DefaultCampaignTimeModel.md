<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCampaignTimeModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultCampaignTimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignTimeModel : CampaignTimeModel`
**Base:** `CampaignTimeModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCampaignTimeModel.cs`

## Overview

`DefaultCampaignTimeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCampaignTimeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DaysInWeek` | `public override int DaysInWeek { get; }` |
| `WeeksInSeason` | `public override int WeeksInSeason { get; }` |

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCampaignTimeModel>(new MyDefaultCampaignTimeModel());
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OverrideEncyclopediaModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OverrideEncyclopediaModel

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class OverrideEncyclopediaModel : EncyclopediaModelBase`
**Base:** `EncyclopediaModelBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia/OverrideEncyclopediaModel.cs`

## Overview

`OverrideEncyclopediaModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `OverrideEncyclopediaModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Game.Current.ReplaceModel<OverrideEncyclopediaModel>(new MyOverrideEncyclopediaModel());
```

## See Also

- [Complete Class Catalog](../catalog)
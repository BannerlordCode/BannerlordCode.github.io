<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OverrideEncyclopediaModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OverrideEncyclopediaModel

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class OverrideEncyclopediaModel : EncyclopediaModelBase`
**Base:** `EncyclopediaModelBase`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/OverrideEncyclopediaModel.cs`

## Overview

`OverrideEncyclopediaModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<OverrideEncyclopediaModel>(new MyOverrideEncyclopediaModel())` to change how it computes.

## Usage Example

```csharp
// Typical usage of OverrideEncyclopediaModel (Model)
Game.Current.ReplaceModel<OverrideEncyclopediaModel>(new MyOverrideEncyclopediaModel());
```

## See Also

- [Complete Class Catalog](../catalog)
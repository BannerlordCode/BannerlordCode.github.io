<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaViewModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaViewModel

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaViewModel : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaViewModel.cs`

## Overview

`EncyclopediaViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and a Gauntlet UI. Bind properties with `[DataSourceProperty]`, override OnPropertyChanged to react.

## Key Properties

| Name | Signature |
|------|-----------|
| `PageTargetType` | `public Type PageTargetType { get; }` |

## Usage Example

```csharp
// Typical usage of EncyclopediaViewModel (ViewModel)
// 绑定一个 EncyclopediaViewModel 到 Gauntlet UI
var vm = new EncyclopediaViewModel();
movie.SetViewModel(vm);;
```

## See Also

- [Complete Class Catalog](../catalog)
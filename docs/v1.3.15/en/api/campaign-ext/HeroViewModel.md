<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroViewModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroViewModel

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroViewModel : CharacterViewModel`
**Base:** `CharacterViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs`

## Overview

`HeroViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and a Gauntlet UI. Bind properties with `[DataSourceProperty]`, override OnPropertyChanged to react.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDead` | `public bool IsDead { get; set; }` |

## Key Methods

### SetEquipment
```csharp
public override void SetEquipment(Equipment equipment)
```

### FillFrom
```csharp
public void FillFrom(Hero hero, int seed = -1, bool useCivilian = false, bool useCharacteristicIdleAction = false)
```

### OnFinalize
```csharp
public override void OnFinalize()
```

## Usage Example

```csharp
// Typical usage of HeroViewModel (ViewModel)
// 绑定一个 HeroViewModel 到 Gauntlet UI
var vm = new HeroViewModel();
movie.SetViewModel(vm);;
```

## See Also

- [Complete Class Catalog](../catalog)
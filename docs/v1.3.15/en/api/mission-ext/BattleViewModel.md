<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleViewModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleViewModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleViewModel`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BattleViewModel.cs`

## Overview

`BattleViewModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BattleViewModel>(new MyBattleViewModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MyData` | `public ObservableCollection<TroopMissionInfo> MyData { get; set; }` |

## Usage Example

```csharp
// Typical usage of BattleViewModel (Model)
Game.Current.ReplaceModel<BattleViewModel>(new MyBattleViewModel());
```

## See Also

- [Complete Class Catalog](../catalog)
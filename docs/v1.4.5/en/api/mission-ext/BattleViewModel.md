<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleViewModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleViewModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleViewModel`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleViewModel.cs`

## Overview

`BattleViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `BattleViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MyData` | `public ObservableCollection<TroopMissionInfo> MyData { get; set; }` |

## Usage Example

```csharp
var vm = new BattleViewModel();
movie.SetViewModel(vm);
```

## See Also

- [Complete Class Catalog](../catalog)
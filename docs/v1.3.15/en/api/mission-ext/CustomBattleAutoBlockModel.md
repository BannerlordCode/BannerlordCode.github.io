<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleAutoBlockModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleAutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAutoBlockModel : AutoBlockModel`
**Base:** `AutoBlockModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAutoBlockModel.cs`

## Overview

`CustomBattleAutoBlockModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CustomBattleAutoBlockModel>(new MyCustomBattleAutoBlockModel())` to change how it computes.

## Key Methods

### GetBlockDirection
```csharp
public override Agent.UsageDirection GetBlockDirection(Mission mission)
```

## Usage Example

```csharp
// Typical usage of CustomBattleAutoBlockModel (Model)
Game.Current.ReplaceModel<CustomBattleAutoBlockModel>(new MyCustomBattleAutoBlockModel());
```

## See Also

- [Complete Class Catalog](../catalog)
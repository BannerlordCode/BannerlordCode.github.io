<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AutoBlockModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AutoBlockModel : MBGameModel<AutoBlockModel>`
**Base:** `MBGameModel<AutoBlockModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AutoBlockModel.cs`

## Overview

`AutoBlockModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<AutoBlockModel>(new MyAutoBlockModel())` to change how it computes.

## Key Methods

### GetBlockDirection
```csharp
public abstract Agent.UsageDirection GetBlockDirection(Mission mission)
```

## Usage Example

```csharp
// Typical usage of AutoBlockModel (Model)
Game.Current.ReplaceModel<AutoBlockModel>(new MyAutoBlockModel());
```

## See Also

- [Complete Class Catalog](../catalog)
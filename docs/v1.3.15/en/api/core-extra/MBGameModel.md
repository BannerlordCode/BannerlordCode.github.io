<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBGameModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBGameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class MBGameModel<T> : GameModel where T : GameModel`
**Base:** `GameModel where T : GameModel`
**File:** `TaleWorlds.Core/MBGameModel.cs`

## Overview

`MBGameModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MBGameModel>(new MyMBGameModel())` to change how it computes.

## Key Methods

### Initialize
```csharp
public void Initialize(T baseModel)
```

## Usage Example

```csharp
// Typical usage of MBGameModel (Model)
Game.Current.ReplaceModel<MBGameModel>(new MyMBGameModel());
```

## See Also

- [Complete Class Catalog](../catalog)
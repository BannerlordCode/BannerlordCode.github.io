---
title: "CustomBattleAutoBlockModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleAutoBlockModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleAutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAutoBlockModel : AutoBlockModel`
**Base:** `AutoBlockModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAutoBlockModel.cs`

## Overview

`CustomBattleAutoBlockModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CustomBattleAutoBlockModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBlockDirection
`public override Agent.UsageDirection GetBlockDirection(Mission mission)`

**Purpose:** Gets the current value of `block direction`.

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleAutoBlockModel>(new MyCustomBattleAutoBlockModel());
```

## See Also

- [Complete Class Catalog](../catalog)
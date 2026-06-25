---
title: "AutoBlockModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AutoBlockModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AutoBlockModel : MBGameModel<AutoBlockModel>`
**Base:** `MBGameModel<AutoBlockModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/AutoBlockModel.cs`

## Overview

`AutoBlockModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `AutoBlockModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBlockDirection
`public abstract Agent.UsageDirection GetBlockDirection(Mission mission)`

**Purpose:** Gets the current value of `block direction`.

## Usage Example

```csharp
var implementation = new CustomAutoBlockModel();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "AutoBlockModel"
description: "Auto-generated class reference for AutoBlockModel."
---
# AutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AutoBlockModel : MBGameModel<AutoBlockModel>`
**Base:** `MBGameModel<AutoBlockModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/AutoBlockModel.cs`

## Overview

`AutoBlockModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `AutoBlockModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBlockDirection
`public abstract Agent.UsageDirection GetBlockDirection(Mission mission)`

**Purpose:** Reads and returns the `block direction` value held by the current object.

```csharp
// Obtain an instance of AutoBlockModel from the subsystem API first
AutoBlockModel autoBlockModel = ...;
var result = autoBlockModel.GetBlockDirection(mission);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AutoBlockModel instance = ...;
```

## See Also

- [Area Index](../)
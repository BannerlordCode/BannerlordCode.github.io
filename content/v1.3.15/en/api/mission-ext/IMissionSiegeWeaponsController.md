---
title: "IMissionSiegeWeaponsController"
description: "Auto-generated class reference for IMissionSiegeWeaponsController."
---
# IMissionSiegeWeaponsController

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IMissionSiegeWeaponsController`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs`

## Overview

`IMissionSiegeWeaponsController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `IMissionSiegeWeaponsController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMissionSiegeWeaponsController service = ...;
```

## See Also

- [Area Index](../)
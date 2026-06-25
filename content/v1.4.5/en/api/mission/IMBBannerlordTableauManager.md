---
title: "IMBBannerlordTableauManager"
description: "Auto-generated class reference for IMBBannerlordTableauManager."
---
# IMBBannerlordTableauManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal interface IMBBannerlordTableauManager`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMBBannerlordTableauManager.cs`

## Overview

`IMBBannerlordTableauManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IMBBannerlordTableauManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMBBannerlordTableauManager service = ...;
```

## See Also

- [Area Index](../)
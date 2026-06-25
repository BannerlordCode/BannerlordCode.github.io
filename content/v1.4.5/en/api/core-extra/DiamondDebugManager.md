---
title: "DiamondDebugManager"
description: "Auto-generated class reference for DiamondDebugManager."
---
# DiamondDebugManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class DiamondDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/DiamondDebugManager.cs`

## Overview

`DiamondDebugManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `DiamondDebugManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetLogLevel
`public int GetLogLevel()`

**Purpose:** Reads and returns the log level value held by the this instance.

```csharp
// Obtain an instance of DiamondDebugManager from the subsystem API first
DiamondDebugManager diamondDebugManager = ...;
var result = diamondDebugManager.GetLogLevel();
```

## Usage Example

```csharp
var manager = DiamondDebugManager.Current;
```

## See Also

- [Area Index](../)
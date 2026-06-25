---
title: "ToolDebugManager"
description: "Auto-generated class reference for ToolDebugManager."
---
# ToolDebugManager

**Namespace:** TaleWorlds.MountAndBlade.SteamWorkshop
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class ToolDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.MountAndBlade.SteamWorkshop/ToolDebugManager.cs`

## Overview

`ToolDebugManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ToolDebugManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var manager = ToolDebugManager.Current;
```

## See Also

- [Area Index](../)
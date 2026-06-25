---
title: "IDebugManager"
description: "Auto-generated class reference for IDebugManager."
---
# IDebugManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public interface IDebugManager`
**Base:** none
**File:** `TaleWorlds.Library/IDebugManager.cs`

## Overview

`IDebugManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IDebugManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIDebugManager service = ...;
```

## See Also

- [Area Index](../)
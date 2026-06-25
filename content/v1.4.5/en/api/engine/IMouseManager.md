---
title: "IMouseManager"
description: "Auto-generated class reference for IMouseManager."
---
# IMouseManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface IMouseManager`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/IMouseManager.cs`

## Overview

`IMouseManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IMouseManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMouseManager service = ...;
```

## See Also

- [Area Index](../)
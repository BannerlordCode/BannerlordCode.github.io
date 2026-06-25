---
title: "ILoadingWindowManager"
description: "Auto-generated class reference for ILoadingWindowManager."
---
# ILoadingWindowManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public interface ILoadingWindowManager`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ILoadingWindowManager.cs`

## Overview

`ILoadingWindowManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ILoadingWindowManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IILoadingWindowManager service = ...;
```

## See Also

- [Area Index](../)
---
title: "ISoundManager"
description: "Auto-generated class reference for ISoundManager."
---
# ISoundManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface ISoundManager`
**Base:** none
**File:** `TaleWorlds.Engine/ISoundManager.cs`

## Overview

`ISoundManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ISoundManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IISoundManager service = ...;
```

## See Also

- [Area Index](../)
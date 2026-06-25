---
title: "ITableauView"
description: "Auto-generated class reference for ITableauView."
---
# ITableauView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface ITableauView`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ITableauView.cs`

## Overview

`ITableauView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `ITableauView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IITableauView service = ...;
```

## See Also

- [Area Index](../)
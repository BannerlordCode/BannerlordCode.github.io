---
title: "IView"
description: "Auto-generated class reference for IView."
---
# IView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface IView`
**Base:** none
**File:** `TaleWorlds.Engine/IView.cs`

## Overview

`IView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `IView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIView service = ...;
```

## See Also

- [Area Index](../)
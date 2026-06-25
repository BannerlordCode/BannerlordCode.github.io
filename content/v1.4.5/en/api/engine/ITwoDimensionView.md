---
title: "ITwoDimensionView"
description: "Auto-generated class reference for ITwoDimensionView."
---
# ITwoDimensionView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface ITwoDimensionView`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ITwoDimensionView.cs`

## Overview

`ITwoDimensionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `ITwoDimensionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IITwoDimensionView service = ...;
```

## See Also

- [Area Index](../)
---
title: "ViewCreatorManager"
description: "Auto-generated class reference for ViewCreatorManager."
---
# ViewCreatorManager

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ViewCreatorManager`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/ViewCreatorManager.cs`

## Overview

`ViewCreatorManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ViewCreatorManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var manager = ViewCreatorManager.Current;
```

## See Also

- [Area Index](../)
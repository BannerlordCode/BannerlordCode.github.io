---
title: "ISiegeDeploymentView"
description: "Auto-generated class reference for ISiegeDeploymentView."
---
# ISiegeDeploymentView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface ISiegeDeploymentView`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ISiegeDeploymentView.cs`

## Overview

`ISiegeDeploymentView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `ISiegeDeploymentView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IISiegeDeploymentView service = ...;
```

## See Also

- [Area Index](../)
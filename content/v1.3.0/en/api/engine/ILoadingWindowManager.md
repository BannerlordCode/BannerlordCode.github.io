---
title: "ILoadingWindowManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILoadingWindowManager`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILoadingWindowManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.Engine/ILoadingWindowManager.cs`

## Overview

`ILoadingWindowManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ILoadingWindowManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ILoadingWindowManager implementation = GetLoadingWindowManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
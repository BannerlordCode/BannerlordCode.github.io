<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IDebugManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IDebugManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.Library/IDebugManager.cs`

## Overview

`IDebugManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IDebugManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IDebugManager implementation = GetDebugManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
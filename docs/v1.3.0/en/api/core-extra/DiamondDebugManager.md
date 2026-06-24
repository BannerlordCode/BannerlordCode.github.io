<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DiamondDebugManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DiamondDebugManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class DiamondDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.Library/DiamondDebugManager.cs`

## Overview

`DiamondDebugManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `DiamondDebugManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetLogLevel
`public int GetLogLevel()`

**Purpose:** Gets the current value of `log level`.

## Usage Example

```csharp
var manager = DiamondDebugManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
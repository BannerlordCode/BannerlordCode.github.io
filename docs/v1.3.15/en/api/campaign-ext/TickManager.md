<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TickManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TickManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class TickManager`
**Base:** none
**File:** `TaleWorlds.Network/TickManager.cs`

## Overview

`TickManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `TickManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### TickDelegate
`public delegate void TickDelegate()`

**Purpose:** Handles logic related to `tick delegate`.

## Usage Example

```csharp
var manager = TickManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
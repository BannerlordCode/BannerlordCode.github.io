<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleThreadedSynchronizationContextManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SingleThreadedSynchronizationContextManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class SingleThreadedSynchronizationContextManager`
**Base:** none
**File:** `TaleWorlds.Library/SingleThreadedSynchronizationContextManager.cs`

## Overview

`SingleThreadedSynchronizationContextManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SingleThreadedSynchronizationContextManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Tick
`public static void Tick()`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var manager = SingleThreadedSynchronizationContextManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
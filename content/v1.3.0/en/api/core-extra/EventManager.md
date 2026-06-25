---
title: "EventManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EventManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EventManager

**Namespace:** TaleWorlds.Library.EventSystem
**Module:** TaleWorlds.Library
**Type:** `public class EventManager`
**Base:** none
**File:** `TaleWorlds.Library/EventSystem/EventManager.cs`

## Overview

`EventManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `EventManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### GetCloneOfEventDictionary
`public IDictionary<Type, object> GetCloneOfEventDictionary()`

**Purpose:** Gets the current value of `clone of event dictionary`.

## Usage Example

```csharp
var manager = EventManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "EventManager"
description: "Auto-generated class reference for EventManager."
---
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

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of EventManager from the subsystem API first
EventManager eventManager = ...;
eventManager.Clear();
```

### GetCloneOfEventDictionary
`public IDictionary<Type, object> GetCloneOfEventDictionary()`

**Purpose:** **Purpose:** Reads and returns the clone of event dictionary value held by the this instance.

```csharp
// Obtain an instance of EventManager from the subsystem API first
EventManager eventManager = ...;
var result = eventManager.GetCloneOfEventDictionary();
```

## Usage Example

```csharp
var manager = EventManager.Current;
```

## See Also

- [Area Index](../)
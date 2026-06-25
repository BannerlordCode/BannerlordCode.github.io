---
title: "GameHandler"
description: "Auto-generated class reference for GameHandler."
---
# GameHandler

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameHandler : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameHandler.cs`

## Overview

`GameHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `GameHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBeforeSave
`public abstract void OnBeforeSave()`

**Purpose:** Invoked when the before save event is raised.

```csharp
// Obtain an instance of GameHandler from the subsystem API first
GameHandler gameHandler = ...;
gameHandler.OnBeforeSave();
```

### OnAfterSave
`public abstract void OnAfterSave()`

**Purpose:** Invoked when the after save event is raised.

```csharp
// Obtain an instance of GameHandler from the subsystem API first
GameHandler gameHandler = ...;
gameHandler.OnAfterSave();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameHandler instance = ...;
```

## See Also

- [Area Index](../)
---
title: "HotKeyManager"
description: "Auto-generated class reference for HotKeyManager."
---
# HotKeyManager

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public static class HotKeyManager`
**Base:** none
**File:** `TaleWorlds.InputSystem/HotKeyManager.cs`

## Overview

`HotKeyManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `HotKeyManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHotKeyId
`public static string GetHotKeyId(string categoryName, string hotKeyId)`

**Purpose:** Reads and returns the `hot key id` value held by the current object.

```csharp
// Static call; no instance required
HotKeyManager.GetHotKeyId("example", "example");
```

### GetHotKeyId
`public static string GetHotKeyId(string categoryName, int hotKeyId)`

**Purpose:** Reads and returns the `hot key id` value held by the current object.

```csharp
// Static call; no instance required
HotKeyManager.GetHotKeyId("example", 0);
```

### GetCategory
`public static GameKeyContext GetCategory(string categoryName)`

**Purpose:** Reads and returns the `category` value held by the current object.

```csharp
// Static call; no instance required
HotKeyManager.GetCategory("example");
```

### GetAllCategories
`public static Dictionary<string, GameKeyContext>.ValueCollection GetAllCategories()`

**Purpose:** Reads and returns the `all categories` value held by the current object.

```csharp
// Static call; no instance required
HotKeyManager.GetAllCategories();
```

### Tick
`public static void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Static call; no instance required
HotKeyManager.Tick(0);
```

### Initialize
`public static void Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
HotKeyManager.Initialize(savePath, false);
```

### RegisterInitialContexts
`public static void RegisterInitialContexts(IEnumerable<GameKeyContext> contexts, bool loadKeys)`

**Purpose:** Registers `initial contexts` with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
HotKeyManager.RegisterInitialContexts(contexts, false);
```

### RegisterContext
`public static void RegisterContext(GameKeyContext context, bool ignoreSerialize = false, bool loadKeys = false)`

**Purpose:** Registers `context` with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
HotKeyManager.RegisterContext(context, false, false);
```

### ShouldNotifyDocumentVersionDifferent
`public static bool ShouldNotifyDocumentVersionDifferent()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
HotKeyManager.ShouldNotifyDocumentVersionDifferent();
```

### Reset
`public static void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Static call; no instance required
HotKeyManager.Reset();
```

### LoadAsync
`public static void LoadAsync()`

**Purpose:** Reads `async` from persistent storage or a stream.

```csharp
// Static call; no instance required
HotKeyManager.LoadAsync();
```

### SaveAsync
`public static void SaveAsync(bool throwEvent)`

**Purpose:** Writes `async` to persistent storage or a stream.

```csharp
// Static call; no instance required
HotKeyManager.SaveAsync(false);
```

### OnKeybindsChangedEvent
`public delegate void OnKeybindsChangedEvent()`

**Purpose:** Invoked when the `keybinds changed event` event is raised.

```csharp
// Obtain an instance of HotKeyManager from the subsystem API first
HotKeyManager hotKeyManager = ...;
hotKeyManager.OnKeybindsChangedEvent();
```

## Usage Example

```csharp
var manager = HotKeyManager.Current;
```

## See Also

- [Area Index](../)
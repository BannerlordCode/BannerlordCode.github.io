---
title: "HotKeyManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HotKeyManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `hot key id`.

### GetHotKeyId
`public static string GetHotKeyId(string categoryName, int hotKeyId)`

**Purpose:** Gets the current value of `hot key id`.

### GetCategory
`public static GameKeyContext GetCategory(string categoryName)`

**Purpose:** Gets the current value of `category`.

### GetAllCategories
`public static Dictionary<string, GameKeyContext>.ValueCollection GetAllCategories()`

**Purpose:** Gets the current value of `all categories`.

### Tick
`public static void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### Initialize
`public static void Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### RegisterInitialContexts
`public static void RegisterInitialContexts(IEnumerable<GameKeyContext> contexts, bool loadKeys)`

**Purpose:** Handles logic related to `register initial contexts`.

### RegisterContext
`public static void RegisterContext(GameKeyContext context, bool ignoreSerialize = false, bool loadKeys = false)`

**Purpose:** Handles logic related to `register context`.

### ShouldNotifyDocumentVersionDifferent
`public static bool ShouldNotifyDocumentVersionDifferent()`

**Purpose:** Handles logic related to `should notify document version different`.

### Reset
`public static void Reset()`

**Purpose:** Resets `reset` to its initial state.

### LoadAsync
`public static async void LoadAsync()`

**Purpose:** Loads `async` data.

### SaveAsync
`public static async void SaveAsync(bool throwEvent)`

**Purpose:** Saves `async` data.

### OnKeybindsChangedEvent
`public delegate void OnKeybindsChangedEvent()`

**Purpose:** Called when the `keybinds changed event` event is raised.

## Usage Example

```csharp
var manager = HotKeyManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "ScreenManager"
description: "Auto-generated class reference for ScreenManager."
---
# ScreenManager

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public static class ScreenManager`
**Base:** none
**File:** `TaleWorlds.ScreenSystem/ScreenManager.cs`

## Overview

`ScreenManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ScreenManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EngineInterface` | `public static IScreenManagerEngineConnection EngineInterface { get; }` |
| `Scale` | `public static float Scale { get; }` |
| `UsableArea` | `public static Vec2 UsableArea { get; }` |
| `IsEnterButtonRDown` | `public static bool IsEnterButtonRDown { get; }` |
| `IsLateTickInProgress` | `public static bool IsLateTickInProgress { get; }` |
| `SortedLayers` | `public static List<ScreenLayer> SortedLayers { get; }` |
| `TopScreen` | `public static ScreenBase TopScreen { get; }` |
| `FocusedLayer` | `public static ScreenLayer FocusedLayer { get; }` |
| `FirstHitLayer` | `public static ScreenLayer FirstHitLayer { get; }` |
| `IsWindowFocused` | `public static bool IsWindowFocused { get; }` |

## Key Methods

### Initialize
`public static void Initialize(IScreenManagerEngineConnection engineInterface)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
ScreenManager.Initialize(engineInterface);
```

### RemoveGlobalLayer
`public static void RemoveGlobalLayer(GlobalLayer layer)`

**Purpose:** Removes `global layer` from the current collection or state.

```csharp
// Static call; no instance required
ScreenManager.RemoveGlobalLayer(layer);
```

### AddGlobalLayer
`public static void AddGlobalLayer(GlobalLayer layer, bool isFocusable)`

**Purpose:** Adds `global layer` to the current collection or state.

```csharp
// Static call; no instance required
ScreenManager.AddGlobalLayer(layer, false);
```

### OnConstrainStateChanged
`public static void OnConstrainStateChanged(bool isConstrained)`

**Purpose:** Invoked when the `constrain state changed` event is raised.

```csharp
// Static call; no instance required
ScreenManager.OnConstrainStateChanged(false);
```

### ScreenTypeExistsAtList
`public static bool ScreenTypeExistsAtList(ScreenBase screen)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ScreenManager.ScreenTypeExistsAtList(screen);
```

### UpdateLayout
`public static void UpdateLayout()`

**Purpose:** Recalculates and stores the latest representation of `layout`.

```csharp
// Static call; no instance required
ScreenManager.UpdateLayout();
```

### SetSuspendLayer
`public static void SetSuspendLayer(ScreenLayer layer, bool isSuspended)`

**Purpose:** Assigns a new value to `suspend layer` and updates the object's internal state.

```csharp
// Static call; no instance required
ScreenManager.SetSuspendLayer(layer, false);
```

### OnFinalize
`public static void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Static call; no instance required
ScreenManager.OnFinalize();
```

### Tick
`public static void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Static call; no instance required
ScreenManager.Tick(0);
```

### LateTick
`public static void LateTick(float dt)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ScreenManager.LateTick(0);
```

### OnPlatformScreenKeyboardRequested
`public static bool OnPlatformScreenKeyboardRequested(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**Purpose:** Invoked when the `platform screen keyboard requested` event is raised.

```csharp
// Static call; no instance required
ScreenManager.OnPlatformScreenKeyboardRequested("example", "example", 0, 0);
```

### OnOnscreenKeyboardDone
`public static void OnOnscreenKeyboardDone(string inputText)`

**Purpose:** Invoked when the `onscreen keyboard done` event is raised.

```csharp
// Static call; no instance required
ScreenManager.OnOnscreenKeyboardDone("example");
```

### OnOnscreenKeyboardCanceled
`public static void OnOnscreenKeyboardCanceled()`

**Purpose:** Invoked when the `onscreen keyboard canceled` event is raised.

```csharp
// Static call; no instance required
ScreenManager.OnOnscreenKeyboardCanceled();
```

### OnGameWindowFocusChange
`public static void OnGameWindowFocusChange(bool focusGained)`

**Purpose:** Invoked when the `game window focus change` event is raised.

```csharp
// Static call; no instance required
ScreenManager.OnGameWindowFocusChange(false);
```

### ReplaceTopScreen
`public static void ReplaceTopScreen(ScreenBase screen)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ScreenManager.ReplaceTopScreen(screen);
```

### GetPersistentInputRestrictions
`public static List<ScreenLayer> GetPersistentInputRestrictions()`

**Purpose:** Reads and returns the `persistent input restrictions` value held by the current object.

```csharp
// Static call; no instance required
ScreenManager.GetPersistentInputRestrictions();
```

### SetAndActivateRootScreen
`public static void SetAndActivateRootScreen(ScreenBase screen)`

**Purpose:** Assigns a new value to `and activate root screen` and updates the object's internal state.

```csharp
// Static call; no instance required
ScreenManager.SetAndActivateRootScreen(screen);
```

### CleanAndPushScreen
`public static void CleanAndPushScreen(ScreenBase screen)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ScreenManager.CleanAndPushScreen(screen);
```

### ClearSiegeMachineSelection
`public static string ClearSiegeMachineSelection(List<string> args)`

**Purpose:** Removes all `siege machine selection` from the current object.

```csharp
// Static call; no instance required
ScreenManager.ClearSiegeMachineSelection(args);
```

### CopyCustomBattle
`public static string CopyCustomBattle(List<string> args)`

**Purpose:** Copies the `custom battle` state of the current object to a target.

```csharp
// Static call; no instance required
ScreenManager.CopyCustomBattle(args);
```

### ApplyCustomBattleLayout
`public static string ApplyCustomBattleLayout(List<string> args)`

**Purpose:** Applies the effect of `custom battle layout` to the current object.

```csharp
// Static call; no instance required
ScreenManager.ApplyCustomBattleLayout(args);
```

### PushScreen
`public static void PushScreen(ScreenBase screen)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ScreenManager.PushScreen(screen);
```

### PopScreen
`public static void PopScreen()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ScreenManager.PopScreen();
```

### CleanScreens
`public static void CleanScreens()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ScreenManager.CleanScreens();
```

### Update
`public static void Update(IReadOnlyList<int> lastKeysPressed)`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Static call; no instance required
ScreenManager.Update(lastKeysPressed);
```

### EarlyUpdate
`public static void EarlyUpdate(Vec2 usableArea)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ScreenManager.EarlyUpdate(usableArea);
```

### IsControllerActive
`public static bool IsControllerActive()`

**Purpose:** Determines whether the current object is in the `controller active` state or condition.

```csharp
// Static call; no instance required
ScreenManager.IsControllerActive();
```

### IsMouseCursorHidden
`public static bool IsMouseCursorHidden()`

**Purpose:** Determines whether the current object is in the `mouse cursor hidden` state or condition.

```csharp
// Static call; no instance required
ScreenManager.IsMouseCursorHidden();
```

### IsMouseCursorActive
`public static bool IsMouseCursorActive()`

**Purpose:** Determines whether the current object is in the `mouse cursor active` state or condition.

```csharp
// Static call; no instance required
ScreenManager.IsMouseCursorActive();
```

### IsLayerBlockedAtPosition
`public static bool IsLayerBlockedAtPosition(ScreenLayer layer, Vector2 position)`

**Purpose:** Determines whether the current object is in the `layer blocked at position` state or condition.

```csharp
// Static call; no instance required
ScreenManager.IsLayerBlockedAtPosition(layer, position);
```

### GetMouseVisibility
`public static bool GetMouseVisibility()`

**Purpose:** Reads and returns the `mouse visibility` value held by the current object.

```csharp
// Static call; no instance required
ScreenManager.GetMouseVisibility();
```

### TrySetFocus
`public static void TrySetFocus(ScreenLayer layer)`

**Purpose:** Attempts to retrieve `set focus`, usually returning success through an out parameter.

```csharp
// Static call; no instance required
ScreenManager.TrySetFocus(layer);
```

### TryLoseFocus
`public static void TryLoseFocus(ScreenLayer layer)`

**Purpose:** Attempts to retrieve `lose focus`, usually returning success through an out parameter.

```csharp
// Static call; no instance required
ScreenManager.TryLoseFocus(layer);
```

### OnScaleChange
`public static void OnScaleChange(float newScale)`

**Purpose:** Invoked when the `scale change` event is raised.

```csharp
// Static call; no instance required
ScreenManager.OnScaleChange(0);
```

### OnControllerDisconnect
`public static void OnControllerDisconnect()`

**Purpose:** Invoked when the `controller disconnect` event is raised.

```csharp
// Static call; no instance required
ScreenManager.OnControllerDisconnect();
```

### SetScreenDebugInformationEnabled
`public static string SetScreenDebugInformationEnabled(List<string> args)`

**Purpose:** Assigns a new value to `screen debug information enabled` and updates the object's internal state.

```csharp
// Static call; no instance required
ScreenManager.SetScreenDebugInformationEnabled(args);
```

### SetScreenDebugInformationEnabled
`public static void SetScreenDebugInformationEnabled(bool isEnabled)`

**Purpose:** Assigns a new value to `screen debug information enabled` and updates the object's internal state.

```csharp
// Static call; no instance required
ScreenManager.SetScreenDebugInformationEnabled(false);
```

### OnPushScreenEvent
`public delegate void OnPushScreenEvent(ScreenBase pushedScreen)`

**Purpose:** Invoked when the `push screen event` event is raised.

```csharp
// Obtain an instance of ScreenManager from the subsystem API first
ScreenManager screenManager = ...;
screenManager.OnPushScreenEvent(pushedScreen);
```

### OnPopScreenEvent
`public delegate void OnPopScreenEvent(ScreenBase poppedScreen)`

**Purpose:** Invoked when the `pop screen event` event is raised.

```csharp
// Obtain an instance of ScreenManager from the subsystem API first
ScreenManager screenManager = ...;
screenManager.OnPopScreenEvent(poppedScreen);
```

### OnControllerDisconnectedEvent
`public delegate void OnControllerDisconnectedEvent()`

**Purpose:** Invoked when the `controller disconnected event` event is raised.

```csharp
// Obtain an instance of ScreenManager from the subsystem API first
ScreenManager screenManager = ...;
screenManager.OnControllerDisconnectedEvent();
```

### OnPlatformTextRequestedDelegate
`public delegate bool OnPlatformTextRequestedDelegate(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**Purpose:** Invoked when the `platform text requested delegate` event is raised.

```csharp
// Obtain an instance of ScreenManager from the subsystem API first
ScreenManager screenManager = ...;
var result = screenManager.OnPlatformTextRequestedDelegate("example", "example", 0, 0);
```

## Usage Example

```csharp
var manager = ScreenManager.Current;
```

## See Also

- [Area Index](../)
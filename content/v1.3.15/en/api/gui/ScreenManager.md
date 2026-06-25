---
title: "ScreenManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScreenManager`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### RemoveGlobalLayer
`public static void RemoveGlobalLayer(GlobalLayer layer)`

**Purpose:** Removes `global layer` from the current collection or state.

### AddGlobalLayer
`public static void AddGlobalLayer(GlobalLayer layer, bool isFocusable)`

**Purpose:** Adds `global layer` to the current collection or state.

### OnConstrainStateChanged
`public static void OnConstrainStateChanged(bool isConstrained)`

**Purpose:** Called when the `constrain state changed` event is raised.

### ScreenTypeExistsAtList
`public static bool ScreenTypeExistsAtList(ScreenBase screen)`

**Purpose:** Handles logic related to `screen type exists at list`.

### UpdateLayout
`public static void UpdateLayout()`

**Purpose:** Updates the state or data of `layout`.

### SetSuspendLayer
`public static void SetSuspendLayer(ScreenLayer layer, bool isSuspended)`

**Purpose:** Sets the value or state of `suspend layer`.

### OnFinalize
`public static void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Tick
`public static void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### LateTick
`public static void LateTick(float dt)`

**Purpose:** Handles logic related to `late tick`.

### OnPlatformScreenKeyboardRequested
`public static bool OnPlatformScreenKeyboardRequested(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**Purpose:** Called when the `platform screen keyboard requested` event is raised.

### OnOnscreenKeyboardDone
`public static void OnOnscreenKeyboardDone(string inputText)`

**Purpose:** Called when the `onscreen keyboard done` event is raised.

### OnOnscreenKeyboardCanceled
`public static void OnOnscreenKeyboardCanceled()`

**Purpose:** Called when the `onscreen keyboard canceled` event is raised.

### OnGameWindowFocusChange
`public static void OnGameWindowFocusChange(bool focusGained)`

**Purpose:** Called when the `game window focus change` event is raised.

### ReplaceTopScreen
`public static void ReplaceTopScreen(ScreenBase screen)`

**Purpose:** Handles logic related to `replace top screen`.

### GetPersistentInputRestrictions
`public static List<ScreenLayer> GetPersistentInputRestrictions()`

**Purpose:** Gets the current value of `persistent input restrictions`.

### SetAndActivateRootScreen
`public static void SetAndActivateRootScreen(ScreenBase screen)`

**Purpose:** Sets the value or state of `and activate root screen`.

### CleanAndPushScreen
`public static void CleanAndPushScreen(ScreenBase screen)`

**Purpose:** Handles logic related to `clean and push screen`.

### ClearSiegeMachineSelection
`public static string ClearSiegeMachineSelection(List<string> args)`

**Purpose:** Handles logic related to `clear siege machine selection`.

### CopyCustomBattle
`public static string CopyCustomBattle(List<string> args)`

**Purpose:** Handles logic related to `copy custom battle`.

### ApplyCustomBattleLayout
`public static string ApplyCustomBattleLayout(List<string> args)`

**Purpose:** Applies `custom battle layout` to the current object.

### PushScreen
`public static void PushScreen(ScreenBase screen)`

**Purpose:** Handles logic related to `push screen`.

### PopScreen
`public static void PopScreen()`

**Purpose:** Handles logic related to `pop screen`.

### CleanScreens
`public static void CleanScreens()`

**Purpose:** Handles logic related to `clean screens`.

### Update
`public static void Update(IReadOnlyList<int> lastKeysPressed)`

**Purpose:** Updates the state or data of `update`.

### EarlyUpdate
`public static void EarlyUpdate(Vec2 usableArea)`

**Purpose:** Handles logic related to `early update`.

### IsControllerActive
`public static bool IsControllerActive()`

**Purpose:** Handles logic related to `is controller active`.

### IsMouseCursorHidden
`public static bool IsMouseCursorHidden()`

**Purpose:** Handles logic related to `is mouse cursor hidden`.

### IsMouseCursorActive
`public static bool IsMouseCursorActive()`

**Purpose:** Handles logic related to `is mouse cursor active`.

### IsLayerBlockedAtPosition
`public static bool IsLayerBlockedAtPosition(ScreenLayer layer, Vector2 position)`

**Purpose:** Handles logic related to `is layer blocked at position`.

### GetMouseVisibility
`public static bool GetMouseVisibility()`

**Purpose:** Gets the current value of `mouse visibility`.

### TrySetFocus
`public static void TrySetFocus(ScreenLayer layer)`

**Purpose:** Attempts to get `set focus`, usually returning the result in an out parameter.

### TryLoseFocus
`public static void TryLoseFocus(ScreenLayer layer)`

**Purpose:** Attempts to get `lose focus`, usually returning the result in an out parameter.

### OnScaleChange
`public static void OnScaleChange(float newScale)`

**Purpose:** Called when the `scale change` event is raised.

### OnControllerDisconnect
`public static void OnControllerDisconnect()`

**Purpose:** Called when the `controller disconnect` event is raised.

### SetScreenDebugInformationEnabled
`public static string SetScreenDebugInformationEnabled(List<string> args)`

**Purpose:** Sets the value or state of `screen debug information enabled`.

### SetScreenDebugInformationEnabled
`public static void SetScreenDebugInformationEnabled(bool isEnabled)`

**Purpose:** Sets the value or state of `screen debug information enabled`.

### OnPushScreenEvent
`public delegate void OnPushScreenEvent(ScreenBase pushedScreen)`

**Purpose:** Called when the `push screen event` event is raised.

### OnPopScreenEvent
`public delegate void OnPopScreenEvent(ScreenBase poppedScreen)`

**Purpose:** Called when the `pop screen event` event is raised.

### OnControllerDisconnectedEvent
`public delegate void OnControllerDisconnectedEvent()`

**Purpose:** Called when the `controller disconnected event` event is raised.

### OnPlatformTextRequestedDelegate
`public delegate bool OnPlatformTextRequestedDelegate(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**Purpose:** Called when the `platform text requested delegate` event is raised.

## Usage Example

```csharp
var manager = ScreenManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
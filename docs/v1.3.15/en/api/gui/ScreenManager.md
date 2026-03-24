# ScreenManager / 屏幕管理器

**Namespace**: TaleWorlds.ScreenSystem
**File**: `TaleWorlds.ScreenSystem/ScreenManager.cs`
**Purpose**: Manages the game screen stack and global layers, handles screen transitions, input routing, and focus management

ScreenManager is the core manager of the game UI system. It maintains the screen list, handles screen transitions, manages global layers, and processes input events.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| TopScreen | ScreenBase | The current topmost active screen |
| FocusedLayer | ScreenLayer | The layer currently having input focus |
| FirstHitLayer | ScreenLayer | The first layer hit this frame |
| Scale | float | UI scale factor |
| UsableArea | Vec2 | Usable area size |
| SortedLayers | List ScreenLayer | Layers sorted by render order |
| IsEnterButtonRDown | bool | Whether the Enter button (controller) is pressed |
| IsWindowFocused | bool | Whether the game window has focus |
| IsLateTickInProgress | bool | Whether LateTick is in progress |

## Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| PushScreen | `void PushScreen(ScreenBase screen)` | Pushes a screen onto the stack top, pausing the current screen |
| PopScreen | `void PopScreen()` | Pops the top screen, resuming the previous screen |
| ReplaceTopScreen | `void ReplaceTopScreen(ScreenBase screen)` | Replaces the top screen |
| CleanAndPushScreen | `void CleanAndPushScreen(ScreenBase screen)` | Clears all screens then pushes a new screen |
| CleanScreens | `void CleanScreens()` | Clears all screens |
| SetAndActivateRootScreen | `void SetAndActivateRootScreen(ScreenBase screen)` | Sets and activates the root screen |
| AddGlobalLayer | `void AddGlobalLayer(GlobalLayer layer, bool isFocusable)` | Adds a global layer |
| RemoveGlobalLayer | `void RemoveGlobalLayer(GlobalLayer layer)` | Removes a global layer |
| Tick | `void Tick(float dt)` | Main update loop |
| LateTick | `void LateTick(float dt)` | Late update (rendering) |
| UpdateLayout | `void UpdateLayout()` | Updates all layer layouts |
| TrySetFocus | `void TrySetFocus(ScreenLayer layer)` | Attempts to set focus layer |
| TryLoseFocus | `void TryLoseFocus(ScreenLayer layer)` | Attempts to release focus |
| OnScaleChange | `void OnScaleChange(float newScale)` | Scale change callback |
| ScreenTypeExistsAtList | `bool ScreenTypeExistsAtList(ScreenBase screen)` | Checks if a screen type already exists |
| IsLayerBlockedAtPosition | `bool IsLayerBlockedAtPosition(ScreenLayer layer, Vector2 position)` | Checks if position is blocked |
| GetMouseVisibility | `bool GetMouseVisibility()` | Gets mouse visibility state |
| IsControllerActive | `bool IsControllerActive()` | Checks if controller is active |
| IsMouseCursorActive | `bool IsMouseCursorActive()` | Checks if mouse is active |
| IsMouseCursorHidden | `bool IsMouseCursorHidden()` | Checks if mouse is hidden |

## Events

| Event | Description |
|-------|-------------|
| OnPushScreen | Triggered when a screen is pushed |
| OnPopScreen | Triggered when a screen is popped |
| OnControllerDisconnected | Triggered when controller disconnects |
| FocusGained | Triggered when window gains focus |
| PlatformTextRequested | Triggered when platform text input is requested |

## Usage Examples

```csharp
// Push a new screen
ScreenManager.PushScreen(new MyCustomScreen());

// Replace the current screen
ScreenManager.ReplaceTopScreen(new MyCustomScreen());

// Add a global layer (for menus, HUD, etc.)
GlobalLayer myLayer = new GlobalLayer();
ScreenManager.AddGlobalLayer(myLayer, isFocusable: true);

// Check if controller is in use
if (ScreenManager.IsControllerActive())
{
    // Use controller navigation logic
}

// Listen for screen transition events
ScreenManager.OnPushScreen += (screen) => 
{
    Debug.WriteLine($"Screen pushed: {screen.GetType().Name}");
};
```

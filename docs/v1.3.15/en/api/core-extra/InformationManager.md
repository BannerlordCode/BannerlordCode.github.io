<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InformationManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InformationManager

**Namespace:** TaleWorlds.Library  
**Module:** TaleWorlds.Library  
**Type:** static class

The primary entry point for showing on-screen messages, inquiry dialogs (yes/no), and tooltips to the player in Bannerlord. This static class forwards every display request to internal events subscribed by the game UI layer, making it the standard way for modders to communicate information to the player.

## Overview

InformationManager is a pure forwarder: each public method checks whether its corresponding internal event/delegate has been subscribed and invokes it, otherwise it silently returns (a no-op). These events are hooked by the game's active screens (such as the map screen or quest screens) when they become active. This means calling these methods when no screen is handling them produces no visible effect and throws no exception.

For modders, the most common entry points are `DisplayMessage` (show an on-screen message), `ShowInquiry` (show a yes/no dialog), `ShowTextInquiry` (show a dialog with a text input), and `ShowTooltip` / `HideTooltip` (show/hide a tooltip).

## Static Properties

| Name | Type | Description |
|------|------|-------------|
| RegisteredTypes | IReadOnlyDictionary&lt;Type, TooltipRegistry> | The registered tooltip type table; keyed by the registered data type, with the corresponding TooltipRegistry as value |

## Static Methods

### DisplayMessage

```csharp
public static void DisplayMessage(InformationMessage message)
```

Shows an on-screen message (the message feed at the bottom-left of the screen). This is the primary method for presenting informational text to the player.

**Parameters:**
- `message` - An `InformationMessage` carrying the body `Information`, optional `Detail`, `Color`, `SoundEventPath`, and `Category`

If the `DisplayMessageInternal` event is not subscribed, the call is ignored.

### ShowInquiry

```csharp
public static void ShowInquiry(InquiryData data, bool pauseGameActiveState = false, bool prioritize = false)
```

Shows an inquiry dialog (typically a modal popup with yes/no buttons).

**Parameters:**
- `data` - An `InquiryData` describing the title, body, button texts, and callbacks
- `pauseGameActiveState` - Whether to pause the game active state while the dialog is open
- `prioritize` - Whether to place this dialog ahead of any already-queued dialogs

### ShowTextInquiry

```csharp
public static void ShowTextInquiry(TextInquiryData textData, bool pauseGameActiveState = false, bool prioritize = false)
```

Shows an inquiry dialog that includes a text input field.

**Parameters:**
- `textData` - A `TextInquiryData` describing the title, body, button texts, input callback, and input validation
- `pauseGameActiveState` - Whether to pause the game active state while the dialog is open
- `prioritize` - Whether to place this dialog ahead of any already-queued dialogs

### HideInquiry

```csharp
public static void HideInquiry()
```

Closes the currently shown inquiry dialog. If the `OnHideInquiry` event is not subscribed, the call is ignored.

### ShowTooltip

```csharp
public static void ShowTooltip(Type type, params object[] args)
```

Shows a tooltip for a registered type. `type` must be a type previously registered via `RegisterTooltip`; `args` are forwarded to that tooltip's refresh callback.

**Parameters:**
- `type` - The data type to show a tooltip for
- `args` - Arguments passed to the tooltip refresh callback

### HideTooltip

```csharp
public static void HideTooltip()
```

Hides the currently shown tooltip. If the `OnHideTooltip` event is not subscribed, the call is ignored.

### AddSystemNotification

```csharp
public static void AddSystemNotification(string message)
```

Adds a system notification.

**Parameters:**
- `message` - The notification text

### HideAllMessages

```csharp
public static void HideAllMessages()
```

Hides all currently shown on-screen messages (without clearing message history). If the `HideAllMessagesInternal` event is not subscribed, the call is ignored.

### ClearAllMessages

```csharp
public static void ClearAllMessages()
```

Clears all on-screen messages. If the `ClearAllMessagesInternal` event is not subscribed, the call is ignored.

### IsAnyInquiryActive

```csharp
public static bool IsAnyInquiryActive()
```

**Returns:** True if an inquiry dialog is currently active, false otherwise. Relies on the internal delegate `IsAnyInquiryActiveInternal`; returns false when unset.

### GetIsAnyTooltipActive

```csharp
public static bool GetIsAnyTooltipActive()
```

**Returns:** True if any tooltip is currently active, false otherwise.

### GetIsAnyTooltipActiveAndExtended

```csharp
public static bool GetIsAnyTooltipActiveAndExtended()
```

**Returns:** True if a tooltip is currently both active and extended (expanded), false otherwise.

### RegisterTooltip&lt;TRegistered, TTooltip>

```csharp
public static void RegisterTooltip<TRegistered, TTooltip>(
    Action<TTooltip, object[]> onRefreshData,
    string movieName
) where TTooltip : TooltipBaseVM
```

Registers a tooltip view model `TTooltip` for the type `TRegistered` so it can be shown via `ShowTooltip`.

**Parameters:**
- `onRefreshData` - Callback that refreshes the tooltip data, receiving the view model instance and the argument array passed to `ShowTooltip`
- `movieName` - The GFx movie name used to render the tooltip

**Type constraint:**
- `TTooltip` must derive from `TooltipBaseVM`

### UnregisterTooltip&lt;TRegistered>

```csharp
public static void UnregisterTooltip<TRegistered>()
```

Removes a tooltip previously registered for `TRegistered`. If the type was not registered, a notice is printed to debug output.

### Clear

```csharp
public static void Clear()
```

Sets all internal events and delegates to null (detaches the game UI entirely). Typically called only by the framework during scene transitions.

## Static Events (Framework Hooks)

The following public events and delegates are subscribed by the game UI layer to receive display requests; modders should normally call the public methods above rather than subscribing to these events directly. Each public method forwards to the corresponding hook and silently returns when the hook is null.

| Name | Type | Description |
|------|------|-------------|
| DisplayMessageInternal | event Action&lt;InformationMessage> | Actual execution hook for `DisplayMessage` |
| ClearAllMessagesInternal | event Action | Actual execution hook for `ClearAllMessages` |
| HideAllMessagesInternal | event Action | Actual execution hook for `HideAllMessages` |
| OnAddSystemNotification | event Action&lt;string> | Actual execution hook for `AddSystemNotification` |
| OnShowTooltip | event Action&lt;Type, object[]> | Actual execution hook for `ShowTooltip` |
| OnHideTooltip | event Action | Actual execution hook for `HideTooltip` |
| OnShowInquiry | event Action&lt;InquiryData, bool, bool> | Actual execution hook for `ShowInquiry` |
| OnShowTextInquiry | event Action&lt;TextInquiryData, bool, bool> | Actual execution hook for `ShowTextInquiry` |
| OnHideInquiry | event Action | Actual execution hook for `HideInquiry` |
| IsAnyInquiryActiveInternal | Func&lt;bool> | Query delegate used by `IsAnyInquiryActive` |
| IsAnyTooltipActiveInternal | IsAnyTooltipActiveDelegate | Tooltip active-state query delegate |

## Nested Types

### TooltipRegistry

```csharp
public struct TooltipRegistry
{
    public Type TooltipType;
    public object OnRefreshData;
    public string MovieName;
}
```

The entry stored by `RegisterTooltip`, recording the tooltip view model type, refresh callback, and movie name.

### IsAnyTooltipActiveDelegate

```csharp
public delegate void IsAnyTooltipActiveDelegate(
    out bool isAnyTooltipActive,
    out bool isAnyTooltipExtended
);
```

Delegate signature for querying both "is any tooltip active" and "is it extended" at once.

## Usage Example

```csharp
using TaleWorlds.Library;

// 1) Show an on-screen message
InformationManager.DisplayMessage(new InformationMessage("Welcome to my mod!"));

// A colored message
InformationManager.DisplayMessage(
    new InformationMessage("Quest complete!", Colors.Green));

// 2) Show a yes/no inquiry dialog
var inquiry = new InquiryData(
    titleText: "Confirm",
    text: "Travel to the destination now?",
    isAffirmativeOptionShown: true,
    isNegativeOptionShown: true,
    affirmativeText: "Travel",
    negativeText: "Later",
    affirmativeAction: () =>
    {
        InformationManager.DisplayMessage(new InformationMessage("Departed."));
    },
    negativeAction: () =>
    {
        InformationManager.DisplayMessage(new InformationMessage("Cancelled."));
    });

InformationManager.ShowInquiry(inquiry, pauseGameActiveState: true);
```

## See Also

- [MBCommon](./MBCommon.md)
- [MBList](./MBList.md)

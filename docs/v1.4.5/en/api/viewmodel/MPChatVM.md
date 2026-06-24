<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPChatVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPChatVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPChatVM : ViewModel, IChatHandler`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer/MPChatVM.cs`

## Overview

`MPChatVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveChannelType` | `public ChatChannelType ActiveChannelType { get; set; }` |
| `ChatBoxSizeX` | `public float ChatBoxSizeX { get; set; }` |
| `ChatBoxSizeY` | `public float ChatBoxSizeY { get; set; }` |
| `MaxMessageLength` | `public int MaxMessageLength { get; set; }` |
| `IsTypingText` | `public bool IsTypingText { get; set; }` |
| `IsInspectingMessages` | `public bool IsInspectingMessages { get; set; }` |
| `IsChatDisabled` | `public bool IsChatDisabled { get; set; }` |
| `ShowHideShowHint` | `public bool ShowHideShowHint { get; set; }` |
| `IsOptionsAvailable` | `public bool IsOptionsAvailable { get; set; }` |
| `ShouldHaveOffset` | `public bool ShouldHaveOffset { get; set; }` |
| `WrittenText` | `public string WrittenText { get; set; }` |
| `ActiveChannelColor` | `public Color ActiveChannelColor { get; set; }` |
| `ActiveChannelNameText` | `public string ActiveChannelNameText { get; set; }` |
| `HideShowText` | `public string HideShowText { get; set; }` |
| `ToggleCombatLogText` | `public string ToggleCombatLogText { get; set; }` |
| `ToggleBarkText` | `public string ToggleBarkText { get; set; }` |
| `CycleThroughChannelsText` | `public string CycleThroughChannelsText { get; set; }` |
| `SendMessageText` | `public string SendMessageText { get; set; }` |
| `CancelSendingText` | `public string CancelSendingText { get; set; }` |
| `MessageHistory` | `public MBBindingList<MPChatLineVM> MessageHistory { get; set; }` |
| `CombatLogHint` | `public HintViewModel CombatLogHint { get; set; }` |
| `IncludeCombatLog` | `public bool IncludeCombatLog { get; set; }` |
| `IncludeBark` | `public bool IncludeBark { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ToggleIncludeCombatLog
`public void ToggleIncludeCombatLog()`

**Purpose:** Handles logic related to `toggle include combat log`.

### ExecuteToggleIncludeShouts
`public void ExecuteToggleIncludeShouts()`

**Purpose:** Executes the `toggle include shouts` operation or workflow.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### Hide
`public void Hide()`

**Purpose:** Handles logic related to `hide`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### UpdateObjects
`public void UpdateObjects(Game game, Mission mission)`

**Purpose:** Updates the state or data of `objects`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SendMessageToChannel
`public void SendMessageToChannel(ChatChannelType channel, string message)`

**Purpose:** Handles logic related to `send message to channel`.

### CheckChatFading
`public void CheckChatFading(float dt)`

**Purpose:** Handles logic related to `check chat fading`.

### SetChatDisabledStateChangedCallback
`public void SetChatDisabledStateChangedCallback(Action<bool> onChatDisabledStateChanged)`

**Purpose:** Sets the value or state of `chat disabled state changed callback`.

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<TextObject> getToggleChatKeyText)`

**Purpose:** Sets the value or state of `get key text from key i d func`.

### SetGetCycleChannelKeyTextFunc
`public void SetGetCycleChannelKeyTextFunc(Func<TextObject> getCycleChannelsKeyText)`

**Purpose:** Sets the value or state of `get cycle channel key text func`.

### SetGetSendMessageKeyTextFunc
`public void SetGetSendMessageKeyTextFunc(Func<TextObject> getSendMessageKeyText)`

**Purpose:** Sets the value or state of `get send message key text func`.

### SetGetCancelSendingKeyTextFunc
`public void SetGetCancelSendingKeyTextFunc(Func<TextObject> getCancelSendingKeyText)`

**Purpose:** Sets the value or state of `get cancel sending key text func`.

### IsChatAllowedByOptions
`public bool IsChatAllowedByOptions()`

**Purpose:** Handles logic related to `is chat allowed by options`.

### TypeToChannelAll
`public void TypeToChannelAll(bool startTyping = false)`

**Purpose:** Handles logic related to `type to channel all`.

### TypeToChannelTeam
`public void TypeToChannelTeam(bool startTyping = false)`

**Purpose:** Handles logic related to `type to channel team`.

### StartInspectingMessages
`public void StartInspectingMessages()`

**Purpose:** Handles logic related to `start inspecting messages`.

### StopInspectingMessages
`public void StopInspectingMessages()`

**Purpose:** Handles logic related to `stop inspecting messages`.

### StartTyping
`public void StartTyping()`

**Purpose:** Handles logic related to `start typing`.

### StopTyping
`public void StopTyping(bool resetWrittenText = false)`

**Purpose:** Handles logic related to `stop typing`.

### SendCurrentlyTypedMessage
`public void SendCurrentlyTypedMessage()`

**Purpose:** Handles logic related to `send currently typed message`.

### ExecuteSaveSizes
`public void ExecuteSaveSizes()`

**Purpose:** Executes the `save sizes` operation or workflow.

### SetMessageHistoryCapacity
`public void SetMessageHistoryCapacity(int capacity)`

**Purpose:** Sets the value or state of `message history capacity`.

## Usage Example

```csharp
var value = new MPChatVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
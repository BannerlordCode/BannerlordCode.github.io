---
title: "MPChatVM"
description: "Auto-generated class reference for MPChatVM."
---
# MPChatVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPChatVM : ViewModel, IChatHandler`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer/MPChatVM.cs`

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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.RefreshValues();
```

### ToggleIncludeCombatLog
`public void ToggleIncludeCombatLog()`

**Purpose:** **Purpose:** Executes the ToggleIncludeCombatLog logic.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.ToggleIncludeCombatLog();
```

### ExecuteToggleIncludeShouts
`public void ExecuteToggleIncludeShouts()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with toggle include shouts.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.ExecuteToggleIncludeShouts();
```

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.Tick(0);
```

### Hide
`public void Hide()`

**Purpose:** **Purpose:** Hides the UI or element associated with the this instance.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.Hide();
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.Clear();
```

### UpdateObjects
`public void UpdateObjects(Game game, Mission mission)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of objects.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.UpdateObjects(game, mission);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.OnFinalize();
```

### SendMessageToChannel
`public void SendMessageToChannel(ChatChannelType channel, string message)`

**Purpose:** **Purpose:** Executes the SendMessageToChannel logic.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.SendMessageToChannel(channel, "example");
```

### CheckChatFading
`public void CheckChatFading(float dt)`

**Purpose:** **Purpose:** Verifies whether chat fading holds true for the this instance.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.CheckChatFading(0);
```

### SetChatDisabledStateChangedCallback
`public void SetChatDisabledStateChangedCallback(Action<bool> onChatDisabledStateChanged)`

**Purpose:** **Purpose:** Assigns a new value to chat disabled state changed callback and updates the object's internal state.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.SetChatDisabledStateChangedCallback(onChatDisabledStateChanged);
```

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<TextObject> getToggleChatKeyText)`

**Purpose:** **Purpose:** Assigns a new value to get key text from key i d func and updates the object's internal state.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.SetGetKeyTextFromKeyIDFunc(getToggleChatKeyText);
```

### SetGetCycleChannelKeyTextFunc
`public void SetGetCycleChannelKeyTextFunc(Func<TextObject> getCycleChannelsKeyText)`

**Purpose:** **Purpose:** Assigns a new value to get cycle channel key text func and updates the object's internal state.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.SetGetCycleChannelKeyTextFunc(getCycleChannelsKeyText);
```

### SetGetSendMessageKeyTextFunc
`public void SetGetSendMessageKeyTextFunc(Func<TextObject> getSendMessageKeyText)`

**Purpose:** **Purpose:** Assigns a new value to get send message key text func and updates the object's internal state.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.SetGetSendMessageKeyTextFunc(getSendMessageKeyText);
```

### SetGetCancelSendingKeyTextFunc
`public void SetGetCancelSendingKeyTextFunc(Func<TextObject> getCancelSendingKeyText)`

**Purpose:** **Purpose:** Assigns a new value to get cancel sending key text func and updates the object's internal state.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.SetGetCancelSendingKeyTextFunc(getCancelSendingKeyText);
```

### IsChatAllowedByOptions
`public bool IsChatAllowedByOptions()`

**Purpose:** **Purpose:** Determines whether the this instance is in the chat allowed by options state or condition.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
var result = mPChatVM.IsChatAllowedByOptions();
```

### TypeToChannelAll
`public void TypeToChannelAll(bool startTyping = false)`

**Purpose:** **Purpose:** Executes the TypeToChannelAll logic.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.TypeToChannelAll(false);
```

### TypeToChannelTeam
`public void TypeToChannelTeam(bool startTyping = false)`

**Purpose:** **Purpose:** Executes the TypeToChannelTeam logic.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.TypeToChannelTeam(false);
```

### StartInspectingMessages
`public void StartInspectingMessages()`

**Purpose:** **Purpose:** Starts the inspecting messages flow or state machine.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.StartInspectingMessages();
```

### StopInspectingMessages
`public void StopInspectingMessages()`

**Purpose:** **Purpose:** Stops the inspecting messages flow or state machine.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.StopInspectingMessages();
```

### StartTyping
`public void StartTyping()`

**Purpose:** **Purpose:** Starts the typing flow or state machine.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.StartTyping();
```

### StopTyping
`public void StopTyping(bool resetWrittenText = false)`

**Purpose:** **Purpose:** Stops the typing flow or state machine.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.StopTyping(false);
```

### SendCurrentlyTypedMessage
`public void SendCurrentlyTypedMessage()`

**Purpose:** **Purpose:** Executes the SendCurrentlyTypedMessage logic.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.SendCurrentlyTypedMessage();
```

### ExecuteSaveSizes
`public void ExecuteSaveSizes()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with save sizes.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.ExecuteSaveSizes();
```

### SetMessageHistoryCapacity
`public void SetMessageHistoryCapacity(int capacity)`

**Purpose:** **Purpose:** Assigns a new value to message history capacity and updates the object's internal state.

```csharp
// Obtain an instance of MPChatVM from the subsystem API first
MPChatVM mPChatVM = ...;
mPChatVM.SetMessageHistoryCapacity(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPChatVM mPChatVM = ...;
mPChatVM.RefreshValues();
```

## See Also

- [Area Index](../)
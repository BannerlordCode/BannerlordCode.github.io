<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPChatVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPChatVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MPChatVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ToggleIncludeCombatLog

```csharp
public void ToggleIncludeCombatLog()
```

### ExecuteToggleIncludeShouts

```csharp
public void ExecuteToggleIncludeShouts()
```

### Tick

```csharp
public void Tick(float dt)
```

### Hide

```csharp
public void Hide()
```

### Clear

```csharp
public void Clear()
```

### UpdateObjects

```csharp
public void UpdateObjects(Game game, Mission mission)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SendMessageToChannel

```csharp
public void SendMessageToChannel(ChatChannelType channel, string message)
```

### CheckChatFading

```csharp
public void CheckChatFading(float dt)
```

### SetChatDisabledStateChangedCallback

```csharp
public void SetChatDisabledStateChangedCallback(Action<bool> onChatDisabledStateChanged)
```

### SetGetKeyTextFromKeyIDFunc

```csharp
public void SetGetKeyTextFromKeyIDFunc(Func<TextObject> getToggleChatKeyText)
```

### SetGetCycleChannelKeyTextFunc

```csharp
public void SetGetCycleChannelKeyTextFunc(Func<TextObject> getCycleChannelsKeyText)
```

### SetGetSendMessageKeyTextFunc

```csharp
public void SetGetSendMessageKeyTextFunc(Func<TextObject> getSendMessageKeyText)
```

### SetGetCancelSendingKeyTextFunc

```csharp
public void SetGetCancelSendingKeyTextFunc(Func<TextObject> getCancelSendingKeyText)
```

### IsChatAllowedByOptions

```csharp
public bool IsChatAllowedByOptions()
```

### TypeToChannelAll

```csharp
public void TypeToChannelAll(bool startTyping = false)
```

### TypeToChannelTeam

```csharp
public void TypeToChannelTeam(bool startTyping = false)
```

### StartInspectingMessages

```csharp
public void StartInspectingMessages()
```

### StopInspectingMessages

```csharp
public void StopInspectingMessages()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
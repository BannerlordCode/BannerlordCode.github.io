<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPChatVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPChatVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MPChatVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
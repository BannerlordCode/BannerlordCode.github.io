<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPChatVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPChatVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPChatVM : ViewModel, IChatHandler`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs`

## 概述

`MPChatVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
| `CombatLogHint` | `public HintViewModel CombatLogHint { get; set; }` |
| `IncludeCombatLog` | `public bool IncludeCombatLog { get; set; }` |
| `IncludeBark` | `public bool IncludeBark { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ToggleIncludeCombatLog
`public void ToggleIncludeCombatLog()`

**用途 / Purpose:** 处理 `toggle include combat log` 相关逻辑。

### ExecuteToggleIncludeShouts
`public void ExecuteToggleIncludeShouts()`

**用途 / Purpose:** 执行 `toggle include shouts` 操作或流程。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Hide
`public void Hide()`

**用途 / Purpose:** 处理 `hide` 相关逻辑。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### UpdateObjects
`public void UpdateObjects(Game game, Mission mission)`

**用途 / Purpose:** 更新 `objects` 的状态或数据。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SendMessageToChannel
`public void SendMessageToChannel(ChatChannelType channel, string message)`

**用途 / Purpose:** 处理 `send message to channel` 相关逻辑。

### CheckChatFading
`public void CheckChatFading(float dt)`

**用途 / Purpose:** 处理 `check chat fading` 相关逻辑。

### SetChatDisabledStateChangedCallback
`public void SetChatDisabledStateChangedCallback(Action<bool> onChatDisabledStateChanged)`

**用途 / Purpose:** 设置 `chat disabled state changed callback` 的值或状态。

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<TextObject> getToggleChatKeyText)`

**用途 / Purpose:** 设置 `get key text from key i d func` 的值或状态。

### SetGetCycleChannelKeyTextFunc
`public void SetGetCycleChannelKeyTextFunc(Func<TextObject> getCycleChannelsKeyText)`

**用途 / Purpose:** 设置 `get cycle channel key text func` 的值或状态。

### SetGetSendMessageKeyTextFunc
`public void SetGetSendMessageKeyTextFunc(Func<TextObject> getSendMessageKeyText)`

**用途 / Purpose:** 设置 `get send message key text func` 的值或状态。

### SetGetCancelSendingKeyTextFunc
`public void SetGetCancelSendingKeyTextFunc(Func<TextObject> getCancelSendingKeyText)`

**用途 / Purpose:** 设置 `get cancel sending key text func` 的值或状态。

### IsChatAllowedByOptions
`public bool IsChatAllowedByOptions()`

**用途 / Purpose:** 处理 `is chat allowed by options` 相关逻辑。

### TypeToChannelAll
`public void TypeToChannelAll(bool startTyping = false)`

**用途 / Purpose:** 处理 `type to channel all` 相关逻辑。

### TypeToChannelTeam
`public void TypeToChannelTeam(bool startTyping = false)`

**用途 / Purpose:** 处理 `type to channel team` 相关逻辑。

### StartInspectingMessages
`public void StartInspectingMessages()`

**用途 / Purpose:** 处理 `start inspecting messages` 相关逻辑。

### StopInspectingMessages
`public void StopInspectingMessages()`

**用途 / Purpose:** 处理 `stop inspecting messages` 相关逻辑。

### StartTyping
`public void StartTyping()`

**用途 / Purpose:** 处理 `start typing` 相关逻辑。

### StopTyping
`public void StopTyping(bool resetWrittenText = false)`

**用途 / Purpose:** 处理 `stop typing` 相关逻辑。

### SendCurrentlyTypedMessage
`public void SendCurrentlyTypedMessage()`

**用途 / Purpose:** 处理 `send currently typed message` 相关逻辑。

### ExecuteSaveSizes
`public void ExecuteSaveSizes()`

**用途 / Purpose:** 执行 `save sizes` 操作或流程。

### SetMessageHistoryCapacity
`public void SetMessageHistoryCapacity(int capacity)`

**用途 / Purpose:** 设置 `message history capacity` 的值或状态。

## 使用示例

```csharp
var value = new MPChatVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
---
title: "MPChatVM"
description: "MPChatVM 的自动生成类参考。"
---
# MPChatVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPChatVM : ViewModel, IChatHandler`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer/MPChatVM.cs`

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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.RefreshValues();
```

### ToggleIncludeCombatLog
`public void ToggleIncludeCombatLog()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.ToggleIncludeCombatLog();
```

### ExecuteToggleIncludeShouts
`public void ExecuteToggleIncludeShouts()`

**用途 / Purpose:** 执行 「toggle include shouts」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.ExecuteToggleIncludeShouts();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.Tick(0);
```

### Hide
`public void Hide()`

**用途 / Purpose:** 隐藏当前对象对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.Hide();
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.Clear();
```

### UpdateObjects
`public void UpdateObjects(Game game, Mission mission)`

**用途 / Purpose:** 重新计算并更新 「objects」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.UpdateObjects(game, mission);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.OnFinalize();
```

### SendMessageToChannel
`public void SendMessageToChannel(ChatChannelType channel, string message)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.SendMessageToChannel(channel, "example");
```

### CheckChatFading
`public void CheckChatFading(float dt)`

**用途 / Purpose:** 检查「chat fading」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.CheckChatFading(0);
```

### SetChatDisabledStateChangedCallback
`public void SetChatDisabledStateChangedCallback(Action<bool> onChatDisabledStateChanged)`

**用途 / Purpose:** 为 「chat disabled state changed callback」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.SetChatDisabledStateChangedCallback(onChatDisabledStateChanged);
```

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<TextObject> getToggleChatKeyText)`

**用途 / Purpose:** 为 「get key text from key i d func」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.SetGetKeyTextFromKeyIDFunc(getToggleChatKeyText);
```

### SetGetCycleChannelKeyTextFunc
`public void SetGetCycleChannelKeyTextFunc(Func<TextObject> getCycleChannelsKeyText)`

**用途 / Purpose:** 为 「get cycle channel key text func」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.SetGetCycleChannelKeyTextFunc(getCycleChannelsKeyText);
```

### SetGetSendMessageKeyTextFunc
`public void SetGetSendMessageKeyTextFunc(Func<TextObject> getSendMessageKeyText)`

**用途 / Purpose:** 为 「get send message key text func」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.SetGetSendMessageKeyTextFunc(getSendMessageKeyText);
```

### SetGetCancelSendingKeyTextFunc
`public void SetGetCancelSendingKeyTextFunc(Func<TextObject> getCancelSendingKeyText)`

**用途 / Purpose:** 为 「get cancel sending key text func」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.SetGetCancelSendingKeyTextFunc(getCancelSendingKeyText);
```

### IsChatAllowedByOptions
`public bool IsChatAllowedByOptions()`

**用途 / Purpose:** 判断当前对象是否处于 「chat allowed by options」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
var result = mPChatVM.IsChatAllowedByOptions();
```

### TypeToChannelAll
`public void TypeToChannelAll(bool startTyping = false)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.TypeToChannelAll(false);
```

### TypeToChannelTeam
`public void TypeToChannelTeam(bool startTyping = false)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.TypeToChannelTeam(false);
```

### StartInspectingMessages
`public void StartInspectingMessages()`

**用途 / Purpose:** 启动「inspecting messages」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.StartInspectingMessages();
```

### StopInspectingMessages
`public void StopInspectingMessages()`

**用途 / Purpose:** 停止「inspecting messages」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.StopInspectingMessages();
```

### StartTyping
`public void StartTyping()`

**用途 / Purpose:** 启动「typing」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.StartTyping();
```

### StopTyping
`public void StopTyping(bool resetWrittenText = false)`

**用途 / Purpose:** 停止「typing」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.StopTyping(false);
```

### SendCurrentlyTypedMessage
`public void SendCurrentlyTypedMessage()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.SendCurrentlyTypedMessage();
```

### ExecuteSaveSizes
`public void ExecuteSaveSizes()`

**用途 / Purpose:** 执行 「save sizes」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.ExecuteSaveSizes();
```

### SetMessageHistoryCapacity
`public void SetMessageHistoryCapacity(int capacity)`

**用途 / Purpose:** 为 「message history capacity」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPChatVM 实例
MPChatVM mPChatVM = ...;
mPChatVM.SetMessageHistoryCapacity(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPChatVM mPChatVM = ...;
mPChatVM.RefreshValues();
```

## 参见

- [本区域目录](../)
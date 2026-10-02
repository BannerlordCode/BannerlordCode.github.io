---
title: "MPChatVM"
description: "MPChatVM 的自动生成类参考。"
---
# MPChatVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public class MPChatVM : ViewModel,IChatHandler `
**Base:** ViewModel,IChatHandler
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs

## 概述

`MPChatVM` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RefreshValues
`public override void RefreshValues() `

### ToggleIncludeCombatLog
`public void ToggleIncludeCombatLog() `

### ExecuteToggleIncludeShouts
`public void ExecuteToggleIncludeShouts() `

### Tick
`public void Tick(float dt) `

### Hide
`public void Hide() `

### Clear
`public void Clear() `

### UpdateObjects
`public void UpdateObjects(Game game,Mission mission) `

### OnFinalize
`public override void OnFinalize() `

### SendMessageToChannel
`public void SendMessageToChannel(ChatChannelType channel,string message) `

### CheckChatFading
`public void CheckChatFading(float dt) `

### SetChatDisabledStateChangedCallback
`public void SetChatDisabledStateChangedCallback(Action<bool> onChatDisabledStateChanged) `

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<TextObject> getToggleChatKeyText) `

### SetGetCycleChannelKeyTextFunc
`public void SetGetCycleChannelKeyTextFunc(Func<TextObject> getCycleChannelsKeyText) `

### SetGetSendMessageKeyTextFunc
`public void SetGetSendMessageKeyTextFunc(Func<TextObject> getSendMessageKeyText) `

### SetGetCancelSendingKeyTextFunc
`public void SetGetCancelSendingKeyTextFunc(Func<TextObject> getCancelSendingKeyText) `

### IsChatAllowedByOptions
`public bool IsChatAllowedByOptions() `

### TypeToChannelAll
`public void TypeToChannelAll(bool startTyping = false) `

### TypeToChannelTeam
`public void TypeToChannelTeam(bool startTyping = false) `

### StartInspectingMessages
`public void StartInspectingMessages() `

### StopInspectingMessages
`public void StopInspectingMessages() `

### StartTyping
`public void StartTyping() `

### StopTyping
`public void StopTyping(bool resetWrittenText = false) `

### SendCurrentlyTypedMessage
`public void SendCurrentlyTypedMessage() `

### ExecuteSaveSizes
`public void ExecuteSaveSizes() `

### SetMessageHistoryCapacity
`public void SetMessageHistoryCapacity(int capacity) `

## 参见

- [本区域目录](../)
- [API 参考](../../)

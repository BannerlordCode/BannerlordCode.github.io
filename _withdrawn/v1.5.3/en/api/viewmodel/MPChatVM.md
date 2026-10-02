---
title: "MPChatVM"
description: "Auto-generated class reference for MPChatVM."
---
# MPChatVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection
**Type:** `public class MPChatVM : ViewModel,IChatHandler `
**Base:** ViewModel, IChatHandler
**Source:** TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs

## Overview

Auto-generated stub for `MPChatVM`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

### ToggleIncludeCombatLog
`public void ToggleIncludeCombatLog()`

### ExecuteToggleIncludeShouts
`public void ExecuteToggleIncludeShouts()`

### Tick
`public void Tick(float dt)`

### Hide
`public void Hide()`

### Clear
`public void Clear()`

### UpdateObjects
`public void UpdateObjects(Game game,Mission mission)`

### OnFinalize
`public override void OnFinalize()`

### SendMessageToChannel
`public void SendMessageToChannel(ChatChannelType channel,string message)`

### CheckChatFading
`public void CheckChatFading(float dt)`

### SetChatDisabledStateChangedCallback
`public void SetChatDisabledStateChangedCallback(Action<bool> onChatDisabledStateChanged)`

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<TextObject> getToggleChatKeyText)`

### SetGetCycleChannelKeyTextFunc
`public void SetGetCycleChannelKeyTextFunc(Func<TextObject> getCycleChannelsKeyText)`

### SetGetSendMessageKeyTextFunc
`public void SetGetSendMessageKeyTextFunc(Func<TextObject> getSendMessageKeyText)`

### SetGetCancelSendingKeyTextFunc
`public void SetGetCancelSendingKeyTextFunc(Func<TextObject> getCancelSendingKeyText)`

### IsChatAllowedByOptions
`public bool IsChatAllowedByOptions()`

### TypeToChannelAll
`public void TypeToChannelAll(bool startTyping = false)`

### TypeToChannelTeam
`public void TypeToChannelTeam(bool startTyping = false)`

### StartInspectingMessages
`public void StartInspectingMessages()`

### StopInspectingMessages
`public void StopInspectingMessages()`

### StartTyping
`public void StartTyping()`

### StopTyping
`public void StopTyping(bool resetWrittenText = false)`

### SendCurrentlyTypedMessage
`public void SendCurrentlyTypedMessage()`

### ExecuteSaveSizes
`public void ExecuteSaveSizes()`

### SetMessageHistoryCapacity
`public void SetMessageHistoryCapacity(int capacity)`

## See Also

- [Section index](../)

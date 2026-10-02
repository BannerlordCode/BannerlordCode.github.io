---
title: "MPChatVM"
description: "MPChatVM：TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer 的 public 类，继承 ViewModel、IChatHandler；公开成员 53 个（方法 25、属性 23、字段 4）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MPChatVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MPChatVM : ViewModel, IChatHandler`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MPChatVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs。它是一个 public 类，实现/继承 ViewModel、IChatHandler，继承链为 MPChatVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 53 个：25 方法、23 属性、4 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MPChatVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer`，继承链 MPChatVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 25/53，属性 23/53），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActiveChannelType` | `public ChatChannelType ActiveChannelType` | 属性 |
| `MPChatVM` | `public MPChatVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ToggleIncludeCombatLog` | `public void ToggleIncludeCombatLog()` | 方法 |
| `ExecuteToggleIncludeShouts` | `public void ExecuteToggleIncludeShouts()` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `Hide` | `public void Hide()` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `UpdateObjects` | `public void UpdateObjects(Game game, Mission mission)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SendMessageToChannel` | `public void SendMessageToChannel(ChatChannelType channel, string message)` | 方法 |
| `CheckChatFading` | `public void CheckChatFading(float dt)` | 方法 |
| `SetChatDisabledStateChangedCallback` | `public void SetChatDisabledStateChangedCallback(Action<bool>onChatDisabledStateChanged)` | 方法 |
| `SetGetKeyTextFromKeyIDFunc` | `public void SetGetKeyTextFromKeyIDFunc(Func<TextObject>getToggleChatKeyText)` | 方法 |
| `SetGetCycleChannelKeyTextFunc` | `public void SetGetCycleChannelKeyTextFunc(Func<TextObject>getCycleChannelsKeyText)` | 方法 |
| `SetGetSendMessageKeyTextFunc` | `public void SetGetSendMessageKeyTextFunc(Func<TextObject>getSendMessageKeyText)` | 方法 |
| `SetGetCancelSendingKeyTextFunc` | `public void SetGetCancelSendingKeyTextFunc(Func<TextObject>getCancelSendingKeyText)` | 方法 |
| `IsChatAllowedByOptions` | `public bool IsChatAllowedByOptions()` | 方法 |
| `TypeToChannelAll` | `public void TypeToChannelAll(bool startTyping = false)` | 方法 |
| `TypeToChannelTeam` | `public void TypeToChannelTeam(bool startTyping = false)` | 方法 |
| `StartInspectingMessages` | `public void StartInspectingMessages()` | 方法 |
| `StopInspectingMessages` | `public void StopInspectingMessages()` | 方法 |
| `StartTyping` | `public void StartTyping()` | 方法 |
| `StopTyping` | `public void StopTyping(bool resetWrittenText = false)` | 方法 |
| `SendCurrentlyTypedMessage` | `public void SendCurrentlyTypedMessage()` | 方法 |
| `ExecuteSaveSizes` | `public void ExecuteSaveSizes()` | 方法 |
| `SetMessageHistoryCapacity` | `public void SetMessageHistoryCapacity(int capacity)` | 方法 |
| `ChatBoxSizeX` | `public float ChatBoxSizeX` | 属性 |
| `ChatBoxSizeY` | `public float ChatBoxSizeY` | 属性 |
| `MaxMessageLength` | `public int MaxMessageLength` | 属性 |
| `IsTypingText` | `public bool IsTypingText` | 属性 |
| `IsInspectingMessages` | `public bool IsInspectingMessages` | 属性 |
| `IsChatDisabled` | `public bool IsChatDisabled` | 属性 |
| `ShowHideShowHint` | `public bool ShowHideShowHint` | 属性 |
| `IsOptionsAvailable` | `public bool IsOptionsAvailable` | 属性 |
| `ShouldHaveOffset` | `public bool ShouldHaveOffset` | 属性 |
| `WrittenText` | `public string WrittenText` | 属性 |
| `ActiveChannelColor` | `public Color ActiveChannelColor` | 属性 |
| `ActiveChannelNameText` | `public string ActiveChannelNameText` | 属性 |
| `HideShowText` | `public string HideShowText` | 属性 |
| `ToggleCombatLogText` | `public string ToggleCombatLogText` | 属性 |
| `ToggleBarkText` | `public string ToggleBarkText` | 属性 |
| `CycleThroughChannelsText` | `public string CycleThroughChannelsText` | 属性 |
| `SendMessageText` | `public string SendMessageText` | 属性 |
| `CancelSendingText` | `public string CancelSendingText` | 属性 |
| `MBBindingList` | `public MBBindingList<MPChatLineVM>MessageHistory` | 属性 |
| `CombatLogHint` | `public HintViewModel CombatLogHint` | 属性 |
| `IncludeCombatLog` | `public bool IncludeCombatLog` | 属性 |
| `IncludeBark` | `public bool IncludeBark` | 属性 |
| `DefaultCategory` | `public const string DefaultCategory` | 字段 |
| `CombatCategory` | `public const string CombatCategory` | 字段 |
| `SocialCategory` | `public const string SocialCategory` | 字段 |
| `BarkCategory` | `public const string BarkCategory` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MPChatLineVM](../MPChatLineVM/)

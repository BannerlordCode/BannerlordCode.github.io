---
title: "MPChatVM"
description: "MPChatVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer, inheriting ViewModel, IChatHandler; 53 exposed members (25 methods, 23 properties, 4 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MPChatVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MPChatVM : ViewModel, IChatHandler`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MPChatVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs. It is a public class, implementing/inheriting ViewModel, IChatHandler; the inheritance chain is MPChatVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 53 public/protected members: 25 methods, 23 properties, 4 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPChatVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer`, inheritance chain MPChatVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 25/53, properties 23/53), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ActiveChannelType` | `public ChatChannelType ActiveChannelType` | property |
| `MPChatVM` | `public MPChatVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ToggleIncludeCombatLog` | `public void ToggleIncludeCombatLog()` | method |
| `ExecuteToggleIncludeShouts` | `public void ExecuteToggleIncludeShouts()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `Hide` | `public void Hide()` | method |
| `Clear` | `public void Clear()` | method |
| `UpdateObjects` | `public void UpdateObjects(Game game, Mission mission)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SendMessageToChannel` | `public void SendMessageToChannel(ChatChannelType channel, string message)` | method |
| `CheckChatFading` | `public void CheckChatFading(float dt)` | method |
| `SetChatDisabledStateChangedCallback` | `public void SetChatDisabledStateChangedCallback(Action<bool>onChatDisabledStateChanged)` | method |
| `SetGetKeyTextFromKeyIDFunc` | `public void SetGetKeyTextFromKeyIDFunc(Func<TextObject>getToggleChatKeyText)` | method |
| `SetGetCycleChannelKeyTextFunc` | `public void SetGetCycleChannelKeyTextFunc(Func<TextObject>getCycleChannelsKeyText)` | method |
| `SetGetSendMessageKeyTextFunc` | `public void SetGetSendMessageKeyTextFunc(Func<TextObject>getSendMessageKeyText)` | method |
| `SetGetCancelSendingKeyTextFunc` | `public void SetGetCancelSendingKeyTextFunc(Func<TextObject>getCancelSendingKeyText)` | method |
| `IsChatAllowedByOptions` | `public bool IsChatAllowedByOptions()` | method |
| `TypeToChannelAll` | `public void TypeToChannelAll(bool startTyping = false)` | method |
| `TypeToChannelTeam` | `public void TypeToChannelTeam(bool startTyping = false)` | method |
| `StartInspectingMessages` | `public void StartInspectingMessages()` | method |
| `StopInspectingMessages` | `public void StopInspectingMessages()` | method |
| `StartTyping` | `public void StartTyping()` | method |
| `StopTyping` | `public void StopTyping(bool resetWrittenText = false)` | method |
| `SendCurrentlyTypedMessage` | `public void SendCurrentlyTypedMessage()` | method |
| `ExecuteSaveSizes` | `public void ExecuteSaveSizes()` | method |
| `SetMessageHistoryCapacity` | `public void SetMessageHistoryCapacity(int capacity)` | method |
| `ChatBoxSizeX` | `public float ChatBoxSizeX` | property |
| `ChatBoxSizeY` | `public float ChatBoxSizeY` | property |
| `MaxMessageLength` | `public int MaxMessageLength` | property |
| `IsTypingText` | `public bool IsTypingText` | property |
| `IsInspectingMessages` | `public bool IsInspectingMessages` | property |
| `IsChatDisabled` | `public bool IsChatDisabled` | property |
| `ShowHideShowHint` | `public bool ShowHideShowHint` | property |
| `IsOptionsAvailable` | `public bool IsOptionsAvailable` | property |
| `ShouldHaveOffset` | `public bool ShouldHaveOffset` | property |
| `WrittenText` | `public string WrittenText` | property |
| `ActiveChannelColor` | `public Color ActiveChannelColor` | property |
| `ActiveChannelNameText` | `public string ActiveChannelNameText` | property |
| `HideShowText` | `public string HideShowText` | property |
| `ToggleCombatLogText` | `public string ToggleCombatLogText` | property |
| `ToggleBarkText` | `public string ToggleBarkText` | property |
| `CycleThroughChannelsText` | `public string CycleThroughChannelsText` | property |
| `SendMessageText` | `public string SendMessageText` | property |
| `CancelSendingText` | `public string CancelSendingText` | property |
| `MBBindingList` | `public MBBindingList<MPChatLineVM>MessageHistory` | property |
| `CombatLogHint` | `public HintViewModel CombatLogHint` | property |
| `IncludeCombatLog` | `public bool IncludeCombatLog` | property |
| `IncludeBark` | `public bool IncludeBark` | property |
| `DefaultCategory` | `public const string DefaultCategory` | field |
| `CombatCategory` | `public const string CombatCategory` | field |
| `SocialCategory` | `public const string SocialCategory` | field |
| `BarkCategory` | `public const string BarkCategory` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MPChatLineVM](../MPChatLineVM/)

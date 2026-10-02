---
title: "ChatBox"
description: "ChatBox: a public class in TaleWorlds.MountAndBlade, inheriting GameHandler; 35 exposed members (25 methods, 2 properties, 1 fields). Source: TaleWorlds.MountAndBlade/ChatBox.cs."
---
# ChatBox

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ChatBox : GameHandler`
**File:** `TaleWorlds.MountAndBlade/ChatBox.cs`

## Overview

ChatBox lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ChatBox.cs. It is a public class, implementing/inheriting GameHandler; the inheritance chain is ChatBox → GameHandler. It exposes 35 public/protected members: 25 methods, 2 properties, 1 fields, 7 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChatBox is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ChatBox → GameHandler. The surface is method-led (methods 25/35, properties 2/35), so it mostly exposes operations. GameHandler on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ChatBox.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsContentRestricted` | `public bool IsContentRestricted` | property |
| `NetworkReady` | `public bool NetworkReady` | property |
| `OnGameStart` | `protected override void OnGameStart()` | method |
| `OnBeforeSave` | `public override void OnBeforeSave()` | method |
| `OnAfterSave` | `public override void OnAfterSave()` | method |
| `OnGameEnd` | `protected override void OnGameEnd()` | method |
| `SendMessageToAll` | `public void SendMessageToAll(string message)` | method |
| `SendMessageToAll` | `public void SendMessageToAll(string message, List<VirtualPlayer>receiverList)` | method |
| `SendMessageToTeam` | `public void SendMessageToTeam(string message)` | method |
| `SendMessageToTeam` | `public void SendMessageToTeam(string message, List<VirtualPlayer>receiverList)` | method |
| `SendMessageToWhisperTarget` | `public void SendMessageToWhisperTarget(string message, string platformName, string whisperTarget)` | method |
| `OnGameNetworkBegin` | `protected override void OnGameNetworkBegin()` | method |
| `OnGameNetworkEnd` | `protected override void OnGameNetworkEnd()` | method |
| `ServerSendServerMessageToEveryone` | `public static void ServerSendServerMessageToEveryone(string message)` | method |
| `ResetMuteList` | `public void ResetMuteList()` | method |
| `AddWhisperMessage` | `public static void AddWhisperMessage(string fromUserName, string messageBody)` | method |
| `AddErrorWhisperMessage` | `public static void AddErrorWhisperMessage(string toUserName)` | method |
| `SetPlayerMuted` | `public void SetPlayerMuted(PlayerId playerID, bool isMuted)` | method |
| `SetPlayerMutedFromPlatform` | `public void SetPlayerMutedFromPlatform(PlayerId playerID, bool isMuted)` | method |
| `IsPlayerMuted` | `public bool IsPlayerMuted(PlayerId player)` | method |
| `IsPlayerMutedFromPlatform` | `public bool IsPlayerMutedFromPlatform(PlayerId player)` | method |
| `IsPlayerMutedFromGame` | `public bool IsPlayerMutedFromGame(PlayerId player)` | method |
| `SetChatFilterLists` | `public void SetChatFilterLists(string[]profanityList, string[]allowList)` | method |
| `InitializeForMultiplayer` | `public void InitializeForMultiplayer()` | method |
| `InitializeForSinglePlayer` | `public void InitializeForSinglePlayer()` | method |
| `OnLogin` | `public void OnLogin()` | method |
| `PlayerMessageReceived;` | `public event PlayerMessageReceivedDelegate PlayerMessageReceived;` | event |
| `WhisperMessageSent;` | `public event WhisperMessageSentDelegate WhisperMessageSent;` | event |
| `WhisperMessageReceived;` | `public event WhisperMessageReceivedDelegate WhisperMessageReceived;` | event |
| `ErrorWhisperMessageReceived;` | `public event ErrorWhisperMessageReceivedDelegate ErrorWhisperMessageReceived;` | event |
| `ServerMessage;` | `public event ServerMessageDelegate ServerMessage;` | event |
| `ServerAdminMessage;` | `public event ServerAdminMessageDelegate ServerAdminMessage;` | event |
| `OnPlayerMuteChanged;` | `public event PlayerMutedDelegate OnPlayerMuteChanged;` | event |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `AdminMessageSoundEvent` | `public const string AdminMessageSoundEvent` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)

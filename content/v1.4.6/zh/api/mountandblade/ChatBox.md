---
title: "ChatBox"
description: "ChatBox：TaleWorlds.MountAndBlade 的 public 类，继承 GameHandler；公开成员 35 个（方法 25、属性 2、字段 1）。源文件 TaleWorlds.MountAndBlade/ChatBox.cs。"
---
# ChatBox

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ChatBox : GameHandler`
**File:** `TaleWorlds.MountAndBlade/ChatBox.cs`

## 概述

ChatBox 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ChatBox.cs。它是一个 public 类，实现/继承 GameHandler，继承链为 ChatBox → GameHandler。public/protected 成员共 35 个：25 方法、2 属性、1 字段、7 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChatBox 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ChatBox → GameHandler。成员构成以方法为主（方法 25/35，属性 2/35），对外主要以操作入口暴露。继承链上的 GameHandler 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ChatBox.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsContentRestricted` | `public bool IsContentRestricted` | 属性 |
| `NetworkReady` | `public bool NetworkReady` | 属性 |
| `OnGameStart` | `protected override void OnGameStart()` | 方法 |
| `OnBeforeSave` | `public override void OnBeforeSave()` | 方法 |
| `OnAfterSave` | `public override void OnAfterSave()` | 方法 |
| `OnGameEnd` | `protected override void OnGameEnd()` | 方法 |
| `SendMessageToAll` | `public void SendMessageToAll(string message)` | 方法 |
| `SendMessageToAll` | `public void SendMessageToAll(string message, List<VirtualPlayer>receiverList)` | 方法 |
| `SendMessageToTeam` | `public void SendMessageToTeam(string message)` | 方法 |
| `SendMessageToTeam` | `public void SendMessageToTeam(string message, List<VirtualPlayer>receiverList)` | 方法 |
| `SendMessageToWhisperTarget` | `public void SendMessageToWhisperTarget(string message, string platformName, string whisperTarget)` | 方法 |
| `OnGameNetworkBegin` | `protected override void OnGameNetworkBegin()` | 方法 |
| `OnGameNetworkEnd` | `protected override void OnGameNetworkEnd()` | 方法 |
| `ServerSendServerMessageToEveryone` | `public static void ServerSendServerMessageToEveryone(string message)` | 方法 |
| `ResetMuteList` | `public void ResetMuteList()` | 方法 |
| `AddWhisperMessage` | `public static void AddWhisperMessage(string fromUserName, string messageBody)` | 方法 |
| `AddErrorWhisperMessage` | `public static void AddErrorWhisperMessage(string toUserName)` | 方法 |
| `SetPlayerMuted` | `public void SetPlayerMuted(PlayerId playerID, bool isMuted)` | 方法 |
| `SetPlayerMutedFromPlatform` | `public void SetPlayerMutedFromPlatform(PlayerId playerID, bool isMuted)` | 方法 |
| `IsPlayerMuted` | `public bool IsPlayerMuted(PlayerId player)` | 方法 |
| `IsPlayerMutedFromPlatform` | `public bool IsPlayerMutedFromPlatform(PlayerId player)` | 方法 |
| `IsPlayerMutedFromGame` | `public bool IsPlayerMutedFromGame(PlayerId player)` | 方法 |
| `SetChatFilterLists` | `public void SetChatFilterLists(string[]profanityList, string[]allowList)` | 方法 |
| `InitializeForMultiplayer` | `public void InitializeForMultiplayer()` | 方法 |
| `InitializeForSinglePlayer` | `public void InitializeForSinglePlayer()` | 方法 |
| `OnLogin` | `public void OnLogin()` | 方法 |
| `PlayerMessageReceived;` | `public event PlayerMessageReceivedDelegate PlayerMessageReceived;` | 事件 |
| `WhisperMessageSent;` | `public event WhisperMessageSentDelegate WhisperMessageSent;` | 事件 |
| `WhisperMessageReceived;` | `public event WhisperMessageReceivedDelegate WhisperMessageReceived;` | 事件 |
| `ErrorWhisperMessageReceived;` | `public event ErrorWhisperMessageReceivedDelegate ErrorWhisperMessageReceived;` | 事件 |
| `ServerMessage;` | `public event ServerMessageDelegate ServerMessage;` | 事件 |
| `ServerAdminMessage;` | `public event ServerAdminMessageDelegate ServerAdminMessage;` | 事件 |
| `OnPlayerMuteChanged;` | `public event PlayerMutedDelegate OnPlayerMuteChanged;` | 事件 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `AdminMessageSoundEvent` | `public const string AdminMessageSoundEvent` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)

---
title: "ChatBox"
description: "ChatBox 的自动生成类参考。"
---
# ChatBox

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatBox : GameHandler `
**Base:** GameHandler
**Source:** TaleWorlds.MountAndBlade/ChatBox.cs

## 概述

`ChatBox` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/ChatBox.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnGameStart
`protected override void OnGameStart() `

### OnBeforeSave
`public override void OnBeforeSave() `

### OnAfterSave
`public override void OnAfterSave() `

### OnGameEnd
`protected override void OnGameEnd() `

### SendMessageToAll
`public void SendMessageToAll(string message) `
`public void SendMessageToAll(string message,List<VirtualPlayer> receiverList) `

### SendMessageToTeam
`public void SendMessageToTeam(string message) `
`public void SendMessageToTeam(string message,List<VirtualPlayer> receiverList) `

### SendMessageToWhisperTarget
`public void SendMessageToWhisperTarget(string message,string platformName,string whisperTarget) `

### OnGameNetworkBegin
`protected override void OnGameNetworkBegin() `

### OnGameNetworkEnd
`protected override void OnGameNetworkEnd() `

### ServerSendServerMessageToEveryone
`public static void ServerSendServerMessageToEveryone(string message) `

### ResetMuteList
`public void ResetMuteList() `

### AddWhisperMessage
`public static void AddWhisperMessage(string fromUserName,string messageBody) `

### AddErrorWhisperMessage
`public static void AddErrorWhisperMessage(string toUserName) `

### SetPlayerMuted
`public void SetPlayerMuted(PlayerId playerID,bool isMuted) `

### SetPlayerMutedFromPlatform
`public void SetPlayerMutedFromPlatform(PlayerId playerID,bool isMuted) `

### IsPlayerMuted
`public bool IsPlayerMuted(PlayerId player) `

### IsPlayerMutedFromPlatform
`public bool IsPlayerMutedFromPlatform(PlayerId player) `

### IsPlayerMutedFromGame
`public bool IsPlayerMutedFromGame(PlayerId player) `

### SetChatFilterLists
`public void SetChatFilterLists(string[] profanityList,string[] allowList) `

### CensorClientText
`public string CensorClientText(string text) `

### InitializeForMultiplayer
`public void InitializeForMultiplayer() `

### InitializeForSinglePlayer
`public void InitializeForSinglePlayer() `

### OnLogin
`public void OnLogin() `

### OnTick
`protected override void OnTick(float dt) `

## 参见

- [本区域目录](../)
- [API 参考](../../)

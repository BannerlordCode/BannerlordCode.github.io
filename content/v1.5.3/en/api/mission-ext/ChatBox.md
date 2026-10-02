---
title: "ChatBox"
description: "Auto-generated class reference for ChatBox."
---
# ChatBox

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatBox : GameHandler `
**Base:** GameHandler
**Source:** TaleWorlds.MountAndBlade/ChatBox.cs

## Overview

Auto-generated stub for `ChatBox`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnGameStart
`protected override void OnGameStart()`

### OnBeforeSave
`public override void OnBeforeSave()`

### OnAfterSave
`public override void OnAfterSave()`

### OnGameEnd
`protected override void OnGameEnd()`

### SendMessageToAll
`public void SendMessageToAll(string message)`

### SendMessageToTeam
`public void SendMessageToTeam(string message)`

### SendMessageToWhisperTarget
`public void SendMessageToWhisperTarget(string message,string platformName,string whisperTarget)`

### OnGameNetworkBegin
`protected override void OnGameNetworkBegin()`

### OnGameNetworkEnd
`protected override void OnGameNetworkEnd()`

### ServerSendServerMessageToEveryone
`public static void ServerSendServerMessageToEveryone(string message)`

### ResetMuteList
`public void ResetMuteList()`

### AddWhisperMessage
`public static void AddWhisperMessage(string fromUserName,string messageBody)`

### AddErrorWhisperMessage
`public static void AddErrorWhisperMessage(string toUserName)`

### SetPlayerMuted
`public void SetPlayerMuted(PlayerId playerID,bool isMuted)`

### SetPlayerMutedFromPlatform
`public void SetPlayerMutedFromPlatform(PlayerId playerID,bool isMuted)`

### IsPlayerMuted
`public bool IsPlayerMuted(PlayerId player)`

### IsPlayerMutedFromPlatform
`public bool IsPlayerMutedFromPlatform(PlayerId player)`

### IsPlayerMutedFromGame
`public bool IsPlayerMutedFromGame(PlayerId player)`

### SetChatFilterLists
`public void SetChatFilterLists(string[] profanityList,string[] allowList)`

### CensorClientText
`public string CensorClientText(string text)`

### InitializeForMultiplayer
`public void InitializeForMultiplayer()`

### InitializeForSinglePlayer
`public void InitializeForSinglePlayer()`

### OnLogin
`public void OnLogin()`

### OnTick
`protected override void OnTick(float dt)`

## See Also

- [Section index](../)

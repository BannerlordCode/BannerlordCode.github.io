---
title: "ChatBox"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ChatBox`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChatBox

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatBox : GameHandler`
**Base:** `GameHandler`
**File:** `TaleWorlds.MountAndBlade/ChatBox.cs`

## 概述

`ChatBox` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsContentRestricted` | `public bool IsContentRestricted { get; }` |
| `NetworkReady` | `public bool NetworkReady { get; }` |
| `IsExpired` | `public bool IsExpired { get; }` |

## 主要方法

### OnBeforeSave
`public override void OnBeforeSave()`

**用途 / Purpose:** 当 `before save` 事件触发时调用此方法。

### OnAfterSave
`public override void OnAfterSave()`

**用途 / Purpose:** 当 `after save` 事件触发时调用此方法。

### SendMessageToAll
`public void SendMessageToAll(string message)`

**用途 / Purpose:** 处理 `send message to all` 相关逻辑。

### SendMessageToAll
`public void SendMessageToAll(string message, List<VirtualPlayer> receiverList)`

**用途 / Purpose:** 处理 `send message to all` 相关逻辑。

### SendMessageToTeam
`public void SendMessageToTeam(string message)`

**用途 / Purpose:** 处理 `send message to team` 相关逻辑。

### SendMessageToTeam
`public void SendMessageToTeam(string message, List<VirtualPlayer> receiverList)`

**用途 / Purpose:** 处理 `send message to team` 相关逻辑。

### SendMessageToWhisperTarget
`public void SendMessageToWhisperTarget(string message, string platformName, string whisperTarget)`

**用途 / Purpose:** 处理 `send message to whisper target` 相关逻辑。

### ServerSendServerMessageToEveryone
`public static void ServerSendServerMessageToEveryone(string message)`

**用途 / Purpose:** 处理 `server send server message to everyone` 相关逻辑。

### ResetMuteList
`public void ResetMuteList()`

**用途 / Purpose:** 将 `mute list` 重置为初始状态。

### AddWhisperMessage
`public static void AddWhisperMessage(string fromUserName, string messageBody)`

**用途 / Purpose:** 向当前集合/状态中添加 `whisper message`。

### AddErrorWhisperMessage
`public static void AddErrorWhisperMessage(string toUserName)`

**用途 / Purpose:** 向当前集合/状态中添加 `error whisper message`。

### SetPlayerMuted
`public void SetPlayerMuted(PlayerId playerID, bool isMuted)`

**用途 / Purpose:** 设置 `player muted` 的值或状态。

### SetPlayerMutedFromPlatform
`public void SetPlayerMutedFromPlatform(PlayerId playerID, bool isMuted)`

**用途 / Purpose:** 设置 `player muted from platform` 的值或状态。

### IsPlayerMuted
`public bool IsPlayerMuted(PlayerId player)`

**用途 / Purpose:** 处理 `is player muted` 相关逻辑。

### IsPlayerMutedFromPlatform
`public bool IsPlayerMutedFromPlatform(PlayerId player)`

**用途 / Purpose:** 处理 `is player muted from platform` 相关逻辑。

### IsPlayerMutedFromGame
`public bool IsPlayerMutedFromGame(PlayerId player)`

**用途 / Purpose:** 处理 `is player muted from game` 相关逻辑。

### SetChatFilterLists
`public void SetChatFilterLists(string profanityList, string allowList)`

**用途 / Purpose:** 设置 `chat filter lists` 的值或状态。

### InitializeForMultiplayer
`public void InitializeForMultiplayer()`

**用途 / Purpose:** 初始化 `for multiplayer` 的状态、资源或绑定。

### InitializeForSinglePlayer
`public void InitializeForSinglePlayer()`

**用途 / Purpose:** 初始化 `for single player` 的状态、资源或绑定。

### OnLogin
`public void OnLogin()`

**用途 / Purpose:** 当 `login` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ChatBox();
value.OnBeforeSave();
```

## 参见

- [完整类目录](../catalog)
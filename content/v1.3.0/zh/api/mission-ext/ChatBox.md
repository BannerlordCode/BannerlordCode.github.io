---
title: "ChatBox"
description: "ChatBox 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 在 before save 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.OnBeforeSave();
```

### OnAfterSave
`public override void OnAfterSave()`

**用途 / Purpose:** **用途 / Purpose:** 在 after save 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.OnAfterSave();
```

### SendMessageToAll
`public void SendMessageToAll(string message)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SendMessageToAll 对应的操作。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.SendMessageToAll("example");
```

### SendMessageToAll
`public void SendMessageToAll(string message, List<VirtualPlayer> receiverList)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SendMessageToAll 对应的操作。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.SendMessageToAll("example", receiverList);
```

### SendMessageToTeam
`public void SendMessageToTeam(string message)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SendMessageToTeam 对应的操作。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.SendMessageToTeam("example");
```

### SendMessageToTeam
`public void SendMessageToTeam(string message, List<VirtualPlayer> receiverList)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SendMessageToTeam 对应的操作。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.SendMessageToTeam("example", receiverList);
```

### SendMessageToWhisperTarget
`public void SendMessageToWhisperTarget(string message, string platformName, string whisperTarget)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SendMessageToWhisperTarget 对应的操作。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.SendMessageToWhisperTarget("example", "example", "example");
```

### ServerSendServerMessageToEveryone
`public static void ServerSendServerMessageToEveryone(string message)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ServerSendServerMessageToEveryone 对应的操作。

```csharp
// 静态调用，不需要实例
ChatBox.ServerSendServerMessageToEveryone("example");
```

### ResetMuteList
`public void ResetMuteList()`

**用途 / Purpose:** **用途 / Purpose:** 将 mute list 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.ResetMuteList();
```

### AddWhisperMessage
`public static void AddWhisperMessage(string fromUserName, string messageBody)`

**用途 / Purpose:** **用途 / Purpose:** 将 whisper message 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
ChatBox.AddWhisperMessage("example", "example");
```

### AddErrorWhisperMessage
`public static void AddErrorWhisperMessage(string toUserName)`

**用途 / Purpose:** **用途 / Purpose:** 将 error whisper message 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
ChatBox.AddErrorWhisperMessage("example");
```

### SetPlayerMuted
`public void SetPlayerMuted(PlayerId playerID, bool isMuted)`

**用途 / Purpose:** **用途 / Purpose:** 为 player muted 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.SetPlayerMuted(playerID, false);
```

### SetPlayerMutedFromPlatform
`public void SetPlayerMutedFromPlatform(PlayerId playerID, bool isMuted)`

**用途 / Purpose:** **用途 / Purpose:** 为 player muted from platform 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.SetPlayerMutedFromPlatform(playerID, false);
```

### IsPlayerMuted
`public bool IsPlayerMuted(PlayerId player)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 player muted 状态或条件。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
var result = chatBox.IsPlayerMuted(player);
```

### IsPlayerMutedFromPlatform
`public bool IsPlayerMutedFromPlatform(PlayerId player)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 player muted from platform 状态或条件。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
var result = chatBox.IsPlayerMutedFromPlatform(player);
```

### IsPlayerMutedFromGame
`public bool IsPlayerMutedFromGame(PlayerId player)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 player muted from game 状态或条件。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
var result = chatBox.IsPlayerMutedFromGame(player);
```

### SetChatFilterLists
`public void SetChatFilterLists(string profanityList, string allowList)`

**用途 / Purpose:** **用途 / Purpose:** 为 chat filter lists 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.SetChatFilterLists("example", "example");
```

### InitializeForMultiplayer
`public void InitializeForMultiplayer()`

**用途 / Purpose:** **用途 / Purpose:** 为 for multiplayer 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.InitializeForMultiplayer();
```

### InitializeForSinglePlayer
`public void InitializeForSinglePlayer()`

**用途 / Purpose:** **用途 / Purpose:** 为 for single player 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.InitializeForSinglePlayer();
```

### OnLogin
`public void OnLogin()`

**用途 / Purpose:** **用途 / Purpose:** 在 login 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ChatBox 实例
ChatBox chatBox = ...;
chatBox.OnLogin();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ChatBox chatBox = ...;
chatBox.OnBeforeSave();
```

## 参见

- [本区域目录](../)
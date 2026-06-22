<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ChatBox`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChatBox

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`ChatBox` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsContentRestricted` | `public bool IsContentRestricted { get; }` |
| `NetworkReady` | `public bool NetworkReady { get; }` |
| `IsExpired` | `public bool IsExpired { get; }` |


## 主要方法

### OnBeforeSave

```csharp
public override void OnBeforeSave()
```

### OnAfterSave

```csharp
public override void OnAfterSave()
```

### SendMessageToAll

```csharp
public void SendMessageToAll(string message)
```

### SendMessageToAll

```csharp
public void SendMessageToAll(string message, List<VirtualPlayer> receiverList)
```

### SendMessageToTeam

```csharp
public void SendMessageToTeam(string message)
```

### SendMessageToTeam

```csharp
public void SendMessageToTeam(string message, List<VirtualPlayer> receiverList)
```

### SendMessageToWhisperTarget

```csharp
public void SendMessageToWhisperTarget(string message, string platformName, string whisperTarget)
```

### ServerSendServerMessageToEveryone

```csharp
public static void ServerSendServerMessageToEveryone(string message)
```

### ResetMuteList

```csharp
public void ResetMuteList()
```

### AddWhisperMessage

```csharp
public static void AddWhisperMessage(string fromUserName, string messageBody)
```

### AddErrorWhisperMessage

```csharp
public static void AddErrorWhisperMessage(string toUserName)
```

### SetPlayerMuted

```csharp
public void SetPlayerMuted(PlayerId playerID, bool isMuted)
```

### SetPlayerMutedFromPlatform

```csharp
public void SetPlayerMutedFromPlatform(PlayerId playerID, bool isMuted)
```

### IsPlayerMuted

```csharp
public bool IsPlayerMuted(PlayerId player)
```

### IsPlayerMutedFromPlatform

```csharp
public bool IsPlayerMutedFromPlatform(PlayerId player)
```

### IsPlayerMutedFromGame

```csharp
public bool IsPlayerMutedFromGame(PlayerId player)
```

### SetChatFilterLists

```csharp
public void SetChatFilterLists(string profanityList, string allowList)
```

### InitializeForMultiplayer

```csharp
public void InitializeForMultiplayer()
```

### InitializeForSinglePlayer

```csharp
public void InitializeForSinglePlayer()
```

### OnLogin

```csharp
public void OnLogin()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
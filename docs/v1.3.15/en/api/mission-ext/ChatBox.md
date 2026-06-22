<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChatBox`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChatBox

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `ChatBox` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsContentRestricted` | `public bool IsContentRestricted { get; }` |
| `NetworkReady` | `public bool NetworkReady { get; }` |
| `IsExpired` | `public bool IsExpired { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
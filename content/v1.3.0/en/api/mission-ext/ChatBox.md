---
title: "ChatBox"
description: "Auto-generated class reference for ChatBox."
---
# ChatBox

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatBox : GameHandler`
**Base:** `GameHandler`
**File:** `TaleWorlds.MountAndBlade/ChatBox.cs`

## Overview

`ChatBox` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsContentRestricted` | `public bool IsContentRestricted { get; }` |
| `NetworkReady` | `public bool NetworkReady { get; }` |
| `IsExpired` | `public bool IsExpired { get; }` |

## Key Methods

### OnBeforeSave
`public override void OnBeforeSave()`

**Purpose:** **Purpose:** Invoked when the before save event is raised.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.OnBeforeSave();
```

### OnAfterSave
`public override void OnAfterSave()`

**Purpose:** **Purpose:** Invoked when the after save event is raised.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.OnAfterSave();
```

### SendMessageToAll
`public void SendMessageToAll(string message)`

**Purpose:** **Purpose:** Executes the SendMessageToAll logic.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.SendMessageToAll("example");
```

### SendMessageToAll
`public void SendMessageToAll(string message, List<VirtualPlayer> receiverList)`

**Purpose:** **Purpose:** Executes the SendMessageToAll logic.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.SendMessageToAll("example", receiverList);
```

### SendMessageToTeam
`public void SendMessageToTeam(string message)`

**Purpose:** **Purpose:** Executes the SendMessageToTeam logic.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.SendMessageToTeam("example");
```

### SendMessageToTeam
`public void SendMessageToTeam(string message, List<VirtualPlayer> receiverList)`

**Purpose:** **Purpose:** Executes the SendMessageToTeam logic.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.SendMessageToTeam("example", receiverList);
```

### SendMessageToWhisperTarget
`public void SendMessageToWhisperTarget(string message, string platformName, string whisperTarget)`

**Purpose:** **Purpose:** Executes the SendMessageToWhisperTarget logic.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.SendMessageToWhisperTarget("example", "example", "example");
```

### ServerSendServerMessageToEveryone
`public static void ServerSendServerMessageToEveryone(string message)`

**Purpose:** **Purpose:** Executes the ServerSendServerMessageToEveryone logic.

```csharp
// Static call; no instance required
ChatBox.ServerSendServerMessageToEveryone("example");
```

### ResetMuteList
`public void ResetMuteList()`

**Purpose:** **Purpose:** Returns mute list to its default or initial condition.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.ResetMuteList();
```

### AddWhisperMessage
`public static void AddWhisperMessage(string fromUserName, string messageBody)`

**Purpose:** **Purpose:** Adds whisper message to the current collection or state.

```csharp
// Static call; no instance required
ChatBox.AddWhisperMessage("example", "example");
```

### AddErrorWhisperMessage
`public static void AddErrorWhisperMessage(string toUserName)`

**Purpose:** **Purpose:** Adds error whisper message to the current collection or state.

```csharp
// Static call; no instance required
ChatBox.AddErrorWhisperMessage("example");
```

### SetPlayerMuted
`public void SetPlayerMuted(PlayerId playerID, bool isMuted)`

**Purpose:** **Purpose:** Assigns a new value to player muted and updates the object's internal state.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.SetPlayerMuted(playerID, false);
```

### SetPlayerMutedFromPlatform
`public void SetPlayerMutedFromPlatform(PlayerId playerID, bool isMuted)`

**Purpose:** **Purpose:** Assigns a new value to player muted from platform and updates the object's internal state.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.SetPlayerMutedFromPlatform(playerID, false);
```

### IsPlayerMuted
`public bool IsPlayerMuted(PlayerId player)`

**Purpose:** **Purpose:** Determines whether the this instance is in the player muted state or condition.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
var result = chatBox.IsPlayerMuted(player);
```

### IsPlayerMutedFromPlatform
`public bool IsPlayerMutedFromPlatform(PlayerId player)`

**Purpose:** **Purpose:** Determines whether the this instance is in the player muted from platform state or condition.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
var result = chatBox.IsPlayerMutedFromPlatform(player);
```

### IsPlayerMutedFromGame
`public bool IsPlayerMutedFromGame(PlayerId player)`

**Purpose:** **Purpose:** Determines whether the this instance is in the player muted from game state or condition.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
var result = chatBox.IsPlayerMutedFromGame(player);
```

### SetChatFilterLists
`public void SetChatFilterLists(string profanityList, string allowList)`

**Purpose:** **Purpose:** Assigns a new value to chat filter lists and updates the object's internal state.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.SetChatFilterLists("example", "example");
```

### InitializeForMultiplayer
`public void InitializeForMultiplayer()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by for multiplayer.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.InitializeForMultiplayer();
```

### InitializeForSinglePlayer
`public void InitializeForSinglePlayer()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by for single player.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.InitializeForSinglePlayer();
```

### OnLogin
`public void OnLogin()`

**Purpose:** **Purpose:** Invoked when the login event is raised.

```csharp
// Obtain an instance of ChatBox from the subsystem API first
ChatBox chatBox = ...;
chatBox.OnLogin();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ChatBox chatBox = ...;
chatBox.OnBeforeSave();
```

## See Also

- [Area Index](../)
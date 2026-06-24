<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChatBox`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `before save` event is raised.

### OnAfterSave
`public override void OnAfterSave()`

**Purpose:** Called when the `after save` event is raised.

### SendMessageToAll
`public void SendMessageToAll(string message)`

**Purpose:** Handles logic related to `send message to all`.

### SendMessageToAll
`public void SendMessageToAll(string message, List<VirtualPlayer> receiverList)`

**Purpose:** Handles logic related to `send message to all`.

### SendMessageToTeam
`public void SendMessageToTeam(string message)`

**Purpose:** Handles logic related to `send message to team`.

### SendMessageToTeam
`public void SendMessageToTeam(string message, List<VirtualPlayer> receiverList)`

**Purpose:** Handles logic related to `send message to team`.

### SendMessageToWhisperTarget
`public void SendMessageToWhisperTarget(string message, string platformName, string whisperTarget)`

**Purpose:** Handles logic related to `send message to whisper target`.

### ServerSendServerMessageToEveryone
`public static void ServerSendServerMessageToEveryone(string message)`

**Purpose:** Handles logic related to `server send server message to everyone`.

### ResetMuteList
`public void ResetMuteList()`

**Purpose:** Resets `mute list` to its initial state.

### AddWhisperMessage
`public static void AddWhisperMessage(string fromUserName, string messageBody)`

**Purpose:** Adds `whisper message` to the current collection or state.

### AddErrorWhisperMessage
`public static void AddErrorWhisperMessage(string toUserName)`

**Purpose:** Adds `error whisper message` to the current collection or state.

### SetPlayerMuted
`public void SetPlayerMuted(PlayerId playerID, bool isMuted)`

**Purpose:** Sets the value or state of `player muted`.

### SetPlayerMutedFromPlatform
`public void SetPlayerMutedFromPlatform(PlayerId playerID, bool isMuted)`

**Purpose:** Sets the value or state of `player muted from platform`.

### IsPlayerMuted
`public bool IsPlayerMuted(PlayerId player)`

**Purpose:** Handles logic related to `is player muted`.

### IsPlayerMutedFromPlatform
`public bool IsPlayerMutedFromPlatform(PlayerId player)`

**Purpose:** Handles logic related to `is player muted from platform`.

### IsPlayerMutedFromGame
`public bool IsPlayerMutedFromGame(PlayerId player)`

**Purpose:** Handles logic related to `is player muted from game`.

### SetChatFilterLists
`public void SetChatFilterLists(string profanityList, string allowList)`

**Purpose:** Sets the value or state of `chat filter lists`.

### InitializeForMultiplayer
`public void InitializeForMultiplayer()`

**Purpose:** Initializes the state, resources, or bindings for `for multiplayer`.

### InitializeForSinglePlayer
`public void InitializeForSinglePlayer()`

**Purpose:** Initializes the state, resources, or bindings for `for single player`.

### OnLogin
`public void OnLogin()`

**Purpose:** Called when the `login` event is raised.

## Usage Example

```csharp
var value = new ChatBox();
value.OnBeforeSave();
```

## See Also

- [Complete Class Catalog](../catalog)
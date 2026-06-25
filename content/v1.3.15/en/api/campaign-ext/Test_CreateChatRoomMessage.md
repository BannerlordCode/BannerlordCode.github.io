---
title: "Test_CreateChatRoomMessage"
description: "Auto-generated class reference for Test_CreateChatRoomMessage."
---
# Test_CreateChatRoomMessage

**Namespace:** Messages.FromClient.ToLobbyServer
**Module:** Messages.FromClient
**Type:** `public class Test_CreateChatRoomMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromClient/ToLobbyServer/Test_CreateChatRoomMessage.cs`

## Overview

`Test_CreateChatRoomMessage` lives in `Messages.FromClient.ToLobbyServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromClient.ToLobbyServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
Test_CreateChatRoomMessage instance = ...;
```

## See Also

- [Area Index](../)
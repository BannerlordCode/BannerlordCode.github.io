---
title: "FindGameAnswerMessage"
description: "Auto-generated class reference for FindGameAnswerMessage."
---
# FindGameAnswerMessage

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class FindGameAnswerMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/FindGameAnswerMessage.cs`

## Overview

`FindGameAnswerMessage` lives in `Messages.FromLobbyServer.ToClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromLobbyServer.ToClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Successful` | `public bool Successful { get; }` |
| `SelectedAndEnabledGameTypes` | `public string SelectedAndEnabledGameTypes { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
FindGameAnswerMessage instance = ...;
```

## See Also

- [Area Index](../)
---
title: "LobbyNotification"
description: "Auto-generated class reference for LobbyNotification."
---
# LobbyNotification

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyNotification`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/LobbyNotification.cs`

## Overview

`LobbyNotification` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; set; }` |
| `Type` | `public NotificationType Type { get; set; }` |
| `Date` | `public DateTime Date { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `Parameters` | `public Dictionary<string, string> Parameters { get; set; }` |

## Key Methods

### GetParametersAsString
`public string GetParametersAsString()`

**Purpose:** **Purpose:** Reads and returns the parameters as string value held by the this instance.

```csharp
// Obtain an instance of LobbyNotification from the subsystem API first
LobbyNotification lobbyNotification = ...;
var result = lobbyNotification.GetParametersAsString();
```

### GetTextObjectOfMessage
`public TextObject GetTextObjectOfMessage()`

**Purpose:** **Purpose:** Reads and returns the text object of message value held by the this instance.

```csharp
// Obtain an instance of LobbyNotification from the subsystem API first
LobbyNotification lobbyNotification = ...;
var result = lobbyNotification.GetTextObjectOfMessage();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LobbyNotification lobbyNotification = ...;
lobbyNotification.GetParametersAsString();
```

## See Also

- [Area Index](../)
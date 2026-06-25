---
title: "ServerNotification"
description: "Auto-generated class reference for ServerNotification."
---
# ServerNotification

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ServerNotification`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ServerNotification.cs`

## Overview

`ServerNotification` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public ServerNotificationType Type { get; }` |
| `Message` | `public string Message { get; }` |

## Key Methods

### GetTextObjectOfMessage
`public TextObject GetTextObjectOfMessage()`

**Purpose:** Reads and returns the `text object of message` value held by the current object.

```csharp
// Obtain an instance of ServerNotification from the subsystem API first
ServerNotification serverNotification = ...;
var result = serverNotification.GetTextObjectOfMessage();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ServerNotification serverNotification = ...;
serverNotification.GetTextObjectOfMessage();
```

## See Also

- [Area Index](../)
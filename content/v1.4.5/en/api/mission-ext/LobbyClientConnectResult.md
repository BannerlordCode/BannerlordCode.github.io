---
title: "LobbyClientConnectResult"
description: "Auto-generated class reference for LobbyClientConnectResult."
---
# LobbyClientConnectResult

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyClientConnectResult`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/LobbyClientConnectResult.cs`

## Overview

`LobbyClientConnectResult` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Connected` | `public bool Connected { get; }` |
| `Error` | `public TextObject Error { get; }` |

## Key Methods

### FromServerConnectResult
`public static LobbyClientConnectResult FromServerConnectResult(string errorCode, Dictionary<string, string> parameters)`

**Purpose:** **Purpose:** Executes the FromServerConnectResult logic.

```csharp
// Static call; no instance required
LobbyClientConnectResult.FromServerConnectResult("example", dictionary<string, "example");
```

## Usage Example

```csharp
LobbyClientConnectResult.FromServerConnectResult("example", dictionary<string, "example");
```

## See Also

- [Area Index](../)
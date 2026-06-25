---
title: "LobbyClientConnectResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyClientConnectResult`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyClientConnectResult

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyClientConnectResult`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/LobbyClientConnectResult.cs`

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

**Purpose:** Handles logic related to `from server connect result`.

## Usage Example

```csharp
LobbyClientConnectResult.FromServerConnectResult("example", dictionary<string, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
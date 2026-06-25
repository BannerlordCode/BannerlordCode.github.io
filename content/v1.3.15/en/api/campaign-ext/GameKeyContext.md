---
title: "GameKeyContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameKeyContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameKeyContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public abstract class GameKeyContext`
**Base:** none
**File:** `TaleWorlds.InputSystem/GameKeyContext.cs`

## Overview

`GameKeyContext` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameKeyCategoryId` | `public string GameKeyCategoryId { get; }` |
| `Type` | `public GameKeyContext.GameKeyContextType Type { get; }` |
| `RegisteredGameKeys` | `public MBReadOnlyList<GameKey> RegisteredGameKeys { get; }` |
| `RegisteredHotKeys` | `public Dictionary<string, HotKey>.ValueCollection RegisteredHotKeys { get; }` |
| `RegisteredGameAxisKeys` | `public Dictionary<string, GameAxisKey>.ValueCollection RegisteredGameAxisKeys { get; }` |

## Key Methods

### GetHotKey
`public HotKey GetHotKey(string hotKeyId)`

**Purpose:** Gets the current value of `hot key`.

### GetGameKey
`public GameKey GetGameKey(int gameKeyId)`

**Purpose:** Gets the current value of `game key`.

### GetHotKeyId
`public string GetHotKeyId(string hotKeyId)`

**Purpose:** Gets the current value of `hot key id`.

### GetHotKeyId
`public string GetHotKeyId(int gameKeyId)`

**Purpose:** Gets the current value of `hot key id`.

## Usage Example

```csharp
var implementation = new CustomGameKeyContext();
```

## See Also

- [Complete Class Catalog](../catalog)
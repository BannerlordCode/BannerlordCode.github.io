---
title: "GameKeyContext"
description: "Auto-generated class reference for GameKeyContext."
---
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

**Purpose:** **Purpose:** Reads and returns the hot key value held by the this instance.

```csharp
// Obtain an instance of GameKeyContext from the subsystem API first
GameKeyContext gameKeyContext = ...;
var result = gameKeyContext.GetHotKey("example");
```

### GetGameKey
`public GameKey GetGameKey(int gameKeyId)`

**Purpose:** **Purpose:** Reads and returns the game key value held by the this instance.

```csharp
// Obtain an instance of GameKeyContext from the subsystem API first
GameKeyContext gameKeyContext = ...;
var result = gameKeyContext.GetGameKey(0);
```

### GetHotKeyId
`public string GetHotKeyId(string hotKeyId)`

**Purpose:** **Purpose:** Reads and returns the hot key id value held by the this instance.

```csharp
// Obtain an instance of GameKeyContext from the subsystem API first
GameKeyContext gameKeyContext = ...;
var result = gameKeyContext.GetHotKeyId("example");
```

### GetHotKeyId
`public string GetHotKeyId(int gameKeyId)`

**Purpose:** **Purpose:** Reads and returns the hot key id value held by the this instance.

```csharp
// Obtain an instance of GameKeyContext from the subsystem API first
GameKeyContext gameKeyContext = ...;
var result = gameKeyContext.GetHotKeyId(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameKeyContext instance = ...;
```

## See Also

- [Area Index](../)
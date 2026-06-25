---
title: "EditorGame"
description: "Auto-generated class reference for EditorGame."
---
# EditorGame

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EditorGame : GameType`
**Base:** `GameType`
**File:** `TaleWorlds.MountAndBlade/EditorGame.cs`

## Overview

`EditorGame` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static EditorGame Current { get; }` |

## Key Methods

### OnDestroy
`public override void OnDestroy()`

**Purpose:** **Purpose:** Invoked when the destroy event is raised.

```csharp
// Obtain an instance of EditorGame from the subsystem API first
EditorGame editorGame = ...;
editorGame.OnDestroy();
```

### OnStateChanged
`public override void OnStateChanged(GameState oldState)`

**Purpose:** **Purpose:** Invoked when the state changed event is raised.

```csharp
// Obtain an instance of EditorGame from the subsystem API first
EditorGame editorGame = ...;
editorGame.OnStateChanged(oldState);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EditorGame editorGame = ...;
editorGame.OnDestroy();
```

## See Also

- [Area Index](../)
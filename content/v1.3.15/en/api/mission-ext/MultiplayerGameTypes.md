---
title: "MultiplayerGameTypes"
description: "Auto-generated class reference for MultiplayerGameTypes."
---
# MultiplayerGameTypes

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerGameTypes`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MultiplayerGameTypes.cs`

## Overview

`MultiplayerGameTypes` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
MultiplayerGameTypes.Initialize();
```

### CheckGameTypeInfoExists
`public static bool CheckGameTypeInfoExists(string gameType)`

**Purpose:** **Purpose:** Verifies whether game type info exists holds true for the this instance.

```csharp
// Static call; no instance required
MultiplayerGameTypes.CheckGameTypeInfoExists("example");
```

### GetGameTypeInfo
`public static MultiplayerGameTypeInfo GetGameTypeInfo(string gameType)`

**Purpose:** **Purpose:** Reads and returns the game type info value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerGameTypes.GetGameTypeInfo("example");
```

## Usage Example

```csharp
MultiplayerGameTypes.Initialize();
```

## See Also

- [Area Index](../)
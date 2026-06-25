---
title: "PlayerIdExtensions"
description: "Auto-generated class reference for PlayerIdExtensions."
---
# PlayerIdExtensions

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public static class PlayerIdExtensions`
**Base:** none
**File:** `TaleWorlds.Diamond/PlayerIdExtensions.cs`

## Overview

`PlayerIdExtensions` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ConvertToPeerId
`public static PeerId ConvertToPeerId(this PlayerId playerId)`

**Purpose:** **Purpose:** Converts to peer id into another representation or type.

```csharp
// Static call; no instance required
PlayerIdExtensions.ConvertToPeerId(playerId);
```

### ConvertToPlayerId
`public static PlayerId ConvertToPlayerId(this PeerId peerId)`

**Purpose:** **Purpose:** Converts to player id into another representation or type.

```csharp
// Static call; no instance required
PlayerIdExtensions.ConvertToPlayerId(peerId);
```

## Usage Example

```csharp
PlayerIdExtensions.ConvertToPeerId(playerId);
```

## See Also

- [Area Index](../)
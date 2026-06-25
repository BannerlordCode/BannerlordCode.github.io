---
title: "PlayerIdExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerIdExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `convert to peer id`.

### ConvertToPlayerId
`public static PlayerId ConvertToPlayerId(this PeerId peerId)`

**Purpose:** Handles logic related to `convert to player id`.

## Usage Example

```csharp
PlayerIdExtensions.ConvertToPeerId(playerId);
```

## See Also

- [Complete Class Catalog](../catalog)
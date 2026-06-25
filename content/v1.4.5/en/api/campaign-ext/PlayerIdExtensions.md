---
title: "PlayerIdExtensions"
description: "Auto-generated class reference for PlayerIdExtensions."
---
# PlayerIdExtensions

**Namespace:** TaleWorlds.PlayerServices
**Module:** TaleWorlds.PlayerServices
**Type:** `public static class PlayerIdExtensions`
**Base:** none
**File:** `bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices/PlayerIdExtensions.cs`

## Overview

`PlayerIdExtensions` lives in `TaleWorlds.PlayerServices` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SupportsPlayerCard
`public static bool SupportsPlayerCard(this PlayerIdProvidedTypes type)`

**Purpose:** Executes the SupportsPlayerCard logic.

```csharp
// Static call; no instance required
PlayerIdExtensions.SupportsPlayerCard(type);
```

## Usage Example

```csharp
PlayerIdExtensions.SupportsPlayerCard(type);
```

## See Also

- [Area Index](../)
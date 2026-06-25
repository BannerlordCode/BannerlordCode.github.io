---
title: "MultiplayerGameTypes"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGameTypes`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerGameTypes

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerGameTypes`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerGameTypes.cs`

## Overview

`MultiplayerGameTypes` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### CheckGameTypeInfoExists
`public static bool CheckGameTypeInfoExists(string gameType)`

**Purpose:** Handles logic related to `check game type info exists`.

### GetGameTypeInfo
`public static MultiplayerGameTypeInfo GetGameTypeInfo(string gameType)`

**Purpose:** Gets the current value of `game type info`.

## Usage Example

```csharp
MultiplayerGameTypes.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
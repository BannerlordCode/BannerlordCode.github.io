---
title: "MultiplayerGameTypes"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGameTypes`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerGameTypes

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerGameTypes`
**Area:** mission-ext

## Overview

`MultiplayerGameTypes` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
MultiplayerGameTypes.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)

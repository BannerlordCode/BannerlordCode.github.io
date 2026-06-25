---
title: "GauntletClanScreen"
description: "Auto-generated class reference for GauntletClanScreen."
---
# GauntletClanScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletClanScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `SandBox.GauntletUI/GauntletClanScreen.cs`

## Overview

`GauntletClanScreen` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `_dataSource` | `public ClanManagementVM _dataSource { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
GauntletClanScreen instance = ...;
```

## See Also

- [Area Index](../)
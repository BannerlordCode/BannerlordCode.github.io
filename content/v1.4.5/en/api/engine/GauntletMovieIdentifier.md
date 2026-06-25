---
title: "GauntletMovieIdentifier"
description: "Auto-generated class reference for GauntletMovieIdentifier."
---
# GauntletMovieIdentifier

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class GauntletMovieIdentifier`
**Base:** none
**File:** `bin/TaleWorlds.Engine.GauntletUI/TaleWorlds.Engine.GauntletUI/GauntletMovieIdentifier.cs`

## Overview

`GauntletMovieIdentifier` lives in `TaleWorlds.Engine.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MovieName` | `public string MovieName { get; set; }` |
| `Movie` | `public IGauntletMovie Movie { get; set; }` |
| `DataSource` | `public ViewModel DataSource { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
GauntletMovieIdentifier instance = ...;
```

## See Also

- [Area Index](../)
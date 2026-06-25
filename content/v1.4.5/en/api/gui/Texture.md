---
title: "Texture"
description: "Auto-generated class reference for Texture."
---
# Texture

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Texture`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/Texture.cs`

## Overview

`Texture` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlatformTexture` | `public ITexture PlatformTexture { get; }` |

## Key Methods

### IsLoaded
`public bool IsLoaded()`

**Purpose:** Determines whether the this instance is in the loaded state or condition.

```csharp
// Obtain an instance of Texture from the subsystem API first
Texture texture = ...;
var result = texture.IsLoaded();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Texture texture = ...;
texture.IsLoaded();
```

## See Also

- [Area Index](../)
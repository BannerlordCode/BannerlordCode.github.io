---
title: "EngineTexture"
description: "Auto-generated class reference for EngineTexture."
---
# EngineTexture

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class EngineTexture : ITexture`
**Base:** `ITexture`
**File:** `TaleWorlds.Engine.GauntletUI/EngineTexture.cs`

## Overview

`EngineTexture` lives in `TaleWorlds.Engine.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of EngineTexture from the subsystem API first
EngineTexture engineTexture = ...;
var result = engineTexture.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EngineTexture engineTexture = ...;
engineTexture.GetHashCode();
```

## See Also

- [Area Index](../)
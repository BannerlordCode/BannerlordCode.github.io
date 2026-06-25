---
title: "ITexture"
description: "Auto-generated class reference for ITexture."
---
# ITexture

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public interface ITexture`
**Base:** none
**File:** `TaleWorlds.TwoDimension/ITexture.cs`

## Overview

`ITexture` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IITexture service = ...;
```

## See Also

- [Area Index](../)
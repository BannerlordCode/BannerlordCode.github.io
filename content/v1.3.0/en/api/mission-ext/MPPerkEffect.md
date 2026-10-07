---
title: "MPPerkEffect"
description: "Auto-generated class reference for MPPerkEffect."
---
# MPPerkEffect

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkEffect : MPPerkEffectBase`
**Base:** `MPPerkEffectBase`
**File:** `TaleWorlds.MountAndBlade/MPPerkEffect.cs`

## Overview

`MPPerkEffect` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateFrom
`public static MPPerkEffect CreateFrom(XmlNode node)`

**Purpose:** Constructs a new from entity and returns it to the caller.

```csharp
// Static call; no instance required
MPPerkEffect.CreateFrom(node);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MPPerkEffect instance = ...;
```

## See Also

- [Area Index](../)
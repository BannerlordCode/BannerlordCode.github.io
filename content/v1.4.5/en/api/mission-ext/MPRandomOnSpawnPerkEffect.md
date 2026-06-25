---
title: "MPRandomOnSpawnPerkEffect"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPRandomOnSpawnPerkEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPRandomOnSpawnPerkEffect

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPRandomOnSpawnPerkEffect : MPOnSpawnPerkEffectBase`
**Base:** `MPOnSpawnPerkEffectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPRandomOnSpawnPerkEffect.cs`

## Overview

`MPRandomOnSpawnPerkEffect` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateFrom
`public static MPRandomOnSpawnPerkEffect CreateFrom(XmlNode node)`

**Purpose:** Creates a new `from` instance or object.

## Usage Example

```csharp
var implementation = new CustomMPRandomOnSpawnPerkEffect();
```

## See Also

- [Complete Class Catalog](../catalog)
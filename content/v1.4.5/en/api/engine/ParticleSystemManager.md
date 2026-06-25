---
title: "ParticleSystemManager"
description: "Auto-generated class reference for ParticleSystemManager."
---
# ParticleSystemManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ParticleSystemManager`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ParticleSystemManager.cs`

## Overview

`ParticleSystemManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ParticleSystemManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetRuntimeIdByName
`public static int GetRuntimeIdByName(string particleSystemName)`

**Purpose:** Reads and returns the runtime id by name value held by the this instance.

```csharp
// Static call; no instance required
ParticleSystemManager.GetRuntimeIdByName("example");
```

## Usage Example

```csharp
var manager = ParticleSystemManager.Current;
```

## See Also

- [Area Index](../)
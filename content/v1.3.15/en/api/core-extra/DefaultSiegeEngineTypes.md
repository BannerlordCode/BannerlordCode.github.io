---
title: "DefaultSiegeEngineTypes"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSiegeEngineTypes`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeEngineTypes

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultSiegeEngineTypes`
**Base:** none
**File:** `TaleWorlds.Core/DefaultSiegeEngineTypes.cs`

## Overview

`DefaultSiegeEngineTypes` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Preparations` | `public static SiegeEngineType Preparations { get; }` |
| `Ladder` | `public static SiegeEngineType Ladder { get; }` |
| `Ballista` | `public static SiegeEngineType Ballista { get; }` |
| `FireBallista` | `public static SiegeEngineType FireBallista { get; }` |
| `Ram` | `public static SiegeEngineType Ram { get; }` |
| `ImprovedRam` | `public static SiegeEngineType ImprovedRam { get; }` |
| `SiegeTower` | `public static SiegeEngineType SiegeTower { get; }` |
| `HeavySiegeTower` | `public static SiegeEngineType HeavySiegeTower { get; }` |
| `Catapult` | `public static SiegeEngineType Catapult { get; }` |
| `FireCatapult` | `public static SiegeEngineType FireCatapult { get; }` |
| `Onager` | `public static SiegeEngineType Onager { get; }` |
| `FireOnager` | `public static SiegeEngineType FireOnager { get; }` |
| `Bricole` | `public static SiegeEngineType Bricole { get; }` |
| `Trebuchet` | `public static SiegeEngineType Trebuchet { get; }` |
| `FireTrebuchet` | `public static SiegeEngineType FireTrebuchet { get; }` |

## Usage Example

```csharp
var value = new DefaultSiegeEngineTypes();
```

## See Also

- [Complete Class Catalog](../catalog)
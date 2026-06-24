<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ParticleSystemManager`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ParticleSystemManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ParticleSystemManager`
**Base:** none
**File:** `TaleWorlds.Engine/ParticleSystemManager.cs`

## Overview

`ParticleSystemManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ParticleSystemManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetRuntimeIdByName
`public static int GetRuntimeIdByName(string particleSystemName)`

**Purpose:** Gets the current value of `runtime id by name`.

## Usage Example

```csharp
var manager = ParticleSystemManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
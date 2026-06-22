<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ParticleSystemManager`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ParticleSystemManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ParticleSystemManager`
**Base:** none
**File:** `TaleWorlds.Engine/ParticleSystemManager.cs`

## Overview

`ParticleSystemManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### GetRuntimeIdByName
```csharp
public static int GetRuntimeIdByName(string particleSystemName)
```

## Usage Example

```csharp
// Typical usage of ParticleSystemManager (Manager)
ParticleSystemManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
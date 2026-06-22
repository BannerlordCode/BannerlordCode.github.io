<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EngineController`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EngineController

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class EngineController`
**Base:** none
**File:** `TaleWorlds.Engine/EngineController.cs`

## Overview

`EngineController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### GetVersionStr
```csharp
public static string GetVersionStr()
```

### GetApplicationPlatformName
```csharp
public static string GetApplicationPlatformName()
```

### GetModulesVersionStr
```csharp
public static string GetModulesVersionStr()
```

## Usage Example

```csharp
// Typical usage of EngineController (Controller)
Mission.Current.GetMissionBehavior<EngineController>();
```

## See Also

- [Complete Class Catalog](../catalog)
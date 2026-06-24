<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EngineController`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EngineController

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class EngineController`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/EngineController.cs`

## Overview

`EngineController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `EngineController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetVersionStr
`public static string GetVersionStr()`

**Purpose:** Gets the current value of `version str`.

### GetApplicationPlatformName
`public static string GetApplicationPlatformName()`

**Purpose:** Gets the current value of `application platform name`.

### GetModulesVersionStr
`public static string GetModulesVersionStr()`

**Purpose:** Gets the current value of `modules version str`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<EngineController>();
```

## See Also

- [Complete Class Catalog](../catalog)
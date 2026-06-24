<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameApplicationDomainController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameApplicationDomainController

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class GameApplicationDomainController : MarshalByRefObject`
**Base:** `MarshalByRefObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/GameApplicationDomainController.cs`

## Overview

`GameApplicationDomainController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `GameApplicationDomainController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### LoadAsHostedByNative
`public void LoadAsHostedByNative(IntPtr passManagedInitializeMethodPointer, IntPtr passManagedCallbackMethodPointer, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)`

**Purpose:** Loads `as hosted by native` data.

### Load
`public void Load(Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)`

**Purpose:** Loads `load` data.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<GameApplicationDomainController>();
```

## See Also

- [Complete Class Catalog](../catalog)
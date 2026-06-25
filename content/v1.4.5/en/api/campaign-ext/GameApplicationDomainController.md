---
title: "GameApplicationDomainController"
description: "Auto-generated class reference for GameApplicationDomainController."
---
# GameApplicationDomainController

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class GameApplicationDomainController : MarshalByRefObject`
**Base:** `MarshalByRefObject`
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/GameApplicationDomainController.cs`

## Overview

`GameApplicationDomainController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `GameApplicationDomainController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### LoadAsHostedByNative
`public void LoadAsHostedByNative(IntPtr passManagedInitializeMethodPointer, IntPtr passManagedCallbackMethodPointer, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)`

**Purpose:** **Purpose:** Reads as hosted by native from persistent storage or a stream.

```csharp
// Obtain an instance of GameApplicationDomainController from the subsystem API first
GameApplicationDomainController gameApplicationDomainController = ...;
gameApplicationDomainController.LoadAsHostedByNative(passManagedInitializeMethodPointer, passManagedCallbackMethodPointer, "example", "example", currentPlatform);
```

### Load
`public void Load(Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)`

**Purpose:** **Purpose:** Reads the this instance's data from persistent storage or a stream.

```csharp
// Obtain an instance of GameApplicationDomainController from the subsystem API first
GameApplicationDomainController gameApplicationDomainController = ...;
gameApplicationDomainController.Load(passManagedInitializeMethod, passManagedCallbackMethod, "example", "example", currentPlatform);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<GameApplicationDomainController>();
```

## See Also

- [Area Index](../)
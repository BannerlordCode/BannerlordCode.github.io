---
title: "Controller"
description: "Auto-generated class reference for Controller."
---
# Controller

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class Controller`
**Base:** none
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/Controller.cs`

## Overview

`Controller` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OverrideManagedDllFolder
`public static void OverrideManagedDllFolder(IntPtr overridenFolderAsPointer)`

**Purpose:** **Purpose:** Executes the OverrideManagedDllFolder logic.

```csharp
// Static call; no instance required
Controller.OverrideManagedDllFolder(overridenFolderAsPointer);
```

### LoadOnCurrentApplicationDomain
`public static void LoadOnCurrentApplicationDomain(IntPtr gameDllNameAsPointer, IntPtr gameTypeNameAsPointer, int currentEngineAsInteger, int currentPlatformAsInteger)`

**Purpose:** **Purpose:** Reads on current application domain from persistent storage or a stream.

```csharp
// Static call; no instance required
Controller.LoadOnCurrentApplicationDomain(gameDllNameAsPointer, gameTypeNameAsPointer, 0, 0);
```

### SetEngineMethodsAsMono
`public static void SetEngineMethodsAsMono(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)`

**Purpose:** **Purpose:** Assigns a new value to engine methods as mono and updates the object's internal state.

```csharp
// Static call; no instance required
Controller.SetEngineMethodsAsMono(passControllerMethods, passManagedInitializeMethod, passManagedCallbackMethod);
```

### SetEngineMethodsAsHostedDotNetCore
`public static void SetEngineMethodsAsHostedDotNetCore(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)`

**Purpose:** **Purpose:** Assigns a new value to engine methods as hosted dot net core and updates the object's internal state.

```csharp
// Static call; no instance required
Controller.SetEngineMethodsAsHostedDotNetCore(passControllerMethods, passManagedInitializeMethod, passManagedCallbackMethod);
```

### SetEngineMethodsAsDotNet
`public static void SetEngineMethodsAsDotNet(Delegate passControllerMethods, Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod)`

**Purpose:** **Purpose:** Assigns a new value to engine methods as dot net and updates the object's internal state.

```csharp
// Static call; no instance required
Controller.SetEngineMethodsAsDotNet(passControllerMethods, passManagedInitializeMethod, passManagedCallbackMethod);
```

## Usage Example

```csharp
Controller.OverrideManagedDllFolder(overridenFolderAsPointer);
```

## See Also

- [Area Index](../)
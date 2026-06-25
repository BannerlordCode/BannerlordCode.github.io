---
title: "MBDotNet"
description: "Auto-generated class reference for MBDotNet."
---
# MBDotNet

**Namespace:** TaleWorlds.Starter.Library
**Module:** TaleWorlds.Starter
**Type:** `internal static class MBDotNet`
**Base:** none
**File:** `TaleWorlds.Starter.Library/MBDotNet.cs`

## Overview

`MBDotNet` lives in `TaleWorlds.Starter.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Starter.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### WotsMainDotNet
`public static extern int WotsMainDotNet(string args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBDotNet.WotsMainDotNet("example");
```

### PassControllerMethods
`public static extern void PassControllerMethods(Delegate currentDomainInitializer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBDotNet.PassControllerMethods(currentDomainInitializer);
```

### PassManagedInitializeMethodPointerDotNet
`public static extern void PassManagedInitializeMethodPointerDotNet( Delegate initalizer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBDotNet.PassManagedInitializeMethodPointerDotNet(initalizer);
```

### PassManagedEngineCallbackMethodPointersDotNet
`public static extern void PassManagedEngineCallbackMethodPointersDotNet( Delegate methodDelegate)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBDotNet.PassManagedEngineCallbackMethodPointersDotNet(methodDelegate);
```

### SetCurrentDirectory
`public static extern int SetCurrentDirectory(string args)`

**Purpose:** Assigns a new value to `current directory` and updates the object's internal state.

```csharp
// Static call; no instance required
MBDotNet.SetCurrentDirectory("example");
```

## Usage Example

```csharp
MBDotNet.WotsMainDotNet("example");
```

## See Also

- [Area Index](../)
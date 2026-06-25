---
title: "Managed"
description: "Auto-generated class reference for Managed."
---
# Managed

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class Managed`
**Base:** none
**File:** `TaleWorlds.DotNet/Managed.cs`

## Overview

`Managed` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ManagedCallbacksDll` | `public static string ManagedCallbacksDll { get; }` |

## Key Methods

### GetStackTraceStr
`public static string GetStackTraceStr(int skipCount = 0)`

**Purpose:** **Purpose:** Reads and returns the stack trace str value held by the this instance.

```csharp
// Static call; no instance required
Managed.GetStackTraceStr(0);
```

### GetStackTraceRaw
`public static string GetStackTraceRaw(int skipCount = 0)`

**Purpose:** **Purpose:** Reads and returns the stack trace raw value held by the this instance.

```csharp
// Static call; no instance required
Managed.GetStackTraceRaw(0);
```

### GetStringHashCode
`public static uint GetStringHashCode(string text)`

**Purpose:** **Purpose:** Reads and returns the string hash code value held by the this instance.

```csharp
// Static call; no instance required
Managed.GetStringHashCode("example");
```

### GetStackTraceRaw
`public static string GetStackTraceRaw(StackTrace stack, int skipCount = 0)`

**Purpose:** **Purpose:** Reads and returns the stack trace raw value held by the this instance.

```csharp
// Static call; no instance required
Managed.GetStackTraceRaw(stack, 0);
```

### GetModuleList
`public static string GetModuleList()`

**Purpose:** **Purpose:** Reads and returns the module list value held by the this instance.

```csharp
// Static call; no instance required
Managed.GetModuleList();
```

### GetVersionInts
`public static void GetVersionInts(ref int major, ref int minor, ref int revision)`

**Purpose:** **Purpose:** Reads and returns the version ints value held by the this instance.

```csharp
// Static call; no instance required
Managed.GetVersionInts(major, minor, revision);
```

### PassInitializationMethodPointersForDotNet
`public static void PassInitializationMethodPointersForDotNet(Delegate a, Delegate b)`

**Purpose:** **Purpose:** Executes the PassInitializationMethodPointersForDotNet logic.

```csharp
// Static call; no instance required
Managed.PassInitializationMethodPointersForDotNet(a, b);
```

### Start
`public static void Start(IEnumerable<IManagedComponent> components)`

**Purpose:** **Purpose:** Starts the this instance's flow or state machine.

```csharp
// Static call; no instance required
Managed.Start(components);
```

### InitializeTypes
`public static void InitializeTypes(Dictionary<string, Type> types)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by types.

```csharp
// Static call; no instance required
Managed.InitializeTypes(dictionary<string, types);
```

### AddTypes
`public static void AddTypes(Dictionary<string, Type> types)`

**Purpose:** **Purpose:** Adds types to the current collection or state.

```csharp
// Static call; no instance required
Managed.AddTypes(dictionary<string, types);
```

### ShowDotNetVersion
`public static string ShowDotNetVersion(List<string> strings)`

**Purpose:** **Purpose:** Displays the UI or element associated with dot net version.

```csharp
// Static call; no instance required
Managed.ShowDotNetVersion(strings);
```

### PassManagedInitializeMethodPointerDelegate
`public delegate void PassManagedInitializeMethodPointerDelegate( Delegate initalizer)`

**Purpose:** **Purpose:** Executes the PassManagedInitializeMethodPointerDelegate logic.

```csharp
// Obtain an instance of Managed from the subsystem API first
Managed managed = ...;
managed.PassManagedInitializeMethodPointerDelegate(initalizer);
```

### PassManagedCallbackMethodPointersDelegate
`public delegate void PassManagedCallbackMethodPointersDelegate( Delegate methodDelegate)`

**Purpose:** **Purpose:** Executes the PassManagedCallbackMethodPointersDelegate logic.

```csharp
// Obtain an instance of Managed from the subsystem API first
Managed managed = ...;
managed.PassManagedCallbackMethodPointersDelegate(methodDelegate);
```

### InitializerDelegate
`public delegate void InitializerDelegate(Delegate argument)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by r delegate.

```csharp
// Obtain an instance of Managed from the subsystem API first
Managed managed = ...;
managed.InitializerDelegate(argument);
```

## Usage Example

```csharp
Managed.GetStackTraceStr(0);
```

## See Also

- [Area Index](../)
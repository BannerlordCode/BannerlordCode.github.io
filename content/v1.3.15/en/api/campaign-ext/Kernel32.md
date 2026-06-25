---
title: "Kernel32"
description: "Auto-generated class reference for Kernel32."
---
# Kernel32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class Kernel32`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/Kernel32.cs`

## Overview

`Kernel32` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadLibrary
`public static extern IntPtr LoadLibrary(string lpFileName)`

**Purpose:** Reads library from persistent storage or a stream.

```csharp
// Static call; no instance required
Kernel32.LoadLibrary("example");
```

### GetModuleHandle
`public static extern IntPtr GetModuleHandle(string lpModuleName)`

**Purpose:** Reads and returns the module handle value held by the this instance.

```csharp
// Static call; no instance required
Kernel32.GetModuleHandle("example");
```

### GetLastError
`public static extern int GetLastError()`

**Purpose:** Reads and returns the last error value held by the this instance.

```csharp
// Static call; no instance required
Kernel32.GetLastError();
```

### GetConsoleWindow
`public static extern IntPtr GetConsoleWindow()`

**Purpose:** Reads and returns the console window value held by the this instance.

```csharp
// Static call; no instance required
Kernel32.GetConsoleWindow();
```

### GetUserGeoID
`public static extern int GetUserGeoID(Kernel32.GeoTypeId type)`

**Purpose:** Reads and returns the user geo i d value held by the this instance.

```csharp
// Static call; no instance required
Kernel32.GetUserGeoID(type);
```

## Usage Example

```csharp
Kernel32.LoadLibrary("example");
```

## See Also

- [Area Index](../)
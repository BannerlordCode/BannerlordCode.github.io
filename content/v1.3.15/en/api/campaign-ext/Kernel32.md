---
title: "Kernel32"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Kernel32`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Kernel32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class Kernel32`
**Area:** campaign-ext

## Overview

`Kernel32` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadLibrary
`public static extern IntPtr LoadLibrary(string lpFileName)`

**Purpose:** Loads `library` data.

### GetModuleHandle
`public static extern IntPtr GetModuleHandle(string lpModuleName)`

**Purpose:** Gets the current value of `module handle`.

### GetLastError
`public static extern int GetLastError()`

**Purpose:** Gets the current value of `last error`.

### GetConsoleWindow
`public static extern IntPtr GetConsoleWindow()`

**Purpose:** Gets the current value of `console window`.

### GetUserGeoID
`public static extern int GetUserGeoID(Kernel32.GeoTypeId type)`

**Purpose:** Gets the current value of `user geo i d`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Kernel32.LoadLibrary("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)

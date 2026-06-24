<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Watchdog`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Watchdog

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class Watchdog`
**Area:** core-extra

## Overview

`Watchdog` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetDumpDirectory
`public static void SetDumpDirectory(string Path)`

**Purpose:** Sets the value or state of `dump directory`.

### DetachAndClose
`public static void DetachAndClose()`

**Purpose:** Handles logic related to `detach and close`.

### LogProperty
`public static void LogProperty(string FileName, string GroupName, string Key, string Value)`

**Purpose:** Handles logic related to `log property`.

### Attached
`public static bool Attached()`

**Purpose:** Handles logic related to `attached`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Watchdog.SetDumpDirectory("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)

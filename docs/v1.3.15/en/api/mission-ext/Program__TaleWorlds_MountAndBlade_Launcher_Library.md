<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Program`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Program

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Program`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/Program.cs`

## Overview

`Program` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### NativeMain
`public static void NativeMain(string commandLine)`

**Purpose:** Handles logic related to `native main`.

### Main
`public static void Main(string args)`

**Purpose:** Handles logic related to `main`.

### StartGame
`public static void StartGame()`

**Purpose:** Handles logic related to `start game`.

### StartDigitalCompanion
`public static void StartDigitalCompanion()`

**Purpose:** Handles logic related to `start digital companion`.

### IsDigitalCompanionAvailable
`public static bool IsDigitalCompanionAvailable()`

**Purpose:** Handles logic related to `is digital companion available`.

## Usage Example

```csharp
Program.NativeMain("example");
```

## See Also

- [Complete Class Catalog](../catalog)
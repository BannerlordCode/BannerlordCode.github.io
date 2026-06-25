---
title: "Watchdog"
description: "Auto-generated class reference for Watchdog."
---
# Watchdog

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class Watchdog`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/Watchdog.cs`

## Overview

`Watchdog` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetDumpDirectory
`public static void SetDumpDirectory(string Path)`

**Purpose:** **Purpose:** Assigns a new value to dump directory and updates the object's internal state.

```csharp
// Static call; no instance required
Watchdog.SetDumpDirectory("example");
```

### DetachAndClose
`public static void DetachAndClose()`

**Purpose:** **Purpose:** Executes the DetachAndClose logic.

```csharp
// Static call; no instance required
Watchdog.DetachAndClose();
```

### LogProperty
`public static void LogProperty(string FileName, string GroupName, string Key, string Value)`

**Purpose:** **Purpose:** Executes the LogProperty logic.

```csharp
// Static call; no instance required
Watchdog.LogProperty("example", "example", "example", "example");
```

### Attached
`public static bool Attached()`

**Purpose:** **Purpose:** Executes the Attached logic.

```csharp
// Static call; no instance required
Watchdog.Attached();
```

## Usage Example

```csharp
Watchdog.SetDumpDirectory("example");
```

## See Also

- [Area Index](../)
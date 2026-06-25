---
title: "Logger"
description: "Auto-generated class reference for Logger."
---
# Logger

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class Logger`
**Base:** none
**File:** `TaleWorlds.Library/Logger.cs`

## Overview

`Logger` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LogOnlyErrors` | `public bool LogOnlyErrors { get; set; }` |

## Key Methods

### Print
`public void Print(string log, HTMLDebugCategory debugInfo = HTMLDebugCategory.General)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Logger from the subsystem API first
Logger logger = ...;
logger.Print("example", hTMLDebugCategory.General);
```

### Print
`public void Print(string log, HTMLDebugCategory debugInfo, bool printOnGlobal)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Logger from the subsystem API first
Logger logger = ...;
logger.Print("example", debugInfo, false);
```

### FinishAndCloseAll
`public static void FinishAndCloseAll()`

**Purpose:** Concludes the `and close all` flow and performs any cleanup.

```csharp
// Static call; no instance required
Logger.FinishAndCloseAll();
```

### GetFileStream
`public FileStream GetFileStream()`

**Purpose:** Reads and returns the `file stream` value held by the current object.

```csharp
// Obtain an instance of Logger from the subsystem API first
Logger logger = ...;
var result = logger.GetFileStream();
```

### GetErrorFileStream
`public FileStream GetErrorFileStream()`

**Purpose:** Reads and returns the `error file stream` value held by the current object.

```csharp
// Obtain an instance of Logger from the subsystem API first
Logger logger = ...;
var result = logger.GetErrorFileStream();
```

### CheckForFileSize
`public void CheckForFileSize()`

**Purpose:** Verifies whether `for file size` holds true for the current object.

```csharp
// Obtain an instance of Logger from the subsystem API first
Logger logger = ...;
logger.CheckForFileSize();
```

### ShutDown
`public void ShutDown()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Logger from the subsystem API first
Logger logger = ...;
logger.ShutDown();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Logger logger = ...;
logger.Print("example", hTMLDebugCategory.General);
```

## See Also

- [Area Index](../)
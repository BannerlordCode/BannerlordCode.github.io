---
title: "Logger"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Logger`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `print`.

### Print
`public void Print(string log, HTMLDebugCategory debugInfo, bool printOnGlobal)`

**Purpose:** Handles logic related to `print`.

### FinishAndCloseAll
`public static void FinishAndCloseAll()`

**Purpose:** Handles logic related to `finish and close all`.

### GetFileStream
`public FileStream GetFileStream()`

**Purpose:** Gets the current value of `file stream`.

### GetErrorFileStream
`public FileStream GetErrorFileStream()`

**Purpose:** Gets the current value of `error file stream`.

### CheckForFileSize
`public void CheckForFileSize()`

**Purpose:** Handles logic related to `check for file size`.

### ShutDown
`public void ShutDown()`

**Purpose:** Handles logic related to `shut down`.

## Usage Example

```csharp
var value = new Logger();
value.Print("example", hTMLDebugCategory.General);
```

## See Also

- [Complete Class Catalog](../catalog)
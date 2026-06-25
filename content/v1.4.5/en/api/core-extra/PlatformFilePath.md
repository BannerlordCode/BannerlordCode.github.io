---
title: "PlatformFilePath"
description: "Auto-generated class reference for PlatformFilePath."
---
# PlatformFilePath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PlatformFilePath`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PlatformFilePath.cs`

## Overview

`PlatformFilePath` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PlatformFilePath
`public struct PlatformFilePath(PlatformDirectoryPath folderPath, string fileName)`

**Purpose:** Executes the PlatformFilePath logic.

```csharp
// Obtain an instance of PlatformFilePath from the subsystem API first
PlatformFilePath platformFilePath = ...;
var result = platformFilePath.PlatformFilePath(folderPath, "example");
```

### GetFileNameWithoutExtension
`public string GetFileNameWithoutExtension()`

**Purpose:** Reads and returns the file name without extension value held by the this instance.

```csharp
// Obtain an instance of PlatformFilePath from the subsystem API first
PlatformFilePath platformFilePath = ...;
var result = platformFilePath.GetFileNameWithoutExtension();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of PlatformFilePath from the subsystem API first
PlatformFilePath platformFilePath = ...;
var result = platformFilePath.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlatformFilePath platformFilePath = ...;
platformFilePath.PlatformFilePath(folderPath, "example");
```

## See Also

- [Area Index](../)
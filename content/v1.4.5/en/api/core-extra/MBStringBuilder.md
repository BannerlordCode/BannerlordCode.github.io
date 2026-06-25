---
title: "MBStringBuilder"
description: "Auto-generated class reference for MBStringBuilder."
---
# MBStringBuilder

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MBStringBuilder`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBStringBuilder.cs`

## Overview

`MBStringBuilder` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Acquire
`public static StringBuilder Acquire(int capacity = 16)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBStringBuilder.Acquire(0);
```

### Release
`public static void Release(StringBuilder sb)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBStringBuilder.Release("example");
```

### GetStringAndReleaseBuilder
`public static string GetStringAndReleaseBuilder(StringBuilder sb)`

**Purpose:** Reads and returns the `string and release builder` value held by the current object.

```csharp
// Static call; no instance required
MBStringBuilder.GetStringAndReleaseBuilder("example");
```

### Initialize
`public void Initialize(int capacity = 16, string callerMemberName = "")`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of MBStringBuilder from the subsystem API first
MBStringBuilder mBStringBuilder = ...;
mBStringBuilder.Initialize(0, "example");
```

### ToStringAndRelease
`public string ToStringAndRelease()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of MBStringBuilder from the subsystem API first
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.ToStringAndRelease();
```

### Release
`public void Release()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBStringBuilder from the subsystem API first
MBStringBuilder mBStringBuilder = ...;
mBStringBuilder.Release();
```

### Append
`public MBStringBuilder Append(char value)`

**Purpose:** Appends `append` to the end of the current collection or sequence.

```csharp
// Obtain an instance of MBStringBuilder from the subsystem API first
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.Append(value);
```

### Append
`public MBStringBuilder Append(int value)`

**Purpose:** Appends `append` to the end of the current collection or sequence.

```csharp
// Obtain an instance of MBStringBuilder from the subsystem API first
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.Append(0);
```

### Append
`public MBStringBuilder Append(uint value)`

**Purpose:** Appends `append` to the end of the current collection or sequence.

```csharp
// Obtain an instance of MBStringBuilder from the subsystem API first
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.Append(0);
```

### Append
`public MBStringBuilder Append(float value)`

**Purpose:** Appends `append` to the end of the current collection or sequence.

```csharp
// Obtain an instance of MBStringBuilder from the subsystem API first
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.Append(0);
```

### Append
`public MBStringBuilder Append(double value)`

**Purpose:** Appends `append` to the end of the current collection or sequence.

```csharp
// Obtain an instance of MBStringBuilder from the subsystem API first
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.Append(0);
```

### AppendLine
`public MBStringBuilder AppendLine()`

**Purpose:** Appends `line` to the end of the current collection or sequence.

```csharp
// Obtain an instance of MBStringBuilder from the subsystem API first
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.AppendLine();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of MBStringBuilder from the subsystem API first
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.ToString();
```

## Usage Example

```csharp
MBStringBuilder.Acquire(0);
```

## See Also

- [Area Index](../)
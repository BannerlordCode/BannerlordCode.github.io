---
title: "ApplicationVersion"
description: "Auto-generated class reference for ApplicationVersion."
---
# ApplicationVersion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct ApplicationVersion`
**Base:** none
**File:** `TaleWorlds.Library/ApplicationVersion.cs`

## Overview

`ApplicationVersion` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ApplicationVersionType` | `public ApplicationVersionType ApplicationVersionType { get; }` |
| `Major` | `public int Major { get; }` |
| `Minor` | `public int Minor { get; }` |
| `Revision` | `public int Revision { get; }` |
| `ChangeSet` | `public int ChangeSet { get; }` |

## Key Methods

### FromParametersFile
`public static ApplicationVersion FromParametersFile(string customParameterFilePath = null)`

**Purpose:** **Purpose:** Executes the FromParametersFile logic.

```csharp
// Static call; no instance required
ApplicationVersion.FromParametersFile("example");
```

### FromString
`public static ApplicationVersion FromString(string versionAsString, int defaultChangeSet = 0)`

**Purpose:** **Purpose:** Executes the FromString logic.

```csharp
// Static call; no instance required
ApplicationVersion.FromString("example", 0);
```

### IsSame
`public bool IsSame(ApplicationVersion other, bool checkChangeSet)`

**Purpose:** **Purpose:** Determines whether the this instance is in the same state or condition.

```csharp
// Obtain an instance of ApplicationVersion from the subsystem API first
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.IsSame(other, false);
```

### IsOlderThan
`public bool IsOlderThan(ApplicationVersion other)`

**Purpose:** **Purpose:** Determines whether the this instance is in the older than state or condition.

```csharp
// Obtain an instance of ApplicationVersion from the subsystem API first
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.IsOlderThan(other);
```

### IsNewerThan
`public bool IsNewerThan(ApplicationVersion other)`

**Purpose:** **Purpose:** Determines whether the this instance is in the newer than state or condition.

```csharp
// Obtain an instance of ApplicationVersion from the subsystem API first
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.IsNewerThan(other);
```

### ApplicationVersionTypeFromString
`public static ApplicationVersionType ApplicationVersionTypeFromString(string applicationVersionTypeAsString)`

**Purpose:** **Purpose:** Executes the ApplicationVersionTypeFromString logic.

```csharp
// Static call; no instance required
ApplicationVersion.ApplicationVersionTypeFromString("example");
```

### GetPrefix
`public static string GetPrefix(ApplicationVersionType applicationVersionType)`

**Purpose:** **Purpose:** Reads and returns the prefix value held by the this instance.

```csharp
// Static call; no instance required
ApplicationVersion.GetPrefix(applicationVersionType);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of ApplicationVersion from the subsystem API first
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.ToString();
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of ApplicationVersion from the subsystem API first
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of ApplicationVersion from the subsystem API first
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.Equals(obj);
```

## Usage Example

```csharp
ApplicationVersion.FromParametersFile("example");
```

## See Also

- [Area Index](../)
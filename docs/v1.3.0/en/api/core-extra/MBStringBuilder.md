<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBStringBuilder`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBStringBuilder

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MBStringBuilder`
**Base:** none
**File:** `TaleWorlds.Library/MBStringBuilder.cs`

## Overview

`MBStringBuilder` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Length` | `public int Length { get; }` |

## Key Methods

### Initialize
`public void Initialize(int capacity = 16, string callerMemberName = "")`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ToStringAndRelease
`public string ToStringAndRelease()`

**Purpose:** Handles logic related to `to string and release`.

### Release
`public void Release()`

**Purpose:** Handles logic related to `release`.

### Append
`public MBStringBuilder Append(char value)`

**Purpose:** Handles logic related to `append`.

### Append
`public MBStringBuilder Append(int value)`

**Purpose:** Handles logic related to `append`.

### Append
`public MBStringBuilder Append(uint value)`

**Purpose:** Handles logic related to `append`.

### Append
`public MBStringBuilder Append(float value)`

**Purpose:** Handles logic related to `append`.

### Append
`public MBStringBuilder Append(double value)`

**Purpose:** Handles logic related to `append`.

### AppendLine
`public MBStringBuilder AppendLine()`

**Purpose:** Handles logic related to `append line`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Acquire
`public static StringBuilder Acquire(int capacity = 16)`

**Purpose:** Handles logic related to `acquire`.

### Release
`public static void Release(StringBuilder sb)`

**Purpose:** Handles logic related to `release`.

### GetStringAndReleaseBuilder
`public static string GetStringAndReleaseBuilder(StringBuilder sb)`

**Purpose:** Gets the current value of `string and release builder`.

## Usage Example

```csharp
var value = new MBStringBuilder();
value.Initialize(0, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
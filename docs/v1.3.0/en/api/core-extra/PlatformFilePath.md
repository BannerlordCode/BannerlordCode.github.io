<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlatformFilePath`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlatformFilePath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PlatformFilePath`
**Base:** none
**File:** `TaleWorlds.Library/PlatformFilePath.cs`

## Overview

`PlatformFilePath` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FileFullPath` | `public string FileFullPath { get; }` |

## Key Methods

### GetFileNameWithoutExtension
`public string GetFileNameWithoutExtension()`

**Purpose:** Gets the current value of `file name without extension`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new PlatformFilePath();
value.GetFileNameWithoutExtension();
```

## See Also

- [Complete Class Catalog](../catalog)
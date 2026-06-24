<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlatformDirectoryPath`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlatformDirectoryPath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PlatformDirectoryPath`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/PlatformDirectoryPath.cs`

## Overview

`PlatformDirectoryPath` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PlatformDirectoryPath
`public struct PlatformDirectoryPath(PlatformFileType type, string path)`

**Purpose:** Handles logic related to `platform directory path`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new PlatformDirectoryPath();
value.PlatformDirectoryPath(type, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
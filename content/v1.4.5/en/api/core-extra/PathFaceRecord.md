---
title: "PathFaceRecord"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PathFaceRecord`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PathFaceRecord

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PathFaceRecord`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/PathFaceRecord.cs`

## Overview

`PathFaceRecord` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PathFaceRecord
`public struct PathFaceRecord(int index, int groupIndex, int islandIndex)`

**Purpose:** Handles logic related to `path face record`.

### IsValid
`public bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

## Usage Example

```csharp
var value = new PathFaceRecord();
value.PathFaceRecord(0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
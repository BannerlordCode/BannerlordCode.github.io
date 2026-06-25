---
title: "MBUtil"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBUtil`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBUtil

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MBUtil`
**Base:** none
**File:** `TaleWorlds.Library/MBUtil.cs`

## Overview

`MBUtil` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DirectoryCopy
`public static void DirectoryCopy(string sourceDirName, string destDirName, bool copySubDirs)`

**Purpose:** Handles logic related to `directory copy`.

## Usage Example

```csharp
MBUtil.DirectoryCopy("example", "example", false);
```

## See Also

- [Complete Class Catalog](../catalog)
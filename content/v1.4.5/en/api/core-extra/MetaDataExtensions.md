---
title: "MetaDataExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MetaDataExtensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MetaDataExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MetaDataExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MetaDataExtensions.cs`

## Overview

`MetaDataExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetCreationTime
`public static DateTime GetCreationTime(this MetaData metaData)`

**Purpose:** Gets the current value of `creation time`.

### GetModules
`public static string GetModules(this MetaData metaData)`

**Purpose:** Gets the current value of `modules`.

### GetModuleVersion
`public static ApplicationVersion GetModuleVersion(this MetaData metaData, string moduleName)`

**Purpose:** Gets the current value of `module version`.

## Usage Example

```csharp
MetaDataExtensions.GetCreationTime(metaData);
```

## See Also

- [Complete Class Catalog](../catalog)
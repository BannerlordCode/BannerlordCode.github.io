---
title: "MetaDataExtensions"
description: "Auto-generated class reference for MetaDataExtensions."
---
# MetaDataExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MetaDataExtensions`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MetaDataExtensions.cs`

## Overview

`MetaDataExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetCreationTime
`public static DateTime GetCreationTime(this MetaData metaData)`

**Purpose:** Reads and returns the `creation time` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetCreationTime(metaData);
```

### GetModules
`public static string GetModules(this MetaData metaData)`

**Purpose:** Reads and returns the `modules` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetModules(metaData);
```

### GetModuleVersion
`public static ApplicationVersion GetModuleVersion(this MetaData metaData, string moduleName)`

**Purpose:** Reads and returns the `module version` value held by the current object.

```csharp
// Static call; no instance required
MetaDataExtensions.GetModuleVersion(metaData, "example");
```

## Usage Example

```csharp
MetaDataExtensions.GetCreationTime(metaData);
```

## See Also

- [Area Index](../)
---
title: "MetaDataExtensions"
description: "Auto-generated class reference for MetaDataExtensions."
---
# MetaDataExtensions

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public static class MetaDataExtensions`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/MetaDataExtensions.cs`

## Overview

`MetaDataExtensions` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetApplicationVersion
`public static ApplicationVersion GetApplicationVersion(this MetaData metaData)`

**Purpose:** Reads and returns the application version value held by the this instance.

```csharp
// Static call; no instance required
MetaDataExtensions.GetApplicationVersion(metaData);
```

### GetNewGameVersion
`public static ApplicationVersion GetNewGameVersion(this MetaData metaData)`

**Purpose:** Reads and returns the new game version value held by the this instance.

```csharp
// Static call; no instance required
MetaDataExtensions.GetNewGameVersion(metaData);
```

## Usage Example

```csharp
MetaDataExtensions.GetApplicationVersion(metaData);
```

## See Also

- [Area Index](../)
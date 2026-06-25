---
title: "MBObjectManagerExtensions"
description: "Auto-generated class reference for MBObjectManagerExtensions."
---
# MBObjectManagerExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBObjectManagerExtensions`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBObjectManagerExtensions.cs`

## Overview

`MBObjectManagerExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadXML
`public static void LoadXML(this MBObjectManager objectManager, string id, bool skipXmlFilterForEditor = false)`

**Purpose:** **Purpose:** Reads x m l from persistent storage or a stream.

```csharp
// Static call; no instance required
MBObjectManagerExtensions.LoadXML(objectManager, "example", false);
```

## Usage Example

```csharp
MBObjectManagerExtensions.LoadXML(objectManager, "example", false);
```

## See Also

- [Area Index](../)
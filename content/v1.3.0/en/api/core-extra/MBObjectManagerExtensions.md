---
title: "MBObjectManagerExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBObjectManagerExtensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBObjectManagerExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBObjectManagerExtensions`
**Base:** none
**File:** `TaleWorlds.Core/MBObjectManagerExtensions.cs`

## Overview

`MBObjectManagerExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadXML
`public static void LoadXML(this MBObjectManager objectManager, string id, bool skipXmlFilterForEditor = false)`

**Purpose:** Loads `x m l` data.

## Usage Example

```csharp
MBObjectManagerExtensions.LoadXML(objectManager, "example", false);
```

## See Also

- [Complete Class Catalog](../catalog)
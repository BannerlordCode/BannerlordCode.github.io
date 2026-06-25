---
title: "EpicAccessObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EpicAccessObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EpicAccessObject

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class EpicAccessObject : AccessObject`
**Base:** `AccessObject`
**File:** `TaleWorlds.Diamond/EpicAccessObject.cs`

## Overview

`EpicAccessObject` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new EpicAccessObject();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "ApplicationVersionType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ApplicationVersionType`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ApplicationVersionType

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ApplicationVersionType.cs`

## Overview

`ApplicationVersionType` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new ApplicationVersionType();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "AsyncFileSaveDriver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AsyncFileSaveDriver`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AsyncFileSaveDriver

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class AsyncFileSaveDriver : ISaveDriver`
**Base:** `ISaveDriver`
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/AsyncFileSaveDriver.cs`

## Overview

`AsyncFileSaveDriver` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new AsyncFileSaveDriver();
```

## See Also

- [Complete Class Catalog](../catalog)
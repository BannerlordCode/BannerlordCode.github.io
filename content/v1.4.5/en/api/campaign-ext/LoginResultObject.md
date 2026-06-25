---
title: "LoginResultObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoginResultObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LoginResultObject

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class LoginResultObject`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond/TaleWorlds.Diamond/LoginResultObject.cs`

## Overview

`LoginResultObject` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var implementation = new CustomLoginResultObject();
```

## See Also

- [Complete Class Catalog](../catalog)
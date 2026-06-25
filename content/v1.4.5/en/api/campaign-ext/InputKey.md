---
title: "InputKey"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputKey`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InputKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/InputKey.cs`

## Overview

`InputKey` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new InputKey();
```

## See Also

- [Complete Class Catalog](../catalog)
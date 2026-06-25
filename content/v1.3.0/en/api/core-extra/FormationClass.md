---
title: "FormationClass"
description: "Auto-generated class reference for FormationClass."
---
# FormationClass

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum FormationClass`
**Base:** none
**File:** `TaleWorlds.Core/FormationClass.cs`

## Overview

`FormationClass` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
FormationClass instance = ...;
```

## See Also

- [Area Index](../)
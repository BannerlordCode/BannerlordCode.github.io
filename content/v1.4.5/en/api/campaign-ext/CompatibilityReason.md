---
title: "CompatibilityReason"
description: "Auto-generated class reference for CompatibilityReason."
---
# CompatibilityReason

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public enum CompatibilityReason`
**Base:** none
**File:** `bin/TaleWorlds.PSAI/psai.Editor/CompatibilityReason.cs`

## Overview

`CompatibilityReason` lives in `psai.Editor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.Editor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CompatibilityReason instance = ...;
```

## See Also

- [Area Index](../)
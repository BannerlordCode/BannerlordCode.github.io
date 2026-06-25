---
title: "SandBoxEditorMissionTester"
description: "Auto-generated class reference for SandBoxEditorMissionTester."
---
# SandBoxEditorMissionTester

**Namespace:** SandBox
**Module:** SandBox
**Type:** `internal class SandBoxEditorMissionTester : IEditorMissionTester`
**Base:** `IEditorMissionTester`
**File:** `Modules.SandBox/SandBox/Sandbox/SandBoxEditorMissionTester.cs`

## Overview

`SandBoxEditorMissionTester` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SandBoxEditorMissionTester instance = ...;
```

## See Also

- [Area Index](../)
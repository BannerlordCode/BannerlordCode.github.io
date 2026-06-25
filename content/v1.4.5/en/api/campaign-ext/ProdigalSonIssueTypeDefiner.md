---
title: "ProdigalSonIssueTypeDefiner"
description: "Auto-generated class reference for ProdigalSonIssueTypeDefiner."
---
# ProdigalSonIssueTypeDefiner

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class ProdigalSonIssueTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/ProdigalSonIssueBehavior.cs`

## Overview

`ProdigalSonIssueTypeDefiner` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ProdigalSonIssueTypeDefiner instance = ...;
```

## See Also

- [Area Index](../)
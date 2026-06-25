---
title: "State"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `State`
- [← Area / Back to gameplay](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# State

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public enum State`
**Base:** none
**File:** `SandBox/BoardGames/BoardGameTablut.cs`

## Overview

`State` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
State example = State.Value;
```

## See Also

- [Complete Class Catalog](../catalog)
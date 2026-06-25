---
title: "ChoiceTag"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChoiceTag`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChoiceTag

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct ChoiceTag`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameTextManager.cs`

## Overview

`ChoiceTag` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TagName` | `public string TagName { get; }` |
| `Weight` | `public uint Weight { get; }` |
| `IsTagReversed` | `public bool IsTagReversed { get; }` |

## Usage Example

```csharp
var example = new ChoiceTag();
```

## See Also

- [Complete Class Catalog](../catalog)
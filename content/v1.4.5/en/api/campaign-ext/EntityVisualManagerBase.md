---
title: "EntityVisualManagerBase"
description: "Auto-generated class reference for EntityVisualManagerBase."
---
# EntityVisualManagerBase

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public abstract class EntityVisualManagerBase : CampaignEntityVisualComponent`
**Base:** `CampaignEntityVisualComponent`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/EntityVisualManagerBase.cs`

## Overview

`EntityVisualManagerBase` lives in `SandBox.View.Map.Managers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Managers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapScene` | `public Scene MapScene { get; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EntityVisualManagerBase instance = ...;
```

## See Also

- [Area Index](../)
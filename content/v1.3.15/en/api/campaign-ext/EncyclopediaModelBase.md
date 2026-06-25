---
title: "EncyclopediaModelBase"
description: "Auto-generated class reference for EncyclopediaModelBase."
---
# EncyclopediaModelBase

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaModelBase : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaModelBase.cs`

## Overview

`EncyclopediaModelBase` lives in `TaleWorlds.CampaignSystem.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PageTargetTypes` | `public Type PageTargetTypes { get; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EncyclopediaModelBase instance = ...;
```

## See Also

- [Area Index](../)
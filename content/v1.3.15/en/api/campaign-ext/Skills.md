---
title: "Skills"
description: "Auto-generated class reference for Skills."
---
# Skills

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Skills`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Extensions/Skills.cs`

## Overview

`Skills` lives in `TaleWorlds.CampaignSystem.Extensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<SkillObject> All { get; }` |

## Key Methods

### GetSkill
`public static SkillObject GetSkill(int i)`

**Purpose:** Reads and returns the `skill` value held by the current object.

```csharp
// Static call; no instance required
Skills.GetSkill(0);
```

## Usage Example

```csharp
Skills.GetSkill(0);
```

## See Also

- [Area Index](../)
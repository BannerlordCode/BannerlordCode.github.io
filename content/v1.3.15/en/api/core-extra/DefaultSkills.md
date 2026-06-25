---
title: "DefaultSkills"
description: "Auto-generated class reference for DefaultSkills."
---
# DefaultSkills

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultSkills`
**Base:** none
**File:** `TaleWorlds.Core/DefaultSkills.cs`

## Overview

`DefaultSkills` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OneHanded` | `public static SkillObject OneHanded { get; }` |
| `TwoHanded` | `public static SkillObject TwoHanded { get; }` |
| `Polearm` | `public static SkillObject Polearm { get; }` |
| `Bow` | `public static SkillObject Bow { get; }` |
| `Crossbow` | `public static SkillObject Crossbow { get; }` |
| `Throwing` | `public static SkillObject Throwing { get; }` |
| `Riding` | `public static SkillObject Riding { get; }` |
| `Athletics` | `public static SkillObject Athletics { get; }` |
| `Crafting` | `public static SkillObject Crafting { get; }` |
| `Tactics` | `public static SkillObject Tactics { get; }` |
| `Scouting` | `public static SkillObject Scouting { get; }` |
| `Roguery` | `public static SkillObject Roguery { get; }` |
| `Charm` | `public static SkillObject Charm { get; }` |
| `Leadership` | `public static SkillObject Leadership { get; }` |
| `Trade` | `public static SkillObject Trade { get; }` |
| `Steward` | `public static SkillObject Steward { get; }` |
| `Medicine` | `public static SkillObject Medicine { get; }` |
| `Engineering` | `public static SkillObject Engineering { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DefaultSkills instance = ...;
```

## See Also

- [Area Index](../)
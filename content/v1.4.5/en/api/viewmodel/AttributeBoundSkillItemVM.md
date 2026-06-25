---
title: "AttributeBoundSkillItemVM"
description: "Auto-generated class reference for AttributeBoundSkillItemVM."
---
# AttributeBoundSkillItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AttributeBoundSkillItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/AttributeBoundSkillItemVM.cs`

## Overview

`AttributeBoundSkillItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `SkillId` | `public string SkillId { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
AttributeBoundSkillItemVM instance = ...;
```

## See Also

- [Area Index](../)
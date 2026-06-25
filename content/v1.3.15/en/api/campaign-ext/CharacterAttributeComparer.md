---
title: "CharacterAttributeComparer"
description: "Auto-generated class reference for CharacterAttributeComparer."
---
# CharacterAttributeComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterAttributeComparer : IComparer<CharacterAttribute>`
**Base:** `IComparer<CharacterAttribute>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs`

## Overview

`CharacterAttributeComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(CharacterAttribute x, CharacterAttribute y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of CharacterAttributeComparer from the subsystem API first
CharacterAttributeComparer characterAttributeComparer = ...;
var result = characterAttributeComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterAttributeComparer characterAttributeComparer = ...;
characterAttributeComparer.Compare(x, y);
```

## See Also

- [Area Index](../)
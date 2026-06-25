---
title: "TraitObject"
description: "Auto-generated class reference for TraitObject."
---
# TraitObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class TraitObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/TraitObject.cs`

## Overview

`TraitObject` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinValue` | `public int MinValue { get; }` |
| `MaxValue` | `public int MaxValue { get; }` |
| `IsHidden` | `public bool IsHidden { get; }` |

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description, bool isHidden, int minValue, int maxValue)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of TraitObject from the subsystem API first
TraitObject traitObject = ...;
traitObject.Initialize(name, description, false, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TraitObject traitObject = ...;
traitObject.Initialize(name, description, false, 0, 0);
```

## See Also

- [Area Index](../)
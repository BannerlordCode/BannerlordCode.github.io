---
title: "CultureTrait"
description: "Auto-generated class reference for CultureTrait."
---
# CultureTrait

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CultureTrait : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.CampaignSystem/CultureTrait.cs`

## Overview

`CultureTrait` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description, string asdf)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of CultureTrait from the subsystem API first
CultureTrait cultureTrait = ...;
cultureTrait.Initialize(name, description, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CultureTrait cultureTrait = ...;
cultureTrait.Initialize(name, description, "example");
```

## See Also

- [Area Index](../)
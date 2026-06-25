---
title: "DefaultTraits"
description: "Auto-generated class reference for DefaultTraits."
---
# DefaultTraits

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTraits`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/DefaultTraits.cs`

## Overview

`DefaultTraits` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterAll
`public void RegisterAll()`

**Purpose:** Registers `all` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of DefaultTraits from the subsystem API first
DefaultTraits defaultTraits = ...;
defaultTraits.RegisterAll();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultTraits defaultTraits = ...;
defaultTraits.RegisterAll();
```

## See Also

- [Area Index](../)
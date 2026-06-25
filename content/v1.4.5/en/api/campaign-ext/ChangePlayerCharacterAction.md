---
title: "ChangePlayerCharacterAction"
description: "Auto-generated class reference for ChangePlayerCharacterAction."
---
# ChangePlayerCharacterAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ChangePlayerCharacterAction`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangePlayerCharacterAction.cs`

## Overview

`ChangePlayerCharacterAction` lives in `TaleWorlds.CampaignSystem.Actions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Actions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Apply
`public static void Apply(Hero hero)`

**Purpose:** **Purpose:** Applies the this instance's effect to its target.

```csharp
// Static call; no instance required
ChangePlayerCharacterAction.Apply(hero);
```

## Usage Example

```csharp
ChangePlayerCharacterAction.Apply(hero);
```

## See Also

- [Area Index](../)
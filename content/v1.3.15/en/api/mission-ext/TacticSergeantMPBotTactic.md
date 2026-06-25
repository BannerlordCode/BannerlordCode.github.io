---
title: "TacticSergeantMPBotTactic"
description: "Auto-generated class reference for TacticSergeantMPBotTactic."
---
# TacticSergeantMPBotTactic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TacticSergeantMPBotTactic : TacticComponent`
**Base:** `TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticSergeantMPBotTactic.cs`

## Overview

`TacticSergeantMPBotTactic` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of TacticSergeantMPBotTactic from the subsystem API first
TacticSergeantMPBotTactic tacticSergeantMPBotTactic = ...;
tacticSergeantMPBotTactic.TickOccasionally();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TacticSergeantMPBotTactic tacticSergeantMPBotTactic = ...;
tacticSergeantMPBotTactic.TickOccasionally();
```

## See Also

- [Area Index](../)
---
title: "BoardGameType"
description: "Auto-generated class reference for BoardGameType."
---
# BoardGameType

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum BoardGameType`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CultureObject.cs`

## Overview

`BoardGameType` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
BoardGameType instance = ...;
```

## See Also

- [Area Index](../)
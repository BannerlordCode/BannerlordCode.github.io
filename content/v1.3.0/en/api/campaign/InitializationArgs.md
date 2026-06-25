---
title: "InitializationArgs"
description: "Auto-generated class reference for InitializationArgs."
---
# InitializationArgs

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `class InitializationArgs`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/BanditPartyComponent.cs`

## Overview

`InitializationArgs` lives in `TaleWorlds.CampaignSystem.Party.PartyComponents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party.PartyComponents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
InitializationArgs instance = ...;
```

## See Also

- [Area Index](../)
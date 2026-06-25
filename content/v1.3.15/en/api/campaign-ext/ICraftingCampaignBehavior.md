---
title: "ICraftingCampaignBehavior"
description: "Auto-generated class reference for ICraftingCampaignBehavior."
---
# ICraftingCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ICraftingCampaignBehavior : ICampaignBehavior`
**Base:** `ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/ICraftingCampaignBehavior.cs`

## Overview

`ICraftingCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICraftingCampaignBehavior service = ...;
```

## See Also

- [Area Index](../)
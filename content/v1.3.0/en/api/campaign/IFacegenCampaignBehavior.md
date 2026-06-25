---
title: "IFacegenCampaignBehavior"
description: "Auto-generated class reference for IFacegenCampaignBehavior."
---
# IFacegenCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IFacegenCampaignBehavior : ICampaignBehavior`
**Base:** `ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IFacegenCampaignBehavior.cs`

## Overview

`IFacegenCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIFacegenCampaignBehavior service = ...;
```

## See Also

- [Area Index](../)
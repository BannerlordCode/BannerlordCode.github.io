---
title: "IGarrisonRecruitmentBehavior"
description: "Auto-generated class reference for IGarrisonRecruitmentBehavior."
---
# IGarrisonRecruitmentBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IGarrisonRecruitmentBehavior`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/IGarrisonRecruitmentBehavior.cs`

## Overview

`IGarrisonRecruitmentBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIGarrisonRecruitmentBehavior service = ...;
```

## See Also

- [Area Index](../)
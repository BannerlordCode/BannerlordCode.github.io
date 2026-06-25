---
title: "LadysKnightOutIssueQuest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LadysKnightOutIssueQuest`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LadysKnightOutIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LadysKnightOutIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LadysKnightOutIssueBehavior.cs`

## Overview

`LadysKnightOutIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new LadysKnightOutIssueQuest();
```

## See Also

- [Complete Class Catalog](../catalog)
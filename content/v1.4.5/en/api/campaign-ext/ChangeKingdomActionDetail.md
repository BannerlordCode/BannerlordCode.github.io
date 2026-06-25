---
title: "ChangeKingdomActionDetail"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeKingdomActionDetail`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChangeKingdomActionDetail

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum ChangeKingdomActionDetail`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeKingdomAction.cs`

## Overview

`ChangeKingdomActionDetail` lives in `TaleWorlds.CampaignSystem.Actions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Actions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
ChangeKingdomActionDetail example = ChangeKingdomActionDetail.Value;
```

## See Also

- [Complete Class Catalog](../catalog)
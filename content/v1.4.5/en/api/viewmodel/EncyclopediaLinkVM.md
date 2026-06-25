---
title: "EncyclopediaLinkVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaLinkVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaLinkVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaLinkVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia/EncyclopediaLinkVM.cs`

## Overview

`EncyclopediaLinkVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveLink` | `public string ActiveLink { get; set; }` |

## Key Methods

### ExecuteActiveLink
`public void ExecuteActiveLink()`

**Purpose:** Executes the `active link` operation or workflow.

## Usage Example

```csharp
var value = new EncyclopediaLinkVM();
value.ExecuteActiveLink();
```

## See Also

- [Complete Class Catalog](../catalog)
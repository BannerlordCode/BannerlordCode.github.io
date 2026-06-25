---
title: "EncyclopediaSearchResultVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaSearchResultVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaSearchResultVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSearchResultVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs`

## Overview

`EncyclopediaSearchResultVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrgNameText` | `public string OrgNameText { get; }` |
| `NameText` | `public string NameText { get; set; }` |

## Key Methods

### UpdateSearchedText
`public void UpdateSearchedText(string searchedText)`

**Purpose:** Updates the state or data of `searched text`.

### Execute
`public void Execute()`

**Purpose:** Executes the `execute` operation or workflow.

## Usage Example

```csharp
var value = new EncyclopediaSearchResultVM();
value.UpdateSearchedText("example");
```

## See Also

- [Complete Class Catalog](../catalog)
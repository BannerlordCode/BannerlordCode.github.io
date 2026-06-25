---
title: "KingdomCategoryVM"
description: "Auto-generated class reference for KingdomCategoryVM."
---
# KingdomCategoryVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomCategoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement/KingdomCategoryVM.cs`

## Overview

`KingdomCategoryVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CategoryNameText` | `public string CategoryNameText { get; set; }` |
| `NoItemSelectedText` | `public string NoItemSelectedText { get; set; }` |
| `IsAcceptableItemSelected` | `public bool IsAcceptableItemSelected { get; set; }` |
| `NotificationCount` | `public int NotificationCount { get; set; }` |
| `Show` | `public bool Show { get; set; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
KingdomCategoryVM instance = ...;
```

## See Also

- [Area Index](../)
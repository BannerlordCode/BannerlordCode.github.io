---
title: "EncyclopediaModelBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaModelBase`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaModelBase

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaModelBase : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaModelBase.cs`

## Overview

`EncyclopediaModelBase` lives in `TaleWorlds.CampaignSystem.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PageTargetTypes` | `public Type PageTargetTypes { get; }` |

## Usage Example

```csharp
var implementation = new CustomEncyclopediaModelBase();
```

## See Also

- [Complete Class Catalog](../catalog)
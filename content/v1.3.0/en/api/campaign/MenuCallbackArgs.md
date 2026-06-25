---
title: "MenuCallbackArgs"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuCallbackArgs`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MenuCallbackArgs

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MenuCallbackArgs`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameMenus/MenuCallbackArgs.cs`

## Overview

`MenuCallbackArgs` lives in `TaleWorlds.CampaignSystem.GameMenus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `MapState` | `public MapState MapState { get; }` |

## Usage Example

```csharp
var example = new MenuCallbackArgs();
```

## See Also

- [Complete Class Catalog](../catalog)
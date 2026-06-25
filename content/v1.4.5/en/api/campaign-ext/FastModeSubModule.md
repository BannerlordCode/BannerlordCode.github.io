---
title: "FastModeSubModule"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FastModeSubModule`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FastModeSubModule

**Namespace:** TaleWorlds.CampaignSystem.FastMode
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FastModeSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Bannerlord.Source/Modules.FastMode/TaleWorlds.CampaignSystem.FastMode/FastModeSubModule.cs`

## Overview

`FastModeSubModule` lives in `TaleWorlds.CampaignSystem.FastMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.FastMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new FastModeSubModule();
```

## See Also

- [Complete Class Catalog](../catalog)
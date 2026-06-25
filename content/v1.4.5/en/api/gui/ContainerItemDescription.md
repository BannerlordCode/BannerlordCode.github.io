---
title: "ContainerItemDescription"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContainerItemDescription`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ContainerItemDescription

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ContainerItemDescription`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/ContainerItemDescription.cs`

## Overview

`ContainerItemDescription` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetId` | `public string WidgetId { get; set; }` |
| `WidgetIndex` | `public int WidgetIndex { get; set; }` |
| `WidthStretchRatio` | `public float WidthStretchRatio { get; set; }` |
| `HeightStretchRatio` | `public float HeightStretchRatio { get; set; }` |

## Usage Example

```csharp
var example = new ContainerItemDescription();
```

## See Also

- [Complete Class Catalog](../catalog)
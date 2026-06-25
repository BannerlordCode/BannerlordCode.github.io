---
title: "DeploymentVisualizationPreference"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeploymentVisualizationPreference`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeploymentVisualizationPreference

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum DeploymentVisualizationPreference`
**Area:** mission-ext

## Overview

`DeploymentVisualizationPreference` lives in `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `ShowUndeployed` |
| `1` |
| `Line` |
| `Arc` |
| `4` |
| `Banner` |
| `8` |
| `Path` |
| `16` |
| `Ghost` |
| `32` |
| `Contour` |
| `64` |
| `LiftLadders` |
| `128` |
| `Light` |
| `256` |
| `AllEnabled` |

## Usage Example

```csharp
DeploymentVisualizationPreference example = DeploymentVisualizationPreference.ShowUndeployed;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)

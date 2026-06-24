<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationMarkerListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FormationMarkerListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationMarkerListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/FormationMarkerListPanel.cs`

## Overview

`FormationMarkerListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FarAlphaTarget` | `public float FarAlphaTarget { get; set; }` |
| `FarDistanceCutoff` | `public float FarDistanceCutoff { get; set; }` |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff { get; set; }` |
| `ClosestFadeoutRange` | `public float ClosestFadeoutRange { get; set; }` |
| `FarScaleTarget` | `public float FarScaleTarget { get; set; }` |
| `CloseScaleTarget` | `public float CloseScaleTarget { get; set; }` |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled { get; set; }` |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts { get; set; }` |
| `TeamType` | `public int TeamType { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `Distance` | `public float Distance { get; set; }` |
| `MarkerType` | `public string MarkerType { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `IconBrush` | `public Brush IconBrush { get; set; }` |
| `FormationTypeMarker` | `public Widget FormationTypeMarker { get; set; }` |
| `TeamTypeMarker` | `public Widget TeamTypeMarker { get; set; }` |
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |

## Usage Example

```csharp
var example = new FormationMarkerListPanel();
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DuelTargetMarkerListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DuelTargetMarkerListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelTargetMarkerListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/DuelTargetMarkerListPanel.cs`

## Overview

`DuelTargetMarkerListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `IsAgentInScreenBoundaries` | `public bool IsAgentInScreenBoundaries { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsAgentFocused` | `public bool IsAgentFocused { get; set; }` |
| `HasTargetSentDuelRequest` | `public bool HasTargetSentDuelRequest { get; set; }` |
| `HasPlayerSentDuelRequest` | `public bool HasPlayerSentDuelRequest { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `ActionText` | `public RichTextWidget ActionText { get; set; }` |
| `Background` | `public BrushWidget Background { get; set; }` |
| `Border` | `public BrushWidget Border { get; set; }` |
| `TroopClassBorder` | `public BrushWidget TroopClassBorder { get; set; }` |

## Usage Example

```csharp
var value = new DuelTargetMarkerListPanel();
```

## See Also

- [Complete Class Catalog](../catalog)
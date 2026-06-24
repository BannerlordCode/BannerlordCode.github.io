<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationStageSelectionBarListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationStageSelectionBarListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationStageSelectionBarListPanel`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation/CharacterCreationStageSelectionBarListPanel.cs`

## Overview

`CharacterCreationStageSelectionBarListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StageButtonTemplate` | `public ButtonWidget StageButtonTemplate { get; set; }` |
| `BarFillWidget` | `public Widget BarFillWidget { get; set; }` |
| `BarCanvasWidget` | `public Widget BarCanvasWidget { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `TotalStagesCount` | `public int TotalStagesCount { get; set; }` |
| `OpenedStageIndex` | `public int OpenedStageIndex { get; set; }` |
| `FullButtonBrush` | `public string FullButtonBrush { get; set; }` |
| `EmptyButtonBrush` | `public string EmptyButtonBrush { get; set; }` |
| `FullBrightButtonBrush` | `public string FullBrightButtonBrush { get; set; }` |

## Key Methods

### CharacterCreationStageSelectionBarListPanel
`public class CharacterCreationStageSelectionBarListPanel(UIContext context)`

**Purpose:** Handles logic related to `character creation stage selection bar list panel`.

## Usage Example

```csharp
var value = new CharacterCreationStageSelectionBarListPanel();
value.CharacterCreationStageSelectionBarListPanel(context);
```

## See Also

- [Complete Class Catalog](../catalog)
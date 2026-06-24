<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DoubleTabControlListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DoubleTabControlListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DoubleTabControlListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/DoubleTabControlListPanel.cs`

## Overview

`DoubleTabControlListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FirstListButton` | `public ButtonWidget FirstListButton { get; set; }` |
| `SecondListButton` | `public ButtonWidget SecondListButton { get; set; }` |
| `FirstList` | `public Widget FirstList { get; set; }` |
| `SecondList` | `public Widget SecondList { get; set; }` |

## Key Methods

### OnFirstTabClick
`public void OnFirstTabClick(Widget widget)`

**Purpose:** Called when the `first tab click` event is raised.

### OnSecondTabClick
`public void OnSecondTabClick(Widget widget)`

**Purpose:** Called when the `second tab click` event is raised.

## Usage Example

```csharp
var value = new DoubleTabControlListPanel();
value.OnFirstTabClick(widget);
```

## See Also

- [Complete Class Catalog](../catalog)
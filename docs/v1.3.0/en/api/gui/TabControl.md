<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TabControl`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TabControl

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TabControl : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs`

## Overview

`TabControl` lives in `TaleWorlds.GauntletUI.BaseTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.BaseTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveTab` | `public Widget ActiveTab { get; }` |
| `SelectedIndex` | `public int SelectedIndex { get; set; }` |

## Key Methods

### SetActiveTab
`public void SetActiveTab(string tabName)`

**Purpose:** Sets the value or state of `active tab`.

## Usage Example

```csharp
var value = new TabControl();
value.SetActiveTab("example");
```

## See Also

- [Complete Class Catalog](../catalog)
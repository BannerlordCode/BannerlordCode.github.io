<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapInfoItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapInfoItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapInfoItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar/MapInfoItemVM.cs`

## Overview

`MapInfoItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasWarning` | `public bool HasWarning { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `FloatValue` | `public float FloatValue { get; set; }` |
| `VisualId` | `public string VisualId { get; set; }` |
| `Value` | `public string Value { get; set; }` |

## Key Methods

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Executes the `begin hint` operation or workflow.

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

### SetOverriddenVisualId
`public void SetOverriddenVisualId(string visualId)`

**Purpose:** Sets the value or state of `overridden visual id`.

## Usage Example

```csharp
var value = new MapInfoItemVM();
value.ExecuteBeginHint();
```

## See Also

- [Complete Class Catalog](../catalog)
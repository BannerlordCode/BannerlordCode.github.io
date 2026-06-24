<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProfileSelectionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ProfileSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ProfileSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection/ProfileSelectionVM.cs`

## Overview

`ProfileSelectionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectProfileText` | `public string SelectProfileText { get; set; }` |
| `IsPlayEnabled` | `public bool IsPlayEnabled { get; set; }` |
| `PlayText` | `public string PlayText { get; set; }` |
| `SelectProfileKey` | `public InputKeyItemVM SelectProfileKey { get; set; }` |
| `PlayKey` | `public InputKeyItemVM PlayKey { get; set; }` |

## Key Methods

### OnActivate
`public void OnActivate(bool isDirectPlayPossible)`

**Purpose:** Called when the `activate` event is raised.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new ProfileSelectionVM();
value.OnActivate(false);
```

## See Also

- [Complete Class Catalog](../catalog)
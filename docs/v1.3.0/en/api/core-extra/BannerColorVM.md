<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerColorVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerColorVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.BannerEditor
**Module:** TaleWorlds.Core
**Type:** `public class BannerColorVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs`

## Overview

`BannerColorVM` lives in `TaleWorlds.Core.ViewModelCollection.BannerEditor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.BannerEditor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ColorID` | `public int ColorID { get; }` |
| `Color` | `public uint Color { get; }` |
| `ColorAsStr` | `public string ColorAsStr { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### ExecuteSelectIcon
`public void ExecuteSelectIcon()`

**Purpose:** Executes the `select icon` operation or workflow.

### SetOnSelectionAction
`public void SetOnSelectionAction(Action<BannerColorVM> onSelection)`

**Purpose:** Sets the value or state of `on selection action`.

## Usage Example

```csharp
var value = new BannerColorVM();
value.ExecuteSelectIcon();
```

## See Also

- [Complete Class Catalog](../catalog)
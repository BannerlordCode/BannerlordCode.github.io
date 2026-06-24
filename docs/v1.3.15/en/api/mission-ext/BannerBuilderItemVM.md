<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerBuilderItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBuilderItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderItemVM.cs`

## Overview

`BannerBuilderItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IconData` | `public BannerIconData IconData { get; }` |
| `BackgroundTextureID` | `public string BackgroundTextureID { get; }` |
| `MeshID` | `public int MeshID { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `MeshIDAsString` | `public string MeshIDAsString { get; set; }` |

## Key Methods

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Executes the `selection` operation or workflow.

## Usage Example

```csharp
var value = new BannerBuilderItemVM();
value.ExecuteSelection();
```

## See Also

- [Complete Class Catalog](../catalog)
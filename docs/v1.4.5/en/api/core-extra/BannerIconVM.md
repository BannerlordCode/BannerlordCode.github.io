<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerIconVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerIconVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.BannerEditor
**Module:** TaleWorlds.Core
**Type:** `public class BannerIconVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.BannerEditor/BannerIconVM.cs`

## Overview

`BannerIconVM` lives in `TaleWorlds.Core.ViewModelCollection.BannerEditor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.BannerEditor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IconID` | `public int IconID { get; set; }` |
| `IconPath` | `public string IconPath { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### ExecuteSelectIcon
`public void ExecuteSelectIcon()`

**Purpose:** Executes the `select icon` operation or workflow.

## Usage Example

```csharp
var value = new BannerIconVM();
value.ExecuteSelectIcon();
```

## See Also

- [Complete Class Catalog](../catalog)
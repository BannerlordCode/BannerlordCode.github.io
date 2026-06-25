---
title: "CreditsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreditsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CreditsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsVM.cs`

## Overview

`CreditsVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Credits` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Credits` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RootItem` | `public CreditsItemVM RootItem { get; set; }` |
| `ExitKey` | `public InputKeyItemVM ExitKey { get; set; }` |
| `ExitText` | `public string ExitText { get; set; }` |

## Key Methods

### FillFromFile
`public void FillFromFile(string path)`

**Purpose:** Handles logic related to `fill from file`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new CreditsVM();
value.FillFromFile("example");
```

## See Also

- [Complete Class Catalog](../catalog)
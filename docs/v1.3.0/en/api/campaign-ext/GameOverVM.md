<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameOverVM

**Namespace:** SandBox.ViewModelCollection.GameOver
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameOverVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/GameOver/GameOverVM.cs`

## Overview

`GameOverVM` lives in `SandBox.ViewModelCollection.GameOver` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.GameOver` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CloseText` | `public string CloseText { get; set; }` |
| `StatisticsTitle` | `public string StatisticsTitle { get; set; }` |
| `ReasonAsString` | `public string ReasonAsString { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `IsPositiveGameOver` | `public bool IsPositiveGameOver { get; set; }` |
| `CloseInputKey` | `public InputKeyItemVM CloseInputKey { get; set; }` |
| `Categories` | `public MBBindingList<GameOverStatCategoryVM> Categories { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Executes the `close` operation or workflow.

### SetCloseInputKey
`public void SetCloseInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `close input key`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new GameOverVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
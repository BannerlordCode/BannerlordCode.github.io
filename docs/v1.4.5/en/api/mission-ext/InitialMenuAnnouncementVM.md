<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitialMenuAnnouncementVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InitialMenuAnnouncementVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuAnnouncementVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu/InitialMenuAnnouncementVM.cs`

## Overview

`InitialMenuAnnouncementVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageUrl` | `public string ImageUrl { get; set; }` |
| `LinkUrl` | `public string LinkUrl { get; set; }` |
| `ExcludedModules` | `public List<string> ExcludedModules { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsLinkAvailable` | `public bool IsLinkAvailable { get; set; }` |
| `ImageSourcePath` | `public string ImageSourcePath { get; set; }` |

## Key Methods

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### ExecuteNavigateToLink
`public void ExecuteNavigateToLink()`

**Purpose:** Executes the `navigate to link` operation or workflow.

## Usage Example

```csharp
var value = new InitialMenuAnnouncementVM();
value.Tick();
```

## See Also

- [Complete Class Catalog](../catalog)
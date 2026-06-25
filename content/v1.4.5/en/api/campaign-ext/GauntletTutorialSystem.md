---
title: "GauntletTutorialSystem"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletTutorialSystem`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletTutorialSystem

**Namespace:** SandBox.GauntletUI.Tutorial
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletTutorialSystem : GlobalLayer`
**Base:** `GlobalLayer`
**Area:** campaign-ext

## Overview

`GauntletTutorialSystem` lives in `SandBox.GauntletUI.Tutorial`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentEncyclopediaPageContext` | `public EncyclopediaPages CurrentEncyclopediaPageContext { get; }` |
| `IsCharacterPortraitPopupOpen` | `public bool IsCharacterPortraitPopupOpen { get; }` |
| `CurrentContext` | `public TutorialContexts CurrentContext { get; }` |

## Key Methods

### OnInitialize
`public static void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

### OnUnload
`public static void OnUnload()`

**Purpose:** Called when the `unload` event is raised.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
GauntletTutorialSystem.OnInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)

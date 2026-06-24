<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletTutorialSystem`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletTutorialSystem

**Namespace:** SandBox.GauntletUI.Tutorial
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletTutorialSystem : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs`

## Overview

`GauntletTutorialSystem` lives in `SandBox.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
GauntletTutorialSystem.OnInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)
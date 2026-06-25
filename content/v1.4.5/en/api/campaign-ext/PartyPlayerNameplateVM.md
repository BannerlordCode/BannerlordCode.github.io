---
title: "PartyPlayerNameplateVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyPlayerNameplateVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyPlayerNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyPlayerNameplateVM : PartyNameplateVM`
**Base:** `PartyNameplateVM`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/PartyPlayerNameplateVM.cs`

## Overview

`PartyPlayerNameplateVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMainParty` | `public bool IsMainParty { get; set; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; set; }` |
| `MainHeroVisual` | `public CharacterImageIdentifierVM MainHeroVisual { get; set; }` |

## Key Methods

### InitializePlayerNameplate
`public void InitializePlayerNameplate(Action resetCamera)`

**Purpose:** Initializes the state, resources, or bindings for `player nameplate`.

### Clear
`public override void Clear()`

**Purpose:** Handles logic related to `clear`.

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**Purpose:** Refreshes the display or cache of `dynamic properties`.

### RefreshBinding
`public override void RefreshBinding()`

**Purpose:** Refreshes the display or cache of `binding`.

### RefreshPosition
`public override void RefreshPosition()`

**Purpose:** Refreshes the display or cache of `position`.

### ExecuteSetCameraPosition
`public void ExecuteSetCameraPosition()`

**Purpose:** Executes the `set camera position` operation or workflow.

## Usage Example

```csharp
var value = new PartyPlayerNameplateVM();
value.InitializePlayerNameplate(resetCamera);
```

## See Also

- [Complete Class Catalog](../catalog)
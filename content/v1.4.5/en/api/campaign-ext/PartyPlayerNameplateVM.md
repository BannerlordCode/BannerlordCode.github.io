---
title: "PartyPlayerNameplateVM"
description: "Auto-generated class reference for PartyPlayerNameplateVM."
---
# PartyPlayerNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyPlayerNameplateVM : PartyNameplateVM`
**Base:** `PartyNameplateVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/PartyPlayerNameplateVM.cs`

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

**Purpose:** Prepares the resources, state, or bindings required by player nameplate.

```csharp
// Obtain an instance of PartyPlayerNameplateVM from the subsystem API first
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.InitializePlayerNameplate(resetCamera);
```

### Clear
`public override void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of PartyPlayerNameplateVM from the subsystem API first
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.Clear();
```

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**Purpose:** Keeps the display or cache of dynamic properties in sync with the underlying state.

```csharp
// Obtain an instance of PartyPlayerNameplateVM from the subsystem API first
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.RefreshDynamicProperties(false);
```

### RefreshBinding
`public override void RefreshBinding()`

**Purpose:** Keeps the display or cache of binding in sync with the underlying state.

```csharp
// Obtain an instance of PartyPlayerNameplateVM from the subsystem API first
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.RefreshBinding();
```

### RefreshPosition
`public override void RefreshPosition()`

**Purpose:** Keeps the display or cache of position in sync with the underlying state.

```csharp
// Obtain an instance of PartyPlayerNameplateVM from the subsystem API first
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.RefreshPosition();
```

### ExecuteSetCameraPosition
`public void ExecuteSetCameraPosition()`

**Purpose:** Runs the operation or workflow associated with set camera position.

```csharp
// Obtain an instance of PartyPlayerNameplateVM from the subsystem API first
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.ExecuteSetCameraPosition();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyPlayerNameplateVM partyPlayerNameplateVM = ...;
partyPlayerNameplateVM.InitializePlayerNameplate(resetCamera);
```

## See Also

- [Area Index](../)
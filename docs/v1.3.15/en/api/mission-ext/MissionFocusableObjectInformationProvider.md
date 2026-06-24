<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionFocusableObjectInformationProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionFocusableObjectInformationProvider

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFocusableObjectInformationProvider`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionFocusableObjectInformationProvider.cs`

## Overview

`MissionFocusableObjectInformationProvider` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### AddInfoCallback
`public void AddInfoCallback(GetFocusableObjectInteractionTextsDelegate callback)`

**Purpose:** Adds `info callback` to the current collection or state.

### RemoveInfoCallback
`public void RemoveInfoCallback(GetFocusableObjectInteractionTextsDelegate callback)`

**Purpose:** Removes `info callback` from the current collection or state.

### GetInteractionTexts
`public void GetInteractionTexts(Agent requesterAgent, IFocusable focusable, bool isInteractable, out FocusableObjectInformation focusableObjectInformation)`

**Purpose:** Gets the current value of `interaction texts`.

## Usage Example

```csharp
var value = new MissionFocusableObjectInformationProvider();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)
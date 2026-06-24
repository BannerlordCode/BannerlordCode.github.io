<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMainAgentInteractionComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentInteractionComponent

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentInteractionComponent`
**Base:** none
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionMainAgentInteractionComponent.cs`

## Overview

`MissionMainAgentInteractionComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionMainAgentInteractionComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentFocusedObject` | `public IFocusable CurrentFocusedObject { get; }` |
| `CurrentFocusedMachine` | `public IFocusable CurrentFocusedMachine { get; }` |

## Key Methods

### MissionFocusGainedEventDelegate
`public delegate void MissionFocusGainedEventDelegate(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Handles logic related to `mission focus gained event delegate`.

### MissionFocusLostEventDelegate
`public delegate void MissionFocusLostEventDelegate(Agent agent, IFocusable focusableObject)`

**Purpose:** Handles logic related to `mission focus lost event delegate`.

### MissionFocusHealthChangeDelegate
`public delegate void MissionFocusHealthChangeDelegate(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)`

**Purpose:** Handles logic related to `mission focus health change delegate`.

### SetCurrentFocusedObject
`public void SetCurrentFocusedObject(IFocusable focusedObject, IFocusable focusedMachine, sbyte focusedObjectBoneIndex, bool isInteractable)`

**Purpose:** Sets the value or state of `current focused object`.

### ClearFocus
`public void ClearFocus()`

**Purpose:** Handles logic related to `clear focus`.

### OnClearScene
`public void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### FocusTick
`public void FocusTick()`

**Purpose:** Handles logic related to `focus tick`.

### FocusStateCheckTick
`public void FocusStateCheckTick()`

**Purpose:** Handles logic related to `focus state check tick`.

### FocusedItemHealthTick
`public void FocusedItemHealthTick()`

**Purpose:** Handles logic related to `focused item health tick`.

## Usage Example

```csharp
var component = agent.GetComponent<MissionMainAgentInteractionComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)
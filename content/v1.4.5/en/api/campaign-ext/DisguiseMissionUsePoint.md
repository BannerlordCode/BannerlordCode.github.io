---
title: "DisguiseMissionUsePoint"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisguiseMissionUsePoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DisguiseMissionUsePoint

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class DisguiseMissionUsePoint : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects.Usables/DisguiseMissionUsePoint.cs`

## Overview

`DisguiseMissionUsePoint` lives in `SandBox.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Called when the `use` event is raised.

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Called when the `use stopped` event is raised.

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Handles logic related to `is disabled for agent`.

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**Purpose:** Handles logic related to `is usable by agent`.

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**Purpose:** Gets the current value of `user frame for agent`.

## Usage Example

```csharp
var value = new DisguiseMissionUsePoint();
value.GetDescriptionText(gameEntity);
```

## See Also

- [Complete Class Catalog](../catalog)
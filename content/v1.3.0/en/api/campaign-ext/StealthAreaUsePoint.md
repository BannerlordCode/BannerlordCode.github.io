---
title: "StealthAreaUsePoint"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StealthAreaUsePoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StealthAreaUsePoint

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class StealthAreaUsePoint : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `SandBox/Objects/Usables/StealthAreaUsePoint.cs`

## Overview

`StealthAreaUsePoint` lives in `SandBox.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### DisableAgentAIs
`public void DisableAgentAIs()`

**Purpose:** Handles logic related to `disable agent a is`.

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Handles logic related to `is disabled for agent`.

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**Purpose:** Handles logic related to `is usable by agent`.

### EnableStealthAreaUsePoint
`public void EnableStealthAreaUsePoint()`

**Purpose:** Handles logic related to `enable stealth area use point`.

## Usage Example

```csharp
var value = new StealthAreaUsePoint();
value.GetDescriptionText(gameEntity);
```

## See Also

- [Complete Class Catalog](../catalog)
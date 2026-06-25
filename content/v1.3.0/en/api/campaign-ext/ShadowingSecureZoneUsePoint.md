---
title: "ShadowingSecureZoneUsePoint"
description: "Auto-generated class reference for ShadowingSecureZoneUsePoint."
---
# ShadowingSecureZoneUsePoint

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class ShadowingSecureZoneUsePoint : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `SandBox/Objects/Usables/ShadowingSecureZoneUsePoint.cs`

## Overview

`ShadowingSecureZoneUsePoint` lives in `SandBox.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of ShadowingSecureZoneUsePoint from the subsystem API first
ShadowingSecureZoneUsePoint shadowingSecureZoneUsePoint = ...;
var result = shadowingSecureZoneUsePoint.GetDescriptionText(gameEntity);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the use event is raised.

```csharp
// Obtain an instance of ShadowingSecureZoneUsePoint from the subsystem API first
ShadowingSecureZoneUsePoint shadowingSecureZoneUsePoint = ...;
shadowingSecureZoneUsePoint.OnUse(userAgent, 0);
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Invoked when the use stopped event is raised.

```csharp
// Obtain an instance of ShadowingSecureZoneUsePoint from the subsystem API first
ShadowingSecureZoneUsePoint shadowingSecureZoneUsePoint = ...;
shadowingSecureZoneUsePoint.OnUseStopped(userAgent, false, 0);
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Determines whether the this instance is in the disabled for agent state or condition.

```csharp
// Obtain an instance of ShadowingSecureZoneUsePoint from the subsystem API first
ShadowingSecureZoneUsePoint shadowingSecureZoneUsePoint = ...;
var result = shadowingSecureZoneUsePoint.IsDisabledForAgent(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShadowingSecureZoneUsePoint shadowingSecureZoneUsePoint = ...;
shadowingSecureZoneUsePoint.GetDescriptionText(gameEntity);
```

## See Also

- [Area Index](../)
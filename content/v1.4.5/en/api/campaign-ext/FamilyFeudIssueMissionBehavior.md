---
title: "FamilyFeudIssueMissionBehavior"
description: "Auto-generated class reference for FamilyFeudIssueMissionBehavior."
---
# FamilyFeudIssueMissionBehavior

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class FamilyFeudIssueMissionBehavior : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/FamilyFeudIssueBehavior.cs`

## Overview

`FamilyFeudIssueMissionBehavior` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the agent hit event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueMissionBehavior from the subsystem API first
FamilyFeudIssueMissionBehavior familyFeudIssueMissionBehavior = ...;
familyFeudIssueMissionBehavior.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FamilyFeudIssueMissionBehavior familyFeudIssueMissionBehavior = ...;
familyFeudIssueMissionBehavior.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

## See Also

- [Area Index](../)
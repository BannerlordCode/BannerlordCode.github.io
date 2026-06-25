---
title: "AgentLastHitInfo"
description: "Auto-generated class reference for AgentLastHitInfo."
---
# AgentLastHitInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AgentLastHitInfo`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Agent.cs`

## Overview

`AgentLastHitInfo` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LastBlowOwnerId` | `public int LastBlowOwnerId { get; }` |
| `LastBlowAttackType` | `public AgentAttackType LastBlowAttackType { get; }` |
| `CanOverrideBlow` | `public bool CanOverrideBlow { get; }` |

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of AgentLastHitInfo from the subsystem API first
AgentLastHitInfo agentLastHitInfo = ...;
agentLastHitInfo.Initialize();
```

### RegisterLastBlow
`public void RegisterLastBlow(int ownerId, AgentAttackType attackType)`

**Purpose:** Registers `last blow` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of AgentLastHitInfo from the subsystem API first
AgentLastHitInfo agentLastHitInfo = ...;
agentLastHitInfo.RegisterLastBlow(0, attackType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AgentLastHitInfo agentLastHitInfo = ...;
agentLastHitInfo.Initialize();
```

## See Also

- [Area Index](../)
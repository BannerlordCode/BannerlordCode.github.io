---
title: "AgentCapsuleData"
description: "Auto-generated class reference for AgentCapsuleData."
---
# AgentCapsuleData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AgentCapsuleData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentCapsuleData.cs`

## Overview

A two-field value struct that carries the collision capsules an agent is built with: one for standing, one for crouching. Both fields are `TaleWorlds.Engine.CapsuleData` references, and the type holds no behaviour of its own — no constructor, no properties, no validation. It is produced by exactly one place in the engine, `MonsterExtensions.FillCapsuleData(this Monster)` (`MonsterExtensions.cs:129`), and consumed by exactly one: `Mission.CreateAgentInternal`, which takes it by `ref` (`Mission.cs:381`) and receives a filled instance from `Mission.cs:3671`.

## Mental Model

Read this as a hand-off slip, not a settings object. `MonsterExtensions.FillCapsuleData` casts the monster's `MonsterMissionData` (`MonsterExtensions.cs:131`) and copies two authored capsules out of it — `BodyCapsule` into `BodyCap` and `CrouchedBodyCapsule` into `CrouchedBodyCap` (`MonsterExtensions.cs:132`-`MonsterExtensions.cs:135`). That authored pair is the entire contract: what the mission uses to size an agent's collision volume is decided in the monster definition, and this struct just moves it to the spawn site. It deliberately carries nothing else — no mount capsule, no weapon-extent capsule, no rider offset — so anything you need beyond standing and crouched has to be applied to the `CapsuleData` values themselves.

## How to use

**Getting one.** Call `monster.FillCapsuleData()` (`MonsterExtensions.cs:129`) and pass it into agent creation. If you want different collision than the monster definition specifies, build the struct yourself and assign both fields — there is no factory that fills them for you, and nothing validates that you did.

**Typical use.**

```csharp
// MonsterExtensions.FillCapsuleData (MonsterExtensions.cs:129) is the engine's producer.
Monster giant = MBObjectManager.Instance.GetObject<Monster>("giant_troll");
AgentCapsuleData capsules = giant.FillCapsuleData();

// Both fields are plain public fields, so assignment is the whole API.
capsules.BodyCap = myTallerStandingCapsule;   // AgentCapsuleData.cs:10
capsules.CrouchedBodyCap = myShorterCapsule;  // AgentCapsuleData.cs:13

// The struct copies by value; the two CapsuleData references inside it do not.
AgentCapsuleData copy = capsules;
copy.BodyCap = someOtherCapsule;   // capsules.BodyCap is unchanged
```

**Watch out.** `new AgentCapsuleData()` — and equally `default(AgentCapsuleData)` — gives you two **null** `CapsuleData` references, because the struct declares no constructor to populate them (`AgentCapsuleData.cs:7`-`AgentCapsuleData.cs:14`). `Mission.CreateAgentInternal` takes the struct by `ref` (`Mission.cs:381`), so an unpopulated instance is not rejected at the call site: the nulls travel straight into agent creation and surface later as a null dereference deep inside collision setup, far from the code that forgot to fill the struct.

## Members

| Member | Signature | What it is for |
|---|---|---|
| `BodyCap` | `public CapsuleData BodyCap;` | The capsule used while the agent is standing — the volume mission collision tests agent bodies against. `MonsterExtensions.FillCapsuleData` fills it from `MonsterMissionData.BodyCapsule` (`MonsterExtensions.cs:133`). |
| `CrouchedBodyCap` | `public CapsuleData CrouchedBodyCap;` | The capsule substituted when the agent crouches, so a crouched figure is not struck at standing height. Filled from `MonsterMissionData.CrouchedBodyCapsule` (`MonsterExtensions.cs:134`). |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AgentCapsuleData entry = ...;
```

## See Also

- [Area Index](../)
- [CapsuleData](../../engine/CapsuleData)
- [MonsterMissionData](../MonsterMissionData)
---
title: "StealthZone"
description: "StealthZone: a public class in SandBox.Objects; 18 exposed members (8 methods, 5 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/Objects/StealthZone.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StealthZone

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class StealthZone`
**File:** `SandBox/Objects/StealthZone.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

StealthZone lives in the SandBox module, source file SandBox/Objects/StealthZone.cs. It is a public class; the inheritance chain is StealthZone. It exposes 18 public/protected members: 8 methods, 5 properties, 1 fields, 2 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StealthZone lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects`, inheritance chain StealthZone. The surface is method-led (methods 8/18, properties 5/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/StealthZone.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AreAgentsActive` | `public bool AreAgentsActive` | property |
| `UseVolumeBox` | `public bool UseVolumeBox` | property |
| `EliminatedAgents` | `public int EliminatedAgents` | property |
| `List` | `public List<Agent>Agents` | property |
| `OnActivated;` | `public event Action OnActivated;` | event |
| `OnDisactivated;` | `public event Action OnDisactivated;` | event |
| `VolumeBox` | `public VolumeBox VolumeBox` | property |
| `StealthZone` | `public StealthZone(Agent targetAgent, bool useVolumeBox)` | constructor |
| `SetStealthAgents` | `public void SetStealthAgents(List<Agent>agents)` | method |
| `Tick` | `public void Tick()` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent)` | method |
| `IsAgentInside` | `public bool IsAgentInside(Agent agent)` | method |
| `OnPlayerFlees` | `public void OnPlayerFlees()` | method |
| `ResetEvents` | `public void ResetEvents()` | method |
| `DisableAll` | `public void DisableAll()` | method |
| `VolumeBoxId` | `public const string VolumeBoxId` | field |
| `StealthZoneEvent` | `public delegate void StealthZoneEvent();` | method |
| `StealthZoneEvent` | `public delegate void StealthZoneEvent()` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CheckpointArea](../CheckpointArea/)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData/)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent/)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox/)

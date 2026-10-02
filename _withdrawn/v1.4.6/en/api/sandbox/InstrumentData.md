---
title: "InstrumentData"
description: "InstrumentData: a public class in SandBox.Objects, inheriting MBObjectBase; 9 exposed members (2 methods, 5 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Objects/InstrumentData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InstrumentData

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class InstrumentData : MBObjectBase`
**File:** `SandBox/Objects/InstrumentData.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

InstrumentData lives in the SandBox module, source file SandBox/Objects/InstrumentData.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is InstrumentData → MBObjectBase. It exposes 9 public/protected members: 2 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InstrumentData lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects`, inheritance chain InstrumentData → MBObjectBase. The surface is property-led (properties 5/9, methods 2/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/InstrumentData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `string>>InstrumentEntities` | `public MBReadOnlyList<ValueTuple<HumanBone, string>>InstrumentEntities` | property |
| `SittingAction` | `public string SittingAction` | property |
| `StandingAction` | `public string StandingAction` | property |
| `Tag` | `public string Tag` | property |
| `IsDataWithoutInstrument` | `public bool IsDataWithoutInstrument` | property |
| `InstrumentData` | `public InstrumentData()` | constructor |
| `InstrumentData` | `public InstrumentData(string stringId) : base(stringId)` | constructor |
| `InitializeInstrumentData` | `public void InitializeInstrumentData(string sittingAction, string standingAction, bool isDataWithoutInstrument)` | method |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CheckpointArea](../CheckpointArea/)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData/)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent/)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox/)

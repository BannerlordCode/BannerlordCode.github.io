---
title: "SettlementMusicData"
description: "SettlementMusicData: a public class in SandBox, inheriting MBObjectBase; 6 exposed members (1 methods, 5 properties, 0 fields). Source: SandBox/Objects/SettlementMusicData.cs."
---
# SettlementMusicData

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class SettlementMusicData : MBObjectBase`
**File:** `SandBox/Objects/SettlementMusicData.cs`

## Overview

SettlementMusicData lives in the SandBox module, source file SandBox/Objects/SettlementMusicData.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is SettlementMusicData → MBObjectBase. It exposes 6 public/protected members: 1 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementMusicData is a top-level type in SandBox, namespace differing from (SandBox.Objects) the module directory; inheritance chain SettlementMusicData → MBObjectBase. The surface is property-led (properties 5/6, methods 1/6), so it mostly exposes state for reading. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/SettlementMusicData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MusicPath` | `public string MusicPath` | property |
| `Culture` | `public CultureObject Culture` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<InstrumentData>Instruments` | property |
| `LocationId` | `public string LocationId` | property |
| `Tempo` | `public int Tempo` | property |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheckpointArea](../CheckpointArea)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox)

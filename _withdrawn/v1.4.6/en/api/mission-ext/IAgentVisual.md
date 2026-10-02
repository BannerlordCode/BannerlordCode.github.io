---
title: "IAgentVisual"
description: "IAgentVisual: a public interface in TaleWorlds.MountAndBlade; 13 exposed members (13 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IAgentVisual.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IAgentVisual

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IAgentVisual`
**File:** `TaleWorlds.MountAndBlade/IAgentVisual.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IAgentVisual lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IAgentVisual.cs. It is a public interface; the inheritance chain is IAgentVisual. It exposes 13 public/protected members: 13 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAgentVisual lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IAgentVisual. The surface is method-led (methods 13/13, properties 0/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IAgentVisual.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetAction` | `void SetAction(in ActionIndexCache actionName, float startProgress = 0f, bool forceFaceMorphRestart = true);` | method |
| `GetVisuals` | `MBAgentVisuals GetVisuals();` | method |
| `GetFrame` | `MatrixFrame GetFrame();` | method |
| `GetBodyProperties` | `BodyProperties GetBodyProperties();` | method |
| `SetBodyProperties` | `void SetBodyProperties(BodyProperties bodyProperties);` | method |
| `GetIsFemale` | `bool GetIsFemale();` | method |
| `GetCharacterObjectID` | `string GetCharacterObjectID();` | method |
| `SetCharacterObjectID` | `void SetCharacterObjectID(string id);` | method |
| `GetEquipment` | `Equipment GetEquipment();` | method |
| `SetClothingColors` | `void SetClothingColors(uint color1, uint color2);` | method |
| `GetClothingColors` | `void GetClothingColors(out uint color1, out uint color2);` | method |
| `GetCopyAgentVisualsData` | `AgentVisualsData GetCopyAgentVisualsData();` | method |
| `Refresh` | `void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)

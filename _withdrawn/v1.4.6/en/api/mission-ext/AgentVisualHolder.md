---
title: "AgentVisualHolder"
description: "AgentVisualHolder: a public class in TaleWorlds.MountAndBlade, inheriting IAgentVisual; 17 exposed members (16 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/AgentVisualHolder.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentVisualHolder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentVisualHolder : IAgentVisual`
**File:** `TaleWorlds.MountAndBlade/AgentVisualHolder.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentVisualHolder lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AgentVisualHolder.cs. It is a public class, implementing/inheriting IAgentVisual; the inheritance chain is AgentVisualHolder → IAgentVisual. It exposes 17 public/protected members: 16 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentVisualHolder lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain AgentVisualHolder → IAgentVisual. The surface is method-led (methods 16/17, properties 0/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AgentVisualHolder.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AgentVisualHolder` | `public AgentVisualHolder(MatrixFrame frame, Equipment equipment, string name, BodyProperties bodyProperties)` | constructor |
| `SetAction` | `public void SetAction(in ActionIndexCache actionName, float startProgress = 0f, bool forceFaceMorphRestart = true)` | method |
| `GetEntity` | `public GameEntity GetEntity()` | method |
| `GetVisuals` | `public MBAgentVisuals GetVisuals()` | method |
| `SetFrame` | `public void SetFrame(ref MatrixFrame frame)` | method |
| `GetFrame` | `public MatrixFrame GetFrame()` | method |
| `GetBodyProperties` | `public BodyProperties GetBodyProperties()` | method |
| `SetBodyProperties` | `public void SetBodyProperties(BodyProperties bodyProperties)` | method |
| `GetIsFemale` | `public bool GetIsFemale()` | method |
| `GetCharacterObjectID` | `public string GetCharacterObjectID()` | method |
| `SetCharacterObjectID` | `public void SetCharacterObjectID(string id)` | method |
| `GetEquipment` | `public Equipment GetEquipment()` | method |
| `RefreshWithNewEquipment` | `public void RefreshWithNewEquipment(Equipment equipment)` | method |
| `SetClothingColors` | `public void SetClothingColors(uint color1, uint color2)` | method |
| `GetClothingColors` | `public void GetClothingColors(out uint color1, out uint color2)` | method |
| `GetCopyAgentVisualsData` | `public AgentVisualsData GetCopyAgentVisualsData()` | method |
| `Refresh` | `public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IAgentVisual](../IAgentVisual/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)

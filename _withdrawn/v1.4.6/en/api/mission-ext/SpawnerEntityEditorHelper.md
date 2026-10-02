---
title: "SpawnerEntityEditorHelper"
description: "SpawnerEntityEditorHelper: a public class in TaleWorlds.MountAndBlade; 17 exposed members (7 methods, 5 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SpawnerEntityEditorHelper

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SpawnerEntityEditorHelper`
**File:** `TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SpawnerEntityEditorHelper lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs. It is a public class; the inheritance chain is SpawnerEntityEditorHelper. It exposes 17 public/protected members: 7 methods, 5 properties, 1 fields, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpawnerEntityEditorHelper lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SpawnerEntityEditorHelper. The surface is method-led (methods 7/17, properties 5/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | property |
| `SpawnedGhostEntity` | `public GameEntity SpawnedGhostEntity` | property |
| `SpawnerEntityEditorHelper` | `public SpawnerEntityEditorHelper(ScriptComponentBehavior spawner)` | constructor |
| `GetGhostEntityOrChild` | `public GameEntity GetGhostEntityOrChild(string name)` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `GivePermission` | `public void GivePermission(string childName, SpawnerEntityEditorHelper.Permission permission, Action<float>onChangeFunction)` | method |
| `ChangeStableChildMatrixFrameAndApply` | `public void ChangeStableChildMatrixFrameAndApply(string childName, MatrixFrame matrixFrame, bool updateTriad = true)` | method |
| `GetPrefabName` | `public string GetPrefabName()` | method |
| `SetupGhostMovement` | `public void SetupGhostMovement(string pathName)` | method |
| `SetEnableAutoGhostMovement` | `public void SetEnableAutoGhostMovement(bool enableAutoGhostMovement)` | method |
| `LockGhostParent` | `public bool LockGhostParent` | field |
| `Axis` | `public enum Axis` | property |
| `PermissionType` | `public enum PermissionType` | property |
| `Permission` | `public struct Permission` | property |
| `Axis` | `public enum Axis` | nested type |
| `PermissionType` | `public enum PermissionType` | nested type |
| `Permission` | `public struct Permission` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)

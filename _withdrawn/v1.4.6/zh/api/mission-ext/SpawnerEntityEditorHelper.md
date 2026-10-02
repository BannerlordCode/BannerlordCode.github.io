---
title: "SpawnerEntityEditorHelper"
description: "SpawnerEntityEditorHelper：TaleWorlds.MountAndBlade 的 public 类；公开成员 17 个（方法 7、属性 5、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SpawnerEntityEditorHelper

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SpawnerEntityEditorHelper`
**File:** `TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SpawnerEntityEditorHelper 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs。它是一个 public 类，继承链为 SpawnerEntityEditorHelper。public/protected 成员共 17 个：7 方法、5 属性、1 字段、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SpawnerEntityEditorHelper 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SpawnerEntityEditorHelper。成员构成以方法为主（方法 7/17，属性 5/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | 属性 |
| `SpawnedGhostEntity` | `public GameEntity SpawnedGhostEntity` | 属性 |
| `SpawnerEntityEditorHelper` | `public SpawnerEntityEditorHelper(ScriptComponentBehavior spawner)` | 构造函数 |
| `GetGhostEntityOrChild` | `public GameEntity GetGhostEntityOrChild(string name)` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `GivePermission` | `public void GivePermission(string childName, SpawnerEntityEditorHelper.Permission permission, Action<float>onChangeFunction)` | 方法 |
| `ChangeStableChildMatrixFrameAndApply` | `public void ChangeStableChildMatrixFrameAndApply(string childName, MatrixFrame matrixFrame, bool updateTriad = true)` | 方法 |
| `GetPrefabName` | `public string GetPrefabName()` | 方法 |
| `SetupGhostMovement` | `public void SetupGhostMovement(string pathName)` | 方法 |
| `SetEnableAutoGhostMovement` | `public void SetEnableAutoGhostMovement(bool enableAutoGhostMovement)` | 方法 |
| `LockGhostParent` | `public bool LockGhostParent` | 字段 |
| `Axis` | `public enum Axis` | 属性 |
| `PermissionType` | `public enum PermissionType` | 属性 |
| `Permission` | `public struct Permission` | 属性 |
| `Axis` | `public enum Axis` | 嵌套类型 |
| `PermissionType` | `public enum PermissionType` | 嵌套类型 |
| `Permission` | `public struct Permission` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)

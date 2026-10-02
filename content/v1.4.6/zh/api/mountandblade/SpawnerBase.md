---
title: "SpawnerBase"
description: "SpawnerBase：TaleWorlds.MountAndBlade 的 public 类，继承 ScriptComponentBehavior；公开成员 6 个（方法 2、属性 1、字段 2）。源文件 TaleWorlds.MountAndBlade/Objects/Siege/SpawnerBase.cs。"
---
# SpawnerBase

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SpawnerBase : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/SpawnerBase.cs`

## 概述

SpawnerBase 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/Siege/SpawnerBase.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 SpawnerBase → ScriptComponentBehavior。public/protected 成员共 6 个：2 方法、1 属性、2 字段、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SpawnerBase 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Objects.Siege），继承链 SpawnerBase → ScriptComponentBehavior。成员构成以方法为主（方法 2/6，属性 1/6），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/Siege/SpawnerBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | 方法 |
| `AssignParameters` | `public virtual void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)` | 方法 |
| `ToBeSpawnedOverrideName` | `public string ToBeSpawnedOverrideName` | 字段 |
| `ToBeSpawnedOverrideNameForFireVersion` | `public string ToBeSpawnedOverrideNameForFireVersion` | 字段 |
| `EditorVisibleScriptComponentVariable` | `public class SpawnerPermissionField : EditorVisibleScriptComponentVariable` | 属性 |
| `EditorVisibleScriptComponentVariable` | `public class SpawnerPermissionField : EditorVisibleScriptComponentVariable` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BallistaSpawner](../BallistaSpawner)
- [同命名空间 BatteringRamSpawner](../BatteringRamSpawner)
- [同命名空间 FireTrebuchet](../FireTrebuchet)
- [同命名空间 ISpawnable](../ISpawnable)

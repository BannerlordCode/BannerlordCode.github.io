---
title: "LoadContext"
description: "LoadContext：TaleWorlds.SaveSystem.Load 的 public 类；公开成员 10 个（方法 5、属性 4、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Load/LoadContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LoadContext

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class LoadContext`
**File:** `TaleWorlds.SaveSystem/Load/LoadContext.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

LoadContext 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Load/LoadContext.cs。它是一个 public 类，继承链为 LoadContext。public/protected 成员共 10 个：5 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LoadContext 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Load`，继承链 LoadContext。成员构成以方法为主（方法 5/10，属性 4/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Load/LoadContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EnableLoadStatistics` | `public static bool EnableLoadStatistics` | 属性 |
| `RootObject` | `public object RootObject` | 属性 |
| `DefinitionContext` | `public DefinitionContext DefinitionContext` | 属性 |
| `Driver` | `public ISaveDriver Driver` | 属性 |
| `LoadContext` | `public LoadContext(DefinitionContext definitionContext, ISaveDriver driver)` | 构造函数 |
| `Load` | `public bool Load(LoadData loadData, bool loadAsLateInitialize)` | 方法 |
| `TryConvertType` | `public static bool TryConvertType(Type sourceType, Type targetType, ref object data)` | 方法 |
| `GetObjectWithId` | `public ObjectHeaderLoadData GetObjectWithId(int id)` | 方法 |
| `GetContainerWithId` | `public ContainerHeaderLoadData GetContainerWithId(int id)` | 方法 |
| `GetStringWithId` | `public string GetStringWithId(int id)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ContainerHeaderLoadData](../ContainerHeaderLoadData/)
- [同命名空间 LoadError](../LoadError/)
- [同命名空间 LoadResult](../LoadResult/)
- [同命名空间 ObjectHeaderLoadData](../ObjectHeaderLoadData/)

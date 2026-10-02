---
title: "TypeSaveId"
description: "TypeSaveId：TaleWorlds.SaveSystem.Definition 的 public 类，继承 SaveId；公开成员 6 个（方法 4、属性 1、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Definition/TypeSaveId.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TypeSaveId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class TypeSaveId : SaveId`
**File:** `TaleWorlds.SaveSystem/Definition/TypeSaveId.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

TypeSaveId 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/TypeSaveId.cs。它是一个 public 类，实现/继承 SaveId，继承链为 TypeSaveId → SaveId。public/protected 成员共 6 个：4 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TypeSaveId 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Definition`，继承链 TypeSaveId → SaveId。成员构成以方法为主（方法 4/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/TypeSaveId.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | 属性 |
| `TypeSaveId` | `public TypeSaveId(int id)` | 构造函数 |
| `GetStringId` | `public override string GetStringId()` | 方法 |
| `WriteTo` | `public override void WriteTo(IWriter writer)` | 方法 |
| `ReadFrom` | `public static TypeSaveId ReadFrom(IReader reader)` | 方法 |
| `GetSizeInBytes` | `public override int GetSizeInBytes()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SaveId](../SaveId/)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate/)
- [同命名空间 ContainerDefinition](../ContainerDefinition/)
- [同命名空间 ContainerSaveId](../ContainerSaveId/)
- [同命名空间 CustomField](../CustomField/)

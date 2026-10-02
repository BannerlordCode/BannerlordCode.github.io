---
title: "TypeDefinitionBase"
description: "TypeDefinitionBase：TaleWorlds.SaveSystem.Definition 的 public 类；公开成员 5 个（方法 1、属性 3、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Definition/TypeDefinitionBase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TypeDefinitionBase

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem/Definition/TypeDefinitionBase.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

TypeDefinitionBase 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/TypeDefinitionBase.cs。它是一个 public 类，继承链为 TypeDefinitionBase。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TypeDefinitionBase 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Definition`，继承链 TypeDefinitionBase。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/TypeDefinitionBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveId` | `public SaveId SaveId` | 属性 |
| `Type` | `public Type Type` | 属性 |
| `TypeLevel` | `public byte TypeLevel` | 属性 |
| `TypeDefinitionBase` | `protected TypeDefinitionBase(Type type, SaveId saveId)` | 构造函数 |
| `GetClassLevel` | `public static byte GetClassLevel(Type type)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate/)
- [同命名空间 ContainerDefinition](../ContainerDefinition/)
- [同命名空间 ContainerSaveId](../ContainerSaveId/)
- [同命名空间 CustomField](../CustomField/)

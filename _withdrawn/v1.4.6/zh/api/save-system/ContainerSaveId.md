---
title: "ContainerSaveId"
description: "ContainerSaveId：TaleWorlds.SaveSystem.Definition 的 public 类，继承 SaveId；公开成员 9 个（方法 4、属性 3、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Definition/ContainerSaveId.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ContainerSaveId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ContainerSaveId : SaveId`
**File:** `TaleWorlds.SaveSystem/Definition/ContainerSaveId.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

ContainerSaveId 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/ContainerSaveId.cs。它是一个 public 类，实现/继承 SaveId，继承链为 ContainerSaveId → SaveId。public/protected 成员共 9 个：4 方法、3 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ContainerSaveId 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Definition`，继承链 ContainerSaveId → SaveId。成员构成以方法为主（方法 4/9，属性 3/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/ContainerSaveId.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ContainerType` | `public ContainerType ContainerType` | 属性 |
| `KeyId` | `public SaveId KeyId` | 属性 |
| `ValueId` | `public SaveId ValueId` | 属性 |
| `ContainerSaveId` | `public ContainerSaveId(ContainerType containerType, SaveId elementId)` | 构造函数 |
| `ContainerSaveId` | `public ContainerSaveId(ContainerType containerType, SaveId keyId, SaveId valueId)` | 构造函数 |
| `GetStringId` | `public override string GetStringId()` | 方法 |
| `WriteTo` | `public override void WriteTo(IWriter writer)` | 方法 |
| `ReadFrom` | `public static ContainerSaveId ReadFrom(IReader reader)` | 方法 |
| `GetSizeInBytes` | `public override int GetSizeInBytes()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SaveId](../SaveId/)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate/)
- [同命名空间 ContainerDefinition](../ContainerDefinition/)
- [同命名空间 CustomField](../CustomField/)
- [同命名空间 DefinitionContext](../DefinitionContext/)

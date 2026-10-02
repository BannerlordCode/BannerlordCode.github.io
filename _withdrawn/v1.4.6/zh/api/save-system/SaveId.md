---
title: "SaveId"
description: "SaveId：TaleWorlds.SaveSystem.Definition 的 public 类；公开成员 6 个（方法 6、属性 0、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Definition/SaveId.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public abstract class SaveId`
**File:** `TaleWorlds.SaveSystem/Definition/SaveId.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

SaveId 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/SaveId.cs。它是一个 public 类（abstract），继承链为 SaveId。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveId 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Definition`，继承链 SaveId。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/SaveId.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetStringId` | `public abstract string GetStringId();` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `WriteTo` | `public abstract void WriteTo(IWriter writer);` | 方法 |
| `ReadSaveIdFrom` | `public static SaveId ReadSaveIdFrom(IReader reader)` | 方法 |
| `GetSizeInBytes` | `public abstract int GetSizeInBytes();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate/)
- [同命名空间 ContainerDefinition](../ContainerDefinition/)
- [同命名空间 ContainerSaveId](../ContainerSaveId/)
- [同命名空间 CustomField](../CustomField/)

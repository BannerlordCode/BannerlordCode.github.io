---
title: "SaveableRootClassAttribute"
description: "SaveableRootClassAttribute：TaleWorlds.SaveSystem 的 public 类，继承 Attribute；公开成员 2 个（方法 0、属性 1、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/SaveableRootClassAttribute.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveableRootClassAttribute

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveableRootClassAttribute : Attribute`
**File:** `TaleWorlds.SaveSystem/SaveableRootClassAttribute.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

SaveableRootClassAttribute 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/SaveableRootClassAttribute.cs。它是一个 public 类，实现/继承 Attribute，继承链为 SaveableRootClassAttribute → Attribute。public/protected 成员共 2 个：1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveableRootClassAttribute 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem`，继承链 SaveableRootClassAttribute → Attribute。成员构成以属性为主（属性 1/2，方法 0/2），对外主要以状态读取接口暴露。继承链上的 Attribute 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/SaveableRootClassAttribute.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveId` | `public int SaveId` | 属性 |
| `SaveableRootClassAttribute` | `public SaveableRootClassAttribute(int saveId)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AsyncFileSaveDriver](../AsyncFileSaveDriver/)
- [同命名空间 ContainerType](../ContainerType/)
- [同命名空间 EntryId](../EntryId/)
- [同命名空间 FileDriver](../FileDriver/)

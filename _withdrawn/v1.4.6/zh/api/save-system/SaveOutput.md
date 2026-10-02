---
title: "SaveOutput"
description: "SaveOutput：TaleWorlds.SaveSystem.Save 的 public 类；公开成员 6 个（方法 1、属性 5、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Save/SaveOutput.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveOutput

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveOutput`
**File:** `TaleWorlds.SaveSystem/Save/SaveOutput.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

SaveOutput 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Save/SaveOutput.cs。它是一个 public 类，继承链为 SaveOutput。public/protected 成员共 6 个：1 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveOutput 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Save`，继承链 SaveOutput。成员构成以属性为主（属性 5/6，方法 1/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Save/SaveOutput.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Data` | `public GameData Data` | 属性 |
| `Result` | `public SaveResult Result` | 属性 |
| `SaveError[]Errors` | `public SaveError[]Errors` | 属性 |
| `Successful` | `public bool Successful` | 属性 |
| `IsContinuing` | `public bool IsContinuing` | 属性 |
| `PrintStatus` | `public void PrintStatus()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 LegacySaveContext](../LegacySaveContext/)
- [同命名空间 SaveContext](../SaveContext/)
- [同命名空间 SaveError](../SaveError/)

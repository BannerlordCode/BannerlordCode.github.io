---
title: "SandBoxSaveManager"
description: "SandBoxSaveManager：SandBox 的 public 类，继承 ISaveManager；公开成员 3 个（方法 3、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/SandBoxSaveManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxSaveManager

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class SandBoxSaveManager : ISaveManager`
**File:** `SandBox/SandBoxSaveManager.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandBoxSaveManager 位于 SandBox 模块，源文件 SandBox/SandBoxSaveManager.cs。它是一个 public 类，实现/继承 ISaveManager，继承链为 SandBoxSaveManager → ISaveManager。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxSaveManager 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox`，继承链 SandBoxSaveManager → ISaveManager。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/SandBoxSaveManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetAutoSaveInterval` | `public int GetAutoSaveInterval()` | 方法 |
| `IsAutoSaveDisabled` | `public bool IsAutoSaveDisabled()` | 方法 |
| `OnSaveOver` | `public void OnSaveOver(bool isSuccessful, string newSaveGameName)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ISaveManager](../../campaign/ISaveManager/)
- [同命名空间 Add1000GoldCheat](../Add1000GoldCheat/)
- [同命名空间 Add100InfluenceCheat](../Add100InfluenceCheat/)
- [同命名空间 Add100RenownCheat](../Add100RenownCheat/)
- [同命名空间 AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)

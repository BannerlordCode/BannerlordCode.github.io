---
title: "SandBoxSaveHelper"
description: "SandBoxSaveHelper：SandBox 的 public 类；公开成员 9 个（方法 4、属性 2、字段 0）。canonical 桶 sandbox。源文件 SandBox/SandBoxSaveHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxSaveHelper

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public static class SandBoxSaveHelper`
**File:** `SandBox/SandBoxSaveHelper.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandBoxSaveHelper 位于 SandBox 模块，源文件 SandBox/SandBoxSaveHelper.cs。它是一个 public 类，继承链为 SandBoxSaveHelper。public/protected 成员共 9 个：4 方法、2 属性、1 事件、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxSaveHelper 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox`，继承链 SandBoxSaveHelper。成员构成以方法为主（方法 4/9，属性 2/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/SandBoxSaveHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public static event Action<SandBoxSaveHelper.SaveHelperState>OnStateChange;` | 事件 |
| `TryLoadSave` | `public static void TryLoadSave(SaveGameFileInfo saveInfo, Action<LoadResult>onStartGame, Action onCancel = null)` | 方法 |
| `MBReadOnlyList` | `public static MBReadOnlyList<SandBoxSaveHelper.ModuleCheckResult>CheckMetaDataCompatibilityErrors(MetaData fileMetaData)` | 方法 |
| `GetIsDisabledWithReason` | `public static bool GetIsDisabledWithReason(SaveGameFileInfo saveGameFileInfo, out TextObject reason)` | 方法 |
| `GetModuleNameFromModuleId` | `public static string GetModuleNameFromModuleId(string id)` | 方法 |
| `SaveHelperState` | `public enum SaveHelperState` | 属性 |
| `ModuleCheckResult` | `public readonly struct ModuleCheckResult` | 属性 |
| `SaveHelperState` | `public enum SaveHelperState` | 嵌套类型 |
| `ModuleCheckResult` | `public readonly struct ModuleCheckResult` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Add1000GoldCheat](../Add1000GoldCheat/)
- [同命名空间 Add100InfluenceCheat](../Add100InfluenceCheat/)
- [同命名空间 Add100RenownCheat](../Add100RenownCheat/)
- [同命名空间 AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)

---
title: "EditorSceneMissionManager"
description: "EditorSceneMissionManager：SandBox 的 public 类，继承 MBGameManager；公开成员 4 个（方法 3、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/EditorSceneMissionManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EditorSceneMissionManager

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class EditorSceneMissionManager : MBGameManager`
**File:** `SandBox/EditorSceneMissionManager.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

EditorSceneMissionManager 位于 SandBox 模块，源文件 SandBox/EditorSceneMissionManager.cs。它是一个 public 类，实现/继承 MBGameManager，继承链为 EditorSceneMissionManager → MBGameManager → GameManagerBase。public/protected 成员共 4 个：3 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EditorSceneMissionManager 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox`，继承链 EditorSceneMissionManager → MBGameManager → GameManagerBase。成员构成以方法为主（方法 3/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/EditorSceneMissionManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EditorSceneMissionManager` | `public EditorSceneMissionManager(string missionName, string sceneName, string levels, bool forReplay, string replayFileName, bool isRecord, float startTime, float endTime)` | 构造函数 |
| `DoLoadingForGameManager` | `protected override void DoLoadingForGameManager(GameManagerLoadingSteps gameManagerLoadingSteps, out GameManagerLoadingSteps nextStep)` | 方法 |
| `OnAfterCampaignStart` | `public override void OnAfterCampaignStart(Game game)` | 方法 |
| `OnLoadFinished` | `public override void OnLoadFinished()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameManager](../../mission-ext/MBGameManager/)
- [同命名空间 Add1000GoldCheat](../Add1000GoldCheat/)
- [同命名空间 Add100InfluenceCheat](../Add100InfluenceCheat/)
- [同命名空间 Add100RenownCheat](../Add100RenownCheat/)
- [同命名空间 AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)

---
title: "BoostSkillCheatGroup"
description: "BoostSkillCheatGroup：SandBox 的 public 类，继承 GameplayCheatGroup；公开成员 4 个（方法 2、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox/BoostSkillCheatGroup.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoostSkillCheatGroup

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class BoostSkillCheatGroup : GameplayCheatGroup`
**File:** `SandBox/BoostSkillCheatGroup.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

BoostSkillCheatGroup 位于 SandBox 模块，源文件 SandBox/BoostSkillCheatGroup.cs。它是一个 public 类，实现/继承 GameplayCheatGroup，继承链为 BoostSkillCheatGroup → GameplayCheatGroup → GameplayCheatBase。public/protected 成员共 4 个：2 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoostSkillCheatGroup 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox`，继承链 BoostSkillCheatGroup → GameplayCheatGroup → GameplayCheatBase。成员构成以方法为主（方法 2/4，属性 1/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoostSkillCheatGroup.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public override IEnumerable<GameplayCheatBase>GetCheats()` | 方法 |
| `GetName` | `public override TextObject GetName()` | 方法 |
| `GameplayCheatItem` | `public class BoostSkillCheeat : GameplayCheatItem` | 属性 |
| `GameplayCheatItem` | `public class BoostSkillCheeat : GameplayCheatItem` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameplayCheatGroup](../GameplayCheatGroup/)
- [同命名空间 Add1000GoldCheat](../Add1000GoldCheat/)
- [同命名空间 Add100InfluenceCheat](../Add100InfluenceCheat/)
- [同命名空间 Add100RenownCheat](../Add100RenownCheat/)
- [同命名空间 AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)

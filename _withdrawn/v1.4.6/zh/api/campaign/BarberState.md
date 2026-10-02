---
title: "BarberState"
description: "BarberState：TaleWorlds.CampaignSystem.GameState 的 public 类，继承 GameState；公开成员 4 个（方法 0、属性 2、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/GameState/BarberState.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BarberState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BarberState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/BarberState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

BarberState 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameState/BarberState.cs。它是一个 public 类，实现/继承 GameState，继承链为 BarberState → GameState → MBObjectBase。public/protected 成员共 4 个：2 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BarberState 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.GameState`，继承链 BarberState → GameState → MBObjectBase。成员构成以属性为主（属性 2/4，方法 0/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameState/BarberState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | 属性 |
| `Filter` | `public IFaceGeneratorCustomFilter Filter` | 属性 |
| `BarberState` | `public BarberState()` | 构造函数 |
| `BarberState` | `public BarberState(BasicCharacterObject character, IFaceGeneratorCustomFilter filter)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameState](../../core-extra/GameState/)
- [同命名空间 BannerEditorState](../BannerEditorState/)
- [同命名空间 CharacterDeveloperState](../CharacterDeveloperState/)
- [同命名空间 ClanState](../ClanState/)
- [同命名空间 CraftingState](../CraftingState/)

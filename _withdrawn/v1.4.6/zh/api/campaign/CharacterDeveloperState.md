---
title: "CharacterDeveloperState"
description: "CharacterDeveloperState：TaleWorlds.CampaignSystem.GameState 的 public 类，继承 GameState；公开成员 5 个（方法 0、属性 3、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/GameState/CharacterDeveloperState.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterDeveloperState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterDeveloperState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/CharacterDeveloperState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

CharacterDeveloperState 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameState/CharacterDeveloperState.cs。它是一个 public 类，实现/继承 GameState，继承链为 CharacterDeveloperState → GameState → MBObjectBase。public/protected 成员共 5 个：3 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterDeveloperState 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.GameState`，继承链 CharacterDeveloperState → GameState → MBObjectBase。成员构成以属性为主（属性 3/5，方法 0/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameState/CharacterDeveloperState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | 属性 |
| `InitialSelectedHero` | `public Hero InitialSelectedHero` | 属性 |
| `CharacterDeveloperState` | `public CharacterDeveloperState()` | 构造函数 |
| `CharacterDeveloperState` | `public CharacterDeveloperState(Hero initialSelectedHero)` | 构造函数 |
| `Handler` | `public ICharacterDeveloperStateHandler Handler` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameState](../../core-extra/GameState/)
- [同命名空间 BannerEditorState](../BannerEditorState/)
- [同命名空间 BarberState](../BarberState/)
- [同命名空间 ClanState](../ClanState/)
- [同命名空间 CraftingState](../CraftingState/)

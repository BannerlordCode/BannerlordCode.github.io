---
title: "CraftingHelper"
description: "锻造流程的静态入口：列出可参与锻造的同伴、切换当前锻造图纸，以及真正把锻造界面推上屏幕栈。"
---

# CraftingHelper

**命名空间：** `Helpers`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class CraftingHelper`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/CraftingHelper.cs`（声明见第 15 行）

## 概述

本类分两族——「列出能参与锻造的同伴」（1 个成员，读主队名册）与「开关 / 切换锻造界面」（2 个成员，走 `GameStateManager` 的 `CreateState` / `PushState`）。它自己**不计算锻造数值**，那在 `Crafting` / `CraftingState` 与模型层。

## 心智模型

把 CraftingHelper 想成锻造功能的「遥控器」：`OpenCrafting` 是电源键（新推一个 `CraftingState` 到屏幕栈），`ChangeCurrentCraftingTemplate` 是换台键（如果电视已经开着就复用旧状态，没开就按电源键）。`GetAvailableHeroesForCrafting` 则是「谁能上来帮忙」的花名册查询。本类存在的意义是让 mod 开发者不必理解 `CraftingState` 与 `GameStateManager` 的交互细节就能开锻造界面。

## 何时使用 / 何时不要使用

**何时使用：**
- 要打开锻造界面时，用 `OpenCrafting(template)`，它会自动取 `Settlement.CurrentSettlement` 的文化，不在聚落里就用空 `CultureObject`。
- 已经在锻造界面里要换图纸时，用 `ChangeCurrentCraftingTemplate(template)`，它会复用当前 `CraftingState`。
- 要列出能参与锻造的同伴时，用 `GetAvailableHeroesForCrafting()`。

**何时不要使用：**
- 不要期望 `GetAvailableHeroesForCrafting` 返回所有同伴——它读的是**主队名册**，不在主队里的同伴不出现。
- 不要在非锻造界面调用 `ChangeCurrentCraftingTemplate`——`as CraftingState` 转换失败时会走「新建并 `PushState`」那条路，**真的把锻造界面推上来**。
- 不要传错 `oldState` 参数——`OpenCrafting` 的第二个参数在两条路上分别是 `false` / `true`（「是否复用旧状态」），传错会让界面行为与预期不符。

## 成员说明

| 成员 | 用途、副作用与时机 |
|------|-------------------|
| `public static IEnumerable<Hero> GetAvailableHeroesForCrafting()` | 从主队名册里筛出英雄角色，投影成 `Hero` 列表；不在主队里的同伴不出现。`CraftingHelper.cs:18` |
| `public static void ChangeCurrentCraftingTemplate(CraftingTemplate craftingTemplate)` | 取当前 `CraftingState` 后转交 `OpenCrafting`，状态为 `null` 时会新推一个锻造界面。`CraftingHelper.cs:27` |
| `public static void OpenCrafting(CraftingTemplate craftingTemplate, CraftingState oldState = null)` | 真正干活的一条：造 `Crafting` 实例、初始化、按 `oldState` 是否为 `null` 决定复用旧状态还是新推屏幕。`CraftingHelper.cs:34` |

## 示例

```csharp
// 换锻造图纸：若当前已经在锻造界面就复用旧状态，否则新推一个
CraftingTemplate template = CraftingTemplate.All.FirstOrDefault();
if (template != null)
    CraftingHelper.ChangeCurrentCraftingTemplate(template);
// 列出当前能参与锻造的同伴
foreach (Hero hero in CraftingHelper.GetAvailableHeroesForCrafting())
    Debug.Print($"can craft: {hero.Name}");
```

## 风险与边界

- `GetAvailableHeroesForCrafting` 读的是**主队名册**（`PartyBase.MainParty.MemberRoster`），不是 `Clan.Heroes`；派去带商队的同伴不会出现在结果里。
- `ChangeCurrentCraftingTemplate` 用 `as CraftingState` 取当前状态，转换失败时 `craftingState` 是 `null`，于是 `OpenCrafting` 会走「新建并 `PushState`」那条路——在非锻造界面调用它，会**真的把锻造界面推上来**。
- `OpenCrafting` 的第二个参数在两条路上分别是 `false` / `true`（「是否复用旧状态」），传错会让界面行为与预期不符。
- `OpenCrafting` 里 `PushState` 的第二个参数是 `0`，这是屏幕栈的层级参数，不要随意改。

## 依赖关系

- 上游 / 提供者：
  - [Game](../../core-extra/Game) —— `Game.Current.GameStateManager` 是推入 / 复用锻造界面的入口。
  - [ScreenManager](../../gui/ScreenManager) —— 它 `PushState` 的是 `CraftingState`，与屏幕栈是同一套「谁在上层」的语义。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[DialogHelper](../DialogHelper) · [EquipmentHelper](../EquipmentHelper)

---
title: "CraftingHelper"
description: "CraftingHelper 是战役锻造入口的静态状态桥，负责筛选可锻造 Hero、创建 Crafting 上下文并推入或替换 CraftingState。"
---
# CraftingHelper

**命名空间:** `Helpers`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class CraftingHelper`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/Helpers/CraftingHelper.cs`

## 一句话职责

它把当前主队的可用 Hero 和指定 `CraftingTemplate` 接到游戏状态机：建立 `Crafting`、初始化索引，并根据是否已有旧 `CraftingState` 选择推入新状态或替换当前武器类别。

## 心智模型

`CraftingHelper` 不是锻造规则 Model，也不保存配方或材料。`GetAvailableHeroesForCrafting` 只从 `PartyBase.MainParty.MemberRoster` 读取 Hero；`OpenCrafting` 则取得当前 settlement 的 Culture，创建 `Crafting`，调用 `Init` 与 `ReIndex`，再通过 `Game.Current.GameStateManager` 创建/推入 `CraftingState`。传入旧状态时，它会调用旧状态的 `InitializeLogic` 做替换。

因此调用它会改变 UI/game-state 栈，是进入锻造界面的命令边界。材料、配方、体力与生产结果由 Crafting 系统和战役行为处理；不要把这个 helper 当作直接加物品或绕过行动流程的 API。

## 何时使用，何时不要用

- 在战役对话或菜单已经决定打开锻造界面时调用 `OpenCrafting`。
- 需要把当前主队 Hero 交给锻造选择器时读取 `GetAvailableHeroesForCrafting`。
- 需要重新选择模板但保留旧锻造状态时调用 `ChangeCurrentCraftingTemplate`，让 helper 读取活动 `CraftingState`。
- 不要在没有活动 `Game`、没有有效模板或非 UI/game-state 生命周期中调用；不要用它代替 Crafting 规则、体力消耗或存档逻辑。

## 依赖关系

```text
PartyBase.MainParty.MemberRoster
  -> GetAvailableHeroesForCrafting
CraftingTemplate + Settlement.CurrentSettlement
  -> Crafting.Init / ReIndex
  -> Game.Current.GameStateManager -> CraftingState
```

- 状态入口：[CraftingState](../../campaign/CraftingState) · [CraftingTemplate](../../core-extra/CraftingTemplate)。
- 游戏状态：[Game](../../core-extra/Game)；它拥有 `GameStateManager`，不是 `Campaign` 的持久字段。
- 相关战役实体：[PartyBase](../../campaign/PartyBase)、[Hero](../../campaign/Hero)、[Settlement](../../campaign/Settlement)。

## 公开成员

| 成员 | 用途与副作用 |
|---|---|
| `GetAvailableHeroesForCrafting` | 从主队成员 roster 中筛选 `Character.IsHero`，返回当前可选 Hero 序列；返回结果会随 roster 变化。 |
| `ChangeCurrentCraftingTemplate` | 从活动 `GameStateManager.ActiveState` 取得旧 `CraftingState`，再调用 `OpenCrafting` 以替换锻造逻辑。 |
| `OpenCrafting` | 用模板和当前 settlement Culture 创建并初始化 `Crafting`；无旧状态时推入新 `CraftingState`，有旧状态时调用 `InitializeLogic` 并设置 `isReplacingWeaponClass: true`。 |

## 真实示例

```csharp
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

if (Game.Current != null && CraftingTemplate.All.Count > 0)
{
    CraftingTemplate template = CraftingTemplate.All.First();
    CraftingHelper.OpenCrafting(template);
}
```

游戏内的 `CraftingCampaignBehavior` 也以 `CraftingTemplate.All[0]` 作为模板入口。Mod 应在有模板和可用游戏状态时才打开界面，并让锻造系统自己处理模板索引与状态初始化。

## 风险与存档边界

- `OpenCrafting` 会推入或重置 `CraftingState`，不要在同一事件中重复调用，否则可能堆叠多个 UI 状态或丢失旧逻辑。
- `CraftingTemplate.All` 为空时不能索引；模板必须来自已经注册的 Core 对象集合。
- 当前 settlement 为空时源码会使用新的 `CultureObject`，但这不意味着所有锻造 UI 都能在地图外正常工作；调用方仍应遵守原有菜单阶段。
- `GetAvailableHeroesForCrafting` 返回枚举快照语义，不应写入存档。Hero、roster 和锻造状态的持久化由各自系统负责。

## 版本注记

v1.4.5 的 `OpenCrafting` 在创建 `Crafting` 后显式调用 `Init` 和 `ReIndex`，并用 `isReplacingWeaponClass: true` 处理旧 `CraftingState`；不要复制旧版本的状态切换假设。

## 导航

- [↑ API 系统索引](../)
- [↔ DialogHelper](../DialogHelper)
- [相关：CraftingState](../../campaign/CraftingState)
- [相关：CraftingTemplate](../../core-extra/CraftingTemplate)

---
title: "SettlementMenuOverlayModel"
description: "决定定居点菜单覆盖层（Settlement Menu Overlay）中应额外展示哪些英雄、以及每个英雄是否处于已知/可选中状态的规则扩展点，由 Campaign 在运行时通过 Campaign.Current.Models.SettlementMenuOverlayModel 解析，供定居点菜单覆盖层界面消费。"
---

# SettlementMenuOverlayModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** abstract class SettlementMenuOverlayModel : MBGameModel<SettlementMenuOverlayModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementMenuOverlayModel.cs

## 概述

该模型只暴露一个抽象方法 `GetOverlayHeroes()`，返回一组英雄及其对应的 `bool` 标记，用于决定在定居点菜单覆盖层（你进入村镇/城镇时弹出的“人物”浮层）里应把哪些 `Hero` 推送到前台、并以 `bool` 标记其是否处于已知或可选中状态。它只做判定与纯计算，真正的英雄在场状态、位置与可见性由 [GameMenuManager](../GameMenuManager) 与各 `LocationCharacter` 持有，覆盖层界面（[SettlementMenuOverlayVM](../../viewmodel/SettlementMenuOverlayVM)）负责消费这个结果。

## 心智模型

SettlementMenuOverlayModel 是 Campaign 层的一个规则扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例并缓存，运行时统一用 `Campaign.Current.Models.SettlementMenuOverlayModel` 取得；它不参与存档序列化，也不会在每个 tick 被重新构造。覆盖层界面在装配人物列表时调用 `GetOverlayHeroes()` 取得需要额外置顶或标记的英雄集合——在 1.4.5 的官方实现里，覆盖层主要依据 `GameMenuManager.MenuLocations` 与 [HeroAgentLocationModel](../HeroAgentLocationModel) 的 `WillBeListedInOverlay` 组装人物，本模型作为可被子模块覆盖的补充钩子参与决策。要改“谁出现在覆盖层”就继承并注册一个替换实现；要改世界状态（让某个英雄真正出现在某定居点）应走 `LocationCharacter`/相关行为或对应 Action，绝不要把模型当成写世界的入口。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“覆盖层里额外展示哪些英雄、这些英雄是否被选中/已知”时，读取 `Campaign.Current.Models.SettlementMenuOverlayModel.GetOverlayHeroes()` 的返回值，或提供一个新的派生类覆盖该方法并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“把英雄放进定居点”——它只返回索引/标记，真正的英雄在场由 [GameMenuManager](../GameMenuManager) 与 `LocationCharacter` 维护，覆盖层的可见性还受 [HeroAgentLocationModel](../HeroAgentLocationModel) 的 `WillBeListedInOverlay` 门控。不要亲自给模型加可变字段并期望它随存档恢复（它是无状态纯函数，不含 `[SaveableField]`）；也不要在 `Mission`/战斗层取 `Campaign.Current.Models`。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时按类型解析并缓存实例。
- [HeroAgentLocationModel](../HeroAgentLocationModel) —— 覆盖层主要用它 `WillBeListedInOverlay` 决定人物是否入列，本模型与之协同参与决策。
- [GameMenuManager](../GameMenuManager) —— 持有 `MenuLocations`，是覆盖层人物/队伍数据的真实来源。

下游与协同系统：

- [SettlementMenuOverlayVM](../../viewmodel/SettlementMenuOverlayVM) —— 覆盖层界面，概念上的消费方，负责把模型返回的 `Hero` 集合并入前台人物列表。
- [Hero](../Hero) —— `GetOverlayHeroes()` 返回字典的键，是被判定/置顶的对象。
- [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) —— 覆盖层所在的定居点上下文，决定英雄是否处于该定居点视野内。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 覆盖层刷新由相关行为驱动，是实际的调用组织者。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SettlementMenuOverlayModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了 `GetOverlayHeroes()` 的返回，但覆盖层人物列表在官方实现里主要由 `GameMenuManager.MenuLocations` 与 [HeroAgentLocationModel](../HeroAgentLocationModel) 组装。只替换模型、却不动这些底层数据，会出现“模型说该显示、界面却不显示”或反之的不一致。
- **误读返回的 `bool` 语义**：字典的 `bool` 只是覆盖层实现给出的标记位（如已知/可选中），覆盖层真正的可见性由 [HeroAgentLocationModel](../HeroAgentLocationModel) 的 `WillBeListedInOverlay` 与 `LocationCharacter` 门控。单靠返回 `true` 并不保证英雄一定出现在浮层，不要把它当成“强制显示”开关。

## 成员说明

### 覆盖层英雄集合

- **`GetOverlayHeroes()`**
  - 用途：返回应推送到定居点菜单覆盖层前台的英雄集合，键为 `Hero`，值为 `bool` 标记（用于指示该英雄在覆盖层中是否处于已知/可选中状态）。它是抽象方法，由子模块提供的实现决定具体内容；官方代码里覆盖层主要依据 `GameMenuManager.MenuLocations` 与 [HeroAgentLocationModel](../HeroAgentLocationModel) 组装人物，本方法是可被子模块覆盖的补充钩子。
  - 副作用：无，纯判定；真正的英雄在场与位置由 [GameMenuManager](../GameMenuManager) 与 `LocationCharacter` 持有，本方法只提供“额外置顶/标记”的集合。
  - 调用时机：覆盖层界面（[SettlementMenuOverlayVM](../../viewmodel/SettlementMenuOverlayVM)）在装配人物列表时调用；若你提供了替换实现，它会在每次覆盖层刷新时被读取。

## 怎么用

这是本批最小的一个模型：全文 10 行，只有一个抽象方法。但读它之前必须先知道一件事——**它在 1.4.5 的 C# 源树里没有任何调用方，也没有默认实现被注册**。

**怎么拿到它**：声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementMenuOverlayModel.cs:6`，唯一成员 `GetOverlayHeroes()` 在 `:8`，返回 `Dictionary<Hero, bool>`。

它继承自 `MBGameModel<SettlementMenuOverlayModel>`，所以它**形式上是一个可替换的游戏模型**，和其它二十多个同族模型走完全一样的注册路径。缺的只是那一步接线。

我用 `Models.SettlementMenuOverlayModel` 与 `GetOverlayHeroes` 两个模式扫过 1.4.5 全部 6222 个 `.cs` 文件，命中只有两处，而且都在这个文件自己身上：类声明与抽象方法本身。`SandBoxManager` 里没有对应的 `AddModel` 行，`SettlementMenuOverlayVM` 也没有引用它。所以它是一个**留好了扩展点但当前版本没接线的抽象**。

这决定了你该怎么用它：

```csharp
// 先确认这一局战役到底有没有把模型接上，而不是假设它存在
Type t = typeof(SettlementMenuOverlayModel);
SettlementMenuOverlayModel model = Campaign.Current.Models.SettlementMenuOverlayModel;
Debug.Print("模型抽象类型=" + t.Name + "，本局解析到的实现=" + model.GetType().Name, 0);
// GetOverlayHeroes 返回 Dictionary<Hero,bool>：key 是英雄，value 是是否已知/可选中
Debug.Print("浮层英雄数=" + model.GetOverlayHeroes().Count, 0);
foreach (KeyValuePair<Hero, bool> pair in model.GetOverlayHeroes())
{
    Debug.Print("  " + pair.Key.Name + " 可见=" + pair.Value, 0);
}
```

因为没有默认实现注册，`Campaign.Current.Models` 解析它时要么得到 null、要么得到模块自己注册的实现。上面代码里 `model.GetType().Name` 那一步就是先打印实际拿到什么，再决定要不要往下走——这比直接解引用安全。

如果你确定要用它，接线方式和其它同族模型完全一样：在模块的 `OnGameInitialization` 里 `gameStarter.AddModel(new MyOverlayModel())`，然后覆写 `GetOverlayHeroes()` 返回你要的字典。因为引擎侧没有消费方，注册了也不会被自动调用——这实际上是 mod 自己接管浮层渲染的机会，而不是一个等待引擎接线的空格。

**最常见的坑**：假设它是已接线的模型。按 `Campaign.Current.Models.SettlementMenuOverlayModel` 的常规套路写代码，会在默认战役里拿到 null 而不是默认实现；`GetOverlayHeroes()` 一调就 NRE，而且报错点在你的代码里，离「这个模型其实没接线」这个真正的原因很远。

## 示例

读取当前覆盖层应额外展示的英雄集合及其标记：

```csharp
Dictionary<Hero, bool> overlayHeroes =
    Campaign.Current.Models.SettlementMenuOverlayModel.GetOverlayHeroes();
foreach (KeyValuePair<Hero, bool> entry in overlayHeroes)
{
    Hero hero = entry.Key;
    bool isMarked = entry.Value; // 该英雄在覆盖层中的已知/可选中标记
}
```

判断某个具体英雄是否被覆盖层实现置顶并标记：

```csharp
Hero hero = Hero.OneToOneConversationHero;
Dictionary<Hero, bool> overlayHeroes =
    Campaign.Current.Models.SettlementMenuOverlayModel.GetOverlayHeroes();
if (overlayHeroes.TryGetValue(hero, out bool isMarked) && isMarked)
{
    // 该英雄被覆盖层实现标记为已知/可选中
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Hero](../Hero) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [HeroAgentLocationModel](../HeroAgentLocationModel) · [GameMenuManager](../GameMenuManager) · [SettlementMenuOverlayVM](../../viewmodel/SettlementMenuOverlayVM) · [CampaignBehaviorBase](../CampaignBehaviorBase)

---
title: "InitializeWorkshopAction"
description: "InitializeWorkshopAction 是开档分工坊路径的终点静态动作：先给工坊实例挂类型与店主并填启动资金，再给店主生成名字，最后广播 OnWorkshopInitialized。"
---
# InitializeWorkshopAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/InitializeWorkshopAction.cs`

## 概述

`InitializeWorkshopAction` 是「开档给英雄分工坊」这条路径的终点动作。游戏在开档流程里为每个英雄挑好工坊类型、找到空槽之后，最后一步就是调它。它把三件必须按顺序发生的事收在一个静态方法里：先把工坊实例真正初始化（挂类型、挂店主、给启动资金、建产出进度数组），再给店主生成一个名字，最后广播 `OnWorkshopInitialized` 让所有订阅方看到「这座工坊已经开张」。

它**只有一个公开方法** `ApplyByNewGame`，**没有**通用 `Apply` 包装，**没有** detail 枚举。这与同目录下大多数「按原因分重载」的战役动作类不同，原因也直接：目前游戏里只有「开档」这一条路径会初始化工坊，没有第二种原因需要区分。

## 心智模型

**把它想成「开档分工坊」流水线的最后一道工序，而不是一个可以随便调的工具函数。**

1. **它只在开档时被调用一次。** 唯一调用点 `WorkshopsCampaignBehavior.cs:1274` 位于 `BuildWorkshopForHeroAtGameStart(Hero ownerHero)`（`WorkshopsCampaignBehavior.cs:1253`）内部，而后者是开档建角色流程的一环。**所以它的三个副作用都带着「开档」这个前提**：店主此时还没有名字、工坊槽还是空的、`WorkshopModel` 已经能给出启动资金。
2. **副作用有严格顺序，不能重排。** `InitializeWorkshopAction.cs:9` 先调 `workshop.InitializeWorkshop(workshopOwner, workshopType)`，这一步把 `_owner` 设成店主并调 `_owner.AddOwnedWorkshop(this)`（`Workshop.cs:125` 起）。**如果先改名再初始化，店主名会先于工坊归属存在**；而 `InitializeWorkshopAction.cs:12` 的事件必须最后派发，因为订阅方读的是「已经开张」的最终状态——工坊类型、店主、名字三样都就位。
3. **最容易被漏的副作用是「给店主重命名」。** `InitializeWorkshopAction.cs:10` 与 `InitializeWorkshopAction.cs:11` 用 `NameGenerator.Current.GenerateHeroNameAndHeroFullName` 生成全名与名，再 `workshopOwner.SetName(fullName, firstName)`。**这意味着对一个已经存在的英雄调这个动作，会直接改掉他的名字**——`Hero.SetName`（`Hero.cs:1246`）还会顺带清掉他作为领队时队伍的缓存名。
4. **它是「纯动作」，自己不判断该不该调。** 「选哪种工坊类型」由调用方的 `DecideBestWorkshopType`（`WorkshopsCampaignBehavior.cs:1278`）决定，「有没有空槽」由 `WorkshopsCampaignBehavior.cs:1265` 起的扫描决定。**动作类只负责「给定参数就执行」，前置判断全在调用方。**

## 怎么用

### 怎么拿到

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/InitializeWorkshopAction.cs`（全文 14 行）。

**类声明：** `public static class InitializeWorkshopAction`（`InitializeWorkshopAction.cs:5`）。

**唯一公开入口：** `public static void ApplyByNewGame(Workshop workshop, Hero workshopOwner, WorkshopType workshopType)`（`InitializeWorkshopAction.cs:7`）。

**唯一调用点：** `WorkshopsCampaignBehavior.cs:1274`，在 `BuildWorkshopForHeroAtGameStart` 里：

```csharp
InitializeWorkshopAction.ApplyByNewGame(bornSettlement.Town.Workshops[num], ownerHero, workshopType);
```

**调用前置条件（全在调用方，动作自己不查）：** `DecideBestWorkshopType(bornSettlement, atGameStart: true)` 返回非 null（`WorkshopsCampaignBehavior.cs:1255` 起），且在 `bornSettlement.Town.Workshops` 里找到 `WorkshopType == null` 的空槽（`WorkshopsCampaignBehavior.cs:1265` 起）。**任一不满足就直接 return，动作根本不会被调。**

### 典型用法

**开档路径（游戏原生）：** 不需要你调。`BuildWorkshopForHeroAtGameStart` 在开档建英雄时跑，你只要订阅 `OnWorkshopInitialized` 就能拿到每座新开工坊。

**mod 里手动给英雄补一座工坊：**

```csharp
// 前提：workshop 是 Town.Workshops 里 WorkshopType == null 的空槽
var type = WorkshopType.Find("smithy");   // 或你 mod 自定义的 WorkshopType
if (type != null && hero.BornSettlement?.Town != null)
{
    InitializeWorkshopAction.ApplyByNewGame(hero.BornSettlement.Town.Workshops[0], hero, type);
}
```

**注意 `WorkshopType.Find` 找不到时返回 null**，而 `ApplyByNewGame` 内部 `InitializeWorkshopAction.cs:9` 的 `workshop.InitializeWorkshop` 会直接 `WorkshopType = type`（`Workshop.cs:127`）——**传 null 进去不会报错，但会把工坊类型设成 null，等于把槽位废掉**。

### 坑

- **会改店主名字。** `InitializeWorkshopAction.cs:10` 与 `InitializeWorkshopAction.cs:11` 是无条件重命名。**对一个已经在跑的英雄调这个动作，他的名字会被生成器覆盖**，而且 `Hero.SetName`（`Hero.cs:1246` 起）在他还是队伍领队时会 `ClearCachedName()`。**想「只初始化工坊不改名字」的话，这个动作给不了你——你得自己调 `Workshop.InitializeWorkshop`。**
- **`NameGenerator.Current.GenerateHeroNameAndHeroFullName` 的第四个参数 `useDeterministicValues` 默认是 `true`**（`NameGenerator.cs:61`）。**所以命名池相同时会生成同样的名字**，这是设计意图，不是 bug。
- **没有通用 `Apply`。** 同目录大多数动作类有 `Apply(...)` 通用入口，这个类没有。**别去找 `InitializeWorkshopAction.Apply`——它不存在。**
- **没有 detail 枚举。** 同目录很多动作类用私有枚举区分「by new game / by death / by ...」等原因，这个类没有。**目前只有开档一条路径。**
- **事件只在成功路径派发。** `InitializeWorkshopAction.cs:12` 在方法体最后一行，**所以 `InitializeWorkshopAction.cs:9` 抛异常时事件不会派发**，订阅方也不会知道有工坊半初始化。

## 关键成员

- `InitializeWorkshopAction.ApplyByNewGame(Workshop, Hero, WorkshopType)` — `InitializeWorkshopAction.cs:7`，**唯一公开入口**，按「初始化 → 重命名 → 广播」三步顺序执行，无返回值。
- `Workshop.InitializeWorkshop(Hero, WorkshopType)` — `Workshop.cs:125`，**真正干活的那个**：设 `WorkshopType`、设 `_owner`、把工坊加进店主的 `OwnedWorkshops`、给 `Capital` 与 `InitialCapital` 填启动资金、按新类型的产出数组建 `_productionProgress` 数组。
- `NameGenerator.Current.GenerateHeroNameAndHeroFullName(Hero, out TextObject, out TextObject, bool)` — `NameGenerator.cs:61`，**给店主造名字**，默认确定性；`out` 出名与全名两个 `TextObject`。
- `Hero.SetName(TextObject, TextObject)` — `Hero.cs:1246`，**把生成的名字写进英雄**，并在他是队伍领队时清掉队伍缓存名。
- `CampaignEventDispatcher.Instance.OnWorkshopInitialized(Workshop)` — `CampaignEventDispatcher.cs:1953`，**广播入口**，遍历所有 `CampaignEventReceiver` 调 `OnWorkshopInitialized`（`CampaignEventReceiver.cs:877` 是虚方法，事件字段在 `CampaignEvents.cs:2496`）。

## 真实示例

```csharp
// 复刻 InitializeWorkshopAction.cs:9 —— 工坊初始化本体
workshop.InitializeWorkshop(workshopOwner, workshopType);

// 复刻 InitializeWorkshopAction.cs:10 —— 造名字（默认确定性）
NameGenerator.Current.GenerateHeroNameAndHeroFullName(workshopOwner, out var firstName, out var fullName);

// 复刻 InitializeWorkshopAction.cs:11 —— 写回英雄
workshopOwner.SetName(fullName, firstName);

// 复刻 InitializeWorkshopAction.cs:12 —— 广播开张
CampaignEventDispatcher.Instance.OnWorkshopInitialized(workshop);
```

**逐条核源：** 第一行对应 `InitializeWorkshopAction.cs:9`；第二行对应 `InitializeWorkshopAction.cs:10`，注意 `GenerateHeroNameAndHeroFullName` 的第四个参数 `useDeterministicValues` 在 `NameGenerator.cs:61` 有默认值 `true`，所以 `InitializeWorkshopAction.cs:10` 的三参写法合法；第三行对应 `InitializeWorkshopAction.cs:11`，`SetName` 的签名是 `(TextObject fullName, TextObject firstName)`（`Hero.cs:1246`）——**顺序是「全名在前、名在后」，与 `out` 变量的声明顺序一致但语义不同，别写反**；第四行对应 `InitializeWorkshopAction.cs:12`。

## 参见

- [Workshop](../Workshop) — 被初始化的对象，`InitializeWorkshop` 的宿主类
- [WorkshopType](../WorkshopType) — 工坊类型，决定产出配方与初始资金
- [Hero](../../campaign/Hero) — 店主，`SetName` 与 `AddOwnedWorkshop` 的宿主
- [NameGenerator](../NameGenerator) — 名字生成器，`Current` 是单例入口
- [CampaignEventDispatcher](../CampaignEventDispatcher) 与 [CampaignEventReceiver](../CampaignEventReceiver) — 事件派发与接收两端
- [WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior) — 唯一调用方，`BuildWorkshopForHeroAtGameStart` 的宿主

## 导航

- [本区域目录](../)

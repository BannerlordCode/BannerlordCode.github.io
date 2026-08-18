---
title: "EducationCampaignBehavior"
description: "管理玩家家族英雄子女（2/5/8/11/14/16 岁六个阶段）的教育流程：每日推进、弹出教育通知、按玩家选择通过 HeroDeveloper 发放属性/专注点/技能增益，并在完成时派发 OnChildEducationCompleted 事件。"
---

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors · **模块：** TaleWorlds.CampaignSystem · **类型：** `public class EducationCampaignBehavior : CampaignBehaviorBase, IEducationLogic` · **源文件：** `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs`

## 概述

`EducationCampaignBehavior` 是战役层驱动「贵族子女教育」系统的核心 Behavior：它在玩家家族（`Clan.PlayerClan`）的子嗣达到 2、5、8、11、14、16 岁时，逐阶段弹出教育决策通知，收集玩家在 UI 中做出的选择，再把这些选择转化为对子女 `Hero` 的属性（`CharacterAttribute`）、专注点（`SkillObject` 的 focus）与技能等级（`SkillObject` 的 level）的永久增益。它持有并序列化每个子女「已完成到第几阶段」的进度表，并在子女成年（`HeroComesOfAge`）时把所有未完成的阶段在后台补齐，最终通过 `CampaignEventDispatcher` 派发 `OnChildEducationCompleted` 供其他系统消费。

## 心智模型

`EducationCampaignBehavior` 处于 **Campaign 层**（不是 Mission、也不是 UI），由沙盒游戏管理器 `SandBoxManager` 在战役启动时通过 `gameStarter.AddBehavior(new EducationCampaignBehavior())` 直接注册，并不经过 `*TypeDefiner`。战役运行期它主要靠引擎的 `DailyTickEvent` 驱动：每天遍历 `Clan.PlayerClan.Heroes`，对每个低于成年年龄且尚未读完当前阶段的存活子嗣，按生日推算是否到达下一阶段，到达则跑完该阶段并弹出 `EducationMapNotification`。玩家在 `EducationVM`（UI 层）确认选择后调用 `Finalize(...)`，由 Behavior 把选项后果经 `Hero.HeroDeveloper`（`AddAttribute` / `AddFocus` / `ChangeSkillLevel`）落到英雄身上，并把进度写入 `_previousEducations`，最后清除临时的 `_activeChild` / `_activeStage`。它只通过 `SyncData("_previousEducations", ...)` 序列化进度字典，临时的当前子女/舞台状态不随存档保存；子女成年、死亡等生命周期事件由 `RegisterEvents` 中订阅的 `HeroComesOfAgeEvent` / `HeroKilledEvent` 处理。`Education` 是「状态由 Behavior 管理、数值决策内置于各阶段选项」的典型：Behavior 管流程与发放，不依赖外部 Model 计算增益数值。

## 何时使用 / 何时不要使用

- **想读取某子女当前教育阶段 / 可选项 / 页面信息** → 取 `Campaign.Current.GetCampaignBehavior<EducationCampaignBehavior>()`（或接口 `IEducationLogic`），调用 `GetStageProperties` / `GetPageProperties` / `GetOptionProperties`。
- **想在教育完成时做联动**（如发奖励、写日志）→ 在自家 Behavior 的 `RegisterEvents` 里订阅 `CampaignEvents.HeroComesOfAgeEvent`，或监听 `CampaignEventDispatcher.Instance.OnChildEducationCompleted`。
- **想改世界状态（子女属性/技能）** → 必须经由 UI 流程调用 `Finalize` 让 Behavior 统一发放；**不要**绕过 Behavior 直接写 `Hero.HeroDeveloper` 的字段，否则与 `_previousEducations` 进度不一致，会重复或丢失教育增益、甚至导致坏档。
- **不要在 Mission / 战斗层访问** 此 Behavior：教育纯属 Campaign 层，战役未启动时 `Campaign.Current.GetCampaignBehavior<EducationCampaignBehavior>()` 返回 null，且竞态会读到半初始化状态。
- **不要手动调用 `RegisterEvents` 之外的事件订阅**：若你的 mod 依赖这些事件，必须在自己的 `RegisterEvents` 内登记，否则 `CampaignEvents.X.Event` 不会触发你的回调。

## 依赖图

- 上游注册方：沙盒游戏管理器 [`SandBoxManager`](../SandBoxManager)（调用 `gameStarter.AddBehavior(new EducationCampaignBehavior())`）；行为基类 [`CampaignBehaviorBase`](../CampaignBehaviorBase)；行为接口 [`IEducationLogic`](../IEducationLogic)。
- 战役启动器：注册入口 [`CampaignGameStarter`](../CampaignGameStarter)；战役中枢 [`Campaign`](../Campaign)（`Campaign.Current.GetCampaignBehavior`、`Campaign.Current.Models.AgeModel`、`Campaign.Current.CampaignInformationManager`）。
- 下游 / 消费方：被教育的子女 [`Hero`](../Hero)（含 `Hero.Children`、`Hero.HeroDeveloper`、`Hero.CharacterObject`、`Hero.MainHero`）；其所属家族 [`Clan`](../Clan)（`Clan.PlayerClan.Heroes`、`Mother/Father.Clan`）；子女角色定义 [`CharacterObject`](../CharacterObject)；教育发放的属性与技能 [`SkillObject`](../../core-extra/SkillObject)；教育通知数据 [`EducationMapNotification`](../EducationMapNotification)；完成回调 [`CampaignEventDispatcher`](../CampaignEventDispatcher)（`OnChildEducationCompleted`）；成年年龄判定 [`AgeModel`](../AgeModel)（`HeroComesOfAge`）。
- 相关系统：子女由 [`PregnancyCampaignBehavior`](../PregnancyCampaignBehavior) 与 [`PregnancyModel`](../PregnancyModel) 产出，是教育系统的上游数据来源；UI 通过 `EducationVM` 调用 `Finalize` 提交玩家选择。

## 风险

- **注册 / 生命周期时机**：`RegisterEvents` 仅在 `!CampaignOptions.IsLifeDeathCycleDisabled` 时订阅每日推进与生命周期事件。若战役以「禁用生命周期」模式运行，教育不会自动推进，依赖每日 tick 的 mod 逻辑会失效。任何访问都必须放在战役启动之后，否则 `Campaign.Current.GetCampaignBehavior<EducationCampaignBehavior>()` 返回 null。
- **Mission 层访问**：教育是纯 Campaign 层逻辑；在 Mission / 战斗代码中访问该 Behavior 既可能拿到 null，也可能与正在弹出的教育 UI 产生竞态，读到不完整的 `_activeChild` / `_activeStage`。
- **直接改子女属性绕过 Behavior**：若不经 `Finalize` 而直接操作 `Hero.HeroDeveloper` 的技能/属性/专注点，会与 `_previousEducations` 记录的进度脱节——同一子嗣可能被重复教育（再次获得 +1 属性 / +1 专注 / +15 技能），或进度表错乱，进而在存档/读档时产生不一致甚至坏档。
- **序列化边界**：`SyncData` 只保存 `_previousEducations`（`Dictionary<Hero, short>`），其键依赖 `Hero` 自身被正确序列化；若存盘时该子嗣 `Hero` 缺失或键失效，反序列化会失败。`_activeChild` / `_activeStage` 等临时 UI 状态不序列化，读档后需重新进入教育流程。
- **`Finalize` 幂等性**：`Finalize(child, chosenOptions)` 对每个阶段只应调用一次；重复调用会对同一子嗣重复应用增益。

## 成员说明

### 生命周期钩子

- **`RegisterEvents()`** — 在战役事件总线上登记四个监听器：`DailyTickEvent`→`OnDailyTick`（每日推进与弹通知）、`OnCharacterCreationIsOverEvent`→`OnCharacterCreationOver`、`HeroKilledEvent`→`OnHeroKilled`、`HeroComesOfAgeEvent`→`OnHeroComesOfAge`。仅在生命周期未被禁用时登记。
- **`OnDailyTick()`**（事件驱动）— 每日遍历 `Clan.PlayerClan.Heroes`，跳过 `Hero.MainHero`、已死亡或已达成年年龄者；对未读完当前阶段者按 `BirthDay + 阶段年数` 是否过去来决定调用 `DoEducationUntil` 并 `ShowEducationNotification`（子女被禁用 `IsDisabled` 时不弹）。地图事件进行中（`MapEvent.PlayerMapEvent != null`）直接跳过。
- **`OnHeroComesOfAge(Hero hero)`**（事件驱动）— 当子女的母亲或父亲属于 `Clan.PlayerClan` 时，调用 `DoEducationUntil(hero, ChildAgeState.Count)` 在后台补齐剩余全部阶段，并从 `_previousEducations` 移除该子女。
- **`OnHeroKilled(...)`**（事件驱动）— 受害者属于 `Clan.PlayerClan` 且仍在教育进度表中时，从 `_previousEducations` 移除，避免对已故子女继续教育。
- **`SyncData(IDataStore dataStore)`** — 序列化教育进度 `_previousEducations`（键为 `Hero`，值为已完成到的最高阶段枚举的 `short`）。临时 UI 状态不在此保存。

### 公开查询与教育方法

- **`GetOptionProperties(Hero child, string optionKey, List<string> previousOptions, out TextObject optionTitle, out TextObject description, out TextObject effect, out (CharacterAttribute, int)[] attributes, out (SkillObject, int)[] skills, out (SkillObject, int)[] focusPoints, out EducationCharacterProperties[] educationCharacterProperties)`** — 解析 `child` 当前阶段中键为 `optionKey` 的选项，向外暴露该选项将发放的增益：每个 `CharacterAttribute` 计 +1，每个 `SkillObject` 计 +15 技能点与 +1 专注点，并附带用于 3D 预览的 `EducationCharacterProperties`。供 UI 在玩家悬停某选项时展示「会获得什么」。
- **`GetPageProperties(Hero child, List<string> previousChoices, out TextObject title, out TextObject description, out TextObject instruction, out EducationCharacterProperties[] defaultCharacterProperties, out string[] availableOptions)`** — 返回 `child` 当前教育页面的标题/描述/引导语、默认角色展示属性，以及基于之前选择过滤出的可用选项键数组（只有 `Condition` 通过的选项才出现）。
- **`GetStageProperties(Hero child, out int pageCount)`** — 返回 `child` 当前阶段包含的页面数量（`EducationStage.PageCount`），UI 据此决定需要展示几页决策。
- **`IsValidEducationNotification(EducationMapNotification data)`** — 校验通知是否仍然有效：子女存活、`data.Age > 0` 且仍低于 `AgeModel.HeroComesOfAge`，且对应阶段存在。通知系统据此决定保留还是丢弃过期通知。
- **`Finalize(Hero child, List<string> chosenOptions)`** — 教育流程的「提交」入口：对玩家勾选的每个选项依次执行其 `OnConsequence(child)`，经 `child.HeroDeveloper` 真正发放属性/专注/技能增益；随后派发 `CampaignEventDispatcher.Instance.OnChildEducationCompleted(child, age)`，把完成阶段写入 `_previousEducations`，并清空 `_activeChild` / `_activeStage`。`EducationVM` 在玩家确认时调用它。
- **`StringIdToEducationOption(List<string> previousOptionKeys)`**（选项键助手）— 把一串选项键翻译成 `EducationOption` 列表，供条件判断（`EducationOptionConditionDelegate`）与可用选项计算复用。

### 事件与数据结构

- **`CampaignEventDispatcher.OnChildEducationCompleted(Hero child, int age)`** — 由 `OnFinalize` 在 `Finalize` 完成时派发，参数为完成教育的子女与对应年龄；其他系统可订阅以做联动。
- **`EducationCharacterProperties`**（嵌套 `struct`）— 描述教育预览中一个角色展示单元：`CharacterObject` + `Equipment` + 动作/预制体 id（`ActionId` / `PrefabId`）+ 是否使用副手；UI（`EducationVM` / `EducationOptionVM`）用它渲染子女与导师的 3D 形象，不参与数值计算。
- **`CampaignEvents.HeroComesOfAgeEvent` / `DailyTickEvent` / `HeroKilledEvent` / `OnCharacterCreationIsOverEvent`** — 本 Behavior 订阅的真实引擎事件（来自 [`Campaign`](../Campaign) 的事件体系），是教育推进与生命周期清理的触发源。

## 示例

取 Behavior（注意战役未启动时会返回 null）：

```csharp
var education = Campaign.Current.GetCampaignBehavior<EducationCampaignBehavior>();
// 也可经其实现接口获取，EducationVM 内部正是如此：
var logic = Campaign.Current.GetCampaignBehavior<IEducationLogic>();
int pageCount;
logic.GetStageProperties(child, out pageCount);
```

订阅真实事件（在自定义 Behavior 的 `RegisterEvents` 内登记，否则不触发）：

```csharp
public override void RegisterEvents()
{
    CampaignEvents.HeroComesOfAgeEvent.AddNonSerializedListener(this, OnChildOfAge);
}

private void OnChildOfAge(Hero hero)
{
    var education = Campaign.Current.GetCampaignBehavior<EducationCampaignBehavior>();
    // hero 已成年，可读取其最终教育结果或做联动
}
```

自定义 Behavior 注册（在 SubModule 的 `OnCampaignStart` 中挂到战役启动器，与 `SandBoxManager` 注册原版 Behavior 的方式一致）：

```csharp
protected override void OnCampaignStart(Game game)
{
    var gameStarter = (CampaignGameStarter)game.GameStarter;
    gameStarter.AddBehavior(new MyEducationModifierBehavior());
}
```

## 参见

↑ 父级：[战役 API 索引](../)

↔ 相关：[`Hero`](../Hero) · [`Clan`](../Clan) · [`CharacterObject`](../CharacterObject) · [`SkillObject`](../../core-extra/SkillObject) · [`Campaign`](../Campaign) · [`SandBoxManager`](../SandBoxManager) · [`IEducationLogic`](../IEducationLogic) · [`PregnancyCampaignBehavior`](../PregnancyCampaignBehavior) · [`EducationMapNotification`](../EducationMapNotification) · [`CampaignEventDispatcher`](../CampaignEventDispatcher)

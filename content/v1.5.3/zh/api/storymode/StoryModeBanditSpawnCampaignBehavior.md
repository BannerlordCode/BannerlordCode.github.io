---
title: "StoryModeBanditSpawnCampaignBehavior"
description: "教程跳过后的补救行为：教学期不注册任何监听，等教程结束时手动把原版强盗初始藏身处与掠夺者补种回来。"
---
# StoryModeBanditSpawnCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode
**Type:** `public class StoryModeBanditSpawnCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/StoryModeBanditSpawnCampaignBehavior.cs`

## 概述

这是整个 StoryMode 里最短的行为，全长 47 行，三件事：教学阶段没结束时**什么都不订阅**；教程结束的那一刻，如果玩家选了「跳过教程」，就找到原版的 `BanditSpawnCampaignBehavior` 并依次调用它的三个初始化方法，把藏身处、强盗队、掠夺者全部补种到地图上；然后立即解绑自己的全部监听，永久退场。它存在的唯一理由是**教程阶段把所有强盗生成闸门关掉了，跳过时必须有人手动把世界恢复原状**。

## 心智模型

**注册是无条件的**：`StoryModeSubModule.AddBehaviors` 里 `campaignGameStarter.AddBehavior(new StoryModeBanditSpawnCampaignBehavior())`，不受阶段限制。

**条件在 `RegisterEvents` 里**：

```
if (!TutorialPhase.Instance.IsCompleted)
    StoryModeEvents.OnStoryModeTutorialEndedEvent.AddNonSerializedListener(this, OnTutorialEnded);
```

教程**已完成**（例如读一个已经打过教程的存档）→ 一个事件都不订阅，本行为变成完全惰性的空壳。这不是错误——世界上的强盗已经在存档里了，不需要补种。

**三步补种**（`SpawnInitialBanditsAndLooters`）：

```
BanditSpawnCampaignBehavior behavior =
    Campaign.Current.GetCampaignBehavior<BanditSpawnCampaignBehavior>();
if (behavior != null)
{
    behavior.InitializeInitialHideouts();
    behavior.SpawnBanditsAroundHideoutAtNewGame();
    behavior.SpawnLootersAtNewGame();
}
```

三个方法都来自原版 `TaleWorlds.CampaignSystem.CampaignBehaviors.BanditSpawnCampaignBehavior`。它们在正常流程里由该行为自己的初始化路径调用；教学期被 [StoryModeBanditDensityModel](../StoryModeBanditDensityModel) 把所有数量闸门归零，所以这些调用不会真的生成东西——**补种的时机必须在教程结束之后**，闸门才重新打开。

**顺序不能乱**：`InitializeInitialHideouts()` 先建立藏身处实体，后两个才有东西可以往上挂强盗队和掠夺者。

**退场机制**：`OnTutorialEnded` 的最后一行无条件 `CampaignEventDispatcher.Instance.RemoveListeners(this)`——不管是否执行了补种，这个行为在本次战役内都不再收任何事件。

**存档**：`SyncData` 空实现，零字段。全部状态来自 `TutorialPhase` 与原版行为。

**常见误用与坑**

- **`TutorialPhase.Instance` 无判空**。任何跳过正常教学流程创建的 mod 会在 `RegisterEvents` 时 NRE。
- **`GetCampaignBehavior<BanditSpawnCampaignBehavior>()` 返回 null 时静默跳过**。原版那个行为被别的 mod 移除时，补种彻底失败且无任何提示。
- **补种调用的是原版行为的公开方法，不是构造函数重放**。这意味着你覆写 `BanditSpawnCampaignBehavior` 里的这三个方法时，补种会走你的版本——这是好事，但也意味着你的覆写会在教程结束时被执行一次，而**不在你的预期时机**。
- **只在 `IsSkipped` 为真时补种**。正常打完教程的玩家走的是主线脚本铺设的路径，这里什么都不做。
- **`RemoveListeners` 之后本行为永久静默**。读档会重新 `RegisterEvents`，此时若 `IsCompleted` 为真则直接不订阅。

## 主要成员

- `public override void RegisterEvents()`
  **唯一逻辑**：教学未完成时才订阅 `StoryModeEvents.OnStoryModeTutorialEndedEvent`。
- `public override void SyncData(IDataStore dataStore)`
  空实现。
- 私有 `OnTutorialEnded()`
  `TutorialPhase.Instance.IsSkipped` 为真时调补种；无条件解绑自己。
- 私有 `SpawnInitialBanditsAndLooters()`
  三次调用原版 `BanditSpawnCampaignBehavior` 的 `InitializeInitialHideouts()` / `SpawnBanditsAroundHideoutAtNewGame()` / `SpawnLootersAtNewGame()`。**顺序固定，不要调换。**

## 使用示例

```csharp
// 场景：mod 想定制教程跳过后的强盗初始布局，
// 做法是在原版行为上覆写，而不是改本行为（本行为会被 RemoveListeners）
public class MyBanditSpawnBehavior : BanditSpawnCampaignBehavior
{
    public override void InitializeInitialHideouts()
    {
        // 先让原版建藏身处
        base.InitializeInitialHideouts();
        // 然后看看建了多少，供其它系统使用
        Debug.Print("initial hideouts ready: " + Hideout.All.Count);
    }
}

// 注册顺序不影响本行为（它用的是 GetCampaignBehavior<T> 查找原版实例），
// 但必须在同一趟 InitializeGameStarter 里完成，否则查不到。
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    // 覆盖原版的 BanditSpawnCampaignBehavior
    starter.RemoveBehaviors<BanditSpawnCampaignBehavior>();
    starter.AddBehavior(new MyBanditSpawnBehavior());
}
```

## 风险与边界

- **无存档序列化风险**：零字段，读档后完全靠事件重建。
- **`RemoveBehaviors<T>()` 是全量移除**：上面示例里它会把原版行为连同其它 mod 的派生行为一起删掉，再重新加一个。更安全的做法是读出 `CampaignBehaviors` 集合、找到目标实例调 `RemoveBehavior(instance)` 单删。
- **依赖原版行为存在**：这是隐式契约。原版改名或重构，这段补种会静默失效。
- **「补种」的语义是「按新游戏规则生成」**，不是「恢复某个存档快照」。若你的 mod 改变了强盗密度模型（在补种之前就生效），补种出来的数量会按你的模型算。
- **教学期读到已完成的存档时本行为是惰性的**。不要指望它能修正任何「教程结束后强盗仍缺失」的存量问题——那种情况下你应该自己在 `OnGameLoadFinished` 里检查。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 行为基类，空 `SyncData` 的合法实现
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()`，也是 `GetCampaignBehavior<BanditSpawnCampaignBehavior>()` 的查询目标
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddBehavior` 注册入口与 `RemoveBehaviors<T>()` / `RemoveBehavior<T>()` 的来源
- [StoryModeBanditDensityModel](../StoryModeBanditDensityModel) — 教学期把强盗与藏身处闸门归零，正是本行为需要手动补种的根因
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 广播 `OnStoryModeTutorialEndedEvent` 的行为之一
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖
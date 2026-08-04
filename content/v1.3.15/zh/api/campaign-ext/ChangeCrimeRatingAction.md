---
title: "ChangeCrimeRatingAction"
description: "通过战役模型改变派系的主角犯罪值，包含截断、通知、越界宣战和最终事件分发。"
---
# ChangeCrimeRatingAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class ChangeCrimeRatingAction`  
**基类：** `System.Object`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/ChangeCrimeRatingAction.cs`

## 一句话职责

通过当前 `CrimeModel` 应用犯罪值变化、把结果限制在合法范围、可选显示通知，并在相关外交后果完成后发布有效变化事件；调用方请求的 delta 不一定等于最终 delta。

## 心智模型

调用方传入的 delta 不一定是监听器收到的值。Action 先把结果限制在 `0` 到 `Campaign.Current.Models.CrimeModel.GetMaxCrimeRating()`，再把截断后的结果换算成有效 delta，用于通知和事件。

当玩家王国领袖越过 `DeclareWarCrimeRatingThreshold` 时，Action 会在 `CampaignEvents.CrimeRatingChanged` 之前同步调用 `ChangeRelationAction.ApplyPlayerRelation` 并调用 `DeclareWarAction.ApplyByCrimeRatingChange`。一次小幅正向变更可能因此直接改变外交关系。

## 何时使用

当战役规则已有真实 `IFaction` 目标，并且需要参与原生犯罪、通知、外交与事件管线时使用。原生 `CrimeCampaignBehavior` 用它处理每日衰减，`PayForCrimeAction` 用它处理缴纳犯罪值。

不要直接写 `IFaction.MainHeroCrimeRating`，不要假定请求 delta 会完整生效，也不要把它当作关系 API。关系、宣战和媾和分别使用 [`ChangeRelationAction`](../ChangeRelationAction)、[`DeclareWarAction`](../DeclareWarAction) 和 [`MakePeaceAction`](../MakePeaceAction)。

## 入口与时机

| 入口 | 时机与副作用 |
| --- | --- |
| `Apply(IFaction faction, float deltaCrimeRating, bool showNotification = true)` | 截断犯罪值，可选显示通知，写入新值，在阈值处可能改变关系并宣战，最后发出 `CrimeRatingChanged(IFaction, float)`，其中 float 是有效 delta。 |

私有方法不是 mod 入口。有效 delta 为零时通常没有有意义的通知或状态变化，因此调用 Action 不保证监听器会看到有效变化。

## 依赖与事件下游

- **目标：** [`IFaction`](../IFaction) 提供 `MainHeroCrimeRating`、`Name`、`Leader` 和战争状态。
- **模型：** `Campaign.Current.Models.CrimeModel` 提供最大犯罪值和 `DeclareWarCrimeRatingThreshold`。
- **相关行动：** [`ChangeRelationAction`](../ChangeRelationAction) 与 [`DeclareWarAction`](../DeclareWarAction) 可能在阈值处同步执行。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `CrimeRatingChanged` 类型为 `IMbEvent<IFaction, float>`，float 是有效 delta。
- **消费者：** `CrimeCampaignBehavior`、缴费/敌对 Action、通知和外交 Behavior 消费变化后的状态。
- **存档：** 派系犯罪值属于战役状态；运行时事件不会在读档后重放。

## 风险与生命周期

- 越过犯罪阈值可能在事件回调前宣战并降低关系；回调中执行不可逆操作前必须重新检查当前派系状态。
- 事件 delta 可能小于调用请求；应读取事件参数，不要用原始请求重新计算。
- 通知发生在犯罪值写入之前，不要把通知调用当作所有外交副作用已经完成。
- 直接改字段会跳过截断、宣战和 `CrimeRatingChanged`，使犯罪 Behavior 与外交状态不一致。
- 不要从存档同步或自己的犯罪事件回调中反复调用，避免同步反馈循环。

## 真实使用示例

战役 Behavior 可以从真实事件边界取得最终有效变化：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

public sealed class CrimeObserverBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.CrimeRatingChanged.AddNonSerializedListener(this, OnCrimeRatingChanged);
    }

    private void OnCrimeRatingChanged(IFaction faction, float effectiveDelta)
    {
        if (faction == Hero.MainHero.MapFaction && effectiveDelta != 0f)
        {
            RecordCrimeChange(faction, effectiveDelta, faction.MainHeroCrimeRating);
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

原生每日流程会调用 `ChangeCrimeRatingAction.Apply(faction, faction.DailyCrimeRatingChange, showNotification: false)`。mod 也应取得真实派系并让 Action 计算有效 delta。

## 版本注记

`Apply(IFaction, float, bool)`、截断边界、阈值检查和 `CrimeRatingChanged` 事件形状在 1.3.15 与 1.4.5 中一致；每日衰减调用路径以 1.4.5 战役 Behavior 为准。

## 导航

- **父级：** [campaign-ext API](../)
- **同级：** [ChangeRelationAction](../ChangeRelationAction) · [DeclareWarAction](../DeclareWarAction)
- **相关：** [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [Hero](../../campaign/Hero)

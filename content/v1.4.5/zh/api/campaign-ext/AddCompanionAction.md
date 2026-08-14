---
title: "AddCompanionAction"
description: "为氏族建立英雄的伙伴关系，先清理旧伙伴归属，再发布战役事件供下游 Behavior 使用。"
---
# AddCompanionAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class AddCompanionAction`  
**基类：** `System.Object`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/AddCompanionAction.cs`

## 一句话职责

通过战役 Action 建立英雄的 `Hero.CompanionOf` 关系，先处理已有伙伴归属，再把已经完成的加入动作通知给跟踪、队伍和任务 Behavior，而不是直接改一个字段。

## 心智模型

公开的 `Apply(Clan, Hero)` 进入伙伴关系的 Action 边界。如果英雄已经属于另一个氏族的伙伴，Action 会先用 `RemoveCompanionAction.ApplyByFire` 清理旧关系；然后设置新的 `CompanionOf`，最后派发 `CampaignEvents.NewCompanionAdded`。

监听器收到事件时，新的伙伴关系已经写入。监听器应该刷新自己的跟踪或 UI，不应再次设置 `CompanionOf`。这个 Action 不负责创建英雄、加入队伍，也不替代决定招募的对话或任务。

## 何时使用

当战役流程已经选出真实的 `Hero`，并且需要按原生事件边界把他登记为某个氏族的伙伴时，使用这个 Action。内置领主对话流程会在招募决定完成后进入类似边界。

不要用它把普通氏族成员变成伙伴、转移总督，或直接把英雄塞进队伍名册。这些流程分别有所有权、职位和队伍副作用，不能由伙伴关系代替。

## 入口与时机

| 入口 | 时机与副作用 |
| --- | --- |
| `Apply(Clan clan, Hero companion)` | 必要时先以 `Fire` 原因移除旧伙伴关系，然后设置 `companion.CompanionOf`，最后发出 `NewCompanionAdded(Hero)`。 |

私有 `ApplyInternal` 不是 mod 入口。上面的顺序很重要：监听器看到的是新关系，旧氏族可能已经收到移除事件。

## 依赖

- **输入：** [`Clan`](../../campaign/Clan) 持有关系；[`Hero`](../../campaign/Hero) 是要加入的伙伴。
- **旧归属：** 如果 `companion.CompanionOf` 已设置，会调用 [`RemoveCompanionAction`](../RemoveCompanionAction) 的 `RemoveCompanionDetail.Fire` 分支。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `NewCompanionAdded` 类型为 `IMbEvent<Hero>`，分发器把已完成的英雄传给战役接收器。
- **下游：** [`CampaignBehaviorBase`](../CampaignBehaviorBase)、伙伴职位、玩家跟踪、队伍安置和任务/对话代码可能消费该事件。
- **持久化：** 氏族关系属于战役状态；事件是运行时通知，读档时不会重放。

## 风险与生命周期

- 对已有氏族伙伴调用 `Apply` 会同步执行完整的 `Fire` 清理，可能触达囚禁、逃亡、总督、队伍和装备状态。
- 直接写 `CompanionOf` 会跳过旧归属清理和 `NewCompanionAdded`，使队伍职位与跟踪 Behavior 留下旧状态。
- 事件是同步回调。在回调中再次招募或移除同一英雄，可能递归进入伙伴事件链。
- 事件触发时英雄未必已经出现在 `MobileParty.MainParty`，不要把伙伴事件等同于“已经在主队名册中”。

**存档边界：** mod 自己的伙伴元数据应由 Behavior 的 `SyncData` 保存；战役初始化时重新注册非序列化监听器，不要序列化这个 Action 或等待事件在读档时重放。

## 真实使用示例

mod 可以用原生战役事件观察招募完成边界：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

public sealed class CompanionTrackingBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.NewCompanionAdded.AddNonSerializedListener(this, OnNewCompanionAdded);
    }

    private void OnNewCompanionAdded(Hero companion)
    {
        if (companion.CompanionOf == Clan.PlayerClan)
        {
            RefreshCompanionMarker(companion);
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

如果 mod 自己拥有招募决定，应先从真实对话或任务流程取得 `selectedHero`，再调用 `AddCompanionAction.Apply(targetClan, selectedHero)`。Action 不替代对话、任务或队伍设置。

## 版本注记

`Apply(Clan, Hero)` 的签名、旧关系清理顺序和事件时机在 1.3.15 与 1.4.5 中一致；下游事件语义以 1.4.5 源码为准。

## 导航

- **父级：** [campaign-ext API](../)
- **同级：** [RemoveCompanionAction](../RemoveCompanionAction) · [ChangeGovernorAction](../ChangeGovernorAction)
- **相关：** [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [CampaignEvents](../CampaignEvents)

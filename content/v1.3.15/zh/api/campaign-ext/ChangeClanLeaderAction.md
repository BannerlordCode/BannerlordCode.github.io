---
title: "ChangeClanLeaderAction"
description: "安装氏族领袖时维护继承、队伍、总督、关系、金币与事件不变量的战役事务。"
---
# ChangeClanLeaderAction

**命名空间:** TaleWorlds.CampaignSystem.Actions
**模块:** TaleWorlds.CampaignSystem
**类型:** `public static class ChangeClanLeaderAction`
**源文件:** `TaleWorlds.CampaignSystem/Actions/ChangeClanLeaderAction.cs`

## 职责

以死亡、玩家继承和王国继承所使用的完整事务替换 [Clan](../../campaign/Clan) 的领袖，而不是只改 leader 字段。它把“谁是领袖”这项最终状态与继承过程必须同步的金币、总督、队伍、关系和事件通知一起提交，使下游 Behavior 不会接到一个只改了字段的半完成状态。

## 心智模型

更换领袖会跨越多条所有权边界。该 Action 将旧领袖全部金币转给新领袖，解除新领袖的总督职务，保证符合条件的新领袖拥有氏族队伍并担任其队长，对每一位其他存活 Hero 应用外交 Model 给出的关系变化，随后设置氏族领袖，最后发布 `OnClanLeaderChanged`。

`ApplyWithSelectedNewLeader` 用于调用流程已经选出合格继承人的情况。原版的玩家继承 Action 和国王选举结果都走这个变体。`ApplyWithoutSelectedNewLeader` 会查询 `Clan.GetHeirApparents()` 的评分，在最高分候选人中随机选一位；没有候选人就直接返回、完全不改状态。原版在领袖死亡或发现领袖已不属于该氏族时走此分支。若你的功能有自定义资格、UI 选择或非原版继承规则，它不是通用的“挑下一个领袖”工具。

## 依赖与执行顺序

| 角色 | 关联 | 副作用 |
|---|---|---|
| 旧/新所有者 | [Clan](../../campaign/Clan) 与 [Hero](../../campaign/Hero) | `Clan.SetLeader` 靠近流程末尾，之前先完成准备状态变更。 |
| 财富转移 | [GiveGoldAction](.././GiveGoldAction) | 旧领袖当前金币被转走，且关闭通知。 |
| 总督清理 | [ChangeGovernorAction](.././ChangeGovernorAction) | 当选领袖若为总督，必须先解除该职务。 |
| 队伍连续性 | [MobileParty](../../campaign/MobileParty) | 可行动的新领袖没有队伍时创建氏族队伍；有队伍但不是队长时改为队长。 |
| 事件消费者 | [CampaignEventReceiver](.././CampaignEventReceiver) | `OnClanLeaderChanged(oldLeader, newLeader)` 仅在 `SetLeader` 之后发布。 |

关系循环发生在 `SetLeader` 之前，通知发生在其后。事件接收者可以依赖 `clan.Leader` 已是新 Hero；但不能假定新领袖一定有队伍，因为囚犯、逃亡者、已释放者和旅行中的 Hero 会刻意跳过建队。

## 成员与调用时机

仅当来源流程已经确定替代者、且氏族仍有预期的旧领袖时调用 `ApplyWithSelectedNewLeader`。当死亡/移除生命周期明确要求原版继承评分策略时调用 `ApplyWithoutSelectedNewLeader`。两者都要求非空且一致的战役对象；它们不是修复半销毁氏族的工具。

## 风险边界

不要在存活战役中直接赋值 `clan.Leader` 或仅调用 `Clan.SetLeader`。这样会漏掉金币、总督、队长、关系和供 Behavior 响应的事件。也不要在晋升前只清 `Hero.GovernorOf`：Town 仍可能指向过期总督；必须使用 [ChangeGovernorAction](.././ChangeGovernorAction)。

该 Action 读取 `Campaign.Current.Models.DiplomacyModel` 并遍历 `Hero.AllAliveHeroes`，因此应在 Campaign 初始化完成后、销毁前调用。旧领袖已被部分失效后再调用，或事件回调已成功后重复调用，会造成关系重复变化，以及会随存档保留的领袖/队伍不一致。

## 真实获取路径示例

原版玩家继承 Action 将选中的继承人与真实玩家氏族传入显式变体。拥有同样“选择已完成”语义的模组流程可使用同一获取路径。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

Hero selectedHeir = Hero.MainHero;
if (Campaign.Current != null && Clan.PlayerClan.Leader != selectedHeir)
{
    ChangeClanLeaderAction.ApplyWithSelectedNewLeader(
        Clan.PlayerClan,
        selectedHeir);
}
```

## 导航

- ↑ [战役扩展 API](../)
- ↔ [ChangeClanInfluenceAction](.././ChangeClanInfluenceAction) · [ChangeGovernorAction](.././ChangeGovernorAction)
- 相关：[Clan](../../campaign/Clan) · [Hero](../../campaign/Hero) · [GiveGoldAction](.././GiveGoldAction) · [KillCharacterAction](.././KillCharacterAction)

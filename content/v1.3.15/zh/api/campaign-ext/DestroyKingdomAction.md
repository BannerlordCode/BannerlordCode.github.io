---
title: "DestroyKingdomAction"
description: "销毁每个仍存活的成员氏族、清除战争并通知战役观察者，以不可逆方式解体一个王国。"
---
# DestroyKingdomAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** 静态 Action  
**源码：** `TaleWorlds.CampaignSystem/Actions/DestroyKingdomAction.cs`

## 一句话职责

将王国作为政治容器消灭：对每个未消灭成员氏族执行官方灭亡事务，再移除战争关系并派发王国已毁事件。

## 心智模型

`Kingdom` 不只是一个外交标记。它拥有氏族成员图、氏族的军团和领地，以及外交姿态记录。因此此 Action 是一笔**扇出式销毁事务**：

```text
Kingdom（先标记为已消灭）
  -> 每个仍存活的 Clan：DestroyClanAction
       -> 部队、英雄、领地、氏族战争、成员关系
  -> RemoveFactionsFromCampaignWars(Kingdom)
  -> OnKingdomDestroyed(Kingdom)
```

仅用于王国已无法恢复的崩解结果。它不是换君主、移除一个氏族、议和或移除政策的快捷方式。内置势力终止行为会先通过 `ChangeKingdomAction` 让需保留的氏族离开、清空 `RulingClan`，最后才调用此 Action。

## 依赖与事件顺序

| 方向 | 类型与作用 |
|---|---|
| 上游 | [`Kingdom`](../../campaign/Kingdom) 提供氏族快照。子项清理开始前它已经变为 `IsEliminated`。 |
| 主级联 | 对每个未消灭氏族调用 [`DestroyClanAction`](../DestroyClanAction)：删除部队和英雄、转移城镇/城堡、清除氏族战争记录并离开王国。 |
| 政治清理 | 只有在氏族循环后，`Campaign.Current.FactionManager.RemoveFactionsFromCampaignWars` 才移除该王国剩余战争关系。 |
| 观察者 | 注销、子项清理、列表移除和战争清理后触发 `CampaignEventDispatcher.OnKingdomDestroyed`。Behavior 应在此清除缓存的王国/军团/领地假设。 |
| 关联系统 | [`ChangeKingdomAction`](../ChangeKingdomAction)、[`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction)、[`KillCharacterAction`](../KillCharacterAction)、[`DisbandArmyAction`](../DisbandArmyAction) 都可能经氏族级联间接触达。 |

实现对 `destroyedKingdom.Clans.ToList()` 取快照，并在每个子级联后调用 `RemoveClanInternal`。因此不能用只改 `IsEliminated` 或 `Clan.Kingdom` 的循环替代它。

## 原因变体与成员时机

| 入口 | 含义 | 成员会怎样 |
|---|---|---|
| `Apply` | 普通政治灭亡。`FactionDiscontinuationCampaignBehavior` 在王国没有继续存在理由时使用。 | 每个存活氏族走 `DestroyClanAction.Apply`：其领袖和其他在世成员都会进入移除路径。 |
| `ApplyByKingdomLeaderDeath` | 王国因正在处理的领袖死亡而被移除。1.4.5 的 `KillCharacterAction` 和 SandBox 继承人选择流程都有真实调用。 | 每个氏族走 `DestroyClanAction.ApplyByClanLeaderDeath`：不重复移除已处理的氏族领袖，但会移除其他在世成员。 |

这不是继承功能。若王国应在统治者死后继续存在，应走相应的继承/统治氏族路径。仅因模组不想处理领袖就选 leader-death 变体，会跳过普通成员移除时机的一部分语义。

## 风险边界

- 这是战役层面的不可逆操作。被消灭 `Kingdom` 对象仍可能被 UI、Behavior 和存档引用；`OnKingdomDestroyed` 后应清理或重新验证这些引用。
- 它可能转移每个被毁氏族持有的全部城镇和城堡，移除其部队与英雄，导致附属军团瓦解，并删除正在进行的战争。绝不能当成“退出阵营”按钮。
- 不要在遍历 `Kingdom.All`、`kingdom.Clans`、`kingdom.Armies` 或 Behavior 自己的成员缓存时调用。实现会主动改变这些集合的成员关系。
- 不要在读档重建过程中调用。战役对象列表、战争姿态和据点归属必须先完整建立，级联才能一致地保存。
- 自定义前置条件必须考虑玩家。`Clan.PlayerClan.Kingdom` 可能为 null；销毁玩家王国与销毁其他王国走同样的破坏性成员路径。

## 真实获取路径示例

对象来自战役的真实王国注册表。下例模拟一个明确编写的终局事件，不能拿来做日常继承代码：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void EndScenarioKingdom(string kingdomId)
{
    Kingdom kingdom = Kingdom.All.FirstOrDefault(k =>
        k.StringId == kingdomId && !k.IsEliminated);

    if (kingdom != null && kingdom.Clans.All(clan => clan.IsEliminated))
    {
        DestroyKingdomAction.Apply(kingdom);
    }
}
```

`Kingdom.All` 是战役注册表，不是虚构 service。守卫也让调用保持极窄：任何仍含有你要保留的氏族的王国，都应使用 `ChangeKingdomAction`。

## 不该调用它的情况

| 需求 | 正确边界 |
|---|---|
| 一个氏族离开但仍要存活 | [`ChangeKingdomAction`](../ChangeKingdomAction) |
| 国王死亡但王国应延续 | 继承/统治者选择，而非销毁 |
| 结束战争 | `MakePeaceAction` 等外交 Action |
| 结束一支军团的行动 | [`DisbandArmyAction`](../DisbandArmyAction) |
| 删除一个氏族 | [`DestroyClanAction`](../DestroyClanAction) |

## 导航

- ↑ [战役 Actions](./) · [API](../)
- ↔ [Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) · [Army](../Army)
- 相关：[DestroyClanAction](../DestroyClanAction) · [ChangeKingdomAction](../ChangeKingdomAction) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [崩溃边界](../../../architecture/crash-boundaries)

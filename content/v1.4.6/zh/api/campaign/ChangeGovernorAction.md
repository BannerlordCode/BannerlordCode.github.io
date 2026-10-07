---
title: "ChangeGovernorAction"
description: "任命或移除城镇总督的 Campaign Action 静态类，含按英雄与按城镇两种移除入口。"
---
# ChangeGovernorAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeGovernorAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeGovernorAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ChangeGovernorAction` 管的是「城镇总督」这一职位：谁坐这个位置、谁从这个位置上下来。它是 `static class`（`ChangeGovernorAction.cs:7`），三个静态方法覆盖了完整的生命周期：

| 方向 | 方法 | 你手里有的是 |
| --- | --- | --- |
| 任命 | `Apply(Town fortification, Hero governor)` | 城镇 + 人选 |
| 免职 | `RemoveGovernorOf(Hero governor)` | 那个总督本人 |
| 免职 | `RemoveGovernorOfIfExists(Town town)` | 那座城镇 |

注意最后一个方法名里的 `IfExists`：它是三个入口里唯一带守卫语义的，意味着「如果这座城本来就没总督，那就什么也不做」，而不是抛异常。这是本类里最重要的一个设计差异。

## 心智模型

总督关系是一条**双向连线**：`Town` 一端指向 `Hero`，`Hero` 一端指向 `Town`。三个方法本质上都是在操作同一条连线的不同端点：

- `Apply(town, hero)` —— 从城镇端建立连线（并把原来那条断掉）。
- `RemoveGovernorOf(hero)` —— 从英雄端找线，然后断掉。你只知道「这个人」，不知道他在哪座城。
- `RemoveGovernorOfIfExists(town)` —— 从城镇端找线，**找到才断，找不到静默返回**。

所以选哪个方法，取决于**你手上握的是哪一端的信息**：

- 玩家在城镇界面点了「任命总督」→ 你有 town 和 hero → `Apply`。
- 某个英雄要离队/死亡/被调走 → 你只有 hero → `RemoveGovernorOf`。
- 某座城易主了，需要清掉旧总督 → 你只有 town，而且可能压根没总督 → `RemoveGovernorOfIfExists`。

`IfExists` 的存在本身就是一个信号：**调用方常常处在「不确定有没有总督」的上下文里**（例如城镇易主的通用处理流程）。如果你用 `RemoveGovernorOf`，你必须自己先确认那位英雄确实是某城总督。

## 怎么用

### 怎么拿到

静态调用，无需实例：

```csharp
using TaleWorlds.CampaignSystem.Actions;

ChangeGovernorAction.Apply(town, hero);
```

### 典型用法

```csharp
// 任命：把 hero 指派为 town 的总督（若 town 已有总督，会被替换）
ChangeGovernorAction.Apply(town, myHero);

// 免职：知道是哪位英雄，不知道（或不在乎）他在哪座城
ChangeGovernorAction.RemoveGovernorOf(myHero);

// 免职：知道是哪座城，且不确定有没有总督
ChangeGovernorAction.RemoveGovernorOfIfExists(town);
```

「城镇易主后清空旧总督」的安全写法：

```csharp
ChangeGovernorAction.RemoveGovernorOfIfExists(town);
```

不需要先判 `town.Governor != null`——这正是 `IfExists` 版本替你做的事。

### 坑

- **`Apply` 是「替换」而不是「追加」。** 一座城只有一个总督位；给已有总督的城再 `Apply` 一个新人，等于直接把旧总督挤下去，不会先给你一个「位子被占」的错误。
- **`Apply` 的 `hero` 传 `null` 不会得到「清空」效果。** 想清空请用两个 `Remove*` 方法之一，别指望传 `null` 当免职。
- **`RemoveGovernorOf(hero)` 对「非总督英雄」的行为与 `IfExists` 不对称。** 三个方法里只有 `RemoveGovernorOfIfExists` 名字上承诺了守卫语义；需要容错时优先选它，或者自己先确认关系存在。
- **别用 `RemoveGovernorOf` 去猜城。** 它按英雄反查，你不需要（也无法）告诉它城市；如果你其实是从城镇端出发的，用 `RemoveGovernorOfIfExists` 更贴切。
- **参数名是 `fortification` 而不是 `town`。** `Apply` 的第一个形参叫 `fortification`（`ChangeGovernorAction.cs:48`），但类型是 `Town`。读到这个名字不要困惑，它指的就是这座城镇。
- **城镇与英雄的归属要自洽。** 把不属于该势力的英雄任命为总督，编译期不会有任何提示，问题会留到战役状态里。

## 关键成员

- `ChangeGovernorAction`（`ChangeGovernorAction.cs:7`）—— `public static class`。入口载体，不可实例化，全部能力为静态方法。
- `Apply(Town fortification, Hero governor)`（`ChangeGovernorAction.cs:48`）—— 把 `governor` 任命为 `fortification` 这座城镇的总督；若该城已有总督则被替换。
- `RemoveGovernorOf(Hero governor)`（`ChangeGovernorAction.cs:54`）—— 按英雄反查并移除其总督职务。适用于你手上只有 `Hero` 的场景。
- `RemoveGovernorOfIfExists(Town town)`（`ChangeGovernorAction.cs:60`）—— 按城镇移除总督，带 `IfExists` 守卫：城镇没有总督时不执行任何操作。适用于城镇易主等「不确定是否存在」的通用流程。

## 真实示例

「城镇易主时清掉旧总督，并给新城主任命一位」：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

public class GovernorOnOwnerChangeBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(this, OnOwnerChanged);
    }

    private void OnOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
    {
        Town town = settlement.Town;
        if (town == null)
        {
            return;
        }

        // 守卫式移除：没总督也不会炸
        ChangeGovernorAction.RemoveGovernorOfIfExists(town);

        // 需要的话再指定新总督
        Hero candidate = newOwner?.Clan?.Leader;
        if (candidate != null && candidate.IsAlive)
        {
            ChangeGovernorAction.Apply(town, candidate);
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

「英雄离队时顺手摘掉总督头衔」：

```csharp
if (hero.Clan == null || hero.IsDead)
{
    ChangeGovernorAction.RemoveGovernorOf(hero);
}
```

## 参见

- [`../ChangeClanLeaderAction`](../ChangeClanLeaderAction) —— 同为「任命/更换职位持有者」的 Action，心智模型可以互相参照。
- [`../AddHeroToPartyAction`](../AddHeroToPartyAction) —— 英雄调动常与总督任免同流程出现。
- [`../AddCompanionAction`](../AddCompanionAction) —— 伙伴进入家族后往往成为总督候选人。
- [`../_index`](../_index) —— 回到 campaign 桶索引查看完整 Action 清单。
- `Town` —— `Apply` / `RemoveGovernorOfIfExists` 的操作对象类型（本页未建链，目标页不存在）。

## 导航

- 上级：[campaign 桶索引](../_index)
- 同级：[`../ChangeClanLeaderAction`](../ChangeClanLeaderAction) · [`../AddHeroToPartyAction`](../AddHeroToPartyAction)

---
title: "ChangeClanLeaderAction"
description: "改变家族领袖的 Campaign Action 静态类，提供「指定新领袖」与「由游戏挑选新领袖」两个入口。"
---
# ChangeClanLeaderAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeClanLeaderAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeClanLeaderAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ChangeClanLeaderAction` 是「家族换领袖」这件事的唯一正规入口。它把「谁当新领袖」这个决策从「怎么把变更落进战役状态」里拆了出来：调用方要么自己给出 `Hero newLeader`，要么把挑选权交给游戏规则。

类本身是 `static class`（`ChangeClanLeaderAction.cs:11`），没有实例状态、没有构造函数、不能 `new`。它属于 Campaign Action 家族：调用即生效，不是「排队等待执行的命令对象」。

关键区分点只有一条：**新领袖由谁决定**。

- `ApplyWithSelectedNewLeader` —— 调用方已经选好了新领袖。
- `ApplyWithoutSelectedNewLeader` —— 调用方只知道「该换人了」，具体换谁由游戏内部规则挑选。

## 心智模型

把 `Clan` 想成一个有「掌门人」指针的容器，`Clan.Leader` 就是那根指针。这个 Action 做的事就是把指针重新指到另一个 `Hero` 上，并让战役里所有依赖「谁是这家之主」的系统（外交、家族界面、AI 决策）跟着更新。

因此有两条心智规则：

1. **这是「状态迁移」，不是「事件订阅」。** 你不是在监听领袖变更，你是在*触发*领袖变更。调用前领袖是 A，调用后领袖就是 B，中间没有异步等待。
2. **两个入口是同一件事的两种输入形态。** 有指定领袖时，游戏信任你的选择；没有指定时，游戏用自己的候选规则挑一个。后者意味着**结果不可预测**——你不该在需要精确控制的场景里用它。

如果调用方是玩家操作（例如家族界面上的「指定新领袖」按钮），用带指定领袖的版本；如果是系统驱动的（原领袖死亡后由系统补位），用不带指定的版本。

## 怎么用

### 怎么拿到

不需要「拿到」。它是静态类，直接以类型名调用：

```csharp
using TaleWorlds.CampaignSystem.Actions;

ChangeClanLeaderAction.ApplyWithoutSelectedNewLeader(clan);
```

没有单例、没有 `Campaign.Current.XXX` 包装、不需要注入。只要 `TaleWorlds.CampaignSystem` 已加载（战役进行中），随时可调。

### 典型用法

```csharp
// 场景一：玩家在家族界面明确指定了接班人
Hero chosen = clan.GetHeir();          // 或任意你自己的选人逻辑
ChangeClanLeaderAction.ApplyWithSelectedNewLeader(clan, chosen);

// 场景二：原领袖死亡/退位，让游戏自己补位
ChangeClanLeaderAction.ApplyWithoutSelectedNewLeader(clan);
```

典型的触发时机是：原领袖死亡、被俘、退位、或剧本脚本强制换人。调用完之后立刻读 `clan.Leader` 就能拿到新值。

### 坑

- **别在「还没确定该不该换」的时候调用。** 这个 Action 不会问你要不要换，它直接换。判断条件应该写在调用方。
- **`newLeader` 必须真的是这个家族的人且可用。** 传一个外人、死人或不存在的 `Hero`，你不会得到编译错误，只会在战役状态里留下不一致。
- **`ApplyWithoutSelectedNewLeader` 的结果不是你说了算。** 如果家族里只剩一个可选英雄，游戏就选他；如果规则挑出一个你不想要的 AI 领袖，你的后续逻辑（比如给新领袖挂行为）会挂到错误对象上。
- **不要用它做「临时替换」。** 没有配对的「恢复原领袖」Action；要换回去就得再调一次。
- **`clan` 为 `null` 会直接抛异常。** 静态 Action 通常不做空值保护。

## 关键成员

- `ChangeClanLeaderAction`（`ChangeClanLeaderAction.cs:11`）—— `public static class`。整个入口的载体；不可实例化，所有能力都是静态方法。
- `ApplyWithSelectedNewLeader(Clan clan, Hero newLeader)`（`ChangeClanLeaderAction.cs:58`）—— 把 `clan` 的领袖替换为调用方指定的 `newLeader`。适用于调用方已经完成选人判断的场景（玩家选择、剧本指定）。
- `ApplyWithoutSelectedNewLeader(Clan clan)`（`ChangeClanLeaderAction.cs:64`）—— 只告诉游戏「`clan` 需要新领袖」，具体人选由游戏规则内部决定。适用于系统驱动、无人工干预的补位场景。

## 真实示例

一个「原领袖战死后自动补位」的监听写法：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.MapEvents;

public class ClanLeaderDeathBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
    }

    private void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        Clan clan = victim.Clan;
        if (clan == null)
        {
            return; // 无家族的英雄，换领袖这件事不适用
        }

        if (clan.Leader == victim)
        {
            // 明确知道领袖空缺，交给游戏规则挑选接班人
            ChangeClanLeaderAction.ApplyWithoutSelectedNewLeader(clan);
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

如果你需要「必须换成某个特定的人」：

```csharp
Clan clan = Hero.MainHero.Clan;
Hero heir = clan.GetHeir();
if (heir != null && heir.IsAlive)
{
    ChangeClanLeaderAction.ApplyWithSelectedNewLeader(clan, heir);
}
```

## 参见

- [`../ChangeKingdomAction`](../ChangeKingdomAction) —— 同属「重绑定势力归属」类 Action，常在换领袖后连带处理。
- [`../AddCompanionAction`](../AddCompanionAction) —— 家族成员增减相关的 Action，与领袖人选池直接相关。
- [`../AddHeroToPartyAction`](../AddHeroToPartyAction) —— 当新领袖需要随队时使用。
- `KillCharacterAction` —— 领袖更替最常见的触发源（本页未建链，目标页不存在）。

## 导航

- 上级：[campaign 桶索引](../_index)
- 同级：[`../ChangeKingdomAction`](../ChangeKingdomAction) · [`../AddCompanionAction`](../AddCompanionAction)

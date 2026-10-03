---
title: "ArmyTypes"
description: "军队的四种任务类型标记：Besieger / Raider / Defender / Patrolling，决定 AI 军事行为的全部走向与围城战的合法性判断。"
---

# ArmyTypes

**Namespace:** `TaleWorlds.CampaignSystem`（嵌套声明，全名 `TaleWorlds.CampaignSystem.Army.ArmyTypes`）
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum ArmyTypes`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Army.cs`

## 概述

一支 `Army` 不是「一堆跟着统帅走的队伍」这么简单——它还带一个**任务类型**。这个枚举就是那个任务的取值：`Besieger`（围攻某座城镇）、`Raider`（劫掠）、`Defender`（防守一片区域）、`Patrolling`（巡逻）。它不描述军队的**编制**（那由 `Army` 上的 `Cohesion` / `MemberRoster` 等决定），只描述**这趟差事是干什么的**，而差事直接决定 AI 怎么走。

它唯一的存储位置是 `Army.ArmyType`——一个 `public ArmyTypes ArmyType { get; set; }`，**有公开 setter**。创建时就由构造函数 `Army(Kingdom kingdom, MobileParty leaderParty, ArmyTypes armyType)` 定下，之后由 `SetPartyAiAction` 反复改写。全树有 58 处 `ArmyTypes.` 引用，集中在两处：`SetPartyAiAction`（AI 下达命令时设类型）和 `CampaignBehaviors.AiBehaviors/AiMilitaryBehavior`（每帧按类型分派）。

## 心智模型

把它当成「**挂在军队身上的一个 AI 目标标签**」。判断一次军事行为合不合理，读懂三条真规则就够了。

第一条在 `Army.cs:754`：`if (ArmyType == ArmyTypes.Besieger && settlement.IsUnderSiege)`。**围城型的军队只有在目标城镇「正在被围」时才生效**——城镇还没被围起来的 Besieger 军队在这一步什么也不会发生。

第二条在 `AiMilitaryBehavior.cs:121`，它是**三条互斥的目标-类型匹配规则**：统帅不是队伍成员（`mobilePartyOf.Army.LeaderParty != mobilePartyOf`）时无条件放行；队伍目标是 `PartyObjective.Defensive` 时，只接受 `Besieger` 或 `Raider`；队伍目标是 `PartyObjective.Aggressive` 时，只接受 `Defender`。**类型与目标不匹配就不会加入军队**。

第三条在 `AiEngagePartyBehavior.cs:31`：`Army.LeaderParty == mobileParty && Army.ArmyType != Army.ArmyTypes.Defender`——**统帅只有在自己不是 Defender 军队时才允许主动交战**。防守型军队的统帅不会追出去打。

还有一条纯数值规则：`AiMilitaryBehavior.cs:181` 里，`type == Raider` 用 `MobilePartyAIModel.NeededFoodsInDaysThresholdForRaid`，否则用 `...ForSiege`。**劫掠型军队按更宽松的存粮阈值决定要不要继续**，这解释了为什么 Raider 军队更容易在缺粮时主动出击。

最后一个锚点：`NumberOfArmyTypes = 4` 是**哨兵值，不是类型**——它是第五个取值，值为 4。`grep` 全树，`NumberOfArmyTypes` **只在声明处出现一次、零引用**——没有数组长度、没有循环上界用它。所以它是一个纯占位：mod 若要按类型建表，应当自己数或用 `Enum.GetValues`，别指望这个哨兵已经被人用起来了。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Besieger` | `Besieger = 0` | 围攻型。`Army.cs:754` 里它是「目标城镇必须正处于 `IsUnderSiege`」的前提条件；`AiMilitaryBehavior` 里它是 `Defensive` 目标唯一接受的两种类型之一。也是 `LordConversationsCampaignBehavior` 三段领主对话分支的条件之一（另有 Defender 与 Raider）。 |
| `Raider` | `Raider = 1` | 劫掠型。与 Besieger 共享「Defensive 目标可接受」的资格，但额外触发一条存粮规则：`NeededFoodsInDaysThresholdForRaid` 而不是 `...ForSiege`，并且在 `AiMilitaryBehavior.cs:200` 处与 `WillGatherAnArmy` 并列成为「即便缺粮也继续」的豁免条件。 |
| `Defender` | `Defender = 2` | 防守型。**唯一与 `Aggressive` 队伍目标匹配的取值**（`AiMilitaryBehavior.cs:121`）；同时 `AiEngagePartyBehavior.cs:31` 用它做否定条件——统帅是 Defender 军队时不允许主动交战。`SetPartyAiAction` 里它被设置得最频繁（37/52/116 三处）。 |
| `Patrolling` | `Patrolling = 3` | 巡逻型。**在 1.4.5 的 58 处 `ArmyTypes.` 引用里一次都没出现**——没有任何 `switch` 或 `if` 覆盖它。它能通过构造函数与 `ArmyType` setter 赋值，但 AI 不为它准备任何分支，实际表现与「类型未被任何规则命中」相同。 |
| `NumberOfArmyTypes` | `NumberOfArmyTypes = 4` | 哨兵值，值为 4（前面有四个真实取值）。**全树零引用**，没有任何代码把它当数组长度或循环上界。它是纯占位，不是类型。 |

## 真实示例

创建并改写一支军队的任务类型（构造函数的第三个参数就是它，`ArmyType` 的 setter 是公开的）：

```csharp
// Kingdom.cs:685 是全树唯一的 new Army(...) 调用点，注意第一个参数传的是 Kingdom 本身
public static void CreateBesiegerArmy(Kingdom kingdom, MobileParty leader)
{
    Army army = new Army(kingdom, leader, Army.ArmyTypes.Besieger);

    Debug.Print("army type = " + army.ArmyType, 0);
    Debug.Print("cohesion = " + army.Cohesion, 0);
}
```

复刻「类型与队伍目标是否匹配」这条准入规则（这是 `AiMilitaryBehavior.cs:121` 的原判断）：

```csharp
public static bool CanJoinArmy(MobileParty candidate, Army army)
{
    if (army.LeaderParty != candidate)
    {
        return true;
    }

    if (candidate.Objective == MobileParty.PartyObjective.Defensive)
    {
        return army.ArmyType == Army.ArmyTypes.Besieger || army.ArmyType == Army.ArmyTypes.Raider;
    }

    if (candidate.Objective == MobileParty.PartyObjective.Aggressive)
    {
        return army.ArmyType == Army.ArmyTypes.Defender;
    }

    return false;
}
```

复刻围城合法性判断——`ArmyType == Besieger` 只是必要条件，目标城镇还得真的在被围：

```csharp
public static void TickBesieger(Settlement target, Army army)
{
    if (army.ArmyType != Army.ArmyTypes.Besieger)
    {
        return;
    }

    if (target.IsUnderSiege)
    {
        Debug.Print("besieger is legal, siege in progress at " + target.StringId, 0);
    }
    else
    {
        Debug.Print("besieger with no siege yet", 0);
    }
}
```

按类型分派存粮阈值——这解释了 Raider 与其它类型的分野：

```csharp
public static float GetFoodThresholdFor(ArmyTypes type)
{
    if (type == Army.ArmyTypes.Raider)
    {
        return Campaign.Current.Models.MobilePartyAIModel.NeededFoodsInDaysThresholdForRaid;
    }

    return Campaign.Current.Models.MobilePartyAIModel.NeededFoodsInDaysThresholdForSiege;
}
```

## 风险与边界

- **`NumberOfArmyTypes` 是哨兵且零引用。** 值 4，不能当类型用；也没有任何官方代码依赖它，算长度请自己处理。
- **`Patrolling` 在 1.4.5 里是空档。** 58 处引用无一涉及它。赋成它不会崩，但 AI 的 `switch` 会直接掉出去，等同于「无类型」。
- **`ArmyType` 的 setter 是公开的。** 改了不会立刻重算任何 AI 决策——`AiMilitaryBehavior` 是每帧跑的，所以最坏延迟一帧；但围城合法性那种判断只在特定分支里触发，改类型不会主动唤醒它们。
- **类型必须与 `MobileParty.Objective` 对齐才有意义。** `Defensive` 只收 Besieger / Raider，`Aggressive` 只收 Defender，类型错配的队伍会静静地在军队边上转悠而不加入。
- **Defender 会抑制统帅交战。** `AiEngagePartyBehavior` 的 `ArmyType != Defender` 是主动出击的前提之一，改成 Defender 会让统帅不再主动 engage。
- **枚举是嵌套的。** 全名 `TaleWorlds.CampaignSystem.Army.ArmyTypes`；官方代码在 `TaleWorlds.CampaignSystem` 命名空间里仍写成 `Army.ArmyTypes.Defender` 全限定形式，`using` 之后裸写 `ArmyTypes` 会与 `Army` 类名混淆。
- **构造函数会立刻产生副作用。** `Army(Kingdom, MobileParty, ArmyTypes)` 内部做 `LeaderParty.Army = this`、`UpdateName()`、`AddEventHandlers()`、`Cohesion = 100f`——不是「建了个空壳」。
- **第一个参数是 `Kingdom`，不是 `Clan` 或 `IFaction`。** 全树唯一的 `new Army(...)` 调用点是 `Kingdom.cs:685`，传的就是 `this`；传 null 会让 `Kingdom` 字段为 null，后续依赖它的逻辑全崩。
- **`MobileParty.Objective` 的 setter 是 `private`。** 队伍目标只能由 AI 设定，mod 只能读——想造「类型与目标不匹配」的局面只能等 AI 自己走到那一步。
- **不参与存档显式序列化。** `ArmyType` 没有 `[SaveableField]` 标记；它是 `Army` 类上的一个自动属性，具体如何进存档取决于 `Army` 自身的存档定义，不要假设它一定会被保存。
- **`Raider` 有额外豁免。** `WillGatherAnArmy || type == Raider` 这个条件让劫掠型军队在缺粮时不被解散，别拿它和 Besieger 对比行为时得出错误结论。

## 依赖关系

- 宿主类：[Army](../Army) 的 `ArmyType` 属性、`Army(Kingdom, MobileParty, ArmyTypes)` 构造函数与 `Army.cs:754` 的围城合法性判断是本枚举的全部存储与第一处使用点
- 设置方：`TaleWorlds.CampaignSystem.Actions.SetPartyAiAction` 在 37 / 52 / 66 / 81 / 116 五处写入 `ArmyType`，是 mod 之外最频繁的改动者
- 消费方：`CampaignBehaviors.AiBehaviors/AiMilitaryBehavior` 与 `AiEngagePartyBehavior` 每帧按类型分派，是本枚举语义真正的实现者
- 目标匹配：`MobileParty.PartyObjective` 的 `Defensive` / `Aggressive` 与本枚举成对使用，不匹配即不加入
- 数值后果：`MobilePartyAIModel.NeededFoodsInDaysThresholdForRaid` / `...ForSiege` 是 `Raider` 与其它类型的唯一数值分野
- 对话联动：`LordConversationsCampaignBehavior` 分别为 Besieger / Defender / Raider 写了三段不同的领主对话分支
- 同一宿主文件：`Army.cs` 里紧挨着还有 `ArmyDispersionReason`（军队解散原因的 15 个取值），两者语义无关但常被一并读到
- 桶首页：[campaign-ext API 分区](../)

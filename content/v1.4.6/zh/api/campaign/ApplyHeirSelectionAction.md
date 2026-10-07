---
title: "ApplyHeirSelectionAction"
description: "在领主死亡或退休时把继承权正式移交给指定继承人 Hero 的静态行为类。"
---
# ApplyHeirSelectionAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ApplyHeirSelectionAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ApplyHeirSelectionAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ApplyHeirSelectionAction` 是战役层的一个纯静态行为类，负责在「当前统治者/领主离开舞台」时，把继承权正式移交给一名继承人 `Hero`。它把继承这个跨系统的大动作收敛成两个语义明确的入口：死亡触发与退休触发。类本身不保存任何状态，也不持有单例——调用即生效，并连带更新家族领袖、王国统治者、部队归属以及 AI 行为等派生状态。

## 心智模型

把继承想成一次「席位交接」，而不是一次属性赋值。系统里真正的触发源（领主战死、领主主动退位）只负责判定「该交接了」，具体交接由本类完成：

- 触发源决定 *何时* 交接（`ApplyByDeath` 还是 `ApplyByRetirement`）；
- 本类决定 *交接到谁*（参数 `heir`）；
- 副作用（家族领袖、王国统治者、部队归属、AI 行为刷新）由本类内部统一处理。

因此你几乎永远不应该自己去改 `Clan.Leader` 或 `Kingdom.Ruler` 来做继承——那会绕过本类维护的一致性，把系统推到「数据看起来对、监听者却没被通知」的半损坏状态。

## 怎么用

### 怎么拿到

静态类，无需实例化，直接以类型名调用：

```csharp
using TaleWorlds.CampaignSystem.Actions;
```

### 典型用法

只在确实发生了「领主退场」的事件处理链里调用，且只调用一次：

```csharp
// 领主战死 -> 由继承人接位
ApplyHeirSelectionAction.ApplyByDeath(heir);

// 领主主动退休 -> 由继承人接位
ApplyHeirSelectionAction.ApplyByRetirement(heir);
```

### 坑

- **不要两个入口都调**：死亡与退休是互斥的触发时机，重复调用会让继承流程跑两遍。
- **`heir` 必须是有效且仍然存活的 `Hero`**；传入 `null` 或已死亡对象不会得到「安全兜底」，而是让后续派生状态更新失去目标。
- 这不是「设置继承人」的接口——它执行的是 *已经决定好* 的继承，选人逻辑在调用方。
- 继承不是纯数据操作，会触发大量监听者；不要在遍历 `Clan` / `Kingdom` 集合的过程中同步调用。

## 关键成员

- `ApplyByDeath`（`ApplyHeirSelectionAction.cs:77`）—— `public static void ApplyByDeath(Hero heir)`；在领主死亡的语境下执行继承，把 `heir` 扶上位并刷新相关派生状态。
- `ApplyByRetirement`（`ApplyHeirSelectionAction.cs:83`）—— `public static void ApplyByRetirement(Hero heir)`；在领主主动退休的语境下执行继承，语义与死亡版一致，差别只在触发来源，便于各监听者区分「因何而继承」。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static class HeirHandover
{
    // 领主的死亡处理链里调用：让合法继承人接位
    public static void OnLordDied(Hero deadLord, Hero heir)
    {
        if (deadLord == null || heir == null || !heir.IsAlive)
        {
            return; // 继承目标不成立，直接放弃，不要调用 Action
        }

        ApplyHeirSelectionAction.ApplyByDeath(heir);
    }

    // 领主的退休处理链里调用：让继承人接位
    public static void OnLordRetired(Hero heir)
    {
        if (heir == null || !heir.IsAlive)
        {
            return;
        }

        ApplyHeirSelectionAction.ApplyByRetirement(heir);
    }
}
```

## 参见

- [ActionNotes](../ActionNotes)——战役行为类的通用约定与调用时机说明。
- [AdoptHeroAction](../AdoptHeroAction)——同样作用于 `Hero` 家族归属的行为，可对照其「先判定后执行」的写法。
- [AddCompanionAction](../AddCompanionAction)——把 `Hero` 纳入玩家势力的另一个入口，继承之外的人员变更参考。

## 导航

- [战役行为索引](../_index)——返回同桶全部 Action 页。

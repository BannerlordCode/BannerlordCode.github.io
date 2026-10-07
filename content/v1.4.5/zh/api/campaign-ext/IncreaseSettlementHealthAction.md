---
title: "IncreaseSettlementHealthAction"
description: "按百分比增减据点完整度，并在村庄恢复到满完整度时顺带把村庄状态复位为 Normal、给民兵 +20 的静态战役动作。"
---

# IncreaseSettlementHealthAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class`
**源文件：** `TaleWorlds.CampaignSystem/Actions/IncreaseSettlementHealthAction.cs`

## 概述

IncreaseSettlementHealthAction 是战役动作家族（Actions 家族）中的一个静态包装类，只有一个公开入口 `Apply`。它把「给据点增减完整度」这件事收敛成一条标准路径：把传入的百分比加到 `Settlement.SettlementHitPoints` 上，把结果裁剪到不超过 1，然后在特定条件下顺带把村庄状态复位为 Normal 并给民兵 +20。

为什么需要它：据点的完整度（SettlementHitPoints）是 0..1 的浮点值，表示城墙与建筑在围城或袭击后的受损程度。游戏里有多个系统要修改它——最典型的是每日自动恢复（VillageHealCampaignBehavior），mod 也可能想在任务奖励、事件或自定义行为里给据点「修血」或「扣血」。如果每个调用点都直接写 `settlement.SettlementHitPoints += x`，就会漏掉上限裁剪和村庄状态复位的联动逻辑。这个动作类把这套联动固化下来，调用方只需要给一个数字。

## 心智模型

把这个类想成「据点血条的唯一正规治疗/伤害入口」。它做的事情分三层，顺序固定：

1. **加血或扣血**：`percentage` 直接加到 `SettlementHitPoints` 上。注意这个值是「要加的量」而不是「目标值」——传 0.1 是恢复 10%，传 -0.2 是打掉 20%。
2. **裁剪上限**：加完之后如果超过 1 就压回 1。没有下限裁剪——传负数可以把完整度压到 0 甚至负数，虽然语义上 0 就是「全毁」。
3. **村庄联动**：只有当「加完之后正好满血（大于等于 1）」「目标是村庄（IsVillage）」「且村庄当前不在 Normal 状态」三个条件同时成立时，才会触发 `ChangeVillageStateAction.ApplyBySettingToNormal` 把村庄状态复位，并给民兵 +20。

第 3 步是最容易漏的副作用。很多 modder 以为这个动作只是「修城墙」，实际上它还会把被掠夺或被 raid 的村庄「治愈」回 Normal 状态，并送 20 点民兵。如果你在 mod 里用「先把村庄打残再修血」来触发某个状态变化，这个联动会让你的计划失效——因为修满血的同时村庄状态已经被复位了。

另一个常见误用是把它当「设置完整度」用。它不是。想设置到特定值，应该直接写 `settlement.SettlementHitPoints = x`，但该属性的 setter 是 internal set，mod 程序集默认无法直接写入，需要 Harmony 或反射才能绕过。

## 怎么用

### 怎么拿到

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/IncreaseSettlementHealthAction.cs`（全文 22 行）。

**入口：** `public static void Apply(Settlement settlement, float percentage)`（`IncreaseSettlementHealthAction.cs:18`）。

这个类是静态类，不需要实例化，没有状态，没有重载。整个类只有两个方法：私有的 `ApplyInternal`（`IncreaseSettlementHealthAction.cs:7`）做实际工作，公开的 `Apply`（`IncreaseSettlementHealthAction.cs:18`）只是转发。

### 典型用法

```csharp
// 前置条件：settlement 是有效的 Settlement 引用，percentage 是你要增减的量
// 恢复 30% 完整度
IncreaseSettlementHealthAction.Apply(settlement, 0.3f);

// 打掉 15% 完整度（负数 = 伤害）
IncreaseSettlementHealthAction.Apply(settlement, -0.15f);
```

调用前需要确认的不变量：

1. `settlement` 非 null，且是 `Settlement` 类型（不是 `SettlementComponent` 或 `PartyBase`）。
2. 如果你期望触发村庄联动，`settlement.IsVillage` 必须为 true，且 `settlement.Village.VillageState` 当前不是 `Normal`。
3. 如果你不想触发村庄联动（比如你只想修城墙不想动村庄状态），要么确保目标不是村庄，要么确保加完后完整度不到 1。

vanilla 的唯一调用点是 `VillageHealCampaignBehavior` 的每日 tick（`VillageHealCampaignBehavior.cs:30`）。它每天对每个「是村庄或城镇、完整度小于 1、且当前没有 map event 和 siege event」的据点计算一个恢复量（基础 0.06 加上基于派系强度的加成，受 perk 影响），然后调 `Apply`。

### 坑

- **漏掉民兵 +20**：如果你在 mod 里复制了这个动作的逻辑但只写了 `SettlementHitPoints += percentage`，你会漏掉村庄状态复位和民兵奖励。要么调这个动作，要么把 `ChangeVillageStateAction.ApplyBySettingToNormal` 和 `Militia += 20f` 也补上。
- **负数没有下限**：传 -1 可以把完整度压到 0 以下。虽然游戏逻辑上一般把 0 当「全毁」，但负值可能在某些计算里产生意外结果。
- **村庄联动的触发条件是「大于等于 1」不是「大于 1」**：刚好加到 1.0 也会触发。如果你的恢复量让完整度从 0.95 跳到 1.05，裁剪到 1 后条件成立，联动触发。
- **SettlementHitPoints 的 setter 是 internal**：mod 不能直接写 `settlement.SettlementHitPoints = x`（除非用 Harmony 或反射）。这个动作类是公开的正规入口。

## 关键成员

- `public static void Apply(Settlement settlement, float percentage)`（`IncreaseSettlementHealthAction.cs:18`）— 唯一公开入口。把 `percentage` 加到目标据点的完整度上，裁剪到不超过 1，并在条件满足时复位村庄状态、给民兵 +20。
- `private static void ApplyInternal(Settlement settlement, float percentage)`（`IncreaseSettlementHealthAction.cs:7`）— 实际执行者。`Apply` 直接转发给它，mod 无法调用（private）。内部依次执行：加血、裁剪上限、检查村庄联动条件。

## 真实示例

```csharp
// mod 的战役行为：每天尝试修复被掠夺的村庄
public class VillageRestoreBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickSettlementEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    private void OnDailyTick(Settlement settlement)
    {
        // 只处理被掠夺状态的村庄
        if (settlement.IsVillage && settlement.Village.VillageState == Village.VillageStates.Looted)
        {
            // 修满完整度 → 触发村庄状态复位为 Normal + 民兵 +20
            IncreaseSettlementHealthAction.Apply(settlement, 1f);
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

## 参见

- [ChangeVillageStateAction](../ChangeVillageStateAction) — 本动作在村庄满血时调用的状态复位动作。
- [Settlement](../../campaign/Settlement) — 目标实体，提供 `SettlementHitPoints`、`IsVillage`、`Militia` 等属性。

## 导航

- [本区域目录](../)
- [Settlement](../../campaign/Settlement)
- [ChangeVillageStateAction](../ChangeVillageStateAction)

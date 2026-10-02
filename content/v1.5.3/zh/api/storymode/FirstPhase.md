---
title: "FirstPhase"
description: "收集三块龙旗碎片的第一阶段：计数、发放旗子部件、广播收集事件，最后把它们合成完整龙旗。"
---
# FirstPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode
**Type:** `public class FirstPhase`
**Base:** `System.Object`
**Source:** `bannerlord-1.5.3/StoryMode/StoryModePhases/FirstPhase.cs`

## 概述

`FirstPhase` 是主线教学结束后的第一段：找出两位导师（Istiana / Arzagos）、从他们手里拿到龙旗的三块碎片、合成完整龙旗。它做的事非常少——一个计数器、一个起始时间戳、两件物品操作——真正的剧情由 `StoryMode.Quests.FirstPhase` 下的各个任务驱动，`FirstPhase` 只提供**状态**和**物品结算**。

## 心智模型

它由 `MainStoryLine.CompleteTutorialPhase()` 创建——也就是说**教学一结束它就存在了**，并且立刻被调用一次 `CollectBannerPiece()`（教学结束时白送第一块）。存档时带两个 `[SaveableProperty]`（1 和 2），类型在 [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) 里是 id 9。

`FirstPhaseEndTime` 是纯派生：`CampaignTime.Years(20f) + FirstPhaseStartTime`。也就是说原生给玩家 **20 游戏年**（`FirstPhaseDurationAsYears = 20`）收集三块旗子。这个时限**只读不检查**——没有任何代码在超时后做惩罚，纯属展示与 UI 用。

三块碎片的 id 是三个独立 `ItemObject`，合并后变成第四个 `dragon_banner`：

| 计数 | 物品 id |
| --- | --- |
| 1 | `dragon_banner_center` |
| 2 | `dragon_banner_dragonhead` |
| 3 | `dragon_banner_handle` |
| 合成 | `dragon_banner` |

**坑**：

1. **`CollectBannerPiece()` 没有上限检查**。调第四次会得到 `CollectedBannerPieceCount == 4`，`itemObject` 保持 null（不加物品），但 `OnBannerPieceCollected` 照样广播。`AllPiecesCollected` 用的是 `== 3` 严格相等，所以**第四块之后 `AllPiecesCollected` 变 false**——三块齐了以后再收一块会把 UI 提示关掉。
2. **`MergeDragonBanner()` 无条件从队伍物品栏减 1**。三块碎片不在队伍里（比如被交易掉了）就会减成负数。调用方（`AssembleTheBannerQuest`）负责保证持有。
3. **`MergeDragonBanner` 逐项减、逐项加，没有事务**。中途抛异常会留下物品栏不一致的状态。
4. **`ItemRoster.AddToCounts` 直接打在 `MobileParty.MainParty`**。队伍为 null（理论上不该发生）会 NRE。
5. **`AllPiecesCollected` 用 `==` 不用 `>=`**：见第 1 点。

## 主要成员

- `static FirstPhase Instance { get; }`：转发 `StoryModeManager.Current.MainStoryLine.FirstPhase`。**未解锁第一阶段时为 null**，没有判空。
- `int CollectedBannerPieceCount { get; private set; }`：`[SaveableProperty(1)]`。构造函数置 0。
- `CampaignTime FirstPhaseStartTime { get; private set; }`：`[SaveableProperty(2)]`。构造函数取 `CampaignTime.Now`。
- `CampaignTime FirstPhaseEndTime`：**纯派生**，`StartTime + 20 年`。无实际检查逻辑。
- `bool AllPiecesCollected`：**纯派生**，`CollectedBannerPieceCount == 3`。
- `FirstPhase()`：公开构造函数，`Count = 0`、`StartTime = CampaignTime.Now`。正常流程由 `MainStoryLine` new；手动 new 会得到一个「刚开始」的新阶段。
- `void CollectBannerPiece()`：计数 +1，按新计数发放对应部件到 `MobileParty.MainParty`，第 2、3 次附带场景通知，末尾广播 `StoryModeEvents.OnBannerPieceCollected`。**无上限守卫**。
- `void MergeDragonBanner()`：从队伍减三块碎片、加一个完整 `dragon_banner`。**无持有检查**。
- 常量：`NeededBannerPieceCount = 3`、`FirstPhaseDurationAsYears = 20`。**注意 `AllPiecesCollected` 硬编码 3 而没有用这个常量**——改常量不会改判定。

## 使用示例

```csharp
// 1) 收集一块碎片（AssembleTheBannerQuest 之类的调用方）
FirstPhase phase = StoryModeManager.Current.MainStoryLine.FirstPhase;
phase.CollectBannerPiece();
Debug.Print(phase.CollectedBannerPieceCount); // 1
Debug.Print(phase.AllPiecesCollected);          // False

// 2) 齐了之后合成完整龙旗：先确认碎片真在队伍里，否则减成负数
ItemRoster roster = MobileParty.MainParty.ItemRoster;
EquipmentElement center = new EquipmentElement(
    Campaign.Current.ObjectManager.GetObject<ItemObject>("dragon_banner_center"), null, null, true);
if (roster.GetAmount(center.Item) > 0)
{
    StoryModeManager.Current.MainStoryLine.FirstPhase.MergeDragonBanner();
}

// 3) 读阶段时限做 UI 倒计时（注意原生并不检查它）
FirstPhase p = FirstPhase.Instance;
if (p != null)
{
    Debug.Print("收集期限 " + p.FirstPhaseEndTime + "，还剩 " + (p.FirstPhaseEndTime - CampaignTime.Now));
}

// 4) 教学结束时自动补发第一块（MainStoryLine.CompleteTutorialPhase 内部就做了这句）
StoryModeManager.Current.MainStoryLine.FirstPhase.CollectBannerPiece();
```

## 风险与边界

- **计数可越界**：`CollectBannerPiece` 不检查上限，第 4 次调用会让 `AllPiecesCollected`（`== 3`）变 false。mod 重复发奖时必须自己判 `AllPiecesCollected`。
- **`MergeDragonBanner` 会把物品栏减成负数**：无持有检查、无回滚。战斗 AI 战利品分配、交易、销毁物品都可能让碎片不在队伍里。
- **`FirstPhaseEndTime` 是装饰性的**：没有任何代码在超时后触发失败。别把它当真实倒计时机制。
- **`Instance` 会返回 null**：教学未完成时 `MainStoryLine.FirstPhase` 是 null。用它之前先判。
- **`NeededBannerPieceCount` 是死常量**：`AllPiecesCollected` 硬编码 3。改常量只改文案不改行为。
- **阶段内没有阵营分支**：龙旗收集不区分帝国/反帝国。阵营只在后续的 `SupportKingdomQuest` / `CreateKingdomQuest` 才分流。

## 依赖关系

- [MainStoryLine](../MainStoryLine) — 持有并创建本对象；`CompleteTutorialPhase` 调 `CollectBannerPiece`，`CompleteFirstPhase` 之后 `SecondPhase` 才出现
- [SecondPhase](../SecondPhase) — 本阶段完成后创建的下一阶段
- [StoryModeEvents](../StoryModeEvents) — `CollectBannerPiece` 末尾广播 `OnBannerPieceCollected`
- [StoryModeHeroes](../StoryModeHeroes) — 提供给出碎片的两位导师
- [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) — 给本类型分配存档类型 id 9
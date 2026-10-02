---
title: "ThirdPhase"
description: "主线终局阶段：记录敌对与盟友王国，并在打败阴谋的主任务结算时把整个战役标记为完成。"
---
# ThirdPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode
**Type:** `public class ThirdPhase`
**Base:** `System.Object`
**Source:** `bannerlord-1.5.3/StoryMode/ThirdPhase.cs`

## 概述

`ThirdPhase` 是主线最后一段：阴谋全面爆发后，玩家要打下敌对的几个王国。类本身极简——一个 `IsCompleted` 标志、两组王国列表、四个增删方法、以及一个把主任务结算结果翻译成「活动结束」和「behavior 移除」的 `CompleteThirdPhase`。终局的实际内容在 `StoryMode.Quests.SecondPhase` 的 `DefeatTheConspiracyQuest` 等任务里，`ThirdPhase` 只做**状态记账**。

## 心智模型

它由 `MainStoryLine.CompleteSecondPhase()` 创建（阴谋强度满 2000 之后）。存档类型 id 11，见 [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner)。两个列表用 `[SaveableField]`（1 和 2）且标了 `readonly` —— 存档系统仍能填充它们，但源码里不能重新赋值，只能 `Add` / `Remove`。

两组成员的对称性有缺口，这是最容易看漏的地方：

| 操作 | 盟友列表 | 敌对列表 |
| --- | --- | --- |
| Add | `AddAllyKingdom` | `AddOppositionKingdom` |
| Remove | **没有** | `RemoveOppositionKingdom` |
| 读 | `AllyKingdoms` | `OppositionKingdoms` |

**盟友列表只能加不能减。** 一旦把某个王国标成盟友，终局阶段内无法撤销。

`CompleteThirdPhase(QuestCompleteDetails)` 是终局的唯一收口。它的分支逻辑值得逐字记住：

```text
IsCompleted = true            （无论哪种结局都置位）

Success            → ActivityManager.EndActivity("CompleteMainQuest", Completed)
Timeout/Cancel/Invalid → EndActivity("CompleteMainQuest", Abandoned)
Fail/FailWithBetrayal   → EndActivity("CompleteMainQuest", Failed)

然后：Campaign.Current.CampaignBehaviorManager.RemoveBehavior<ThirdPhaseCampaignBehavior>()
```

注意 **`IsCompleted = true` 在任何结局下都被设置**——包括玩家失败或放弃。所以 `MainStoryLine.IsCompleted` 表达的是「终局阶段已经走完」，不是「玩家赢了」。

**坑**：

1. **失败也算完成**。想在「玩家真正胜利」时做点什么，不能读 `IsCompleted`——得读 `ThirdPhaseCampaignBehavior` 结算时的 `QuestCompleteDetails`。
2. **重复调用 `CompleteThirdPhase` 会重复 `EndActivity`**。活动系统对已结束的活动再调 EndActivity 行为未定义，mod 里要自己加守卫。
3. **两个列表都是 `MBList<Kingdom>` 且 `readonly`**：源码无法重新赋值，只能增删。想整体重置得反射。
4. **没有 null 守卫**：`AddOppositionKingdom(null)` 会把 null 塞进列表，`OppositionKingdoms` 里出现 null 后遍历方容易 NRE。
5. **列表可重复**：同一个王国能 `AddAllyKingdom` 两次。检查成员关系时要用 `Contains` 而不是索引。

## 主要成员

- `static ... Instance`：**本类没有 `Instance` 属性**（`TutorialPhase`、`FirstPhase`、`SecondPhase` 都有）。读终局状态请走 `StoryModeManager.Current.MainStoryLine.ThirdPhase`。
- `bool IsCompleted { get; private set; }`：`[SaveableProperty(3)]`，构造函数置 false，`CompleteThirdPhase` 置 true（任何结局）。
- `MBReadOnlyList<Kingdom> OppositionKingdoms`：`_oppositionKingdoms` 的只读视图，`[SaveableField(1)] readonly MBList<Kingdom>`。
- `MBReadOnlyList<Kingdom> AllyKingdoms`：`_allyKingdoms` 的只读视图，`[SaveableField(2)] readonly MBList<Kingdom>`。
- `ThirdPhase()`：构造函数。两个空 `MBList<Kingdom>`、`IsCompleted = false`。**无副作用**，与 `SecondPhase` 不同。
- `void AddAllyKingdom(Kingdom kingdom)`：加进盟友列表。**无去重、无 null 检查**。
- `void AddOppositionKingdom(Kingdom kingdom)`：加进敌对列表。同上。
- `void RemoveOppositionKingdom(Kingdom kingdom)`：从敌对列表移除。盟友列表无对应方法。

## 使用示例

```csharp
// 1) 第三阶段存在才有意义：先判 null
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
ThirdPhase third = line.ThirdPhase;
if (third != null)
{
    Debug.Print("敌对王国 " + third.OppositionKingdoms.Count + " 个");
    Debug.Print("盟友王国 " + third.AllyKingdoms.Count + " 个");
    Debug.Print("终局已收口 " + third.IsCompleted);
}

// 2) 主任务结算：原生 DefeatTheConspiracyQuestBehavior 就是这么接的
private void OnCampaignQuestCompleted(QuestBase completedQuest, QuestBase.QuestCompleteDetails detail)
{
    if (completedQuest != this && completedQuest is DefeatTheConspiracyQuestBehavior.DefeatTheConspiracyQuest)
    {
        StoryModeManager.Current.MainStoryLine.ThirdPhase.CompleteThirdPhase(detail);
        // detail == Success 时才会 EndActivity("CompleteMainQuest", Completed)
    }
}

// 3) 招募盟友：注意没有 RemoveAllyKingdom，加进去就撤不回
StoryModeManager.Current.MainStoryLine.ThirdPhase.AddAllyKingdom(StoryModeData.BattaniaKingdom);
StoryModeManager.Current.MainStoryLine.ThirdPhase.AddOppositionKingdom(StoryModeData.KhuzaitKingdom);
```

## 风险与边界

- **「完成」不等于「胜利」**：`IsCompleted` 在失败、超时、取消时同样为 true。判断真实结局必须看结算枚举。
- **盟友不可撤销**：只有 `RemoveOppositionKingdom`，没有 `RemoveAllyKingdom`。
- **列表无去重无 null 检查**：可能塞入重复项或 null。
- **`RemoveBehavior<ThirdPhaseCampaignBehavior>()` 在方法末尾无条件执行**：即使 `EndActivity` 抛异常也不会走到这行（异常会中断），behavior 会泄漏在战役里。
- **没有 `Instance` 快捷属性**：写 `ThirdPhase.Instance` 编译不过。走 `MainStoryLine.ThirdPhase`。
- **阶段对象本身永不置空**：主线打完 `ThirdPhase` 仍在，只是 `IsCompleted` 变 true。别用「非 null」当「进行中」的判据。

## 依赖关系

- [MainStoryLine](../MainStoryLine) — 持有并创建本对象；`IsCompleted` 属性委托到这里判断主线是否完成
- [SecondPhase](../SecondPhase) — 阴谋强度满后调 `CompleteSecondPhase` 创建本阶段
- [StoryModeSubModule](../StoryModeSubModule) — 注册 `ThirdPhaseCampaignBehavior`，它在阶段结束后被移除
- [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) — 给本类型分配存档类型 id 11
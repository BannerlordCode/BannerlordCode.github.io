---
title: "ThirdPhase"
description: "主线终局阶段：记录敌对与盟友王国，并在打败阴谋的主任务结算时把整个战役标记为完成。"
---
# ThirdPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode
**Type:** `public class ThirdPhase`
**Base:** `System.Object`
**Source:** `bannerlord-1.5.3/StoryMode/StoryModePhases/ThirdPhase.cs`

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

## 怎么用

### 怎么拿到它

`public class ThirdPhase` 声明在 `bannerlord-1.5.3/StoryMode/StoryModePhases/ThirdPhase.cs:12`，全文 124 行。

**本类没有 `Instance` 属性**——`TutorialPhase`、`FirstPhase`、`SecondPhase` 都有，它没有。唯一读法是走 `StoryModeManager.Current.MainStoryLine.ThirdPhase`，而它在第二阶段完成前是 null（靠 `[SaveableProperty(5)]` 存在，`MainStoryLine.cs:68`）。

唯一的创建者是 `MainStoryLine.CompleteSecondPhase()` 里的 `this.ThirdPhase = new ThirdPhase();`（`MainStoryLine.cs:181`），紧随其后就是 `StoryModeEvents.Instance.OnConspiracyActivated();`（`MainStoryLine.cs:182`）和 `RemoveBehavior<SecondPhaseCampaignBehavior>()`（`:183`）。

构造函数 `public ThirdPhase()`（`:72`）只建两个空 `MBList<Kingdom>`（`:74`→`:75`）并把 `IsCompleted` 置 false（`:76`）。

四个改状态的方法：`AddAllyKingdom(Kingdom kingdom)`（`:80`）、`AddOppositionKingdom(Kingdom kingdom)`（`:86`）、`RemoveOppositionKingdom(Kingdom kingdom)`（`:92`）——注意**没有 `RemoveAllyKingdom`**，盟友只能加不能删。两个列表都是 `private readonly MBList<Kingdom>`（`:117`→`:118`、`:121`→`:122`），对外只暴露只读视图 `OppositionKingdoms`（`:53`→`:57`）和 `AllyKingdoms`（`:63`→`:67`）。

`CompleteThirdPhase(QuestBase.QuestCompleteDetails defeatTheConspiracyQuestCompleteDetail)`（`:98`）**第一句就是 `this.IsCompleted = true;`（`:100`），在判断结算细节之前**。之后按细节分派 `ActivityManager.EndActivity("CompleteMainQuest", ...)`：`Success` → `ActivityOutcome.Completed`（`:101`→`:103`）；`Timeout`/`Cancel`/`Invalid` → `Abandoned`（`:105`→`:107`）；`Fail`/`FailWithBetrayal` → `Failed`（`:109`→`:111`）。最后**无条件** `Campaign.Current.CampaignBehaviorManager.RemoveBehavior<ThirdPhaseCampaignBehavior>();`（`:113`）。

存档只有 `IsCompleted`（`[SaveableProperty(3)]`，`:48`），两个王国列表用 `[SaveableField(1)]`/`[SaveableField(2)]`（`:117`、`:121`）。

### 典型用法

```csharp
// 唯一读法：SecondPhase 未完成则 null
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
ThirdPhase third = line.ThirdPhase;
if (third == null)
{
    Debug.Print("终局阶段未开始");
    return;
}

Debug.Print("已完成=" + third.IsCompleted);
Debug.Print("敌对王国=" + third.OppositionKingdoms.Count + "，盟友=" + third.AllyKingdoms.Count);

// 登记关系：这两个方法由剧情流程调用，mod 可复用
third.AddOppositionKingdom(StoryModeData.BattaniaKingdom);
third.AddAllyKingdom(StoryModeData.SturgiaKingdom);

// 只读视图：只能读，不能 Add（MBReadOnlyList）
foreach (Kingdom k in third.OppositionKingdoms)
{
    Debug.Print("敌对：" + k.StringId + " 可被废除=" + !third.OppositionKingdoms.Contains(k));
}

// 结算：注意 IsCompleted 无条件为 true，结局信息只在 ActivityManager 里
third.CompleteThirdPhase(QuestBase.QuestCompleteDetails.Success);
```

### 最容易踩的坑

`IsCompleted = true` 在 `CompleteThirdPhase` 的**第一句**（`:100`），先于对 `defeatTheConspiracyQuestCompleteDetail` 的任何分支。所以**任务失败、超时、取消、无效结算一律把第三阶段标记为完成**——`MainStoryLine.IsCompleted`（`MainStoryLine.cs:79`→`:83`）随之变 true，而它正是 `StoryModeSubModule.AddBehaviors`（`StoryModeSubModule.cs:60`）决定是否还注册四个阶段行为的那个条件。想区分「真胜利」只能自己读 `ThirdPhaseCampaignBehavior` 结算时传进来的那个 `QuestCompleteDetails`，或者去查 `ActivityManager` 的结局。

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
---
title: "SecondPhase"
description: "反帝国阴谋阶段：一个浮动的阴谋强度值、一支敌对氏族，以及无限循环刷新的阴谋任务。"
---
# SecondPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode
**Type:** `public class SecondPhase`
**Base:** `System.Object`
**Source:** `bannerlord-1.5.3/StoryMode/StoryModePhases/SecondPhase.cs`

## 概述

`SecondPhase` 是主线的中段：玩家扶植的王国背后冒出一个「阴谋」势力，它有自己的氏族、自己的部队、不断刷新的破坏任务。玩家可以通过完成任务把阴谋强度往下压，压不住就一路涨到 `MaxConspiracyStrength = 2000`，此时阴谋全面爆发，转入终局阶段。这个类就是那个「强度值」的持有者，外加一个随阵营变化生成的阴谋氏族。

## 心智模型

它由 `MainStoryLine.CompleteFirstPhase()` 创建（第一阶段结束、集齐三块旗子之后）。存档类型 id 10（见 [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner)），三个 `[SaveableProperty]`：`LastConspiracyQuestCreationTime`(1)、`ConspiracyStrength`(5)、`ConspiracyClan`(6)。

**构造函数做的事比其它阶段多得多**：

```text
LastConspiracyQuestCreationTime = CampaignTime.Never
ConspiracyStrength              = 1000f
_stopConspiracyAttempts         = 0
_lastConspiracyQuest            = null
InitializeConspiracyQuestTypes()      → 三种阴谋任务类型的 MBList<Type>
SetTransferableOfConspiracyTroops()   → 把阴谋部队在队伍界面里设为不可转移
CreateConspiracyClan()                → 新建氏族 + 对敌对王国宣战
```

也就是说**创建第二阶段这个动作本身就带副作用**：会改 `SetTransferableInPartyScreen(false)` 若干单位，会向所有敌对王国宣战。所以重复执行构造函数不是幂等的。

`OnSessionLaunched()` 会把 `InitializeConspiracyQuestTypes` 和 `SetTransferableOfConspiracyTroops` **再跑一遍**（读档后恢复），但**不会**重跑 `CreateConspiracyClan`——氏族是从存档字段恢复的。

强度机制：

- 起点 1000，上限 2000（`MaxConspiracyStrength`）。
- `IncreaseConspiracyStrength()` 每次 **+2.777777f**（`DailyConspiracyChange`），到 2000 封顶后调 `ActivateConspiracy()` → `MainStoryLine.CompleteSecondPhase()`。
- `DecreaseConspiracyStrength(float amount)` 直接减，**不判下限**，可以减成负数。

**坑**：

1. **`DecreaseConspiracyStrength` 无下限保护**。减成负数后 `ConspiracyStrength` 会一直挂着负值直到涨回 0。想彻底阻止阴谋就别靠调低强度，要用任务逻辑去 block。
2. **`IncreaseConspiracyStrength` 封顶后每次都会再调 `ActivateConspiracy()`**。如果外部没把 `SecondPhase` 从 `MainStoryLine` 换掉（比如 `CompleteSecondPhase` 被反复调），会重复触发第三阶段创建。原生靠 `ThirdPhaseCampaignBehavior` 的移除来止损。
3. **`CreateNextConspiracyQuest` 靠反射构造任务**：`Activator.CreateInstance(type, "conspiracy_quest_" + 次数, 导师Hero)`。任务 id 是**运行时生成**的，不在任何存档表里——旧存档里存的是 `_lastConspiracyQuest` 对象引用，id 由存档系统解析回来。
4. **`_stopConspiracyAttempts` 字段名与语义相反**：它实际是「已生成阴谋任务的次数」，每 `CreateNextConspiracyQuest` 加一，同时用作任务 id 后缀。
5. **`CreateConspiracyClan` 硬编码了阵营分支**：按 `IsOnImperialQuestLine` 决定氏族叫 Valdros 还是 Zarvethi、文化取 battania 还是 empire、旗色与图案字串不同。它同时对**所有**敌对王国宣战，没有上限。
6. **任务类型不允许连续重复**：`_conspiracyQuestTypes.GetRandomElementWithPredicate<Type>(t => t != _lastConspiracyQuest.GetType())`。只有三种类型，所以两次不会撞同一个。

## 主要成员

- `static SecondPhase Instance { get; }`：转发 `StoryModeManager.Current.MainStoryLine.SecondPhase`。**第一阶段未完成时为 null**。
- `CampaignTime LastConspiracyQuestCreationTime { get; private set; }`：`[SaveableProperty(1)]`，初始 `CampaignTime.Never`，每次 `TriggerConspiracy` 置 `Now`。
- `float ConspiracyStrength { get; private set; }`：`[SaveableProperty(5)]`，初始 1000，上限 2000。
- `Clan ConspiracyClan { get; private set; }`：`[SaveableProperty(6)]`，构造函数里创建。任务宣战的目标。
- `SecondPhase()`：**有副作用的构造函数**，见上文心智模型。
- `void OnSessionLaunched()`：读档后恢复任务类型表与不可转移标记。
- `void TriggerConspiracy()`：置 `LastConspiracyQuestCreationTime = Now`；若这是第一个任务，弹「阴谋开始」场景通知。
- `void IncreaseConspiracyStrength()`：+2.777777f，封顶 2000，满则 `ActivateConspiracy()`。
- `void DecreaseConspiracyStrength(float amount)`：直接减，**无下限**。
- `void ActivateConspiracy()`：转调 `MainStoryLine.CompleteSecondPhase()`。
- `void CreateNextConspiracyQuest()`：从三种任务类型里随机挑一个（不与上一个重复），用 `Activator.CreateInstance` 造出来，`StartQuest()`，`TriggerConspiracy()`。
- `void CreateConspiracyClan()`：建氏族、定名/文化/旗色、对敌对王国宣战。**构造函数与它有副作用冲突**，正常流程别重复调。
- 常量：`MaxConspiracyStrength = 2000`、`DailyConspiracyChange = 2.777777f`、`ConspiracyQuestDurationAsDays = 21`（**注意源码里没有任何地方用这个常量**，只是声明）。

## 使用示例

```csharp
// 1) 每日推进阴谋强度：到 2000 自动转第三阶段
SecondPhase second = StoryModeManager.Current.MainStoryLine.SecondPhase;
if (second != null && second.ConspiracyStrength < SecondPhase.MaxConspiracyStrength)
{
    second.IncreaseConspiracyStrength();
}

// 2) 压低强度：玩家完成了破坏阴谋的任务
SecondPhase phase = StoryModeManager.Current.MainStoryLine.SecondPhase;
if (phase != null)
{
    phase.DecreaseConspiracyStrength(50f);   // 注意没有下限保护
}

// 3) 生成下一个阴谋任务：走业务入口，不要自己 Activator.CreateInstance
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
if (line.SecondPhase != null)
{
    line.SecondPhase.CreateNextConspiracyQuest();
    Debug.Print("当前阴谋任务给自 " + line.SecondPhase.ConspiracyClan.Name);
}

// 4) 按派系选导师（CreateNextConspiracyQuest 内部就是这么选的）
MainStoryLine l = StoryModeManager.Current.MainStoryLine;
Hero mentor = l.IsOnAntiImperialQuestLine
    ? StoryModeHeroes.AntiImperialMentor
    : StoryModeHeroes.ImperialMentor;
```

## 风险与边界

- **强度无下限**：`DecreaseConspiracyStrength` 可以把值减成负数并长期挂着。做「阴谋暂停」要用任务逻辑，不要靠调数值。
- **构造函数有副作用**：重复 `new SecondPhase()` 会重复禁转移单位、重复宣战、重复建氏族。读档走的是反序列化路径所以安全；手动 new 不安全。
- **`IncreaseConspiracyStrength` 会自动推进主线**：涨满就调 `CompleteSecondPhase()`。想压制但不希望推进时，必须保证 `ConspiracyStrength < 2000` 恒成立，而不是靠「少调几次」。
- **运行时生成的任务 id**：`"conspiracy_quest_" + n` 不在任何 `SaveableTypeDefiner` 表里。跨存档版本回放时若 id 冲突，`_lastConspiracyQuest` 引用会解析到错误对象。
- **`ConspiracyQuestDurationAsDays = 21` 未被使用**：别假设阴谋任务有 21 天时限。
- **宣战不可逆**：`CreateConspiracyClan` 对所有敌对王国宣战，没有撤战路径。`MainStoryLine.CancelSecondAndThirdPhase()` 也只摘 behavior，不撤战。
- **`OnSessionLaunched` 与构造函数不同步**：它不重跑 `CreateConspiracyClan`。如果你指望读档后氏族被刷新，那是错的——它从存档字段来。

## 依赖关系

- [MainStoryLine](../MainStoryLine) — 持有并创建本对象；`CompleteSecondPhase` / `ActivateConspiracy` 的实际落点
- [ThirdPhase](../ThirdPhase) — 阴谋强度满后创建的终局阶段
- [FirstPhase](../FirstPhase) — 本阶段的前置阶段
- [StoryModeData](../StoryModeData) — `CreateConspiracyClan` 用 `IsKingdomImperial` 决定向谁宣战
- [StoryModeHeroes](../StoryModeHeroes) — 提供发布阴谋任务的两位导师
- [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) — 给本类型分配存档类型 id 10
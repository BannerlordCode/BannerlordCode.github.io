---
title: "AiBehavior"
description: "大地图队伍 AI 的行动意图枚举：MobileParty 用 DefaultBehavior（长期意图，如围城/劫掠/护送）与 ShortTermBehavior（当前执行动作，如 FleeToPoint）两个寄存器存它，由 SetMove* 系列、SetPartyAiAction 静态助手或 AiPartyThinkBehavior/MobilePartyAIModel 评分产出，被移动、遭遇、军团、时间控制等系统广泛读取。"
---
# AiBehavior

**命名空间：** `TaleWorlds.CampaignSystem.Party`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum AiBehavior`  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/AiBehavior.cs`（24 行）

## 概述

`AiBehavior` 是整个文件里唯一的类型——`AiBehavior.cs` 只有 24 行，第 1 行是 `namespace TaleWorlds.CampaignSystem.Party;`，第 3 行是声明 `public enum AiBehavior`（`AiBehavior.cs:3`），第 5–23 行是 19 个成员。它描述的是**一支 `MobileParty` 在大地图上「想做什么」**，是战役层队伍 AI 的意图词表。

19 个成员全部列出（数值即声明顺序，`Hold` = 0）：

| 成员 | 值 | 行 | 这个值代表什么 |
|------|----|----|----------------|
| `Hold` | 0 | `AiBehavior.cs:5` | 原地待命。也是 `default(AiBehavior)` 的落点 |
| `None` | 1 | `AiBehavior.cs:6` | 无意图（不是「默认」，见坑） |
| `GoToSettlement` | 2 | `AiBehavior.cs:7` | 前往某聚落 |
| `AssaultSettlement` | 3 | `AiBehavior.cs:8` | 强攻聚落 |
| `RaidSettlement` | 4 | `AiBehavior.cs:9` | 劫掠聚落（村庄） |
| `BesiegeSettlement` | 5 | `AiBehavior.cs:10` | 围城 |
| `EngageParty` | 6 | `AiBehavior.cs:11` | 追击/交战某队伍 |
| `JoinParty` | 7 | `AiBehavior.cs:12` | 加入某队伍（**无任何写入点**，见坑） |
| `GoAroundParty` | 8 | `AiBehavior.cs:13` | 绕开某队伍 |
| `GoToPoint` | 9 | `AiBehavior.cs:14` | 前往任意地图坐标 |
| `FleeToPoint` | 10 | `AiBehavior.cs:15` | 逃向坐标 |
| `FleeToGate` | 11 | `AiBehavior.cs:16` | 逃向聚落城门 |
| `FleeToParty` | 12 | `AiBehavior.cs:17` | 逃向友方队伍 |
| `PatrolAroundPoint` | 13 | `AiBehavior.cs:18` | 在坐标周围巡逻 |
| `EscortParty` | 14 | `AiBehavior.cs:19` | 护送某队伍 |
| `DefendSettlement` | 15 | `AiBehavior.cs:20` | 防守某聚落 |
| `DoOperation` | 16 | `AiBehavior.cs:21` | 执行某个「操作」（**只剩一条断言路径**，见坑） |
| `MoveToNearestLandOrPort` | 17 | `AiBehavior.cs:22` | 驶向最近的陆地/港口（海上脱困） |
| `NumAiBehaviors` | 18 | `AiBehavior.cs:23` | 哨兵值，全树无引用 |

关键结构是**双寄存器**：`MobileParty` 同时持有 `DefaultBehavior`（长期意图，`MobileParty.cs:745`）与 `ShortTermBehavior`（当前这一小段的执行动作，`MobileParty.cs:440`）。`AiBehavior` 同时服务这两个寄存器，同一个值在两个寄存器里的语义一致，但**生命周期不同**：`DefaultBehavior` 由指令/AI 决策写入，`ShortTermBehavior` 由执行层（逃逸、绕行、到达后转 `GoToPoint` 等）频繁改写。

## 心智模型

把它理解成**队伍头上的两块路牌**：一块写着「我要去哪、要干什么」（`DefaultBehavior`），另一块写着「这一秒我具体在做什么动作」（`ShortTermBehavior`）。`AiBehavior` 是这两块路牌共用的词汇表。

**谁产生它——三条来源，汇入两个寄存器。**

1. **脚本化指令（最常用，也是 mod 的入口）。** `MobileParty` 上有一整套 `SetMove*` 公开方法直接写 `DefaultBehavior`：`SetMoveModeHold`（`MobileParty.cs:3920`）、`SetMoveEngageParty`（`MobileParty.cs:3932`）、`SetMoveGoAroundParty`（`MobileParty.cs:3941`）、`SetMoveGoToSettlement`（`MobileParty.cs:3950`）、`SetMoveGoToPoint`（`MobileParty.cs:3960`）、`SetMoveToNearestLand`（`MobileParty.cs:3970`）、`SetMoveGoToInteractablePoint`（`MobileParty.cs:3981`）、`SetMoveEscortParty`（`MobileParty.cs:3991`）、`SetMovePatrolAroundPoint`（`MobileParty.cs:4004`）、`SetMovePatrolAroundSettlement`（`MobileParty.cs:4013`）、`SetMoveRaidSettlement`（`MobileParty.cs:4019`）、`SetMoveBesiegeSettlement`（`MobileParty.cs:4029`）、`SetMoveDefendSettlement`（`MobileParty.cs:4041`）。`SetPartyAiAction` 里那一排 `GetActionFor*` 静态方法（`SetPartyAiAction.cs:146`–`SetPartyAiAction.cs:191`）是对它们的带幂等检查的封装（例如 `SetPartyAiAction.cs:27` 先比较 `owner.DefaultBehavior != AiBehavior.GoToSettlement`）。

2. **AI 决策。** 每个 AI 行为（`Ai*Behavior` 系列，例如 `AiArmyMemberBehavior.cs:86` 产出 `EscortParty`、`AIMoveToNearestLandBehavior.cs:47` 产出 `MoveToNearestLandOrPort`）在小时 tick 里给候选 `AIBehaviorData` 打分；`AIBehaviorData` 结构把「目标 + 行为种类 + 导航方式」打包（`AIBehaviorData.cs:7`，行为字段在 `AIBehaviorData.cs:15`，构造在 `AIBehaviorData.cs:25`）。`MobilePartyAi.GetBehaviors`（`MobilePartyAi.cs:477`）先以 `_mobileParty.DefaultBehavior` 为基线（`MobilePartyAi.cs:479`），再让 `MobilePartyAIModel.GetBestInitiativeBehavior`（`MobilePartyAIModel.cs:42`，默认实现 `DefaultMobilePartyAIModel.cs:105`）覆盖，最后 `SetAiBehavior`（`MobilePartyAi.cs:1405`）落到 `_mobileParty.SetShortTermBehavior(newAiBehavior, interactablePoint)`（`MobilePartyAi.cs:1407`）。`GetBestInitiativeBehavior` 的初始值是 `AiBehavior.None`（`DefaultMobilePartyAIModel.cs:110`），所以「没有更高分候选」时不会产生新意图。

3. **存档/兼容。** 老存档用 `InitializePartyForOldSave`（`MobileParty.cs:2686`）直接写私有字段 `_defaultBehavior`（`MobileParty.cs:2688`）；`MobilePartyAi` 的反序列化路径把缺省值定为 `AiBehavior.Hold`（`MobilePartyAi.cs:362`），并在 `PreAfterLoad`（`MobilePartyAi.cs:292`）里把 v1.3.0 之前的 `FleeToGate` 迁移成重新计算的逃逸行为（`MobilePartyAi.cs:295`）。

**写入 `DefaultBehavior` 会立刻触发重算。** 它的 setter 是私有的（`MobileParty.cs:751`），一旦变化就置 `Ai.DefaultBehaviorNeedsUpdate = true`（`MobileParty.cs:756`）并调用 `RecalculateShortTermBehavior()`（`MobileParty.cs:757`）。而 `RecalculateShortTermBehavior`（`MobileParty.cs:2863`）只处理一个子集：`RaidSettlement`（`MobileParty.cs:2865`）、`BesiegeSettlement`（`MobileParty.cs:2869`）、`GoToSettlement`（`MobileParty.cs:2873`）、`EngageParty`（`MobileParty.cs:2877`）、`DefendSettlement`（`MobileParty.cs:2881`，转成 `GoToPoint`）、`EscortParty`（`MobileParty.cs:2885`）、`GoToPoint`（`MobileParty.cs:2889`）、`MoveToNearestLandOrPort`（`MobileParty.cs:2893`，转成 `GoToPoint`）、`None`（`MobileParty.cs:2897`，直接 `ShortTermBehavior = AiBehavior.None`，`MobileParty.cs:2899`）。**其余取值（`Hold`、`AssaultSettlement`、`GoAroundParty`、`PatrolAroundPoint`、`JoinParty`、`FleeTo*`、`DoOperation`）不会在这里被翻译**——它们要么由执行层另行设置，要么就停在旧值。

**谁读它——读取点极多，且常常同时看两块路牌。**

- 移动目标计算：`MobileParty.cs:2140` 的 `switch (DefaultBehavior)` 决定 `MoveTargetPoint`（`Hold` 用自身位置，见 `MobileParty.cs:2142`；`GoToSettlement`/`AssaultSettlement`/`RaidSettlement`/`BesiegeSettlement` 用目标聚落，见 `MobileParty.cs:2145`；`EngageParty`/`JoinParty`/`EscortParty` 用目标队伍，见 `MobileParty.cs:2151`；`GoAroundParty` 用 `Ai.AiBehaviorPartyBase.Position`，见 `MobileParty.cs:2156`）。
- 状态谓词：`IsEngaging`（`MobileParty.cs:1166`）、`IsCurrentlyEngagingParty`（`MobileParty.cs:1186`）、`IsFleeBehavior`（`MobileParty.cs:2916`，`FleeToPoint`/`FleeToGate`/`FleeToParty` 三个里任一即真，见 `MobileParty.cs:2918`、`MobileParty.cs:2920`）、`IsFleeing`（`MobileParty.cs:2925`，先看 `ShortTermBehavior` 再看 `DefaultBehavior`）。
- 遭遇判定：`EncounterManager.cs:38`、`EncounterManager.cs:102`、`EncounterManager.cs:244`、`EncounterManager.cs:289`。
- 军团：`Army.cs:446` 与 `Army.cs:562` 两处 `switch`；`Army.cs:310`、`Army.cs:362` 检查 `BesiegeSettlement`。
- 外交/势力：`FactionHelper.cs:307`、`FactionHelper.cs:348`。
- 时间控制：`Campaign.cs:919`——主队 `DefaultBehavior == AiBehavior.Hold` 是「暂停/停止」条件之一。
- 解散逻辑：`DisbandPartyCampaignBehavior.cs:205` 检查 `Hold`。
- 文本显示：`MobileParty.cs:2476` 起那一大段 `DefaultBehavior`/`ShortTermBehavior` 混合判断，决定地图上显示「Patrolling.」「Going to a point.」等提示。

**一句话总结设计意图：** `DefaultBehavior` 回答「战略目标」，`ShortTermBehavior` 回答「战术执行」；`AiBehavior` 同时是两者的值域，而 `AIBehaviorData` 是 AI 层提出候选、再由 `MobilePartyAi` 落地的传输格式。

## 怎么用

### 怎么拿到

- **源树路径：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/AiBehavior.cs`（共 24 行）
- **声明处：** `AiBehavior.cs:3`（`public enum AiBehavior`），19 个取值在 `AiBehavior.cs:5`–`AiBehavior.cs:23`。
- **读入口：** `mobileParty.DefaultBehavior`（`MobileParty.cs:745`）与 `mobileParty.ShortTermBehavior`（`MobileParty.cs:440`）。两者都是 `MobileParty` 的公开属性。
- **写入口：** 只能走 `MobileParty.SetMove*` 系列（`MobileParty.cs:3920`–`MobileParty.cs:4041`）或 `SetPartyAiAction.GetActionFor*`（`SetPartyAiAction.cs:146`–`SetPartyAiAction.cs:191`）。`DefaultBehavior` 的 setter 是 `private`（`MobileParty.cs:751`），`ShortTermBehavior` 是 `internal set`（`MobileParty.cs:440`），`SetShortTermBehavior` 是 `internal`（`MobileParty.cs:2903`）——**程序集外直接赋值/直调都不行**。
- **AI 入口：** 想改变「AI 自己怎么选」，实现自定义 `MobilePartyAIModel` 并覆写 `GetBestInitiativeBehavior`（`MobilePartyAIModel.cs:42`）；想追加候选，像 `AIMoveToNearestLandBehavior.cs:47` 那样往 `PartyThinkParams` 里 `AddBehaviorScore` 一条 `AIBehaviorData`。
- **取行为实例：** `mobileParty.Ai` 是 `MobilePartyAi`（例如 `MobilePartyAi.cs:157` 的 `AiBehaviorPartyBase`）；AI 决策的最终落地在私有的 `SetAiBehavior`（`MobilePartyAi.cs:1405`），外部只能观察结果。

### 典型用法

- **给队伍下护送令：** `party.SetMoveEscortParty(targetParty, MobileParty.NavigationType.Default, isTargetingPort: false)`（`MobileParty.cs:3991`）。
- **让队伍原地待命：** `party.SetMoveModeHold()`（`MobileParty.cs:3920`），内部写 `DefaultBehavior = AiBehavior.Hold`（`MobileParty.cs:3923`）。
- **读当前战略意图：** `party.DefaultBehavior`（`MobileParty.cs:745`）。
- **判断是否在逃跑：** `MobileParty.IsFleeBehavior(party.ShortTermBehavior)`（`MobileParty.cs:2916`），或 `party.IsFleeing()`（`MobileParty.cs:2925`）。
- **判断是否在交战：** `party.IsEngaging`（`MobileParty.cs:1166`）。
- **带幂等地发指令：** 用 `SetPartyAiAction.GetActionForVisitingSettlement`（`SetPartyAiAction.cs:146`）等封装，它们会先比较当前 `DefaultBehavior`（例如 `SetPartyAiAction.cs:27`）避免重复触发。
- **自定义 AI 候选：** 新建 `AIBehaviorData(party, AiBehavior.GoAroundParty, MobileParty.NavigationType.Default, willGatherArmy: false, isFromPort: false, isTargetingPort: false)`（构造签名见 `AIBehaviorData.cs:25`），配上分数交给 `PartyThinkParams`。
- **想知道「这一帧 AI 是否被要求重算」：** 读 `mobileParty.Ai.DefaultBehaviorNeedsUpdate`（`MobilePartyAi.cs:101`），它在 `DefaultBehavior` 变化时被置位（`MobileParty.cs:756`）。

### 坑

- **`default(AiBehavior)` 是 `Hold`，不是 `None`。** `Hold` 是第一个成员（`AiBehavior.cs:5`），值为 0。任何未初始化的 `AiBehavior` 字段都会读成「原地待命」。老存档缺省值也刻意选了 `Hold`（`MobilePartyAi.cs:362`）。
- **`None` 不是「默认值」。** 它的语义是「无意图」，由 `ResetAllMovementParameters`（`MobileParty.cs:3910`）写入（`MobileParty.cs:3914`、`MobileParty.cs:3915`），也被 `AIBehaviorData.Invalid` 使用（`AIBehaviorData.cs:89`）。把它和 `Hold` 混用会导致「队伍突然原地不动」或「该动的不动」。
- **`JoinParty` 没有任何写入点。** 全树搜索 `AiBehavior.JoinParty` 只有两处，且都是**读取**：`MobileParty.cs:2152`（`switch` 分支）与 `MobilePartyAi.cs:610`（条件判断）。没有任何代码把某个队伍的 `DefaultBehavior`/`ShortTermBehavior` 设成它。它是遗留值。
- **`DoOperation` 只剩一条断言路径。** 唯一的读取点是 `MobilePartyAi.cs:640`，而那个分支紧接着就是 `Debug.FailedAssert("DoOperation", ...)`（`MobilePartyAi.cs:642`）。也就是说它一旦真被命中就会报断言失败——等价于死值。
- **`NumAiBehaviors` 无引用。** 全树搜索只有 `AiBehavior.cs:23` 一处。不要拿它当数组长度（虽然值是 18，但它并不是任何东西的计数上界）。
- **`SetMove*` 与 `ShortTermBehavior` 的关系不是「立刻等价」。** 写入 `DefaultBehavior` 会触发 `RecalculateShortTermBehavior()`（`MobileParty.cs:757`），而该方法只覆盖 9 种取值（`MobileParty.cs:2865`–`MobileParty.cs:2899`）。写 `AssaultSettlement`、`GoAroundParty`、`PatrolAroundPoint`、`Hold` 等值时，`ShortTermBehavior` 保持不变——所以要判断「实际在做什么」必须读 `ShortTermBehavior`，不能只看 `DefaultBehavior`。
- **`RecalculateShortTermBehavior` 会把 `DefendSettlement` 和 `MoveToNearestLandOrPort` 都变成 `GoToPoint`。** 见 `MobileParty.cs:2881`、`MobileParty.cs:2893`。因此 `ShortTermBehavior == GoToPoint` 并不代表「战略目标是去某个点」。
- **程序集外不能直接写寄存器。** `DefaultBehavior` 是 `private set`（`MobileParty.cs:751`），`ShortTermBehavior` 是 `internal set`（`MobileParty.cs:440`），`SetShortTermBehavior` 是 `internal`（`MobileParty.cs:2903`）。用 `SetMove*`，否则编译不过。
- **读行为时经常要两块路牌一起看。** 例如 `EncounterManager.cs:289` 同时比较 `ShortTermBehavior` 的 `GoToSettlement`/`FleeToGate`；`MobileParty.cs:2476` 的文本逻辑先看 `DefaultBehavior == Hold || ShortTermBehavior == Hold`。只看一块会得出错误结论。
- **存档兼容路径会静默改写。** `MobilePartyAi.PreAfterLoad`（`MobilePartyAi.cs:292`）在载入 v1.3.0 之前的存档时，会把 `FleeToGate` 换成重新计算出来的行为（`MobilePartyAi.cs:295`）。跨版本读 `ShortTermBehavior` 时要注意这个迁移。

## 关键成员

### `Hold`（`AiBehavior.cs:5`）
「原地待命」。写入者：`SetMoveModeHold`（`MobileParty.cs:3920`、`MobileParty.cs:3923`）、老存档缺省（`MobilePartyAi.cs:362`）。读取者：移动目标计算（`MobileParty.cs:2142`）、时间控制暂停条件（`Campaign.cs:919`）、解散逻辑（`DisbandPartyCampaignBehavior.cs:205`）。也是 `default(AiBehavior)`。

### `None`（`AiBehavior.cs:6`）
「无意图」。写入者：`ResetAllMovementParameters`（`MobileParty.cs:3914`）、`AIBehaviorData.Invalid`（`AIBehaviorData.cs:89`）、`GetBestInitiativeBehavior` 初值（`DefaultMobilePartyAIModel.cs:110`）。读取者：`RecalculateShortTermBehavior` 的收尾分支（`MobileParty.cs:2897`、`MobileParty.cs:2899`）、`AiPartyThinkBehavior` 的候选过滤（`AiPartyThinkBehavior.cs:196`）。

### `GoToSettlement`（`AiBehavior.cs:7`）
「前往某聚落」。写入者：`SetMoveGoToSettlement`（`MobileParty.cs:3950`、`MobileParty.cs:3957`）、`SetPartyAiAction.GetActionForVisitingSettlement`（`SetPartyAiAction.cs:146`）。读取者：`MobileParty.cs:2145`、`EncounterManager.cs:289`、`Army.cs:571`。

### `AssaultSettlement`（`AiBehavior.cs:8`）
「强攻聚落」。写入者：`MobilePartyAi.GetBesiegeBehavior` 在可以立刻开打时写 `ShortTermBehavior`（`MobilePartyAi.cs:717`）。读取者：`EncounterManager.cs:102`、`EncounterManager.cs:244`、`Army.cs:455`、`MobileParty.cs:2146`。

### `RaidSettlement`（`AiBehavior.cs:9`）
「劫掠聚落」。写入者：`SetMoveRaidSettlement`（`MobileParty.cs:4019`、`MobileParty.cs:4026`）、`SetPartyAiAction.GetActionForRaidingSettlement`（`SetPartyAiAction.cs:161`）。读取者：`RecalculateShortTermBehavior`（`MobileParty.cs:2865`）、`KingdomManager.cs:218`。

### `BesiegeSettlement`（`AiBehavior.cs:10`）
「围城」。写入者：`SetMoveBesiegeSettlement`（`MobileParty.cs:4029`、`MobileParty.cs:4038`）、`SetPartyAiAction.GetActionForBesiegingSettlement`（`SetPartyAiAction.cs:166`）。读取者：`Army.cs:310`、`Army.cs:362`、`MobileParty.cs:2869`。

### `EngageParty`（`AiBehavior.cs:11`）
「追击/交战某队伍」。写入者：`SetMoveEngageParty`（`MobileParty.cs:3932`、`MobileParty.cs:3938`）、`SetPartyAiAction.GetActionForEngagingParty`（`SetPartyAiAction.cs:171`）。读取者：`IsEngaging`（`MobileParty.cs:1166`）、`IsCurrentlyEngagingParty`（`MobileParty.cs:1186`）、`MobileParty.cs:2151`、`FactionHelper.cs:348`。

### `JoinParty`（`AiBehavior.cs:12`）
「加入某队伍」。**没有任何写入点**——全树只有 `MobileParty.cs:2152` 与 `MobilePartyAi.cs:610` 两处读取。属于遗留取值，实际不会出现。

### `GoAroundParty`（`AiBehavior.cs:13`）
「绕开某队伍」。写入者：`SetMoveGoAroundParty`（`MobileParty.cs:3941`、`MobileParty.cs:3947`）、`SetPartyAiAction.GetActionForGoingAroundParty`（`SetPartyAiAction.cs:176`）。读取者：`MobileParty.cs:2156`、`MobilePartyAi.cs:525`、`DefaultMobilePartyAIModel.cs:553`。

### `GoToPoint`（`AiBehavior.cs:14`）
「前往任意坐标」。写入者：`SetMoveGoToPoint`（`MobileParty.cs:3960`、`MobileParty.cs:3967`）、`SetMoveGoToInteractablePoint`（`MobileParty.cs:3981`、`MobileParty.cs:3988`），以及 `RecalculateShortTermBehavior` 把 `DefendSettlement`/`MoveToNearestLandOrPort` 降级成它（`MobileParty.cs:2883`、`MobileParty.cs:2895`）。读取者：`MobileParty.cs:2159`、`Army.cs:563`、`MobilePartyAi.cs:554`。

### `FleeToPoint`（`AiBehavior.cs:15`）
「逃向坐标」。写入者：`MobilePartyAi.GetFleeBehavior`（`MobilePartyAi.cs:749`、`MobilePartyAi.cs:754`）。读取者：`IsFleeBehavior`（`MobileParty.cs:2918`）、`DefaultMobilePartyAIModel.cs:402`、文本逻辑 `MobileParty.cs:2495`。

### `FleeToGate`（`AiBehavior.cs:16`）
「逃向聚落城门」。写入者：`MobilePartyAi.GetBehaviorForNearbySettlementToFlee`（`MobilePartyAi.cs:1516`）。读取者：`IsFleeBehavior`（`MobileParty.cs:2918`）、文本逻辑 `MobileParty.cs:2507`、版本迁移 `MobilePartyAi.cs:295`。

### `FleeToParty`（`AiBehavior.cs:17`）
「逃向友方队伍」。写入者：`MobilePartyAi.GetFleeBehavior`（`MobilePartyAi.cs:788`）。读取者：`IsFleeBehavior`（`MobileParty.cs:2920`）、文本逻辑 `MobileParty.cs:2490`。

### `PatrolAroundPoint`（`AiBehavior.cs:18`）
「在坐标周围巡逻」。写入者：`SetMovePatrolAroundPoint`（`MobileParty.cs:4004`、`MobileParty.cs:4010`）、`SetMovePatrolAroundSettlement`（`MobileParty.cs:4013`）、`SetPartyAiAction.GetActionForPatrollingAroundSettlement`（`SetPartyAiAction.cs:151`）、`SetPartyAiAction.GetActionForPatrollingAroundPoint`（`SetPartyAiAction.cs:156`）。读取者：文本逻辑 `MobileParty.cs:2549`、`DefaultMobilePartyAIModel.cs:114`。

### `EscortParty`（`AiBehavior.cs:19`）
「护送某队伍」。写入者：`SetMoveEscortParty`（`MobileParty.cs:3991`、`MobileParty.cs:4001`）、`SetPartyAiAction.GetActionForEscortingParty`（`SetPartyAiAction.cs:186`）；AI 侧候选由 `AiArmyMemberBehavior.cs:86` 提出。读取者：`MobileParty.cs:2153`、`RecalculateShortTermBehavior`（`MobileParty.cs:2885`）。

### `DefendSettlement`（`AiBehavior.cs:20`）
「防守某聚落」。写入者：`SetMoveDefendSettlement`（`MobileParty.cs:4041`、`MobileParty.cs:4047`）、`SetPartyAiAction.GetActionForDefendingSettlement`（`SetPartyAiAction.cs:181`）。读取者：`FactionHelper.cs:307`、`KingdomManager.cs:228`、`RecalculateShortTermBehavior`（`MobileParty.cs:2881`）。

### `DoOperation`（`AiBehavior.cs:21`）
「执行某个操作」。**只剩一条断言路径**：唯一读取点是 `MobilePartyAi.cs:640`，其分支立刻 `Debug.FailedAssert("DoOperation", ...)`（`MobilePartyAi.cs:642`）。实际不可达。

### `MoveToNearestLandOrPort`（`AiBehavior.cs:22`）
「驶向最近陆地/港口」（海上脱困）。写入者：`SetMoveToNearestLand`（`MobileParty.cs:3970`、`MobileParty.cs:3978`）、`SetPartyAiAction.GetActionForMovingToNearestLand`（`SetPartyAiAction.cs:191`）；AI 候选由 `AIMoveToNearestLandBehavior.cs:47` 提出。读取者：`RecalculateShortTermBehavior`（`MobileParty.cs:2893`）、`CaravansCampaignBehavior.cs:625`。

### `NumAiBehaviors`（`AiBehavior.cs:23`）
哨兵值，值为 18。**全树无引用**，不要当作任何集合的长度或上界使用。

## 真实示例

读一支队伍当前的两块「路牌」，并区分「战略意图」与「当前动作」：

```csharp
using TaleWorlds.CampaignSystem.Party;

MobileParty party = MobileParty.MainParty;

// DefaultBehavior 是长期意图，ShortTermBehavior 是当前执行动作
AiBehavior intent = party.DefaultBehavior;
AiBehavior action = party.ShortTermBehavior;

if (intent == AiBehavior.BesiegeSettlement)
{
    InformationManager.DisplayMessage(new InformationMessage("战略：围城"));
}

// 逃跑判定要同时看两块路牌（IsFleeBehavior 只认 FleeToPoint/FleeToGate/FleeToParty）
if (MobileParty.IsFleeBehavior(action) || party.IsFleeing())
{
    InformationManager.DisplayMessage(new InformationMessage("正在逃跑"));
}
```

下一条脚本化指令。注意 `DefaultBehavior` 的 setter 是私有的，必须走 `SetMove*`：

```csharp
using TaleWorlds.CampaignSystem.Party;

MobileParty guard = MobileParty.MainParty;

// 护送：内部写 DefaultBehavior = AiBehavior.EscortParty，并触发 RecalculateShortTermBehavior()
guard.SetMoveEscortParty(targetParty, MobileParty.NavigationType.Default, isTargetingPort: false);

// 原地待命：default(AiBehavior) 就是 Hold，但请显式写出来，别依赖默认值
guard.SetMoveModeHold();
```

如果你要实现一个自定义 AI 模型，覆写 `GetBestInitiativeBehavior` 并按分数挑行为（注意初值 `AiBehavior.None` 表示「不覆盖」）：

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

public class MyPartyAiModel : MobilePartyAIModel
{
    public override void GetBestInitiativeBehavior(
        MobileParty mobileParty,
        out AiBehavior bestInitiativeBehavior,
        out MobileParty bestInitiativeTargetParty,
        out float bestInitiativeBehaviorScore,
        out Vec2 averageEnemyVec)
    {
        bestInitiativeBehavior = AiBehavior.None; // 没有更高分候选时保持「无意图」
        bestInitiativeTargetParty = null;
        bestInitiativeBehaviorScore = 0f;
        averageEnemyVec = Vec2.Zero;

        // 自定义打分：只给「绕开」候选，命中就覆盖
        if (ShouldAvoid(mobileParty, out MobileParty threat))
        {
            bestInitiativeBehavior = AiBehavior.GoAroundParty;
            bestInitiativeTargetParty = threat;
            bestInitiativeBehaviorScore = 1.5f;
        }
    }
}
```

## 参见

- [MobileParty](../../campaign/MobileParty) — 两个寄存器（`DefaultBehavior` / `ShortTermBehavior`）与整套 `SetMove*` 写入 API 都在这里
- [MobilePartyAi](../MobilePartyAi) — AI 决策落地层，`GetBehaviors` / `SetAiBehavior` 把候选写进 `ShortTermBehavior`
- [AIBehaviorData](../AIBehaviorData) — AI 层提出候选行为的传输格式，行为字段类型就是本枚举
- [SetPartyAiAction](../SetPartyAiAction) — 带幂等检查的脚本化指令封装，`GetActionFor*` 系列
- [MobilePartyAIModel](../MobilePartyAIModel) — 覆写 `GetBestInitiativeBehavior` 的扩展点
- [DefaultMobilePartyAIModel](../DefaultMobilePartyAIModel) — 默认评分实现，可对照它的候选与初值
- [AiPartyThinkBehavior](../../campaign/AiPartyThinkBehavior) — 小时 tick 里汇总候选并把结果交回 `MobilePartyAi` 的行为
- [EncounterManager](../../campaign/EncounterManager) — 大量读取本枚举做遭遇判定
- [Campaign](../../campaign/Campaign) — 主队 `Hold` 参与时间控制判断
- [Agent](../../mission/Agent) — 任务层的 AI 主体，与大地图队伍 AI 分属两套体系，勿混

## 导航

- [本区域目录](../)
- **同族：** [MobilePartyAi](../MobilePartyAi) · [AIBehaviorData](../AIBehaviorData) · [SetPartyAiAction](../SetPartyAiAction)
- **模型：** [MobilePartyAIModel](../MobilePartyAIModel) · [DefaultMobilePartyAIModel](../DefaultMobilePartyAIModel)
- **宿主：** [MobileParty](../../campaign/MobileParty) · **相关：** [AiPartyThinkBehavior](../../campaign/AiPartyThinkBehavior)

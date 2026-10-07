---
title: "AcceptCallToWarAgreementDecisionOutcome"
description: "参战号召决策的选项载体：以 ShouldAcceptCallToWar 标志区分「同意参战」与「拒绝」两个对立选项，负责在决策界面显示 Yes/No 标题与描述，自身不执行任何参战逻辑。"
---
# AcceptCallToWarAgreementDecisionOutcome

**命名空间：** `TaleWorlds.CampaignSystem.Election`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class AcceptCallToWarAgreementDecisionOutcome : DecisionOutcome`  
**基类：** `DecisionOutcome`  
**源文件：** `TaleWorlds.CampaignSystem/Election/AcceptCallToWarAgreementDecision.cs`（嵌套于 `AcceptCallToWarAgreementDecision` 内）

## 概述

`AcceptCallToWarAgreementDecisionOutcome` 是 `AcceptCallToWarAgreementDecision` 的**嵌套选项类**，代表「是否响应盟友参战号召」表决中的一个选项。它只有四个 `readonly` 字段——`ShouldAcceptCallToWar`（选什么）、`Kingdom`（哪个王国在表决）、`CallingKingdom`（谁在号召）、`KingdomToCallToWarAgainst`（要打谁）——以及四个重写自 `DecisionOutcome` 的显示方法。

它**自己不执行任何参战或拒绝逻辑**。真正的动作发生在宿主决策类的 `ApplyChosenOutcome` 中，由它读取本选项的 `ShouldAcceptCallToWar` 标志后调用 `IAllianceCampaignBehavior` 的对应方法。mod 开发者通常不需要手动构造它——它由 `DetermineInitialCandidates` 在决策创建时自动产出两个实例（同意/拒绝）。

## 心智模型

把这个类想成**选票上的一个选项**，而不是一个执行器。它的全部职责是：

1. **携带选项语义**——`ShouldAcceptCallToWar` 是唯一的语义字段，`true` 表示同意参战，`false` 表示拒绝。其余三个字段把选项锚定到具体的王国上下文，使显示文本和后续处理能引用正确的王国。
2. **在决策界面正确呈现**——`GetDecisionTitle` 按 `ShouldAcceptCallToWar` 显示 "Yes" 或 "No"；`GetDecisionDescription` 根据选择显示「是时候加入盟友的战争」或「不符合我们的利益」的说明。
3. **保持轻量**——`GetDecisionLink` 与 `GetDecisionImageIdentifier` 都返回 `null`，表示这个选项没有跳转链接和自定义图标，使用决策界面的默认呈现。

四个字段都带 `[SaveableField]`（编号 100–103），会随存档序列化，确保读档后选项状态不丢失。构造函数在创建时一次性写入所有字段，之后不可变。

## 怎么用

### 怎么拿到

- **源树路径：** `TaleWorlds.CampaignSystem/Election/AcceptCallToWarAgreementDecision.cs`（共 324 行）
- **声明处：** `AcceptCallToWarAgreementDecision.cs:16`（类声明）、`:30`（构造函数）
- **运行时入口：** 不要自己 `new`。选项由宿主决策的 `DetermineInitialCandidates` 产出。mod 通过遍历 `KingdomDecision.GetQueriedDecisionOutcome` 的返回值，或在 `DetermineSponsors` / `ApplyChosenOutcome` 的参数中接触到它：

```csharp
// 在决策生命周期回调中拿到选项
void OnDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome)
{
    if (chosenOutcome is AcceptCallToWarAgreementDecisionOutcome outcome)
    {
        bool accepted = outcome.ShouldAcceptCallToWar;
        Kingdom calling = outcome.CallingKingdom;
    }
}
```

### 典型用法

- **在决策回调中区分结果：** 把 `DecisionOutcome` 参数转型为本类，读 `ShouldAcceptCallToWar` 判断玩家王国最终选择了哪条路。
- **在自定义 UI 中显示选项信息：** 读取 `CallingKingdom`、`KingdomToCallToWarAgainst` 构造自己的说明文本。
- **复用选项模式：** 参照它如何用单个 `bool` 标志 + 上下文字段表达对立选项，在自己的决策结果类中套用同一结构。

### 坑

- **不要手动构造后塞进决策列表。** 选项必须由 `DetermineInitialCandidates` 产出，否则决策引擎无法正确追踪支持度与表决状态。
- **`ShouldAcceptCallToWar` 是唯一的语义字段。** 不要通过比较 `Kingdom` 或 `CallingKingdom` 来推断选项含义。
- **`GetDecisionLink` 返回 `null`。** 如果 mod 期望选项可点击跳转，需要自定义决策条目视图模型，而不是依赖本类的链接。
- **字段全部 `readonly`。** 构造后不可变，不要在回调中尝试修改。

## 关键成员

### ShouldAcceptCallToWar

`public readonly bool ShouldAcceptCallToWar`（`:19`，`[SaveableField(100)]`）

选项的核心语义：`true` 表示同意响应号召参战，`false` 表示拒绝。`GetDecisionTitle` 与 `GetDecisionDescription` 都以此为分支依据，`ApplyChosenOutcome` 也据此选择执行路径。

### Kingdom / CallingKingdom / KingdomToCallToWarAgainst

`public readonly Kingdom Kingdom`（`:22`，`[SaveableField(101)]`）、`public readonly Kingdom CallingKingdom`（`:25`，`[SaveableField(102)]`）、`public readonly Kingdom KingdomToCallToWarAgainst`（`:28`，`[SaveableField(103)]`）

选项的上下文锚点：`Kingdom` 是正在表决的玩家王国，`CallingKingdom` 是发出参战号召的盟友，`KingdomToCallToWarAgainst` 是号召的目标。三者都在构造时写入，用于填充显示文本中的王国名。

### 构造函数

`public AcceptCallToWarAgreementDecisionOutcome(bool shouldAcceptCallToWar, Kingdom kingdom, Kingdom callingKingdom, Kingdom kingdomToCallToWarAgainst)`（`:30`）

按顺序写入四个 `readonly` 字段。**mod 不应手动调用**——由 `DetermineInitialCandidates` 产出两个实例（`true` / `false`）。

### GetDecisionTitle

`public override TextObject GetDecisionTitle()`（`:38`）

返回选项在决策界面的标题。`ShouldAcceptCallToWar` 为 `true` 时显示 "Yes"，否则显示 "No"，通过 `{?SUPPORT}Yes{?}No{\?}` 条件文本实现。

### GetDecisionDescription

`public override TextObject GetDecisionDescription()`（`:45`）

返回选项的详细说明。同意时显示「是时候加入盟友 `{KINGDOM_NAME}` 的战争」；拒绝时显示「不符合我们的利益加入 `{KINGDOM_NAME}` 的战争」。`KINGDOM_NAME` 取自 `CallingKingdom.Name`。

### GetDecisionLink

`public override string GetDecisionLink()`（`:58`）

返回 `null`。该选项没有关联的跳转链接，决策界面使用默认行为。

### GetDecisionImageIdentifier

`public override ImageIdentifier GetDecisionImageIdentifier()`（`:63`）

返回 `null`。该选项没有自定义图标，决策界面使用默认呈现。

## 真实示例

以下示例展示 mod 如何在决策表决完成后读取选项，根据 `ShouldAcceptCallToWar` 执行自定义逻辑：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Election;
using TaleWorlds.Localization;

public sealed class CallToWarOutcomeHandler : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.KingdomDecisionConcluded.AddNonSerializedListener(this, OnDecisionConcluded);
    }

    private void OnDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome)
    {
        if (chosenOutcome is not AcceptCallToWarAgreementDecisionOutcome outcome) return;
        if (outcome.ShouldAcceptCallToWar)
        {
            // 玩家王国已同意参战，可在此记录日志或触发自定义事件
            InformationManager.ShowInquiry(new InquiryData(
                "参战号召已接受",
                $"{outcome.CallingKingdom.Name} 的号召已被接受，{outcome.KingdomToCallToWarAgainst.Name} 将成为敌人。",
                true, false, "确定", "", null, null));
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

mod 也可以在决策存续期间枚举选项，预判每个选项对玩家氏族的吸引力：

```csharp
if (decision is AcceptCallToWarAgreementDecision callToWar)
{
    foreach (var outcome in callToWar.DetermineInitialCandidates())
    {
        if (outcome is AcceptCallToWarAgreementDecisionOutcome opt)
        {
            float support = callToWar.DetermineSupport(Clan.PlayerClan, opt);
        }
    }
}
```

## 参见

- [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision) — 宿主决策类，产出并处理本选项
- [DecisionOutcome](../DecisionOutcome) — 基类，定义决策选项的显示契约
- [KingdomDecision](../KingdomDecision) — 王国决策基类，定义表决生命周期
- [AcceptCallToWarOfferMapNotification](../AcceptCallToWarOfferMapNotification) — 触发宿主决策的地图通知数据类

## 导航

- [本区域目录](../)
- **父级：** [campaign-ext API](../)
- **同级：** [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision) · [AcceptCallToWarOfferMapNotification](../AcceptCallToWarOfferMapNotification)
- **相关：** [DecisionOutcome](../DecisionOutcome) · [KingdomDecision](../KingdomDecision)

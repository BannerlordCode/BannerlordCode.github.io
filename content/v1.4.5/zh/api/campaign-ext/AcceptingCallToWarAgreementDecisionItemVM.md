---
title: "AcceptingCallToWarAgreementDecisionItemVM"
description: "王国决策条目视图模型，把参战协议决策渲染为发起方与目标方的对比面板，展示双方旗帜、领袖和战力对比。"
---
# AcceptingCallToWarAgreementDecisionItemVM

**命名空间：** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class AcceptingCallToWarAgreementDecisionItemVM : DecisionItemBaseVM`  
**基类：** `DecisionItemBaseVM`  
**源文件：** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/AcceptingCallToWarAgreementDecisionItemVM.cs`

## 概述

`AcceptingCallToWarAgreementDecisionItemVM` 是王国决策界面中"接受参战协议"这一决策的条目视图模型。它把 `AcceptCallToWarAgreementDecision` 渲染成一个对比面板：左侧展示发起邀请的王国，右侧展示被邀请共同对抗的目标王国，中间用战力对比条和领袖信息帮助玩家做出决定。

## 心智模型

这个类有两个关键设计点：

**1. 向下转型耦合。** 第 38 行的 `TargetFaction` 属性把基类的 `_decision` 字段向下转型为 `AcceptCallToWarAgreementDecision`，再取 `KingdomToCallToWarAgainst`。这意味着这个 VM **只对那一种决策类型有效**。如果 `_decision` 不是 `AcceptCallToWarAgreementDecision`，`as` 运算符返回 `null`，后续取属性会抛 `NullReferenceException`。这是编译期无法检查的运行时耦合——构造函数签名要求传入 `AcceptCallToWarAgreementDecision`，但基类字段类型是更宽泛的 `KingdomDecision`。

**2. 对比面板渲染。** `InitValues` 方法在基类初始化完成后被调用，负责填充所有展示数据：双方旗帜用 `BannerImageIdentifierVM` 包装王国徽章，双方领袖用 `HeroVM` 包装英雄对象，战力对比用 `KingdomWarComparableStatVM` 比较双方 `CurrentTotalStrength`。此外还会扫描目标王国的所有战争关系，把与当前决策无关的其他战争列在 `TargetFactionOtherWars` 中，帮助玩家评估目标王国的整体处境。

## 怎么用

mod 开发者通常不需要直接实例化这个类——它由王国决策界面在创建决策列表时自动构造。但理解它的行为对以下场景有帮助：

- **理解决策界面数据来源：** 如果 mod 想自定义决策界面的显示逻辑，需要知道 `InitValues` 在基类构造函数末尾被调用，此时 `KingdomElection` 已经启动，`DecisionOptionsList` 已经填充。
- **扩展决策展示：** 如果 mod 想为参战协议决策添加额外的对比维度，可以继承这个类并重写 `InitValues`，在调用 `base.InitValues()` 后追加自定义数据。
- **理解决策类型枚举值：** 构造函数把 `DecisionType` 设为 `8`，对应基类 `DecisionTypes` 枚举中的 `AcceptCallToWarAgreement`。

## 关键成员

### 构造函数

`public AcceptingCallToWarAgreementDecisionItemVM(AcceptCallToWarAgreementDecision decision, Action onDecisionOver)`（第 210 行）

接收决策对象和决策结束回调，调用基类构造函数后把 `DecisionType` 设为 `8`（`AcceptCallToWarAgreement` 枚举值）。

### InitValues

`protected override void InitValues()`（第 217 行）

在基类初始化完成后被调用，负责填充所有展示数据：

- 从 `GameTexts` 获取决策名称和描述文本，描述中插入发起方和目标方王国名称
- 用 `BannerImageIdentifierVM` 包装双方王国徽章
- 用 `HeroVM` 包装双方王国领袖
- 创建 `KingdomWarComparableStatVM` 比较双方 `CurrentTotalStrength`
- 扫描目标王国的所有战争关系，过滤掉与当前决策无关的战争，填入 `TargetFactionOtherWars`
- 根据 `TargetFactionOtherWars` 是否为空设置 `IsTargetFactionOtherWarsVisible`

### TargetFaction

`public IFaction TargetFaction`（第 38 行）

向下转型 `_decision` 为 `AcceptCallToWarAgreementDecision`，返回 `KingdomToCallToWarAgainst`。这是这个 VM 的核心耦合点——如果决策类型不匹配会抛异常。

### _callingKingdom

`private Kingdom _callingKingdom`（第 36 行）

同样向下转型 `_decision`，返回 `CallingKingdom`。在 `InitValues` 中用于获取发起方王国的徽章、领袖和颜色。

### 数据绑定属性

所有属性都标记了 `[DataSourceProperty]`，setter 在值变化时调用 `OnPropertyChangedWithValue` 通知 UI 刷新：

| 属性 | 行号 | 用途 |
| --- | --- | --- |
| `NameText` | 41 | 决策名称文本 |
| `AcceptCallToWarAgreementDescriptionText` | 58 | 决策描述文本，含双方王国名 |
| `SourceFactionBanner` | 75 | 发起方王国徽章 |
| `TargetFactionBanner` | 92 | 目标方王国徽章 |
| `ComparedStats` | 109 | 战力对比列表 |
| `LeaderText` | 126 | "领袖"标签文本 |
| `SourceFactionLeader` | 143 | 发起方王国领袖 |
| `TargetFactionLeader` | 160 | 目标方王国领袖 |
| `IsTargetFactionOtherWarsVisible` | 177 | 是否显示目标方其他战争 |
| `TargetFactionOtherWars` | 194 | 目标方其他战争列表 |

## 真实示例

以下示例展示 mod 如何检查当前决策列表中是否包含参战协议决策，并读取其对比数据：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Election;

public void InspectDecision(KingdomDecision decision)
{
    if (decision is AcceptCallToWarAgreementDecision callToWarDecision)
    {
        Kingdom callingKingdom = callToWarDecision.CallingKingdom;
        IFaction targetFaction = callToWarDecision.KingdomToCallToWarAgainst;
        InformationManager.ShowInquiry(new InquiryData(
            "参战协议",
            $"{callingKingdom.Name} 邀请你共同对抗 {targetFaction.Name}",
            true, false, "确定", "", null, null));
    }
}
```

mod 也可以通过监听 `CampaignEvents.KingdomDecisionConcluded` 来跟踪决策结果，在决策完成后执行自定义逻辑。

## 参见

- [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision) — 这个 VM 对应的决策类型，包含 `CallingKingdom` 和 `KingdomToCallToWarAgainst` 属性
- [AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM) — 触发这个决策创建的通知条目 VM
- [AcceptCallToWarOfferMapNotification](../AcceptCallToWarOfferMapNotification) — 通知数据类，提供 `OfferingKingdom` 和 `KingdomToCallToWarAgainst`
- [Kingdom](../../campaign/Kingdom) — 王国类型，`CallingKingdom` 的实际类型
- [Hero](../../campaign/Hero) — 英雄类型，`SourceFactionLeader` 和 `TargetFactionLeader` 包装的对象

## 导航

- **父级：** [campaign-ext API](../)
- **同级：** [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision) · [AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM)
- **相关：** [Kingdom](../../campaign/Kingdom) · [Hero](../../campaign/Hero) · [AcceptCallToWarOfferMapNotification](../AcceptCallToWarOfferMapNotification)

---
title: "AcceptCallToWarOfferNotificationItemVM"
description: "地图通知条目，展示其他王国发出的参战邀请，玩家点击后触发联盟行为并移除通知，关闭时按条件补建王国决策。"
---
# AcceptCallToWarOfferNotificationItemVM

**命名空间：** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class AcceptCallToWarOfferNotificationItemVM : MapNotificationItemBaseVM`  
**基类：** `MapNotificationItemBaseVM`  
**源文件：** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/AcceptCallToWarOfferNotificationItemVM.cs`

## 概述

`AcceptCallToWarOfferNotificationItemVM` 是地图通知列表中的一个条目视图模型，对应 `AcceptCallToWarOfferMapNotification` 数据。它把"某王国邀请玩家王国共同对第三方宣战"这件事呈现给玩家，并在玩家点击通知时触发联盟行为、移除通知条目。当玩家氏族加入一个新的王国时，它还负责在通知关闭后补建对应的王国决策，确保决策不会丢失。

## 心智模型

这个类是一个**有生命周期的通知条目**，而不是一个被动的数据容器。它在构造时做了三件事：

1. 从 `AcceptCallToWarOfferMapNotification` 数据中取出两个关键王国——发出邀请的 `_offeringKingdom` 和被邀请共同对抗的 `_kingdomToCallToWarAgainst`，存为只读字段。
2. 设置 `_onInspect` 委托，定义玩家点击通知时的行为：检查邀请是否仍然有效，有效则触发 `IAllianceCampaignBehavior.OnCallToWarAgreementProposedToPlayer`，无效则弹出提示，两种情况都会移除通知。
3. 注册五个 `CampaignEvents` 监听器，让通知在相关事件发生时自动失效——宣战、议和、王国毁灭、联盟结束、氏族换王国。

`_shouldDecisionBeCreatedOnClosed` 是一个延迟标志。当玩家氏族加入一个新王国时，通知会被移除，但此时玩家可能还没有王国决策界面，所以先记下这个标志，等 `OnFinalize` 时再补建 `AcceptCallToWarAgreementDecision` 并加入玩家氏族的王国决策列表。

## 怎么用

mod 开发者通常不需要直接实例化这个类——它由地图通知系统在创建 `AcceptCallToWarOfferMapNotification` 时自动构造。但理解它的行为对以下场景有帮助：

- **观察联盟行为触发时机：** 玩家点击通知时，`IAllianceCampaignBehavior.OnCallToWarAgreementProposedToPlayer` 会被调用。mod 可以监听同一事件来做额外的联盟逻辑。
- **理解决策补建机制：** 如果 mod 在玩家氏族加入新王国时清理了所有通知，`OnFinalize` 会尝试补建决策。mod 需要知道这个决策可能"延迟出现"。
- **自定义通知行为：** 如果 mod 想替换默认的点击行为，可以通过继承或组合方式包装 `_onInspect` 委托。

## 关键成员

### 构造函数

`public AcceptCallToWarOfferNotificationItemVM(AcceptCallToWarOfferMapNotification data)`（第 20 行）

从 `data` 中提取 `_offeringKingdom` 和 `_kingdomToCallToWarAgainst`，设置 `_onInspect` 委托，注册五个事件监听器，并将 `NotificationIdentifier` 设为 `"ransom"`。

### OnFinalize

`public override void OnFinalize()`（第 103 行）

移除所有事件监听器。如果 `_shouldDecisionBeCreatedOnClosed` 为 `true`，且玩家氏族所在王国满足条件（氏族数 > 1、没有同类型未解决决策），则创建 `AcceptCallToWarAgreementDecision` 并加入王国决策列表。

### 私有事件处理器

| 方法 | 行号 | 触发条件 | 行为 |
| --- | --- | --- | --- |
| `OnPeaceDeclared` | 53 | 邀请方与被邀请方议和 | 移除通知 |
| `OnAllianceEnded` | 61 | 玩家王国与邀请方联盟结束 | 移除通知 |
| `OnKingdomDestroyed` | 69 | 玩家、邀请方或被邀请方王国毁灭 | 移除通知 |
| `OnClanChangedKingdom` | 77 | 玩家氏族换王国，或其他氏族加入玩家王国 | 移除通知；后者设置延迟决策标志 |
| `OnWarDeclared` | 89 | 玩家向被邀请方宣战 | 移除通知 |

### RemoveAcceptCallToWarOfferNotification

`private void RemoveAcceptCallToWarOfferNotification(bool shouldDecisionCreatedOnClosed)`（第 97 行）

设置 `_shouldDecisionBeCreatedOnClosed` 标志，然后调用基类 `ExecuteRemove()` 触发 `OnRemove` 回调，将自身从通知列表中移除。

## 真实示例

以下示例展示 mod 如何监听联盟行为触发事件，在玩家接受参战邀请时执行自定义逻辑：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

public sealed class CallToWarTrackingBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.WarDeclared.AddNonSerializedListener(this, OnWarDeclared);
    }

    private void OnWarDeclared(IFaction side1, IFaction side2, DeclareWarAction.DeclareWarDetail detail)
    {
        if (side1 == Clan.PlayerClan.Kingdom || side2 == Clan.PlayerClan.Kingdom)
        {
            InformationManager.ShowInquiry(new InquiryData(
                "战争宣告",
                "你的王国已卷入新的战争。",
                true, false, "确定", "", null, null));
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

mod 也可以通过检查 `Clan.PlayerClan.Kingdom.UnresolvedDecisions` 来发现补建的 `AcceptCallToWarAgreementDecision`，从而在决策界面中显示额外信息。

## 参见

- [AcceptCallToWarOfferMapNotification](../AcceptCallToWarOfferMapNotification) — 通知数据类，提供 `OfferingKingdom` 和 `KingdomToCallToWarAgainst` 属性
- [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision) — 玩家接受邀请后创建的王国决策
- [AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM) — 决策界面中展示该决策的条目视图模型
- [MapNotificationItemBaseVM](../MapNotificationItemBaseVM) — 基类，提供 `ExecuteRemove`、`ExecuteAction`、`NotificationIdentifier` 等通用通知行为

## 导航

- **父级：** [campaign-ext API](../)
- **同级：** [AcceptCallToWarOfferMapNotification](../AcceptCallToWarOfferMapNotification) · [AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM)
- **相关：** [MapNotificationItemBaseVM](../MapNotificationItemBaseVM) · [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision)
